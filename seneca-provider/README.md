![Seneca Learnworlds-Provider](http://senecajs.org/files/assets/seneca-logo.png)

> _Seneca Learnworlds-Provider_ is a plugin for [Seneca](http://senecajs.org)

Provides access to the Learnworlds API using the Seneca _provider_
convention. Learnworlds entities are represented as Seneca entities so that
they can be accessed using the Seneca entity API and messages.

Requests are handled by the [Learnworlds SDK](https://github.com/voxgig-sdk/learnworlds-sdk),
which is generated from the API's OpenAPI specification. This plugin is
generated from the same specification by
[@voxgig/sdkgen](https://github.com/voxgig/sdkgen) — do not edit it by hand,
change the model and regenerate.

See [seneca-entity](https://github.com/senecajs/seneca-entity) and the [Seneca Data
Entities
Tutorial](https://senecajs.org/docs/tutorials/understanding-data-entities.html)
for more details on the Seneca entity API.

[![build](https://github.com/senecajs/seneca-learnworlds-provider/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/seneca-learnworlds-provider/actions/workflows/build.yml)

| This open source module is sponsored and supported by [Voxgig](https://voxgig.com). |
| --- |


<!--START:SECTION:intro-->
<!--END:SECTION:intro-->


## Documentation

Full documentation lives in [`doc/`](doc/README.md) and follows the
[Diátaxis](https://diataxis.fr) framework:

| Document | Purpose |
| -------- | ------- |
| [Tutorial](doc/tutorial.md) | Start here. Build a working script from an empty folder. |
| [How-to guides](doc/how-to.md) | Recipes for specific tasks. |
| [Reference](doc/reference.md) | Every pattern, entity, option and export. |
| [Explanation](doc/explanation.md) | Why the plugin is designed this way. |


## Quick Example

```js
const Seneca = require('seneca')

const seneca = Seneca()
  .use('promisify')
  .use('entity')
  .use('env', { var: { $LEARNWORLDS_APIKEY: '' } })
  .use('provider', {
    provider: {
      learnworlds: {
        keys: { apikey: { value: '$LEARNWORLDS_APIKEY' } },
      },
    },
  })
  .use('@seneca/learnworlds-provider')

await seneca.ready()

const certificates = await seneca
  .entity('provider/learnworlds/certificate').list$()
```


## Install

```sh
npm install @seneca/learnworlds-provider
```

This plugin expects the Seneca host framework to be present:

```sh
npm install seneca seneca-entity seneca-promisify @seneca/provider @seneca/env
```


## Options

| Option | Type | Description |
| --- | --- | --- |
| `sdk` | object | Passed straight to the `LearnworldsSDK` constructor. Most usefully `base`, to point at a server. |
| `test` | boolean | Run the SDK in offline test mode (in-memory mock transport). |
| `testopts` | object | Seed and options for the mock, used only when `test` is true. |


## Entities

Each API entity is exposed as a Seneca entity under
`provider/learnworlds/<entity>`.

| Seneca entity | Commands | Fields |
| --- | --- | --- |
| `provider/learnworlds/affiliate` | `list$`, `save$` | — |
| `provider/learnworlds/assessment` | `list$` | `form_id` |
| `provider/learnworlds/bundle` | `list$`, `load$` | — |
| `provider/learnworlds/calendar` | `list$` | — |
| `provider/learnworlds/certificate` | `list$`, `save$`, `remove$` | — |
| `provider/learnworlds/community` | `list$`, `save$`, `remove$` | `space_id` |
| `provider/learnworlds/community_post` | `load$` | — |
| `provider/learnworlds/community_space` | `load$`, `save$` | — |
| `provider/learnworlds/coupon` | `save$` | `promotion_id` |
| `provider/learnworlds/coupon_usage` | `list$` | `promotion_id` |
| `provider/learnworlds/course` | `list$`, `load$`, `save$` | `titleId` |
| `provider/learnworlds/course_analytics` | `load$` | — |
| `provider/learnworlds/course_content` | `list$`, `save$` | — |
| `provider/learnworlds/event_log` | `list$` | — |
| `provider/learnworlds/installment` | `list$` | — |
| `provider/learnworlds/lead` | `list$` | — |
| `provider/learnworlds/multiple_seat` | `list$`, `save$`, `remove$` | `seat_id` |
| `provider/learnworlds/payment` | `list$`, `load$` | — |
| `provider/learnworlds/promotion` | `list$`, `load$`, `save$` | — |
| `provider/learnworlds/reporting` | `list$` | `user_id` |
| `provider/learnworlds/seat` | `load$`, `save$` | — |
| `provider/learnworlds/subscription_plan` | `list$`, `load$` | — |
| `provider/learnworlds/unit_analytics` | `load$` | `course_id` |
| `provider/learnworlds/update_user_progress` | `save$` | `send_course_complete_email`, `units`, `course_id`, `user_id` |
| `provider/learnworlds/user` | `list$`, `load$`, `save$`, `remove$` | `action`, `price`, `productId`, `productType`, `user_group_id` |
| `provider/learnworlds/user_group` | `list$`, `load$`, `save$` | `role_id` |
| `provider/learnworlds/user_progress` | `list$` | `course_id`, `user_id` |
| `provider/learnworlds/user_role` | `list$` | — |
| `provider/learnworlds/user_subscription` | `list$` | — |

### Nested entities

Some entities live under a parent in the API path, so every command needs the
parent's id in the query. Leaving it out throws with a message naming the
missing key, rather than failing as an opaque 404 from a half-built URL.

- `assessment` requires `form_id`
- `community` requires `space_id`
- `coupon` requires `promotion_id`
- `coupon_usage` requires `promotion_id`
- `multiple_seat` requires `seat_id`
- `reporting` requires `user_id`
- `unit_analytics` requires `course_id`
- `update_user_progress` requires `course_id`, `user_id`
- `user` requires `user_group_id`
- `user_progress` requires `course_id`, `user_id`

### Actions

Some API endpoints are not one of the five CRUD operations — merging a pull
request, uploading an image. The API definition folds each one into an
ordinary operation as an alternative route, and this plugin selects one with
the `action$` directive, alongside Seneca's own `sort$`, `limit$` and
`fields$`.

| Entity | Action | Route | Command |
| --- | --- | --- | --- |
| `affiliate` | `customer` | `/v2/affiliates/{id}/customers` | `list$` |
| `affiliate` | `lead` | `/v2/affiliates/{id}/leads` | `list$` |
| `affiliate` | `payment` | `/v2/affiliates/{id}/payments` | `list$` |
| `affiliate` | `payout_completed` | `/v2/affiliates/{id}/payouts/completed` | `list$` |
| `affiliate` | `payout_due` | `/v2/affiliates/{id}/payouts/due` | `list$` |
| `affiliate` | `payout_upcoming` | `/v2/affiliates/{id}/payouts/upcoming` | `list$` |
| `assessment` | `response` | `/v2/assessments/{id}/responses` | `list$` |
| `community` | `collection` | `/v2/community/collections` | `list$` |
| `community` | `post` | `/v2/community/posts` | `list$` |
| `community` | `space` | `/v2/community/spaces` | `list$` |
| `course` | `grade` | `/v2/courses/{id}/grades` | `list$` |
| `course` | `user` | `/v2/courses/{id}/users` | `list$` |
| `course_content` | `sections` | `/v2/courses/{id}/sections` | `save$` |
| `installment` | `active` | `/v2/installments/active` | `list$` |
| `payment` | `invoice_link` | `/v2/payments/{id}/invoice-link` | `load$` |
| `promotion` | `coupon` | `/v2/promotions/{pid}/coupons` | `list$` |
| `user` | `by_product` | `/v2/users/by-product` | `list$` |
| `user` | `by_segment` | `/v2/users/by-segment` | `list$` |
| `user` | `course` | `/v2/users/{id}/courses` | `list$` |
| `user` | `product` | `/v2/users/{id}/products` | `list$` |
| `user` | `segment` | `/v2/users/segments` | `list$` |
| `user` | `seat` | `/v2/users/{id}/seats` | `load$` |
| `user` | `enrollment` | `/v2/users/{id}/enrollment` | `remove$` |
| `user` | `enrollment` | `/v2/users/{id}/enrollment` | `save$` |
| `user` | `suspend` | `/v2/users/{id}/suspend` | `save$` |
| `user` | `tag` | `/v2/users/{id}/tags` | `save$` |
| `user` | `unsuspend` | `/v2/users/{id}/unsuspend` | `save$` |
| `user_group` | `user-role` | `/v2/users/{id}/user-role` | `save$` |

An action returns that action's OWN response, which is not necessarily a
record of the entity it hangs off — check the API definition for its shape.
Naming an action the entity does not have throws, and names the ones it
does have. It never falls back to the plain command.

On `save$`, pass it as a directive. The rest of the entity is the
action's payload:

```js
const course_content = seneca.entity('provider/learnworlds/course_content')

await course_content
  .make$({ id: 'some-id', /* ...the action's own arguments */ })
  .directive$({ action$: 'sections' })
  .save$()
```

> **`make$({ action$: 'sections' })` does not work**, and cannot.
> `seneca-entity`'s `make$` copies only keys without a `$`, plus the four
> directives it knows by name (`id$`, `merge$`, `custom$`, `directive$`),
> so any other trailing-`$` key is dropped before this plugin sees it —
> there is nothing left for it to refuse. Use `directive$` as above, or
> assign the property to an entity you already made:
>
> ```js
> const p = course_content.make$({ id: 'some-id' })
> p.action$ = 'sections'
> await p.save$()
> ```

On `list$`, pass it in the query:

```js
await seneca.entity('provider/learnworlds/affiliate')
  .list$({ action$: 'customer' })
```



## Action Patterns

Every message pattern this plugin registers. The entity actions are the ones
`seneca-entity` dispatches to when you call `list$` / `load$` / `save$` /
`remove$` on a canon below — you rarely post them by hand, but they are what
appears in a Seneca log, and a plugin that documents one of nine is a plugin
whose logs cannot be read.

| Pattern | Description |
| --- | --- |
| `sys:provider,provider:learnworlds,get:info` | Plugin and SDK version information. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:affiliate` | List records. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:affiliate` | Create or update a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:assessment` | List records. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:bundle` | List records. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:bundle` | Load one record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:calendar` | List records. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:certificate` | List records. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:certificate` | Create or update a record. |
| `sys:entity,cmd:remove,zone:provider,base:learnworlds,name:certificate` | Remove a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:community` | List records. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:community` | Create or update a record. |
| `sys:entity,cmd:remove,zone:provider,base:learnworlds,name:community` | Remove a record. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:community_post` | Load one record. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:community_space` | Load one record. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:community_space` | Create or update a record. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:coupon` | Create or update a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:coupon_usage` | List records. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:course` | List records. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:course` | Load one record. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:course` | Create or update a record. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:course_analytics` | Load one record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:course_content` | List records. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:course_content` | Create or update a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:event_log` | List records. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:installment` | List records. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:lead` | List records. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:multiple_seat` | List records. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:multiple_seat` | Create or update a record. |
| `sys:entity,cmd:remove,zone:provider,base:learnworlds,name:multiple_seat` | Remove a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:payment` | List records. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:payment` | Load one record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:promotion` | List records. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:promotion` | Load one record. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:promotion` | Create or update a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:reporting` | List records. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:seat` | Load one record. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:seat` | Create or update a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:subscription_plan` | List records. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:subscription_plan` | Load one record. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:unit_analytics` | Load one record. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:update_user_progress` | Create or update a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:user` | List records. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:user` | Load one record. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:user` | Create or update a record. |
| `sys:entity,cmd:remove,zone:provider,base:learnworlds,name:user` | Remove a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:user_group` | List records. |
| `sys:entity,cmd:load,zone:provider,base:learnworlds,name:user_group` | Load one record. |
| `sys:entity,cmd:save,zone:provider,base:learnworlds,name:user_group` | Create or update a record. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:user_progress` | List records. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:user_role` | List records. |
| `sys:entity,cmd:list,zone:provider,base:learnworlds,name:user_subscription` | List records. |



## More Examples

### Offline testing

The SDK ships an in-memory mock transport, so this plugin can be exercised
with no server:

```js
.use('@seneca/learnworlds-provider', { test: true, testopts: { entity: { ... } } })
```

`testopts` is passed straight to the SDK's test constructor; `entity`
seeds the mock store. See `test/seed.js` for the shape.


## Motivation

Applications rarely talk to one external service, and each service usually
arrives with its own client library, authentication style and error
conventions. That variety leaks into application code and makes it harder to
test.

The Seneca provider convention removes the variety: every external service
becomes a Seneca entity reached with `list$`, `load$`, `save$` and
`remove$`, so application code has one shape regardless of what it talks to.

The SDK underneath arrives at a similar conclusion from the other side — it
deliberately exposes entities rather than HTTP routes. This plugin is the
short bridge between the two.


## Support

- Issues and bugs: [GitHub issues](https://github.com/senecajs/seneca-learnworlds-provider/issues)
- Seneca community: [senecajs.org](http://senecajs.org)


## API

### Plugin export: `LearnworldsProvider/sdk`

Returns the configured `LearnworldsSDK` instance, for the operations
the entity API does not cover:

```js
const sdk = seneca.export('LearnworldsProvider/sdk')()
```


## Contributing

This plugin is GENERATED. Changes belong in the SDK project's model and
components, not here — anything edited in this repository is overwritten by
the next generation run.

The [Senecajs org](http://senecajs.org) encourages open participation. If you
feel you can help in any way, be it with bug reporting, documentation,
examples, extra testing, or new features, please get in touch.


## Background

Generated by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen) from the
Learnworlds API definition, against the
[@voxgig-sdk/learnworlds](https://www.npmjs.com/package/@voxgig-sdk/learnworlds) SDK.
