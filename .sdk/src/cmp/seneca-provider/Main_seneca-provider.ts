import {
  cmp, each,
  File, Content, Copy, Folder,
  entityCollection, entityOps, entityIdField, entityClassName,
  entityActions,
  opRequestShape, opParams, ownPoint, entityPath,
  collectDeps, repoInfo, packageName, packageVersion, apiName, envName,
  authorInfo, contributorList, isAuthActive, isHttpBasicAuth, jsKey, jsProp,
  SdkGenError,
  PUBLISHER, PUBLISHER_URL,
  pointSegments,
} from '@voxgig/sdkgen'

import {
  KIT,
} from '@voxgig/apidef'

import {
  Tests, Scripts, Workflow, Readme, Docs, SdkPin, SDK_SRC_DIR,
} from './Extras_seneca-provider'
import { Gitignore } from './Gitignore_seneca-provider'


// The `seneca-provider` target: a Seneca plugin exposing this API's entities
// as Seneca entities (`provider/<name>/<entity>`), layered on the sibling
// `ts` SDK.
//
// A consumer target in the go-cli / py-data mould — every standard phase is
// off in model/target/seneca-provider.aon and this component emits the
// whole package. It differs from those in one way that shapes everything
// here: it generates into ITS OWN REPO (`output: path`), depends on the SDK
// as a PUBLISHED npm package rather than by path, and therefore carries a
// repo's worth of furniture rather than a subfolder's.
//
// SHAPE OF THE MAPPING
//
// Seneca's store commands are list / load / save / remove. The SDK's are
// list / load / create / update / remove. `save` is the one that is not
// one-to-one: Seneca's convention is that an entity carrying an id is an
// update and one without is a create, so `save` dispatches on `data.id`.
//
// Everything else follows from the model:
//   - which cmds exist at all, from the entity's declared ops;
//   - the required path params of each op, which become argument guards (a
//     nested entity like `moon` under `/planet/{planet_id}/moon` cannot build
//     its URL without the parent id, and an opaque 404 from a half-built URL
//     is a bad error message);
//   - the SDK accessor and entity class names, from the same helpers the ts
//     target uses, so the two cannot drift.


// Seneca store cmd -> the SDK ops it needs. `save` needs BOTH create and
// update; it is emitted when either is present and dispatches on the id.
const CMD_OPS: Record<string, string[]> = {
  list: ['list'],
  load: ['load'],
  save: ['create', 'update'],
  remove: ['remove'],
}


// The custom ACTIONS one Seneca cmd can reach, as action name -> SDK op.
//
// apidef folds a non-CRUD verb into an ordinary op as an extra point marked
// `select.$action`: GitHub's `PUT /repos/{owner}/{repo}/pulls/{n}/merge` is a
// second point of `pull.update`, beside the canonical `PATCH`. The SDK
// selects one with `$action` in the call's argument; without this map the
// provider has no way to name one at all, and `merge` is simply unreachable
// through a generated plugin.
//
// KEYED BY CMD, NOT BY OP, and that is the whole point of the function.
// `save` covers create AND update, so an action folded into `create` arrives
// through `save$` exactly as one folded into `update` does — assuming
// `update` would send `upload_image` (petstore's
// `POST /pet/{petId}/uploadImage`, a create point) to the wrong endpoint, and
// the SDK would then refuse it as an invalid action on an operation the
// caller never named.
//
// A name claimed by an earlier op WINS: `entityActions` walks the op map in
// sorted-key order, so for `save` that is create before update. Two ops of
// one entity sharing an action name is not something apidef produces from a
// spec — the name comes from the route — and if it ever does, a stable choice
// beats a last-writer-wins one.
function cmdActions(ent: any, cmd: string): Record<string, string> {
  const ops = CMD_OPS[cmd] || []

  // ACTIVE ops only, for the same reason `parentKeys` uses `entityOps`: an op
  // the model marks `active: false` generates no SDK method, so an action
  // folded into it is not reachable and must not be advertised as if it were.
  const live = entityOps(ent)
  const out: Record<string, string> = {}

  // `null == out[a.action]` on a plain object reads Object's PROTOTYPE for a
  // name like `toString` or `constructor`, finds a function, and concludes
  // the name is already claimed — dropping a modelled action that happens to
  // carry one. Ask whether the map itself has the key.
  const claimed = (name: string) =>
    Object.prototype.hasOwnProperty.call(out, name)

  for (const a of entityActions(ent)) {
    if (ops.includes(a.op) && live.includes(a.op) && !claimed(a.action)) {
      out[a.action] = a.op
    }
  }

  return out
}


// The ops that have a route of their OWN, as opposed to nothing but folded-in
// actions. An op whose every point is an action point has no plain call: a
// `save$` naming no action still reaches the SDK's `update`, but the SDK finds
// one point and takes it, so the "canonical" update IS the action's route.
//
// Which is what the generated tests need to know before writing a plain,
// id-bearing save: without this they were emitted for an entity that has no
// such call to make.
function canonicalOps(ent: any): string[] {
  return entityOps(ent).filter((opname: string) => {
    const op = (ent.op || {})[opname]
    const points: any[] = (op && op.points) || []

    return points.some((pt: any) =>
      null == (pt && pt.select && pt.select['$action']))
  })
}


// Every action the entity exposes, with the cmd that reaches it — for the
// README and the generated tests, which describe the entity rather than one
// call. `cmd` is what a Seneca user types; `op` is what the SDK is asked for.
function entityActionList(ent: any):
  { cmd: string, op: string, action: string, path: string }[] {
  const out: { cmd: string, op: string, action: string, path: string }[] = []

  for (const cmd of Object.keys(CMD_OPS).sort()) {
    const map = cmdActions(ent, cmd)
    for (const a of entityActions(ent)) {
      if (map[a.action] === a.op) {
        out.push({ cmd, op: a.op, action: a.action, path: a.path })
      }
    }
  }

  return out
}


// The required (non-optional) request keys of an op, id first. These are what
// the SDK needs to build the path, so they are what the provider must have
// before it calls.
function requiredKeys(ent: any, opname: string): string[] {
  const idf = entityIdField(ent)
  return opRequestShape(ent, opname).items
    .filter((it: any) => !it.optional)
    .map((it: any) => it.name)
    .sort((a: string, b: string) => (a === idf ? 0 : 1) - (b === idf ? 0 : 1))
}


// The keys a single-record call actually sends: the op's required keys, plus
// the record's own key when the match declares it at all. One definition,
// because the handler emitter and the test emitter disagreeing about it is
// how a test comes to assert something the generated code never does.
function addressKeys(ent: any, opname: string): string[] {
  const keys = requiredKeys(ent, opname)
  const parts = idParts(ent)

  if (0 < parts.length) {
    // EVERY PART, required or not — for the same reason a single record key
    // always travels. github's api_insights_summary_stat is keyed
    // `actor_type/actor_id` and declares both OPTIONAL, because the op also
    // covers routes that take neither; only `min_timestamp` came through as
    // required. So the call sent the timestamp alone, the split id went
    // nowhere, and every read answered with the same record — the composite
    // half of the defect fixed below for single keys.
    const shape = opRequestShape(ent, opname).items
    for (const part of parts) {
      if (!keys.includes(part) &&
        shape.some((it: any) => it.name === part)) {
        keys.push(part)
      }
    }
    return keys
  }

  const rk = recordKey(ent)
  if (null != rk && '' !== rk && !keys.includes(rk) &&
    opRequestShape(ent, opname).items.some((it: any) => it.name === rk)) {
    keys.push(rk)
  }

  return keys
}


// The key that addresses ONE record.
//
// `entityIdField` answers whenever the model declares one, which apidef does
// for any entity carrying a field literally named `id` — and it renames an
// `<entity>_id` path param to `id` besides, which is why most APIs never reach
// the fallback.
//
// When it does NOT answer, the record key is the LAST path param of the
// op's own point, in PATH order — a route addresses parents first and the
// record last, by construction. Without this the key was simply unknown,
// so a param named `code` failed the `!== idf` test in opParentKeys and
// was classified as a PARENT — `load$('SAVE20')` threw "coupon load: code
// is required" instead of loading anything, and the entity was treated as
// nested throughout.
//
// opParams(op) is NOT the source here: it alphabetizes params for output
// stability, which loses path order on a 3+-param route — Airtable's
// record (base_id, table_id, record_id) alphabetizes with table_id last,
// so the old `params[params.length - 1]` picked the wrong parent as the
// record's own key. The point's own `parts` still has the true order.
// The path parameters that TOGETHER name one record, when no single one does.
//
// apidef sets `id.parts` for an API that addresses a record by several
// adjacent path parameters — github needs {owner} AND {repo} to name a
// repository — and `id.sep` (a slash) joins them into the ONE id a Seneca
// entity carries. Empty for the ordinary single-key entity, which is most of
// them, so every caller can branch on `0 < parts.length`.
function idParts(ent: any): string[] {
  const parts = ent?.id?.parts
  return Array.isArray(parts) && 1 < parts.length ?
    parts.map((p: any) => String(p)) : []
}


function idSep(ent: any): string {
  const sep = ent?.id?.sep
  return null != sep && '' !== String(sep) ? String(sep) : '/'
}


