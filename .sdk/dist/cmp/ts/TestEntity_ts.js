"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEntity = void 0;
const struct_1 = require("@voxgig/struct");
const apidef_1 = require("@voxgig/apidef");
const sdkgen_1 = require("@voxgig/sdkgen");
const utility_ts_1 = require("./utility_ts");
const TestEntity = (0, sdkgen_1.cmp)(function TestEntity(props) {
    const ctx$ = props.ctx$;
    const model = ctx$.model;
    const stdrep = ctx$.stdrep;
    const target = props.target;
    const entity = props.entity;
    const PROJENVNAME = (0, apidef_1.nom)(model.const, 'NAME').replace(/[^A-Z_]/g, '_');
    const ENTENVNAME = (0, apidef_1.nom)(entity, 'NAME').replace(/[^A-Z_]/g, '_');
    const authActive = (0, sdkgen_1.isAuthActive)(model);
    const apikeyEnvEntry = authActive
        ? `\n    '${PROJENVNAME}_APIKEY': 'NONE',`
        : '';
    const apikeyLiveField = authActive
        ? `
        apikey: env.${PROJENVNAME}_APIKEY,`
        : '';
    // TODO: should be a utility function
    const ff = (0, utility_ts_1.projectPath)('src/cmp/ts/fragment/');
    (0, sdkgen_1.Folder)({ name: entity.name }, () => {
        (0, sdkgen_1.File)({ name: (0, apidef_1.nom)(entity, 'Name') + 'Entity.test.' + target.name }, () => {
            (0, sdkgen_1.Fragment)({
                from: ff + 'Entity.test.fragment.ts',
                replace: {
                    SdkName: (0, apidef_1.nom)(model.const, 'Name'),
                    EntityName: (0, apidef_1.nom)(entity, 'Name'),
                    entityname: entity.name,
                    PROJECTNAME: PROJENVNAME,
                    ...stdrep,
                }
            }, () => {
                const basicflow = (0, apidef_1.getModelPath)(model, `main.${apidef_1.KIT}.flow.Basic${(0, apidef_1.nom)(entity, 'Name')}Flow`);
                const dobasic = basicflow && true === basicflow.active;
                if (!dobasic) {
                    return;
                }
                const indent = 2;
                const idlist = (0, struct_1.flatten)([
                    entity.name + '01',
                    entity.name + '02',
                    entity.name + '03',
                    (0, struct_1.flatten)((0, struct_1.items)(entity.relations.ancestors, (ap) => (0, struct_1.items)(ap[1], (a) => (0, struct_1.items)(['01', '02', '03'], (n) => a[1] + n[1]))), 2)
                ]);
                (0, sdkgen_1.Slot)({ name: 'basicSetup' }, () => {
                    (0, sdkgen_1.Content)(`
function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // ${(0, struct_1.jsonify)(basicflow.test, { offset: indent - 2 })}

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/${entity.name}/${(0, apidef_1.nom)(entity, 'Name')}TestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ${model.Name}SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['${(0, struct_1.join)(idlist, '\',\'')}'],
    {
      '\`$PACK\`': ['', {
        '\`$KEY\`': '\`$COPY\`',
        '\`$VAL\`': ['\`$FORMAT\`', 'upper', '\`$COPY\`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['${PROJENVNAME}_TEST_${ENTENVNAME}_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    '${PROJENVNAME}_TEST_${ENTENVNAME}_ENTID': idmap,
    '${PROJENVNAME}_TEST_LIVE': 'FALSE',
    '${PROJENVNAME}_TEST_EXPLAIN': 'FALSE',${apikeyEnvEntry}
  })

  idmap = env['${PROJENVNAME}_TEST_${ENTENVNAME}_ENTID']

  const live = 'TRUE' === env.${PROJENVNAME}_TEST_LIVE

  if (live) {
    client = new ${model.Name}SDK(merge([
      {${apikeyLiveField}
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.${PROJENVNAME}_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  `);
                });
                (0, sdkgen_1.Slot)({ name: 'basic' }, () => {
                    const flowHasCreate = Object.values(basicflow.step).some((s) => s.op === 'create');
                    // The basic test exercises a flow with one or more ops (load,
                    // list, create, update, remove, ...). The control file lets users
                    // skip per-op for an entity. Since the flow is sequential and
                    // dependent (e.g. update needs prior load), skipping ANY op the
                    // flow exercises skips the whole basic test.
                    const flowOps = Array.from(new Set(basicflow.step.map((s) => s.op).filter(Boolean)));
                    const flowOpsLiteral = '[' + flowOps.map((o) => `'${o}'`).join(', ') + ']';
                    (0, sdkgen_1.Content)(`
    const live = 'TRUE' === process.env.${PROJENVNAME}_TEST_LIVE
    for (const op of ${flowOpsLiteral}) {
      if (maybeSkipControl(t, 'entityOp', '${entity.name}.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set ${PROJENVNAME}_TEST_${ENTENVNAME}_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

`);
                    // When the flow has no create step, bootstrap the entity data variable
                    // from existing test data so that subsequent update/load/remove steps
                    // can reference it.
                    if (!flowHasCreate) {
                        const ref01 = entity.name + '_ref01';
                        (0, sdkgen_1.Content)(`    let ${ref01}_data = Object.values(setup.data.existing.${entity.name})[0] as any
`);
                    }
                    const genCtx = {
                        model, entity, flow: basicflow, PROJUPPER: PROJENVNAME,
                    };
                    (0, sdkgen_1.each)(basicflow.step, (step, index) => {
                        // Never emit a REMOVE (or its removed-item verify LIST) without a
                        // preceding CREATE: a coherent CRUD flow only removes what it made,
                        // so a create-less remove would mutate pre-existing (live) data.
                        if (!flowHasCreate) {
                            if ('remove' === step.op) {
                                return;
                            }
                            if ('list' === step.op &&
                                (step.valid || []).some((v) => 'ItemNotExists' === v.apply)) {
                                return;
                            }
                        }
                        const opgen = GENERATE_OP[step.op];
                        if (null != opgen) {
                            opgen(genCtx, step, index);
                            (0, sdkgen_1.Content)('\n');
                        }
                    });
                });
            });
        });
    });
});
exports.TestEntity = TestEntity;
const generateCreate = (ctx, step, index) => {
    const { entity, flow } = ctx;
    const ref = step.input.ref ?? entity.name + '_ref01';
    const entvar = step.input.entvar ?? ref + '_ent';
    const datavar = step.input.datavar ?? (ref + '_data' + (step.input.suffix ?? ''));
    const priorSteps = flow.step.slice(0, Number(index));
    const needsEnt = !priorSteps.some(s => ['create', 'list', 'load', 'update', 'remove'].includes(s.op));
    const hasDatvar = priorSteps.some(s => {
        if ('create' === s.op) {
            const priorRef = s.input.ref ?? entity.name + '_ref01';
            const priorDatvar = s.input.datavar ?? (priorRef + '_data' + (s.input.suffix ?? ''));
            return priorDatvar === datavar;
        }
        return false;
    });
    (0, sdkgen_1.Content)(`
    // CREATE
`);
    if (needsEnt) {
        (0, sdkgen_1.Content)(`    const ${entvar} = client.${(0, apidef_1.nom)(entity, 'Name')}()
`);
    }
    if (hasDatvar) {
        (0, sdkgen_1.Content)(`    ${datavar} = setup.data.new.${entity.name}['${ref}']
`);
    }
    else {
        (0, sdkgen_1.Content)(`    let ${datavar} = setup.data.new.${entity.name}['${ref}']
`);
    }
    (0, sdkgen_1.each)(step.match, (mi) => {
        (0, sdkgen_1.Content)(`    ${datavar}['${mi.key$}'] = setup.idmap['${mi.val$}']
`);
    });
    const hasEntIdC = null != entity.id;
    (0, sdkgen_1.Content)(`
    ${datavar} = await ${entvar}.create(${datavar})
`);
    if (hasEntIdC) {
        (0, sdkgen_1.Content)(`    assert(null != ${datavar}.id)
`);
    }
    else {
        (0, sdkgen_1.Content)(`    assert(null != ${datavar})
`);
    }
};
const generateList = (ctx, step, index) => {
    const { entity, flow } = ctx;
    const ref = step.input.ref ?? entity.name + '_ref01';
    const entvar = step.input.entvar ?? ref + '_ent';
    const matchvar = step.input.matchvar ?? (ref + '_match' + (step.input.suffix ?? ''));
    const listvar = step.input.listvar ?? (ref + '_list' + (step.input.suffix ?? ''));
    const priorSteps = flow.step.slice(0, Number(index));
    const needsEnt = !priorSteps.some(s => ['create', 'list', 'load', 'update', 'remove'].includes(s.op));
    (0, sdkgen_1.Content)(`
    // LIST
`);
    if (needsEnt) {
        (0, sdkgen_1.Content)(`    const ${entvar} = client.${(0, apidef_1.nom)(entity, 'Name')}()
`);
    }
    (0, sdkgen_1.Content)(`    const ${matchvar}: any = {}
`);
    (0, sdkgen_1.each)(step.match, (mi) => {
        (0, sdkgen_1.Content)(`    ${matchvar}['${mi.key$}'] = setup.idmap['${mi.val$}']
`);
    });
    (0, sdkgen_1.Content)(`
    const ${listvar} = await ${entvar}.list(${matchvar})
`);
    const allSteps = flow.step;
    for (let vI = 0; vI < step.valid.length; vI++) {
        const validator = step.valid[vI];
        const validRef = validator.def?.ref;
        const hasRefData = validRef && allSteps.some(s => 'create' === s.op &&
            ((s.input.ref ?? entity.name + '_ref01') === validRef));
        if ('ItemExists' === validator.apply && hasRefData) {
            (0, sdkgen_1.Content)(`
    assert(!isempty(select(${listvar}, { id: ${validRef}_data.id })))
`);
        }
        else if ('ItemNotExists' === validator.apply && hasRefData) {
            (0, sdkgen_1.Content)(`
    assert(isempty(select(${listvar}, { id: ${validRef}_data.id })))
`);
        }
    }
};
const generateUpdate = (ctx, step, index) => {
    const { entity, flow } = ctx;
    const ref = step.input.ref ?? entity.name + '_ref01';
    const entvar = step.input.entvar ?? ref + '_ent';
    const datavar = step.input.datavar ?? (ref + '_data' + (step.input.suffix ?? ''));
    const resdatavar = step.input.resdatavar ?? (ref + '_resdata' + (step.input.suffix ?? ''));
    const markdefvar = step.input.markdefvar ?? (ref + '_markdef' + (step.input.suffix ?? ''));
    const srcdatavar = step.input.srcdatavar ?? (ref + '_data' + (step.input.suffix ?? ''));
    const priorSteps = flow.step.slice(0, Number(index));
    const needsEnt = !priorSteps.some(s => ['create', 'list', 'load', 'update', 'remove'].includes(s.op));
    const hasEntIdU = null != entity.id;
    (0, sdkgen_1.Content)(`
    // UPDATE
`);
    if (needsEnt) {
        (0, sdkgen_1.Content)(`    const ${entvar} = client.${(0, apidef_1.nom)(entity, 'Name')}()
`);
    }
    (0, sdkgen_1.Content)(`    const ${datavar}: any = {}
`);
    if (hasEntIdU) {
        (0, sdkgen_1.Content)(`    ${datavar}.id = ${srcdatavar}.id
`);
    }
    (0, sdkgen_1.each)(step.data, (mi) => {
        if ('id' !== mi.key$) {
            (0, sdkgen_1.Content)(`    ${datavar} ['${mi.key$}'] = setup.idmap['${mi.key$}']
`);
        }
    });
    for (let sI = 0; sI < step.spec.length; sI++) {
        const spec = step.spec[sI];
        if ('TextFieldMark' === spec.apply && null != step.input.textfield) {
            const fieldname = step.input.textfield;
            const fieldvalue = spec.def.mark;
            (0, sdkgen_1.Content)(`
    const ${markdefvar} = { name: '${fieldname}', value: '${fieldvalue}_' + setup.now }
    ;(${datavar} as any)[${markdefvar}.name] = ${markdefvar}.value
`);
        }
    }
    (0, sdkgen_1.Content)(`
    const ${resdatavar} = await ${entvar}.update(${datavar})
`);
    if (hasEntIdU) {
        (0, sdkgen_1.Content)(`    assert(${resdatavar}.id === ${datavar}.id)
`);
    }
    else {
        (0, sdkgen_1.Content)(`    assert(null != ${resdatavar})
`);
    }
    for (let sI = 0; sI < step.spec.length; sI++) {
        const spec = step.spec[sI];
        if ('TextFieldMark' === spec.apply && null != step.input.textfield) {
            (0, sdkgen_1.Content)(`
    assert((${resdatavar} as any)[${markdefvar}.name] === ${markdefvar}.value)
`);
        }
    }
};
const generateLoad = (ctx, step, index) => {
    const { entity, flow } = ctx;
    const ref = step.input.ref ?? entity.name + '_ref01';
    const entvar = step.input.entvar ?? ref + '_ent';
    const matchvar = step.input.matchvar ?? (ref + '_match' + (step.input.suffix ?? ''));
    const datavar = step.input.datavar ?? (ref + '_data' + (step.input.suffix ?? ''));
    const srcdatavar = step.input.srcdatavar ?? (ref + '_data' + (step.input.suffix ?? ''));
    const priorSteps = flow.step.slice(0, Number(index));
    const hasEntVar = priorSteps.some(s => ['create', 'list', 'load', 'update', 'remove'].includes(s.op));
    // Check if srcdatavar was declared by a prior create step or by the
    // preamble bootstrap (which runs when the flow has no create step)
    const flowHasCreate = flow.step.some(s => s.op === 'create');
    const preambleRef = entity.name + '_ref01';
    const hasSrcData = (!flowHasCreate && srcdatavar === preambleRef + '_data') ||
        priorSteps.some(s => {
            if ('create' === s.op) {
                const priorRef = s.input.ref ?? entity.name + '_ref01';
                const priorDatvar = s.input.datavar ?? (priorRef + '_data' + (s.input.suffix ?? ''));
                return priorDatvar === srcdatavar;
            }
            return false;
        });
    const hasEntId = null != entity.id;
    // When the entity has no id model field but the load operation requires
    // path parameters (e.g. cotizacion needs {casa}/{fecha}), calling
    // load({}) leaves the URL with literal {param} placeholders and the live
    // API returns 404 HTML, which the SDK then fails to parse as JSON. There
    // is no synthetic identifier to substitute, so skip emitting the load
    // step's call in that case — but still declare the entity-var if no
    // prior step has, so that later flow steps (e.g. remove) referencing
    // ${entvar} compile.
    const loadOp = entity.op?.load;
    const loadPoint = loadOp?.points?.[0];
    const loadPathParams = loadPoint?.args?.params || [];
    const loadHasRequiredParams = loadPathParams.some((p) => p.reqd !== false);
    if (!hasEntId && loadHasRequiredParams) {
        if (!hasEntVar) {
            (0, sdkgen_1.Content)(`
    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const ${entvar} = client.${(0, apidef_1.nom)(entity, 'Name')}()
`);
        }
        return;
    }
    (0, sdkgen_1.Content)(`
    // LOAD
`);
    if (!hasEntVar) {
        (0, sdkgen_1.Content)(`    const ${entvar} = client.${(0, apidef_1.nom)(entity, 'Name')}()
`);
    }
    if (!hasSrcData && hasEntId) {
        (0, sdkgen_1.Content)(`    const ${srcdatavar} = Object.values(setup.data.existing.${entity.name})[0] as any
`);
    }
    if (hasEntId) {
        (0, sdkgen_1.Content)(`    const ${matchvar}: any = {}
    ${matchvar}.id = ${srcdatavar}.id
    const ${datavar} = await ${entvar}.load(${matchvar})
    assert(${datavar}.id === ${srcdatavar}.id)
`);
    }
    else {
        (0, sdkgen_1.Content)(`    const ${matchvar}: any = {}
    const ${datavar} = await ${entvar}.load(${matchvar})
    assert(null != ${datavar})
`);
    }
};
const generateRemove = (ctx, step, index) => {
    const { entity, flow } = ctx;
    const ref = step.input.ref ?? entity.name + '_ref01';
    const entvar = step.input.entvar ?? ref + '_ent';
    const matchvar = step.input.matchvar ?? (ref + '_match' + (step.input.suffix ?? ''));
    const srcdatavar = step.input.srcdatavar ?? (ref + '_data');
    const priorSteps = flow.step.slice(0, Number(index));
    const needsEnt = !priorSteps.some(s => ['create', 'list', 'load', 'update', 'remove'].includes(s.op));
    (0, sdkgen_1.Content)(`
    // REMOVE
`);
    if (needsEnt) {
        (0, sdkgen_1.Content)(`    const ${entvar} = client.${(0, apidef_1.nom)(entity, 'Name')}()
`);
    }
    // Always match the prior-created entity by id. The mock test feature
    // removes the first match in entmap, so without a specific id the
    // result depends on hash-sort order and flakes (see cheapshark).
    (0, sdkgen_1.Content)(`    const ${matchvar}: any = { id: ${srcdatavar}.id }
    await ${entvar}.remove(${matchvar})
  `);
};
const GENERATE_OP = {
    create: generateCreate,
    list: generateList,
    update: generateUpdate,
    load: generateLoad,
    remove: generateRemove,
};
//# sourceMappingURL=TestEntity_ts.js.map