// THE ONE DESCRIPTION OF AN ENTITY'S ID, or null when Seneca's `id` and the
// API's key already agree and nothing needs translating.
//
// It unifies the two cases that used to be handled by separate emitters. A
// compound key (`{owner}/{repo}`) has several parts; an API that simply calls
// its key something else (`repo`, `number`) has exactly one. Neither needs a
// different algorithm — a one-part split is the identity, and a one-part join
// is the old carry-across — so both come through the same table and the same
// two functions.
//
// `from` is passed through as the model states it: which response field
// carries each part. apidef derives it and guide.aon can correct it.
function idSpec(ent: any): { parts: string[], sep: string, from?: Record<string, string> } | null {
  const parts = idParts(ent)
  if (0 < parts.length) {
    const from = ent?.id?.from
    return {
      parts,
      sep: idSep(ent),
      ...(null != from && 'object' === typeof from ? { from } : {}),
    }
  }

  const rk = recordKey(ent)
  if ('id' === rk) {
    return null
  }

  // A single-key entity whose key is not `id`. `from` defaults to the key's
  // own name, which is what the old carry-across read.
  return { parts: [rk], sep: idSep(ent) }
}


function recordKey(ent: any): string {
  const idf = entityIdField(ent)
  if (null != idf && '' !== idf) {
    return String(idf)
  }

  for (const opname of ['load', 'remove', 'update']) {
    const op = (ent.op || {})[opname]
    if (null == op || 0 === (op.points || []).length) {
      continue
    }

    const canonical = op.points.filter((pt: any) =>
      null == (pt && pt.select && pt.select['$action']))
    const point = ownPoint(0 < canonical.length ? canonical : op.points)
    // The LAST variable segment names the record's key. apidef states which
    // segments are variables (its ADR-003), so this reads the name off the
    // vector rather than finding a `{` and slicing the braces back off.
    const vars = pointSegments(point)
      .filter((seg: any) => null != seg.var)

    if (0 < vars.length) {
      return String(vars[vars.length - 1].var)
    }

    // No path param at all (e.g. GET /scan/async/result?trace_id=...): the
    // record's own key can still be a single required QUERY param.
    const query = (point && point.args && point.args.query) || []
    const reqdQuery = query.filter((q: any) => false !== q.reqd)
    if (1 === reqdQuery.length) {
      return String(reqdQuery[0].name)
    }
  }

  return 'id'
}


// The guard function's name. Spec-derived param names are not constrained to
// identifiers — Evervault's `/payments/3ds-sessions/{3ds_session_id}` is the
// standing example — and a name is a DECLARATION here, so it cannot be
// bracket-quoted the way a property access can. Non-identifier characters are
// replaced rather than dropped, so `a-b` and `a_b` cannot collide.
function guardName(e: any, key: string): string {
  return `need_${e.name}_${String(key).replace(/[^A-Za-z0-9_$]/g, '_')}`
    .replace(/^need_(\d)/, 'need__$1')
}


// The parent PATH params of ONE op: `moon`'s load under
// `/planet/{planet_id}/moon/{id}` yields ['planet_id']. These are the keys a
// caller can forget, so each gets a guard.
//
// From opParams — the op's declared path params — NOT from opRequestShape.
// For create/update the latter also returns the request BODY fields, so
// reading it here generated a "planet name is required" guard for every
// writable field on every entity.
function opParentKeys(ent: any, opname: string): string[] {
  const rk = recordKey(ent)
  const op = (ent.op || {})[opname]

  if (null == op) {
    return []
  }

  const seen = new Set<string>()

  for (const p of opParams(op)) {
    const name = String((p as any).name)
    if (false !== (p as any).reqd && name !== rk && name !== 'id') {
      seen.add(name)
    }
  }

  return [...seen].sort()
}


// Every parent key the entity has, across its ACTIVE ops — for the seed data
// and the docs, which describe the entity rather than one call.
//
// `entityOps` and not `Object.keys(ent.op)`: an op the model marks
// `active: false` generates no SDK method, so letting it contribute a key
// here put a mandatory guard for a parameter of a call that does not exist
// onto every cmd that does.
function parentKeys(ent: any): string[] {
  const seen = new Set<string>()

  for (const opname of entityOps(ent)) {
    for (const key of opParentKeys(ent, opname)) {
      seen.add(key)
    }
  }

  return [...seen].sort()
}


// A model field's broad shape, for generating seed data that reads as data.
// The model carries canon strings (`\`$STRING\``), not JS types.
//
// ORDER MATTERS and the tests are substring tests, so the container kinds are
// checked FIRST: a multi-type field's sentinel is the ARRAY
// `['`$ONE`', [members...]]`, and String() flattens it to a comma-joined
// string — so a `$ONE` of string|number matched `includes('NUMBER')` and was
// seeded as a bare number. A union is not a number; it is whatever its first
// member is, and falling back to a string is the safe answer.
//
// `$ARRAY` and `$OBJECT` are in the sentinel vocabulary (see
// helpers/canonType.ts) and used to fall through to 'string', which put
// `tags: 'quick-tags'` into test/quick.js — a type-incorrect body that a
// validating server rejects.
function fieldKind(type: any): string {
  if (Array.isArray(type)) {
    return 'string'
  }

  const t = String(type || '').toUpperCase()

  if (t.includes('ARRAY') || t.includes('LIST')) return 'array'
  if (t.includes('OBJECT') || t.includes('MAP')) return 'object'
  if (t.includes('BOOLEAN')) return 'boolean'
  if (t.includes('NUMBER') || t.includes('INTEGER')) return 'number'

  return 'string'
}


// Which entity a parent path param refers to: `planet_id` -> `planet`, but
// only when an entity of that name actually exists. A key that names no
// entity gets no cross-reference, and the seed falls back to a plain string.
function parentEntityOf(key: string, names: string[]): string {
  const stem = key.replace(/_id$/, '')
  return names.includes(stem) ? stem : ''
}


// The repo this provider is released from — NOT the SDK's. A provider is its
// own package in its own repo, so its manifest's homepage/repository must
// point there; deriving them from `main: kit: repo` sends every link in the
// published package to the SDK instead.
//
// Order: the project's `output: repo`, else the Seneca convention.
function providerRepo(model: any, lower: string, tname: string):
  { url: string, path: string } {
  const host = model?.main?.[KIT]?.repo?.host || 'github.com'
  const declared = model?.main?.[KIT]?.target?.[tname]?.output?.repo
  const path = null != declared && '' !== declared ?
    String(declared) : `senecajs/seneca-${lower}-provider`

  return { url: `https://${host}/${path}`, path }
}


// The provider's published package name: the project's pin when it has one,
// else `@seneca/<name>-provider`. packageName() cannot answer this — its
// derivations are all SDK-shaped (`@<origin>/<slug>-sdk`).
function providerPackage(model: any, lower: string, tname: string): string {
  const declared = model?.main?.[KIT]?.target?.[tname]
    ?.publish?.registry?.package
  return null != declared && '' !== declared ?
    String(declared) : `@seneca/${lower}-provider`
}


const Main = cmp(function Main(props: any) {
  const { target, ctx$ } = props
  const { model } = ctx$

  // HARD REQUIREMENT: this plugin imports the TypeScript SDK. Generating it
  // without `ts` produces a package whose every import fails, so fail at
  // GENERATE time with an actionable message instead.
  const targets = model.main[KIT].target || {}
  if (null == targets.ts) {
    throw new SdkGenError(
      'seneca-provider requires the `ts` target in the same SDK: it imports ' +
      'the TypeScript SDK that `ts` generates. Add it with:\n' +
      '  npm run add-target ts\n' +
      'then regenerate.')
  }

  const Name = model.const.Name                 // Solardemo
  const lower = String(model.const.name)        // solardemo
  const ENV = envName(model)                    // SOLARDEMO
  const sdkClass = `${Name}SDK`                 // SolardemoSDK
  const pluginName = `${Name}Provider`          // SolardemoProvider
  const fileBase = `${lower}-provider`          // solardemo-provider

  // The SDK is a PUBLISHED dependency, not a path: this package lives in its
  // own repo. Its name is whatever the ts target publishes under, pin
  // included, so the two can never disagree.
  // The TypeScript SDK this provider WRAPS — a different target, so it
  // keeps its own name and does not follow this provider's alias.
  const sdkPkg = packageName(model, 'npm')
  const sdkVersion = packageVersion(model, 'ts')

  // UNFILTERED by design — see the AGENTS.md sharp edge: entityCollection is
  // the resolver every component must use (getModelPath rebuilds its container
  // per call, defeating the class-name memo), and it deliberately includes
  // inactive entities because the typed-model emitters need them.
  //
  // Which makes filtering `active` the CALLER's job, and this component was
  // the one consumer target that skipped it — go-cli, go-mcp and py-data all
  // re-filter. The cost: MainEntity_ts emits an accessor only for an ACTIVE
  // entity, so an inactive one produced `this.shared.sdk.Ghost()` in the
  // provider and an `assert.equal(typeof sdk.Ghost, 'function')` in its tests,
  // against a method the SDK does not have.
  const entityColl = entityCollection(model)

  const activeEntities = Object.keys(entityColl).sort()
    .map((key: string) => entityColl[key])
    .filter((ent: any) => false !== ent.active)

  // Entities this provider can serve: those with at least one op that maps to
  // a Seneca store cmd. An entity with no such op would produce an empty cmd
  // map, which seneca-entity treats as a store that answers nothing.
  const entityNames = activeEntities.map((ent: any) => ent.name)

  const entities = activeEntities
    .map((ent: any) => {
      const parents = parentKeys(ent)

      // The parent entity PER KEY. Deriving it from `parents[0]` alone left an
      // entity nested two levels deep with no cross-reference for its outer
      // parents, so their seed values came out as the literal '0'.
      const parentOf: Record<string, string> = {}
      for (const key of parents) {
        parentOf[key] = parentEntityOf(key, entityNames)
      }

      // The parent keys of each op SEPARATELY. The guards used to be the union
      // across all ops, applied to every cmd alike, while the argument handed
      // to the SDK was computed per op — so an entity whose routes are not
      // uniformly nested (a flat `load`, a nested `create`) demanded a
      // parameter its own call would never use.
      const opParents: Record<string, string[]> = {}
      for (const opname of entityOps(ent)) {
        opParents[opname] = opParentKeys(ent, opname)
      }

      return {
        ent,
        name: ent.name,
        // The SDK ACCESSOR on the client (`client.Moon()`), which is the
        // entity's PascalCase name — NOT entityClassName, which is the
        // collision-safe CLASS name the accessor constructs (`MoonEntity`).
        // Calling the class name reads plausibly and fails at runtime with
        // "sdk.MoonEntity is not a function". MainEntity_ts is the authority
        // for this: it declares the method as `${entity.Name}()`.
        acc: ent.Name,
        // The entity's canonical route, used to probe the live server for
        // liveness. Path params are left in place only if the route has
        // them — a collection route (the `list` op's) has none, which is why
        // entityPath prefers it.
        path: entityPath(ent),
        cls: entityClassName(ent, entityColl),
        ops: entityOps(ent),
        idf: entityIdField(ent),
        // The field this API's routes actually ADDRESS a record by, which is
        // not always `id` and is not always what entityIdField answers (that
        // returns null when the load match has no `id`, leaving recordKey to
        // read the route's last variable segment). The doc and test emitters
        // in Extras need the same answer the handler emitters use, or the
        // seed they build is keyed by a field the routes never look at.
        rk: recordKey(ent),
        // The composite key, when this API addresses a record by several
        // path params at once. The doc and test emitters in Extras need the
        // same answer the handler emitters use: a test that addresses a
        // composite entity the single-key way builds a query its own handler
        // rejects.
        idparts: idParts(ent),
        idsep: idSep(ent),
        // DOES EACH SINGLE-RECORD OP ACTUALLY CARRY THE RECORD'S KEY?
        //
        // Only then can a wrong id miss on a LOAD: github's `interaction`
        // reads `/user/interaction-limits` — a singleton, called as
        // `load({})` — so `load$('no-such-id')` correctly returns the one
        // record there is, and a not-found test against it asserts the
        // opposite of the truth.
        //
        // And only then can a REMOVE delete what a create just made. A
        // tag-bucket entity can have ops addressing different resources
        // entirely: github's `action` is keyed `archive_format` from its
        // download route while its remove takes `hosted_runner_id` and
        // `org_id`, so the remove addressed by parent scope alone — it
        // deleted whichever record the store happened to yield first, which
        // was usually a SEEDED one, and the round-trip failed on the record
        // it had created surviving. Intermittently: the created record's id
        // is random, so where it falls in iteration order decides.
        //
        // Parent keys alone do not distinguish records, which is why this
        // asks for the record's key or every composite part rather than
        // merely for "the route has a parameter".
        // WHICH SINGLE-RECORD OPS ADDRESS A DIFFERENT RESOURCE ENTIRELY.
        //
        // Not merely "cannot address the record": an op that addresses
        // NOTHING is a singleton read, and github's `interaction`
        // (`/user/interaction-limits`) is a real one. This is the other case
        // — the op addresses something, and it is not this record. Every one
        // is a tag-derived entity whose ops were gathered from unrelated
        // routes: `migration`'s remove takes `owner` and `repo` and deletes
        // a repository's migration archive, `user`'s deletes a GPG KEY, and
        // `pull`'s deletes a review COMMENT. The id the caller passed is
        // dropped, and the request goes anyway.
        //
        // Reads are untouched across the whole of github — this is 7 removes
        // and 5 updates, and both are writes.
        idmisaddressed: ['remove', 'update'].reduce(
          (acc: Record<string, boolean>, opname: string) => {
            acc[opname] = null != (ent.op || {})[opname] &&
              0 < addressKeys(ent, opname).length &&
              !(0 < idParts(ent).length ?
                idParts(ent).every((p: string) =>
                  addressKeys(ent, opname).includes(p)) :
                addressKeys(ent, opname).includes(recordKey(ent)))
            return acc
          }, {}),
        idaddressed: ['load', 'remove', 'update'].reduce(
          (acc: Record<string, boolean>, opname: string) => {
            const keys = addressKeys(ent, opname)
            const parts = idParts(ent)
            acc[opname] = 0 < parts.length ?
              parts.every((p: string) => keys.includes(p)) :
              keys.includes(recordKey(ent))
            return acc
          }, {}),
        // Where each part is carried in a response. The test emitter needs
        // it to know whether a created record's id can be rebuilt at all.
        idfrom: (ent?.id?.from) || {},
        parents,
        parentOf,
        opParents,
        // The entity the FIRST parent key points at. Kept because the docs and
        // the scripts speak about "the parent" in the singular; anything that
        // must be right per key reads parentOf.
        parentEntity: 0 < parents.length ? parentOf[parents[0]] : '',
        // The custom actions this entity exposes, as cmd -> action -> SDK
        // op. Emitted as a map in the plugin so a handler can route
        // `action$` to the op that actually serves it, and so an unknown
        // name can be refused with the valid ones named.
        actions: Object.keys(CMD_OPS).sort().reduce(
          (acc: Record<string, Record<string, string>>, cmd: string) => {
            acc[cmd] = cmdActions(ent, cmd)
            return acc
          }, {}),
        // The same information flattened, for the README and the generated
        // tests: [{ cmd, op, action, path }].
        actionList: entityActionList(ent),
        // The ops with a route of their own. `ops` minus those that are
        // nothing but folded-in actions — what the generated tests consult
        // before assuming a plain call exists.
        canonicalOps: canonicalOps(ent),
        // Required fields only: a seed record has to satisfy the shape the
        // SDK will hand back, and optional noise makes the assertions
        // harder to read.
        //
        // A parent path param is then FORCED IN even when the entity's own
        // schema omits it or marks it optional. A path param is a routing key,
        // not necessarily a response field: when the child's schema left it
        // out the seeded record had no link back to its parent, and the mock's
        // match found nothing — which the nested `load` test reported as a
        // TypeError and the nested `list` test reported as a pass.
        fields: (() => {
          const req = (ent.fields || [])
            .filter((f: any) => false !== f.req)
            .map((f: any) => ({
              name: f.name,
              kind: fieldKind(f.type),
              parentEntity: parentEntityOf(f.name, entityNames),
            }))

          const have = new Set(req.map((f: any) => f.name))

          for (const key of parents) {
            if (!have.has(key)) {
              req.push({
                name: key,
                kind: 'string',
                parentEntity: parentOf[key],
              })
            }
          }

          return req
        })(),
      }
    })
    .map((e: any) => ({
      ...e,
      cmds: Object.keys(CMD_OPS)
        .filter((cmd) => CMD_OPS[cmd].some((op) => e.ops.includes(op))),
    }))
    .filter((e: any) => 0 < e.cmds.length)

  if (0 === entities.length) {
    throw new SdkGenError(
      'seneca-provider: no entity in this model declares a list/load/create/' +
      'update/remove operation, so the plugin would expose no entities at ' +
      'all. Remove the target, or add an entity with CRUD ops.')
  }

  const repo = providerRepo(model, lower, target.name)

  // The companion test server lives in the SDK repo's `app/` and is NOT
  // published, so the only way to reach it is the local checkout. The path
  // back to it is the inverse of this target's own `output: path`, computed
  // once by the external pass — see cmp/ExternalTarget.
  const sdkrel = ctx$.sdkrelpath || '..'

  // WHERE THE SDK SOURCE IS, AND WHY IT IS NOT `sdkrel`.
  //
  // `sdkrel` is a walk back through the FILESYSTEM, and it is committed here
  // — into the docs, the live-test headers and the develop-locally recipe.
  // That makes generated content depend on one machine's directory layout.
  // voxgig-solardemo-sdk committed '../../voxgig-sdk/voxgig-solardemo-sdk',
  // where `voxgig-sdk` is the name of a workspace directory on one laptop and
  // no part of any model; a second developer with both repos under a
  // differently named parent regenerates a diff in tracked files and follows
  // instructions that are wrong on one of the two machines.
  //
  // So the SDK is named by its PIN instead — repository and release tag, both
  // facts about the SDK rather than about anyone's disk — and fetched to a
  // fixed path INSIDE this repo. `make sdk-src` puts it there. The path is
  // then the same string on every machine and under every layout, which is
  // what lets this repo regenerate itself from a checkout it fetched (see
  // SdkPin and the Makefile).
  //
  // The tag is `v<version>`: the SDK's publish workflow cuts exactly that for
  // its primary npm target, so the pin needs no separate bookkeeping and
  // cannot drift from the dependency version.
  const sdkRepoUrl = String(repoInfo(model).repoUrl || '')
  const sdkTag = 'v' + sdkVersion
  const sdkRepoDir = sdkRepoUrl.replace(/[/]+$/, '').split('/').pop() || 'sdk'

  // With NO repo url there is nothing to pin and nothing to clone, so the
  // only path anyone can be told is still the relative one. Honest, and the
  // case the pin cannot improve.
  const sdkPinned = '' !== sdkRepoUrl
  const sdkSrc = sdkPinned ? SDK_SRC_DIR + '/' + sdkRepoDir : sdkrel

  // Where a live run points — and whether there is anything honest to point
  // it at.
  //
  // NOT simply `servers[0].url`. For an OpenAPI-derived model that is the
  // PRODUCTION host of a third-party API, and everything gated on it aims
  // there: the `describe('live')` block, which `npm test` runs on every CI
  // push on three operating systems; the `serverUp` probe in front of it; and
  // test/quick.js, whose header says "start the companion server first" while
  // BASE silently defaults to production and whose body is a create / update /
  // remove cycle. A live suite that reaches a stranger's API from CI is not a
  // live suite, it is traffic — and unauthenticated traffic at that.
  //
  // So a live base is taken only when it is unambiguously OURS: declared
  // outright by the project, or a loopback address, which no third party can
  // be behind. Anything else leaves live testing ungenerated, which is the
  // honest answer for an API nobody here runs.
  const live = model?.main?.[KIT]?.test?.live || {}
  const servers = (model?.main?.[KIT]?.info?.servers || [])
  const specBase = 0 < servers.length ? String(servers[0].url || '') : ''

  const loopback = (url: string) =>
    /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])([:/]|$)/i.test(url)

  const liveBase = null != live.base && '' !== live.base ? String(live.base) :
    (loopback(specBase) ? specBase : '')

  // Whether the SDK's own repo ships a runnable companion server under
  // `app/`. NOTHING in an API definition says so — it is a property of the
  // sibling project — so it cannot be inferred, and inferring it is what put
  // an unconditional `git clone && cd app && npm install && npm run build`
  // into every generated provider's CI.
  const liveApp = true === live.app || (loopback(specBase) && '' === (live.base || ''))

  const sdkDep = sdkDependency(model, target, {
    sdkPkg, sdkVersion, sdkRepoUrl: repoInfo(model).repoUrl,
  })

  const provider = {
    Name, lower, ENV, sdkClass, pluginName, fileBase,
    sdkPkg, sdkVersion, entities,
    // The SDK dependency, resolved ONCE. PackageJson emits it and the CI
    // note describes it, and computing it twice is how the second caller
    // came to pass a half-built provider object into it.
    sdkDep,
    // Whether that dependency comes from outside a registry. The generated
    // CI note says so, because "npm install is all you need" stops being
    // true the moment git or a tarball URL is in the path.
    sdkGit: !sdkDep.startsWith('^'),
    // WHICH non-registry kind, because the CI note has to be true: a git
    // dependency needs git on PATH and a release asset does not, and a note
    // that says the wrong one is worse than no note.
    sdkDepKind: sdkDep.startsWith('github:') ? 'git' :
      (sdkDep.startsWith('http') ? 'release' : 'npm'),
    // THE OPT-IN A NON-REGISTRY DEPENDENCY NEEDS, or ''.
    //
    // npm 12 defaults `allow-git` and `allow-remote` to "none" and REFUSES
    // such a dependency outright — EALLOWGIT / EALLOWREMOTE, before it
    // fetches anything. Older npm allowed both, so a workflow that passes
    // today fails the moment its runner image updates; this provider's own
    // publish run failed that way within hours of the build run passing,
    // because publishing upgrades npm first.
    //
    // Emitted ONLY where the project chose such a dependency: it is the
    // project opting into what it already declared, not a default weakened
    // for everyone. Publishing the SDK remains the durable answer, and this
    // flag exists so an unpublished one is workable meanwhile.
    sdkInstallFlag: sdkDep.startsWith('github:') ? ' --allow-git=all' :
      (sdkDep.startsWith('http') ? ' --allow-remote=all' : ''),
    repoUrl: repo.url,
    // The SDK's own repo, for pointing at the companion test server which is
    // only distributed in source.
    sdkRepoUrl,
    sdkTag,
    sdkRepoDir,
    sdkPinned,
    // Where the SDK SOURCE is reached, as every generated file spells it.
    // Layout-independent when the SDK has a repo to pin. See above.
    sdkSrc,
    api: apiName(model),
    version: packageVersion(model, target.name),
    liveBase,
    liveApp,
    // The sponsor line. @seneca/maintain's `content_readme` check requires
    // the publisher's name in the README, so this is load-bearing rather
    // than decorative — the generated `maintain` test fails without it.
    publisher: PUBLISHER,
    publisherUrl: PUBLISHER_URL,
    // A route with NO path params, so the probe is a plain GET. An entity
    // whose every route is parameterised gives none, and then the probe
    // falls back to the base URL itself.
    probePath: (entities.find((e: any) =>
      '' !== e.path && !e.path.includes('{')) || { path: '' }).path,
    // The provider's OWN published name. Not derived from the SDK slug the
    // way a language target's is — a provider is `@seneca/<name>-provider` —
    // so read the project's pin directly and default to that shape.
    pkgName: providerPackage(model, lower, target.name),
    // Whether this API authenticates at all. Decides if the plugin plumbs a
    // credential: the SDK's auth stage emits nothing for an auth-inactive
    // model and strips the authorization header regardless of options, so
    // plumbing one anyway produces a credential path that cannot work.
    authActive: isAuthActive(model),
    // Whether this API's scheme is genuine HTTP Basic Auth (two credentials,
    // base64-joined), matching the SDK's own auth.basic signal. Decides
    // whether the plugin also plumbs a `secret` alongside `apikey` — a
    // Basic-Auth SDK's own auth stage deletes the header when either is
    // missing, so a provider forwarding apikey alone could never
    // authenticate, the same class of gap `apikey`-only forwarding was.
    authBasic: isAuthActive(model) && isHttpBasicAuth(model),
  }

  // `.gitignore` is EMITTED rather than copied — npm strips that filename
  // from the tarball, so as a template it reached only checkout users. See
  // Gitignore_seneca-provider. Called before the Copy, as every language
  // target calls its own.
  Gitignore({})

  // Static furniture: LICENSE, CODE_OF_CONDUCT, Makefile, tsfmt.json and
  // both tsconfigs. Same for every provider.
  Copy({
    from: 'tm/' + target.name,
    replace: { ...ctx$.stdrep },
  })

  SdkPin({ provider })
  PackageJson({ provider, target })
  ProviderSource({ provider })
  ProviderDoc({ provider })
  Tests({ provider })
  Scripts({ provider })
  Workflow({ provider })
  Readme({ provider })
  Docs({ provider })
})


// HOW THE PROVIDER DEPENDS ON THE SDK IT WRAPS, as one dependency value.
//
// Default: the PUBLISHED package pinned to the version the `ts` target
// publishes, so the two can never disagree. Right whenever the SDK is on a
// registry — and wrong when it is not. An SDK for a private API, or one not
// published yet, leaves the provider unable to `npm install` at all: the
// dependency 404s, so the package cannot be built, tested or released. That
// is not hypothetical; it is why @seneca/github-provider could not be
// regenerated and released for weeks.
//
// `kind: 'git'` points at a GIT TAG instead, which needs no registry.
//
// NPM RESOLVES A GIT DEPENDENCY AGAINST THE REPOSITORY ROOT, and sdkgen
// generates the TypeScript SDK into `ts/`. So `kind: 'git'` suits an SDK
// whose package.json IS the repository root, and NOT the layout this
// toolchain produces.
//
// THE `::path:` SUBDIRECTORY SYNTAX DOES NOT WORK, and it looks like it
// does. npm-package-arg parses `#<ref>::path:ts` and reports
// `gitSubdir: /ts`, so a spec built that way reads as correct — but the
// INSTALLER ignores it: npm clones the repository and opens package.json at
// the clone root, failing with ENOENT on linux, macOS and Windows alike.
// That was measured, on all three, after the parser had said otherwise.
//
// `kind: 'release'` is the form that works for a package in a subdirectory:
// a GitHub release asset, which is `npm pack` output attached to the tag.
// npm installs an https tarball natively and never looks at the repository
// layout at all.
//
// `spec` still wins over all of it, for anything the shorthand cannot say.
function sdkDependency(model: any, target: any, provider: any): string {
  const dep = model?.main?.[KIT]?.target?.[target.name]?.sdk?.dep || {}

  const spec = String(dep.spec || '').trim()
  if ('' !== spec) {
    return spec
  }

  const kind = String(dep.kind || 'npm')
  if ('git' !== kind && 'release' !== kind) {
    return `^${provider.sdkVersion}`
  }

  // `owner/repo`, from the SDK's own repository unless the project says
  // otherwise. Accepts a full URL and reduces it, so a project can paste
  // what its remote prints.
  const repo = String(dep.repo || provider.sdkRepoUrl || '')
    .replace(/^git\+/, '')
    .replace(/^(https?:\/\/)?(www\.)?github\.com[/:]/, '')
    .replace(/\.git$/, '')
    .replace(/\/+$/, '')

  if ('' === repo) {
    throw new SdkGenError(
      'seneca-provider: sdk.dep.kind is "git" but no repository is known. ' +
      'Set `main.' + KIT + '.target.' + target.name +
      '.sdk.dep.repo` to `owner/repo`, or state the whole dependency with ' +
      '`sdk.dep.spec`.')
  }

  const ref = String(dep.ref || '').trim()
  if ('' === ref) {
    throw new SdkGenError(
      'seneca-provider: sdk.dep.kind is "git" but no `ref` is set. A git ' +
      'dependency with no ref follows the default branch, so an install ' +
      'today and an install tomorrow can differ — name the TAG to depend ' +
      'on, e.g. `sdk.dep.ref: "v' + provider.sdkVersion + '"`.')
  }

  if ('release' === kind) {
    // The asset `npm pack` produces: scope and name flattened, then the
    // version. `asset` overrides it for a project that names its own.
    const asset = String(dep.asset || '').trim() || (
      provider.sdkPkg.replace(/^@/, '').replace(/\//g, '-') +
      '-' + provider.sdkVersion + '.tgz')

    return `https://github.com/${repo}/releases/download/${ref}/${asset}`
  }

  return `github:${repo}#${ref}`
}


// --- package.json -----------------------------------------------------------

const PackageJson = cmp(function PackageJson(props: any) {
  const { provider, target } = props
  const { model } = props.ctx$

  const deps = collectDeps(model, target.name, target.deps, props.ctx$.log)

  // collectDeps returns { name, version, source, raw } — the DECLARED kind
  // (prod/peer/dev) is on `raw`, not hoisted. Reading `d.kind` instead
  // silently yields an empty manifest section, which is how the first cut of
  // this component shipped a package.json with no seneca peers at all.
  //
  // `kind` is a COMMA-SEPARATED LIST, so one dependency can land in more than
  // one manifest section. That is the Seneca plugin convention and not an
  // embellishment: `seneca` is a PEER (the plugin must run inside the host's
  // instance, never its own bundled copy) and also a DEV dependency (the test
  // suite does `require('seneca')` directly, so a bare `npm install` in a
  // clean checkout has to produce it). collectDeps deduplicates by package
  // name and the model's dep map is keyed by name, so the same package cannot
  // be declared twice — the kind has to carry the list instead.
  const dep = (kind: string) => {
    const out: Record<string, string> = {}
    const kinds = (d: any) => String((d.raw && d.raw.kind) || '')
      .split(',').map((s: string) => s.trim()).filter((s: string) => '' !== s)

    for (const d of deps.filter((d: any) => kinds(d).includes(kind))) {
      out[d.name] = d.version
    }
    return out
  }

  // Attribution. Model-driven, because it cannot be derived and because
  // regeneration OVERWRITES the manifest: the hand-written provider this
  // target was modelled on lost its author and both named contributors on the
  // first regeneration, and nothing failed. Unset falls back to the publisher.
  const author = authorInfo(model)
  const contributors = contributorList(model)

  const pkg = {
    name: provider.pkgName,
    version: provider.version,
    main: `dist/${provider.fileBase}.js`,
    type: 'commonjs',
    types: `dist/${provider.fileBase}.d.ts`,
    description:
      `Seneca entity provider for the ${provider.api} API, using the ` +
      `${provider.sdkPkg} SDK.`,
    homepage: provider.repoUrl,
    keywords: ['seneca', provider.lower, `${provider.lower}-provider`,
      provider.publisher.toLowerCase(), 'sdk'],
    author,
    // Omitted entirely when the project names none, rather than emitted as an
    // empty array — npm treats `"contributors": []` as a declaration that
    // there are none, which is a different claim from not having said.
    ...(0 < contributors.length ? { contributors } : {}),
    license: 'MIT',
    repository: { type: 'git', url: `git+${provider.repoUrl}.git` },
    scripts: {
      test: 'node --enable-source-maps --test test/**/*.test.js',
      'test-some':
        'node --enable-source-maps --test-name-pattern="$TEST_PATTERN" ' +
        '--test "test/**/*.test.js"',
      'test-watch': 'node --test --watch test/**/*.test.js',
      watch: 'tsc --build src test -w',
      build: 'tsc --build src test',
      'test-coverage':
        'node --enable-source-maps --experimental-test-coverage --test ' +
        'test/**/*.test.js',
      clean:
        'rm -rf node_modules dist dist-test .tsbuildinfo yarn.lock ' +
        'package-lock.json',
      reset: 'npm run clean && npm i && npm run build && npm test',
      // The Seneca release convention: tag from package.json, push, publish.
      // Generated because a provider is released like every other Seneca
      // plugin, and a maintainer who has to remember the incantation will
      // eventually publish an untested build.
      'repo-tag':
        'REPO_VERSION=`node -e "console.log(require(\'./package\').version)"` ' +
        '&& echo TAG: v$REPO_VERSION && git commit -a -m v$REPO_VERSION ' +
        '&& git push && git tag v$REPO_VERSION && git push --tags;',
      'repo-publish': 'npm run clean && npm i && npm run repo-publish-quick',
      'repo-publish-quick':
        'npm run build && npm run test && npm run repo-tag && ' +
        'npm publish --access public --registry https://registry.npmjs.org',
    },
    // What actually ships. Without `files`, `npm publish` packs the test
    // suite and build output into the tarball.
    //
    // `doc` IS PART OF THE PACKAGE. The generated README links to
    // doc/tutorial.md, doc/how-to.md, doc/reference.md and
    // doc/explanation.md with relative paths, so omitting it published a
    // README whose every documentation link 404s for anyone reading the
    // installed package rather than the repository. Either the links become
    // absolute repository URLs or the files ship; they ship, because the
    // docs describe the exact version installed and a URL would drift to
    // whatever main says later.
    files: ['dist', 'doc', 'src/**/*.ts', 'LICENSE'],
    engines: { node: '>=24' },
    dependencies: {
      // The SDK this plugin wraps. Published-and-pinned by default; a git
      // tag when the project says so, because an unpublished SDK otherwise
      // leaves this package unable to install at all. See sdkDependency.
      [provider.sdkPkg]: provider.sdkDep,
      ...dep('prod'),
    },
    peerDependencies: dep('peer'),
    devDependencies: dep('dev'),
  }

  File({ name: 'package.json' }, () => {
    Content(JSON.stringify(pkg, null, 2) + '\n')
  })
})


// --- src/<name>-provider.ts -------------------------------------------------

const ProviderSource = cmp(function ProviderSource(props: any) {
  const { provider } = props

  Folder({ name: 'src' }, () => {
    File({ name: `${provider.fileBase}.ts` }, () => {
      Content(`/* Generated by @voxgig/sdkgen. Do not edit. */

const Pkg = require('../package.json')

const { ${provider.sdkClass} } = require('${provider.sdkPkg}')

const SdkPkg = require('${provider.sdkPkg}/package.json')


type ${provider.pluginName}Options = {
  // Options passed straight to the ${provider.sdkClass} constructor,
  // most usefully \`base\` to point at a server.
  sdk?: Record<string, any>

  // Run the SDK in offline test mode (in-memory mock transport).
  test?: boolean

  // Test feature options, e.g. {entity: {${provider.entities[0].name}: {...}}} to
  // seed the mock with data. Only used when \`test\` is true.
  testopts?: Record<string, any>
}


function ${provider.pluginName}(this: any, options: ${provider.pluginName}Options) {
  const seneca: any = this

  const entityBuilder = this.export('provider/entityBuilder')

  seneca.message('sys:provider,provider:${provider.lower},get:info', get_info)

  async function get_info(this: any, _msg: any) {
    return {
      ok: true,
      name: '${provider.lower}',
      version: Pkg.version,
      sdk: {
        name: '${provider.sdkPkg}',
        version: SdkPkg.version,
      },
    }
  }


  // Every SDK operation resolves to an SDK ENTITY rather than raw data (a
  // removed record included: it comes back marked deleted, still holding what
  // it held). Seneca wants plain data, which the entity hands over through
  // data().
  function plain(res: any) {
    return null == res ? res : res.data()
  }


  // Seneca query directives (sort$, limit$, ...) are for the store, not the
  // API, so they must not reach the SDK as match fields.
  function cleanq(q: any) {
    const out: any = {}
    for (const k in (q || {})) {
      if (!k.endsWith('$')) {
        out[k] = q[k]
      }
    }
    return out
  }


  // \`action$\` — the directive that selects a custom API action instead of
  // the plain cmd. READ BEFORE cleanq strips it, and still stripped from
  // what reaches the SDK as match fields: it is an instruction to the store,
  // like sort$ and limit$, not a value to filter on.
  //
  // THREE PLACES, because seneca-entity puts it in three places depending on
  // how the caller spelled it, and dropping any one of them silently turns a
  // named action into an ordinary call:
  //
  //   list$/load$/remove$({ action$ })         -> msg.q.action$
  //   ent.directive$({ action$ }).save$()      -> msg.action$
  //   const e = ent.make$({...}); e.action$=.. -> msg.ent.action$
  //
  // \`make$({ action$ })\` is NOT among them and cannot be: seneca-entity's
  // make$ copies only keys without a \`$\`, plus the four directives it knows
  // (id$, merge$, custom$, directive$), so an unknown trailing-\`$\` key is
  // dropped before any store sees it. \`id$\` reads like the precedent for
  // one, but it works only because make$ names it explicitly. The README
  // says so; there is nothing this plugin can check, because nothing arrives.
  function actionOf(msg: any) {
    const q = msg && msg.q
    const ent = msg && msg.ent

    return null != (q && q.action$) ? q.action$ :
      null != (msg && msg.action$) ? msg.action$ :
        null != (ent && ent.action$) ? ent.action$ :
          undefined
  }


  // The SDK argument for an ACTION on a read cmd: everything the caller sent
  // minus Seneca's own directives, with the record key carried across, plus
  // the \`$action\` selector the SDK dispatches on.
  //
  // WIDER than the canonical argument on purpose. An action route has its own
  // parameters — GitHub's merge takes commit_title and merge_method, which the
  // canonical PATCH knows nothing about — so narrowing to the plain op's
  // required keys would strip the action's whole payload. The SDK still
  // validates: an action whose own point cannot be built is refused with
  // \`point_action_invalid\` rather than sent somewhere else.
  function actionq(q: any, rk: string, action: string) {
    const out = cleanq(q)

    if ('id' !== rk && null != out.id) {
      out[rk] = out.id
      delete out.id
    }

    out.$action = action
    return out
  }


  // The SDK throws on any non-2xx. A 404 from a single-item read is an
  // ordinary "not found" answer rather than a failure, so return null and let
  // everything else propagate. SDK errors carry the HTTP status at the top
  // level, so ask them rather than digging into \`result\`.
  async function ornull(action: () => Promise<any>) {
    try {
      return await action()
    }
    catch (e: any) {
      if (true === e?.notFound) {
        return null
      }
      throw e
    }
  }

`)

      // A guard per required parent key. Without it the SDK builds a
      // half-formed URL and the caller gets an opaque 404 instead of being
      // told what they left out.
      const guarded = provider.entities.filter((e: any) => 0 < e.parents.length)
      if (0 < guarded.length) {
        Content(`  // Nested entities cannot build their path without the parent id, so
  // say which key is missing rather than letting the SDK report an opaque
  // 404 on a half-built URL.
`)
        each(guarded, (e: any) => {
          each(e.parents, (key: any) => {
            const k = String(key.val$ ?? key)
            Content(`  function ${guardName(e, k)}(value: any, cmd: string) {
    if (null == value || '' === value) {
      throw new Error(
        '${provider.pkgName}: ${e.name} ' + cmd + ': ${k} is required'
      )
    }
    return value
  }


`)
          })
        })
      }

      // Seneca's own entity key is ALWAYS literally `id` — `load$('x')` sets
      // `q = { id: 'x' }`, and the id of the entity it builds comes off
      // `data.id`. An API that addresses a record by anything else therefore
      // needs translating in both directions, or `load$` requests a record
      // keyed `undefined` and every entity handed back has no id at all — one
      // that cannot then be saved or removed.
      // ID TRANSLATION, ONE ALGORITHM AND A TABLE.
      //
      // Seneca entities carry exactly one `id`. Plenty of APIs do not: they
      // key a record by a differently-named field (`repo`, `number`), or by
      // SEVERAL path parameters at once with no single one that is the id
      // (github's `/repos/{owner}/{repo}`). Both need translating in both
      // directions, or `load$` asks for a record keyed `undefined` and every
      // record handed back has no id to save or remove it by.
      //
      // The LOGIC is the same for every API; only which parameters, which
      // separator and where they live in a response differ, and those are
      // model data. So this emits one `splitid`, one `joinid` and a table —
      // not a bespoke pair of functions per entity, which is what it used to
      // do and which duplicated the same algorithm N times over.
      const translated = provider.entities.filter((e: any) => null != idSpec(e.ent))

      if (0 < translated.length) {
        const rows = translated.map((e: any) => {
          const spec: any = idSpec(e.ent)
          const from = null == spec.from ? '' :
            `, from: { ${Object.keys(spec.from).sort()
              .map((k: string) => `${jsKey(k)}: '${spec.from[k]}'`).join(', ')} }`
          return `    ${jsKey(e.name)}: { parts: [${
            spec.parts.map((p: string) => `'${p}'`).join(', ')}], sep: '${spec.sep}'${from} },`
        }).join('\n')

        Content(`  // HOW EACH ENTITY'S id MAPS TO THE API'S OWN KEYS, from the model.
  //
  // \`parts\`  the path parameters that address one record, in path order.
  //          One part is the ordinary case: the API just calls its key
  //          something other than \`id\`. Two or more is a compound key,
  //          where no single parameter names the record.
  // \`sep\`    joins the parts into the one id a Seneca entity carries. A
  //          slash cannot occur inside a path segment, so the join is
  //          unambiguous and the split cannot over-split.
  // \`from\`   where each part's value lives in a RESPONSE, as a dotted
  //          path. A path parameter's name is not generally a response
  //          field's name: github returns a repo's owner as an OBJECT
  //          (\`owner.login\`) and its name as \`name\`, never \`repo\`.
  //          A part missing here cannot be read back off a response.
  const ID_SPEC: Record<string, { parts: string[], sep: string, from?: Record<string, string> }> = {
${rows}
  }


  // Read a dotted path out of a record. \`from\` maps a path parameter to
  // wherever the response actually carries it, and that is sometimes inside
  // a nested object.
  function idread(data: any, path: string) {
    let node: any = data
    for (const key of path.split('.')) {
      if (null == node) {
        return undefined
      }
      node = node[key]
    }
    return node
  }


  // The Seneca id, split back into the parameters the API addresses a record
  // with. Refuses a wrong part count rather than sending a URL built from
  // whatever the id happened to contain — that would address a different
  // record, or none, and the 404 would name nothing useful.
  function splitid(name: string, id: any, what: string) {
    const spec = ID_SPEC[name]
    const text = null == id ? '' : String(id)
    const got = 1 === spec.parts.length ? [text] : text.split(spec.sep)

    if (spec.parts.length !== got.length || got.some((p: string) => '' === p)) {
      throw new Error(
        '${provider.pkgName}: ' + name + ' ' + what +
        ": id must be '" + spec.parts.join(spec.sep) + "', got: " + JSON.stringify(id))
    }

    const out: Record<string, any> = {}
    spec.parts.forEach((p: string, i: number) => { out[p] = got[i] })
    return out
  }


  // The id for a record the API returned.
  //
  // \`vals\` are the parameters THIS request addressed it with, and they win:
  // a response does not always repeat them. Otherwise the parts are read out
  // of the response through \`from\`, which is what makes a created or listed
  // record identifiable at all.
  //
  // THE ADDRESSING KEY WINS over an \`id\` the response already carries. A
  // response often has both — github's pull has a global database \`id\` and
  // a repo-scoped \`number\` — and the unrelated one is no use for addressing
  // anything. It is kept as \`${provider.lower}_id\` rather than dropped.
  function joinid(name: string, data: any, vals?: any) {
    const spec = ID_SPEC[name]
    if (null == data) {
      return data
    }

    let id = null

    if (null != vals) {
      const got = spec.parts.map((p: string) => vals[p])
      if (got.every((v: any) => null != v && '' !== String(v))) {
        id = got.join(spec.sep)
      }
    }

    if (null == id) {
      const got = spec.parts.map((p: string) =>
        idread(data, (spec.from || {})[p] || p))
      if (got.every((v: any) =>
        null != v && 'object' !== typeof v && '' !== String(v))) {
        id = got.join(spec.sep)
      }
    }

    if (null != id) {
      if (null != data.id && String(data.id) !== id &&
        null == ${jsProp('data', provider.lower + '_id')}) {
        ${jsProp('data', provider.lower + '_id')} = data.id
      }
      data.id = id
    }

    return data
  }


`)
      }

      // WHICH SDK OP SERVES EACH `action$`, per entity and per cmd.
      //
      // Emitted for EVERY cmd, including the ones with no actions at all.
      // That empty map is not waste: it is what lets `actionop` refuse an
      // `action$` on an entity that has none, instead of ignoring the key
      // and performing an ordinary call. Passing `action$` and getting a
      // plain save is the failure this whole mechanism exists to prevent —
      // it is how GitHub's `merge` silently became an "update".
      Content(`  // The custom actions each cmd can reach, as action -> SDK op. An action
  // is an alternative POINT of an ordinary op (\`select.$action\` in the API
  // model), so \`save$\` routes by this map rather than assuming update: an
  // action folded into \`create\` is reached through \`save$\` too.
  const ACTIONS: Record<string, Record<string, Record<string, string>>> = {
`)
      each(provider.entities, (e: any) => {
        Content(`    [${JSON.stringify(e.name)}]: {
`)
        each(e.cmds, (cmd: any) => {
          const name = String(cmd.val$ ?? cmd)
          const map = e.actions[name] || {}
          const names = Object.keys(map).sort()
          // COMPUTED KEYS, not `jsKey`. An action named `__proto__` written
          // as a plain (or quoted) object-literal key SETS THE PROTOTYPE
          // instead of creating a property, so the action would vanish from
          // its own map and be unreachable. A computed key always defines an
          // own property. apidef derives an action name from a route segment,
          // and `__proto__` is a legal one.
          Content(`      ${name}: {${names.map((a: string) =>
            ` [${JSON.stringify(a)}]: '${map[a]}'`).join(',')}${0 < names.length ? ' ' : ''}},
`)
        })
        Content(`    },
`)
      })
      Content(`  }


  // Resolve an \`action$\` to the SDK op that serves it, or REFUSE it.
  //
  // Never falls through to the ordinary call. An action name the entity does
  // not have is a caller mistake worth a message that names what is
  // available; performing a plain save instead is the one outcome that must
  // not happen, because it succeeds and does the wrong thing.
  // AN OWN PROPERTY, never an inherited one. \`map[name]\` resolves
  // \`toString\`, \`constructor\`, \`valueOf\` and the rest off Object's
  // prototype, and each of those is non-null — so the refusal below never
  // fired and the inherited function was handed to the SDK as an op name.
  // That is the silent drop in another hat: the caller named something the
  // entity does not have and was not told. An empty map inherits them all,
  // so a cmd with no actions was the most exposed.
  // THE CMD THAT WOULD WRITE TO THE WRONG RESOURCE.
  //
  // Some entities gather their ops from unrelated routes, and then a cmd's
  // only route addresses something that is not this record: \`migration\`'s
  // remove deletes a repository's migration ARCHIVE, \`user\`'s deletes a GPG
  // KEY, \`pull\`'s deletes a review COMMENT. The id the caller passed is not
  // in the request at all.
  //
  // Such a cmd is refused rather than sent. A caller asking to remove one
  // record must not have a different resource deleted instead, and a
  // successful-looking reply is the worst possible answer. Where the real
  // operation exists it is reachable by name, through \`action$\`.
  function misaddressed(
    entname: string, cmd: string, key: string, addresses: string[]
  ) {
    const own = Object.prototype.hasOwnProperty
    const ents: any = own.call(ACTIONS, entname) ? ACTIONS[entname] : {}
    const acts = Object.keys(own.call(ents, cmd) ? ents[cmd] : {}).sort()

    throw new Error(
      '${provider.pkgName}: ' + entname + ' ' + cmd +
      ': this API has no ' + cmd + ' route for one ' + entname +
      '. Its only ' + cmd + ' route addresses ' + addresses.join(', ') +
      ', not ' + key + ', so the id would be ignored and a different record ' +
      'changed. ' +
      (0 < acts.length ?
        'Name the operation with action\$ instead: ' + acts.join(', ') :
        'No action\$ of this cmd is available either'))
  }


  function actionop(name: string, entname: string, cmd: string) {
    const own = Object.prototype.hasOwnProperty
    const ents: any = own.call(ACTIONS, entname) ? ACTIONS[entname] : {}
    const map: any = own.call(ents, cmd) ? ents[cmd] : {}
    const op = own.call(map, name) ? map[name] : null

    if (null == op) {
      const valid = Object.keys(map).sort()
      throw new Error(
        '${provider.pkgName}: ' + entname + ' ' + cmd + ': action$ "' + name +
        '" is not an action of this operation. Valid: ' +
        (0 < valid.length ? valid.join(', ') : '(none)'))
    }

    return op
  }


`)

      // The cmd map, declared up front so every action is attached to a
      // shape seneca-entity can read before the actions are defined.
      Content(`  const entity: any = {
`)
      each(provider.entities, (e: any) => {
        Content(`    ${jsKey(e.name)}: {
      cmd: {
`)
        each(e.cmds, (cmd: any) => {
          Content(`        ${String(cmd.val$ ?? cmd)}: { action: (undefined as any) },
`)
        })
        Content(`      },
    },

`)
      })
      Content(`  }

`)

      each(provider.entities, (e: any) => {
        // The guard set is PER OP, not the union across the entity's ops. An
        // entity whose routes are not uniformly nested — a flat `load`, a
        // nested `create` — used to demand the parent id on the flat call too,
        // an argument its own SDK request would then never use.
        //
        // `save` guards the union of create's and update's keys: one action
        // serves both and dispatches at runtime, so it cannot know which set
        // applies until it has the data.
        // A COMPOSITE-KEY ENTITY GUARDS NOTHING SEPARATELY. Its parent keys
        // travel INSIDE the id, so demanding `q.owner` as well would reject
        // `load$('octocat/hello-world')` — the very call the composite id
        // exists to allow. splitid() does the checking instead, and refuses
        // a wrong part count by name.
        const eparts = idParts(e.ent)
        // The whole id description for this entity, or null when none is
        // needed. `out` branches on it rather than on the record key.
        const espec = idSpec(e.ent)
        const guard = (cmd: string, src: string) => {
          const keys = 'save' === cmd ?
            [...new Set([...(e.opParents.create || []), ...(e.opParents.update || [])])].sort() :
            (e.opParents[cmd] || [])

          return keys
            .filter((k: string) => !eparts.includes(k))
            .map((k: string) =>
              `      ${guardName(e, k)}(${jsProp(src, k)}, '${cmd}')\n`)
            .join('')
        }

        // THE REFUSAL LINE, for a cmd whose only route addresses a
        // different resource. Placed AFTER the action branch — an action
        // route is named explicitly and is exactly how the real operation is
        // reached — and BEFORE the guards, so the caller is told the cmd
        // does not exist for this entity rather than being asked for a
        // parameter that would not have helped.
        const refuse = (cmd: string) => {
          if (true !== (e.idmisaddressed || {})[cmd]) {
            return ''
          }
          const key = 0 < eparts.length ? eparts.join(String(e.idsep || '/')) :
            recordKey(e.ent)
          const addresses = addressKeys(e.ent, cmd)

          return `      misaddressed('${e.name}', '${cmd}', '${key}', ` +
            `[${addresses.map((k: string) => `'${k}'`).join(', ')}])
`
        }

        // Reading the record's own key off the Seneca query, which always
        // spells it `id`, and every other required key off its own name.
        const rk = recordKey(e.ent)

        // For a composite key the parameters come out of the split, which the
        // handler binds to `key` before the call. Any required key the id
        // does NOT carry still comes off the query.
        // THE RECORD'S OWN KEY IS ALWAYS SENT, whether or not the match
        // declares it required.
        //
        // An op gathers several routes, and a parameter only one of them
        // uses comes through OPTIONAL: github's IssueLoadMatch has `owner`
        // and `repo` required but `id` optional, because the op also covers
        // `/repos/{owner}/{repo}/issues/comments/{comment_id}`. Sending only
        // the required keys called `Issue().load({owner, repo})` — the id
        // the caller passed to `load$` went nowhere, so every read of any
        // issue in that repo answered with the same record and
        // `load$('no-such-issue')` returned one. Ten entities failed their
        // not-found test on it, and the ones that "passed" were passing for
        // the wrong reason. addressKeys is what the test emitter reads too.
        const sdkArg = (opname: string) => {
          const keys = addressKeys(e.ent, opname)
          if (0 === keys.length) {
            return '{}'
          }
          if (0 < eparts.length) {
            return `{ ${keys.map((k: string) => eparts.includes(k) ?
              `${jsKey(k)}: ${jsProp('key', k)}` :
              `${jsKey(k)}: ${jsProp('q', k)}`).join(', ')} }`
          }
          return `{ ${keys.map((k: string) =>
            `${jsKey(k)}: ${jsProp('q', k === rk ? 'id' : k)}`).join(', ')} }`
        }

        // The line that splits the Seneca id into the API's parameters,
        // emitted only where there is one record to address. `list` has none.
        // The entity-options argument that carries the path parameters for a
        // write. Empty for an ordinary entity, which needs no such channel.
        const entArg = 0 === eparts.length ? '' :
          `null == key ? undefined : { match: key }`

        const splitLine = (cmd: string) => 0 === eparts.length ? '' :
          `      const key = splitid('${e.name}', ${'save' === cmd ? 'data.id' : 'q.id'}, '${cmd}')\n`

        // The data hop, plus the id alias when the API keys the record by
        // something other than `id`. A composite entity passes the addressing
        // values through, because the response may not repeat them.
        const out = (expr: string, vals?: string) =>
          null == espec ? `plain(${expr})` :
            `joinid('${e.name}', plain(${expr})${null == vals ? '' : ', ' + vals})`

        // The action branch, emitted for every cmd whether or not this entity
        // has actions. `actionop` is what refuses an unknown name, so leaving
        // it out where the map is empty would restore the silent drop for
        // exactly the entities most likely to be typed at by mistake.
        //
        // IT COMES BEFORE THE PARENT GUARDS, and that ordering is the whole
        // of its correctness. The guards describe the CANONICAL route —
        // opParams drops action points when computing them — and an action
        // route need not be nested the same way: Zoom's canonical update is
        // `/user/{user_id}/meeting/{id}` while its status action hangs off
        // `/meeting/{id}`. Guarding first rejected that action for want of a
        // `user_id` its own URL has no segment for.
        //
        // The action path is not left unguarded, it is guarded by the RIGHT
        // thing: the SDK builds the action's own point and refuses an
        // unbuildable one with `point_action_invalid`, naming the op and the
        // action. A call naming no action falls through to the guards exactly
        // as before.
        const actionBranch = (cmd: string, call: string) => `      const action$ = actionOf(msg)
      if (null != action$) {
        const op$ = actionop(action$, '${e.name}', '${cmd}')
${call}      }

`

        if (e.cmds.includes('list')) {
          Content(`
  ${jsProp('entity', e.name)}.cmd.list.action =
    async function list_${e.name}(this: any, entize: any, msg: any) {
      const q = cleanq(msg.q)
${actionBranch('list',
            `        const found = await this.shared.sdk.${e.acc}()[op$](actionq(msg.q, '${rk}', action$))
        return found.map((data: any) => entize(${out('data')}))
`)}${guard('list', 'q')}      const list = await this.shared.sdk.${e.acc}().list(q)
      return list.map((data: any) => entize(${out('data')}))
    }

`)
        }

        if (e.cmds.includes('load')) {
          Content(`
  ${jsProp('entity', e.name)}.cmd.load.action =
    async function load_${e.name}(this: any, entize: any, msg: any) {
      const q = cleanq(msg.q)
${actionBranch('load',
            `        const hit = await ornull(() => this.shared.sdk.${e.acc}()[op$](actionq(msg.q, '${rk}', action$)))
        return null == hit ? null : entize(${out('hit')})
`)}${guard('load', 'q')}${splitLine('load')}      const res = await ornull(() => this.shared.sdk.${e.acc}().load(${sdkArg('load')}))
      return null == res ? null : entize(${out('res', 0 < eparts.length ? 'key' : undefined)})
    }

`)
        }

        if (e.cmds.includes('save')) {
          const hasCreate = e.ops.includes('create')
          const hasUpdate = e.ops.includes('update')

          // Dispatch on the SENECA key. The record arriving here is a Seneca
          // entity's data, so its id lives at `id` whatever the API calls it —
          // dispatching on the API's key sent every save to `create`, leaving
          // update unreachable.
          // A MISADDRESSED UPDATE IS REFUSED, BUT ONLY ON THE UPDATE LEG. A
          // create needs no record key — the API assigns one — so an entity
          // whose update route addresses a different resource can still be
          // created. Dispatch is on `data.id`, so the refusal goes exactly
          // where the update would have.
          const refuseUpdate = true === (e.idmisaddressed || {}).update ?
            refuse('update') : ''

          const body = hasCreate && hasUpdate
            ? (('' === refuseUpdate) ? `      const res = null == data.id
        ? await sdk.${e.acc}(${entArg}).create(data)
        : await sdk.${e.acc}(${entArg}).update(data)` : `      if (null != data.id) {
  ${refuseUpdate.replace(/\n$/, '')}
      }

      const res = await sdk.${e.acc}(${entArg}).create(data)`)
            : hasCreate
              ? `      const res = await sdk.${e.acc}(${entArg}).create(data)`
              : `${refuseUpdate}      const res = await sdk.${e.acc}(${entArg}).update(data)`

          // ... and hand the API back its own key, which Seneca does not know
          // to send.
          //
          // A COMPOSITE KEY IS UNPACKED ONTO THE DATA. The write goes out as
          // a body plus path parameters, and the SDK reads those parameters
          // off the same object — so the parts have to be present under
          // their own names, not fused into `id`. On a create there is no id
          // yet and the caller supplies the parts directly, which is why this
          // only runs when an id is there.
          // THE COMPOSITE SPLIT CANNOT LIVE HERE, before the action branch,
          // even though that is where the single-key alias sits. The alias
          // only ever assigns; the split THROWS on an id that is not all its
          // parts, and an `action$` call is entitled to an id shaped however
          // that action's own route wants. Running it first turned
          // `action$: 'no_such_action'` into an id complaint, hiding the
          // error the caller needed. It is emitted after the action branch
          // instead — see compositeSave below, spliced where the parent
          // guards go, which is exactly the position the component already
          // documents as "after the action branch".
          const compositeSave = 0 < eparts.length ? `
      // Seneca carries this ${e.name}'s key as one \`id\`; the API addresses
      // the record by ${eparts.map((p: string) => '`' + p + '`').join(' and ')}.
      //
      // THE PARTS GO IN THE ENTITY MATCH, NOT ONTO THE DATA. They are path
      // parameters, and the data is the request body. Writing them onto the
      // data is how the flat \`${eparts[0]}\` the URL needs came to displace
      // whatever the response carries under that name — for github's repo an
      // \`owner\` OBJECT, so a saved record lost the field that identifies
      // it. The SDK resolves a path parameter from the match ahead of the
      // body, so passing it here leaves the body exactly as the caller meant
      // it.
      //
      // \`key\` STAYS NULL ON A CREATE: there is no id yet, the API assigns
      // the record, and the id is rebuilt from the response instead.
      let key = null
      if (null != data.id) {
        key = splitid('${e.name}', data.id, 'save')
      }

      // \`${provider.lower}_id\` is this provider's own bookkeeping — the
      // API's unrelated \`id\`, parked by joinid() so it is not lost. It is
      // not a field of the API's write schema, so it must not travel in the
      // request body.
      delete ${jsProp('data', provider.lower + '_id')}

      // AND NEITHER DOES THE JOINED \`id\`. It is Seneca's key for this
      // record, not the API's: a composite ${e.name} is addressed by
      // \`${eparts.join('\` and \`')}\`, which travel as path parameters in
      // the match above. Leaving it on the body sent \`owner0/repo0\` as a
      // field the write schema has no place for — and the offline transport,
      // which matches a request against a stored record, then looked for a
      // record whose own \`id\` was that joined string and found none.
      delete data.id
` : ''

          const alias = 0 < eparts.length ? '' : 'id' === rk ? '' :
            `
      // This API keys a ${e.name} by \`${rk}\`; Seneca carries it as \`id\`.
      if (null == ${jsProp('data', rk)} && null != data.id) {
        ${jsProp('data', rk)} = data.id
      }

      // \`${provider.lower}_id\` is this provider's own bookkeeping — the
      // API's unrelated \`id\`, parked by joinid() so it is not lost. It
      // is not a field of the API's write schema, so it must not travel in
      // the request body: a strict API rejects an unknown property, and a
      // lax one may persist it.
      delete ${jsProp('data', provider.lower + '_id')}
`

          Content(`
  ${jsProp('entity', e.name)}.cmd.save.action =
    async function save_${e.name}(this: any, entize: any, msg: any) {
      const data = msg.ent.data$(false)
${alias}      const sdk = this.shared.sdk

${actionBranch('save',
            `        // The action's OWN payload is the entity's own fields — data$(false)
        // has already dropped every trailing-\`$\` key, \`action$\` included,
        // so \`$action\` is the only thing added here.
        data.$action = action$
        const done = await sdk.${e.acc}()[op$](data)
        return entize(${out('done')})
`)}${guard('save', 'data')}${compositeSave}${body}

      return entize(${out('res', 0 < eparts.length ? 'key' : undefined)})
    }

`)
        }

        if (e.cmds.includes('remove')) {
          // A REMOVE ACTION ANSWERS FOR ITSELF. The canonical remove has
          // nothing to hand back — the record is gone — so its handler
          // returns null and takes no `entize`. An action folded into
          // `remove` is a different endpoint with a response of its own
          // (`/meeting/{id}/archive` answers with the archive record), and
          // the other three cmds all pass an action's response through.
          // Applying the canonical "return null" to it threw that away, so
          // the action appeared to succeed and yielded nothing.
          //
          // `entize` is therefore named, never `_entize`. Naming it
          // conditionally on the entity HAVING a remove action does not work
          // and the type-check says so: the action branch is emitted for
          // every entity — that is what refuses an unknown `action$` on one
          // with no actions — so the parameter is always referenced.
          Content(`
  ${jsProp('entity', e.name)}.cmd.remove.action =
    async function remove_${e.name}(this: any, entize: any, msg: any) {
      const q = cleanq(msg.q)
${actionBranch('remove',
            `        const gone = await ornull(() => this.shared.sdk.${e.acc}()[op$](actionq(msg.q, '${rk}', action$)))
        return null == gone ? null : entize(${out('gone')})
`)}${'' !== refuse('remove') ? refuse('remove') :
            `${guard('remove', 'q')}${splitLine('remove')}      await ornull(() => this.shared.sdk.${e.acc}().remove(${sdkArg('remove')}))
`}      return null
    }

`)
        }
      })

      Content(`
  entityBuilder(this, {
    provider: {
      name: '${provider.lower}',
    },
    entity
  })


  seneca.prepare(async function(this: any) {
    const sdkopts: any = Object.assign({}, options.sdk)
${provider.authActive ? `
    // The provider convention carries credentials, so honour an \`apikey\`
    // when one is configured.
    const res = await this.post('sys:provider,get:keymap,provider:${provider.lower}')

    // ACCEPT \`api\` AS WELL AS \`apikey\`. The older provider convention
    // named this key \`api\` and read it with
    // \`sys:provider,get:key,...,key:api\`; the keymap message replaced that,
    // and the rename was silent. An application still configured as
    // \`keys: { api: { value: ... } }\` therefore resolved to undefined and
    // the SDK was constructed with NO credential at all — the request went
    // out unauthenticated and failed much later as a 401 or a 404 on
    // anything private, with nothing at startup to point at the cause.
    // \`apikey\` wins when both are set, so a config that has migrated is
    // unaffected.
    const apikey = res?.keymap?.apikey?.value ?? res?.keymap?.api?.value

    // Hand the credential to the SDK as \`apikey\`, NOT as an authorization
    // HEADER. The SDK's own auth stage owns that header: it reads
    // \`options.apikey\`, and on every path where it finds none it DELETES
    // \`authorization\` before the request goes out. A provider that set the
    // header itself was therefore never authenticated — the SDK stripped the
    // very thing it had just written, on every call, silently. The SDK also
    // owns the scheme prefix, which is resolved from the API definition
    // rather than assumed to be \`Bearer\`.
    if (null != apikey && '' !== apikey) {
      sdkopts.apikey = apikey
    }

    // AN UNRESOLVED CREDENTIAL IS SAID OUT LOUD. This API declares
    // authentication, so reaching here with nothing configured means every
    // call goes out unauthenticated. That is not always wrong — public
    // read-only endpoints work, at a much lower rate limit — so this warns
    // rather than throwing, and names both accepted key spellings so a
    // misnamed key is obvious from one line of log. Silence here is what
    // made the \`api\` -> \`apikey\` rename above cost a debugging session
    // instead of a glance.
    else {
      this.log.warn({
        fix: 'unauthenticated',
        note: 'no ${provider.lower} credential resolved from the keymap ' +
          '(looked for keys.apikey then keys.api); requests will be sent ' +
          'unauthenticated and will fail on anything non-public',
      })
    }
${provider.authBasic ? `
    // Genuine HTTP Basic Auth needs a SECOND credential (the SDK sends
    // \`Authorization: Basic base64(apikey:secret)\`) — without it the SDK's
    // auth stage treats the pair as incomplete and deletes the header, same
    // as a missing apikey.
    const secret = res?.keymap?.secret?.value

    if (null != secret && '' !== secret) {
      sdkopts.secret = secret
    }
` : ''}` : `
    // This API declares no authentication, so no credential is plumbed. The
    // SDK's auth stage emits nothing for an auth-inactive model and deletes
    // any \`authorization\` header regardless of options, so a keymap lookup
    // here would read a key that could not reach the wire — which is what the
    // first version of this target did.
`}
    this.shared.sdk = options.test
      ? ${provider.sdkClass}.test(options.testopts || {}, sdkopts)
      : new ${provider.sdkClass}(sdkopts)
  })


  return {
    exports: {
      sdk: () => this.shared.sdk,
    },
  }
}


// Default options.
const defaults: ${provider.pluginName}Options = {
  sdk: {},
  test: false,
  testopts: {},
}

Object.assign(${provider.pluginName}, { defaults })

export default ${provider.pluginName}

if ('undefined' !== typeof module) {
  module.exports = ${provider.pluginName}
}
`)
    })
  })
})


// --- src/<Name>Provider-doc.ts ----------------------------------------------

const ProviderDoc = cmp(function ProviderDoc(props: any) {
  const { provider } = props

  Folder({ name: 'src' }, () => {
    File({ name: `${provider.pluginName}-doc.ts` }, () => {
      Content(`/* Generated by @voxgig/sdkgen. Do not edit. */


const messages = {
  get_info: {
    desc: 'Get information about the ${provider.api} SDK.',
  },
}


const sections = {
  intro: {
    path: '../provider/doc/intro.md'
  }
}

const docs = {
  sections,
  messages
}

export default docs


if ('undefined' !== typeof module) {
  module.exports = docs
}
`)
    })
  })
})


export {
  Main,
  recordKey,
  cmdActions,
  entityActionList,
}
