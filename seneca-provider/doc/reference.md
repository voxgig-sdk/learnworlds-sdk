# Reference

Complete description of the interface exposed by
`@seneca/learnworlds-provider` version 0.0.1.

This document describes the machinery and assumes you know what you are
looking for. To learn the plugin, start with the [tutorial](tutorial.md);
for recipes, see the [how-to guides](how-to.md); for the reasoning behind
the design, see the [explanation](explanation.md). The package overview is
the [README](../README.md), and the document index is [here](README.md).

- [Requirements](#requirements)
- [Registration](#registration)
- [Options](#options)
- [Entities](#entities)
- [Actions](#actions)
- [Action patterns](#action-patterns)
- [Plugin exports](#plugin-exports)
- [Errors](#errors)
- [Authentication keys](#authentication-keys)
- [Environment variables](#environment-variables)
- [Package scripts](#package-scripts)

## Requirements

| Item | Value |
| ---- | ----- |
| Node.js | `>=24` |
| Module format | CommonJS |
| SDK | [`@voxgig-sdk/learnworlds`](https://www.npmjs.com/package/@voxgig-sdk/learnworlds) `^0.0.1` |

The SDK is an ordinary published dependency, installed by `npm install`
like any other.

### Peer dependencies

All must be present in the host application. The accepted version ranges are
declared in this package's `package.json`.

| Package | Purpose |
| ------- | ------- |
| `seneca` | The host framework. The plugin runs inside the host's instance, never its own. |
| `seneca-entity` | The entity API the canons below are served through. |
| `seneca-promisify` | The promise-returning message API. |
| `@seneca/provider` | The provider convention, including `provider/entityBuilder`. |
| `@seneca/env` | Resolves `$`-prefixed key values from the environment. |

## Registration

The plugin name is `LearnworldsProvider`. It must be registered after
`entity`, `promisify` and `provider`:

```js
Seneca({ legacy: false })
  .use('promisify')
  .use('entity')
  .use('provider', { ... })
  .use('@seneca/learnworlds-provider', { sdk: { base: BASE } })
```

The Learnworlds definition declares no server, so there is no default
base URL: `BASE` is the URL of the API you are talking to, and it must be
supplied through the `sdk` option.

The SDK client is constructed during plugin startup and is not available
until `seneca.ready()` resolves.

## Options

| Option | Type | Default | Effect |
| ------ | ---- | ------- | ------ |
| `sdk` | object | `{}` | Passed straight to the `LearnworldsSDK` constructor. Most usefully `base`. |
| `test` | boolean | `false` | Run the SDK against its in-memory mock transport instead of HTTP. |
| `testopts` | object | `{}` | Test-feature options, used only when `test` is true. `{entity: {...}}` seeds the mock. |

### `sdk`

Any option the `LearnworldsSDK` constructor accepts:

| Key | Effect |
| --- | ------ |
| `base` | Base URL for API requests. There is no default: this API declares no server, so it must be set. |
| `prefix` / `suffix` | URL fragments placed around the path. |
| `headers` | Headers sent on every request. These win over the `authorization` header the provider adds from a configured key. |
| `system` | System overrides, e.g. a custom `fetch`. |

### `test` and `testopts`

```js
.use('@seneca/learnworlds-provider', {
  test: true,
  testopts: {
    entity: {
      affiliate: { affiliate0: {"id":"affiliate0"} },
      assessment: { assessment0: {"form_id":"form0","id":"assessment0"} },
      bundle: { bundle0: {"id":"bundle0"} },
      calendar: { calendar0: {"id":"calendar0"} },
      certificate: { certificate0: {"id":"certificate0"} },
      community: { community0: {"space_id":"space0","id":"community0"} },
      community_post: { community_post0: {"id":"community_post0"} },
      community_space: { community_space0: {"id":"community_space0"} },
      coupon: { coupon0: {"promotion_id":"promotion0","id":"coupon0"} },
      coupon_usage: { coupon_usage0: {"promotion_id":"promotion0","id":"coupon_usage0"} },
      course: { course0: {"titleId":"titleId0","id":"course0"} },
      course_analytics: { course_analytics0: {"id":"course_analytics0"} },
      course_content: { course_content0: {"id":"course_content0"} },
      event_log: { event_log0: {"id":"event_log0"} },
      installment: { installment0: {"id":"installment0"} },
      lead: { lead0: {"id":"lead0"} },
      multiple_seat: { multiple_seat0: {"seat_id":"seat0","uid":"multiple_seat0"} },
      payment: { payment0: {"id":"payment0"} },
      promotion: { promotion0: {"id":"promotion0"} },
      reporting: { reporting0: {"user_id":"user0","id":"reporting0"} },
      seat: { seat0: {"id":"seat0"} },
      subscription_plan: { subscription_plan0: {"id":"subscription_plan0"} },
      unit_analytics: { unit_analytics0: {"course_id":"course0","id":"unit_analytics0"} },
      update_user_progress: { update_user_progress0: {"send_course_complete_email":false,"units":[],"course_id":"course0","user_id":"user0","id":"update_user_progress0"} },
      user: { user0: {"action":"action0","price":100,"productId":"productId0","productType":"productType0","user_group_id":"user_group0","id":"user0"} },
      user_group: { user_group0: {"role_id":"role_id0","id":"user_group0"} },
      user_progress: { user_progress0: {"course_id":"course0","user_id":"user0","id":"user_progress0"} },
      user_role: { user_role0: {"id":"user_role0"} },
      user_subscription: { user_subscription0: {"id":"user_subscription0"} },
    },
  },
})
```

Mock records are keyed by id under their entity name. In this mode no
network calls are made, and an unseeded id produces the same not-found
behaviour as a live server. This package's own `test/seed.js` is generated
in exactly this shape.

A nested record's parent key must name a record the parent entity also
seeds: the mock resolves the path literally, so an unmatched parent id
yields nothing rather than an error.

## Entities

The plugin registers 29 entity canons.
A canon carries only the commands its API operations support — an entity the
API offers no delete for has no `remove$` — so the tables below are the
whole of what each one answers.

| Seneca canon | SDK accessor | Route | Id field | Parent keys | Commands |
| ------------ | ------------ | ----- | -------- | ----------- | -------- |
| `provider/learnworlds/affiliate` | `sdk.Affiliate()` | `/v2/affiliates` | `null` | — | `list$`, `save$` |
| `provider/learnworlds/assessment` | `sdk.Assessment()` | `/v2/forms/{id}/responses` | `null` | `form_id` | `list$` |
| `provider/learnworlds/bundle` | `sdk.Bundle()` | `/v2/bundles` | `id` | — | `list$`, `load$` |
| `provider/learnworlds/calendar` | `sdk.Calendar()` | `/v2/school/events` | `null` | — | `list$` |
| `provider/learnworlds/certificate` | `sdk.Certificate()` | `/v2/certificates` | `null` | — | `list$`, `save$`, `remove$` |
| `provider/learnworlds/community` | `sdk.Community()` | `/v2/community/spaces/{id}/users` | `null` | `space_id` | `list$`, `save$`, `remove$` |
| `provider/learnworlds/community_post` | `sdk.CommunityPost()` | `/v2/community/posts/{id}` | `id` | — | `load$` |
| `provider/learnworlds/community_space` | `sdk.CommunitySpace()` | `/v2/community/spaces/{id}` | `id` | — | `load$`, `save$` |
| `provider/learnworlds/coupon` | `sdk.Coupon()` | `/v2/promotions/{pid}/coupons` | `null` | `promotion_id` | `save$` |
| `provider/learnworlds/coupon_usage` | `sdk.CouponUsage()` | `/v2/promotions/{pid}/coupons/{cid}/usage` | `null` | `promotion_id` | `list$` |
| `provider/learnworlds/course` | `sdk.Course()` | `/v2/courses` | `id` | — | `list$`, `load$`, `save$` |
| `provider/learnworlds/course_analytics` | `sdk.CourseAnalytics()` | `/v2/courses/{id}/analytics` | `id` | — | `load$` |
| `provider/learnworlds/course_content` | `sdk.CourseContent()` | `/v2/courses/{id}/contents` | `null` | — | `list$`, `save$` |
| `provider/learnworlds/event_log` | `sdk.EventLog()` | `/v2/event-logs` | `null` | — | `list$` |
| `provider/learnworlds/installment` | `sdk.Installment()` | `/v2/installments/active` | `null` | — | `list$` |
| `provider/learnworlds/lead` | `sdk.Lead()` | `/v2/leads` | `null` | — | `list$` |
| `provider/learnworlds/multiple_seat` | `sdk.MultipleSeat()` | `/v2/seats` | `null` | `seat_id` | `list$`, `save$`, `remove$` |
| `provider/learnworlds/payment` | `sdk.Payment()` | `/v2/payments` | `id` | — | `list$`, `load$` |
| `provider/learnworlds/promotion` | `sdk.Promotion()` | `/v2/promotions` | `id` | — | `list$`, `load$`, `save$` |
| `provider/learnworlds/reporting` | `sdk.Reporting()` | `/v2/users/{id}/progress` | `null` | `user_id` | `list$` |
| `provider/learnworlds/seat` | `sdk.Seat()` | `/v2/seats/{id}` | `id` | — | `load$`, `save$` |
| `provider/learnworlds/subscription_plan` | `sdk.SubscriptionPlan()` | `/v2/subscription-plans` | `id` | — | `list$`, `load$` |
| `provider/learnworlds/unit_analytics` | `sdk.UnitAnalytics()` | `/v2/courses/{id}/units/{uid}/analytics` | `id` | `course_id` | `load$` |
| `provider/learnworlds/update_user_progress` | `sdk.UpdateUserProgress()` | `/v2/users/{id}/courses/{cid}/complete` | `null` | `course_id`, `user_id` | `save$` |
| `provider/learnworlds/user` | `sdk.User()` | `/v2/users` | `id` | `user_group_id` | `list$`, `load$`, `save$`, `remove$` |
| `provider/learnworlds/user_group` | `sdk.UserGroup()` | `/v2/users/{id}/user-groups` | `id` | — | `list$`, `load$`, `save$` |
| `provider/learnworlds/user_progress` | `sdk.UserProgress()` | `/v2/users/{id}/courses/{cid}/progress` | `null` | `course_id`, `user_id` | `list$` |
| `provider/learnworlds/user_role` | `sdk.UserRole()` | `/v2/user-roles` | `null` | — | `list$` |
| `provider/learnworlds/user_subscription` | `sdk.UserSubscription()` | `/v2/user-subscriptions` | `null` | — | `list$` |

### `provider/learnworlds/affiliate`

Backed by `sdk.Affiliate()`, whose results are `AffiliateEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `affiliate` entities. |
| `save$()` | entity data | Created `affiliate`; the API declares no update operation. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const affiliates = await seneca
  .entity('provider/learnworlds/affiliate')
  .list$()
```

### `provider/learnworlds/assessment`

Backed by `sdk.Assessment()`, whose results are `AssessmentEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`assessment` is nested under `/v2/forms/{id}/responses` in the API, so **every**
`assessment` command requires `form_id`. Omitting one throws —
`@seneca/learnworlds-provider: assessment <cmd>: form_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | `form_id` **required**, plus optional match fields | Array of `assessment` entities. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `form_id` | string | Parent key: the id of a `form`. Required by every command. |

```js
const assessments = await seneca
  .entity('provider/learnworlds/assessment')
  .list$({ form_id: '...' })
```

### `provider/learnworlds/bundle`

Backed by `sdk.Bundle()`, whose results are `BundleEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `bundle` entities. |
| `load$(q)` | `id` **required** | One `bundle`, or `null` if not found. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const bundles = await seneca
  .entity('provider/learnworlds/bundle')
  .list$()
const bundle = await seneca
  .entity('provider/learnworlds/bundle')
  .load$('...')
```

### `provider/learnworlds/calendar`

Backed by `sdk.Calendar()`, whose results are `CalendarEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `calendar` entities. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const calendars = await seneca
  .entity('provider/learnworlds/calendar')
  .list$()
```

### `provider/learnworlds/certificate`

Backed by `sdk.Certificate()`, whose results are `CertificateEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `certificate` entities. |
| `save$()` | entity data | Updated `certificate`; the API declares no create operation. |
| `remove$(q)` | `` **required** | `null`. |

This entity is keyed by `null` rather than `id`, so the short
form `remove$('...')` does not address it: Seneca reads a bare string as
`{id: '...'}`, which is not a key this entity uses. Pass
`{ null: '...' }` instead.

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const certificates = await seneca
  .entity('provider/learnworlds/certificate')
  .list$()
```

### `provider/learnworlds/community`

Backed by `sdk.Community()`, whose results are `CommunityEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`community` is nested under `/v2/community/spaces/{id}/users` in the API, so **every**
`community` command requires `space_id`. Omitting one throws —
`@seneca/learnworlds-provider: community <cmd>: space_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | `space_id` **required**, plus optional match fields | Array of `community` entities. |
| `save$()` | entity data, including `space_id` | Created `community`; the API declares no update operation. |
| `remove$(q)` | `space_id` and `null`, both **required** | `null`. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `space_id` | string | Parent key: the id of a `space`. Required by every command. |

```js
const communitys = await seneca
  .entity('provider/learnworlds/community')
  .list$({ space_id: '...' })
```

### `provider/learnworlds/community_post`

Backed by `sdk.CommunityPost()`, whose results are `CommunityPostEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `load$(q)` | `id` **required** | One `community_post`, or `null` if not found. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const community_post = await seneca
  .entity('provider/learnworlds/community_post')
  .load$('...')
```

### `provider/learnworlds/community_space`

Backed by `sdk.CommunitySpace()`, whose results are `CommunitySpaceEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `load$(q)` | `id` **required** | One `community_space`, or `null` if not found. |
| `save$()` | entity data | Created or updated `community_space`. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const community_space = await seneca
  .entity('provider/learnworlds/community_space')
  .load$('...')
```

### `provider/learnworlds/coupon`

Backed by `sdk.Coupon()`, whose results are `CouponEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`coupon` is nested under `/v2/promotions/{pid}/coupons` in the API, so **every**
`coupon` command requires `promotion_id`. Omitting one throws —
`@seneca/learnworlds-provider: coupon <cmd>: promotion_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `save$()` | entity data, including `promotion_id` | Created `coupon`; the API declares no update operation. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `promotion_id` | string | Parent key: the id of a `promotion`. Required by every command. |

### `provider/learnworlds/coupon_usage`

Backed by `sdk.CouponUsage()`, whose results are `CouponUsageEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`coupon_usage` is nested under `/v2/promotions/{pid}/coupons/{cid}/usage` in the API, so **every**
`coupon_usage` command requires `promotion_id`. Omitting one throws —
`@seneca/learnworlds-provider: coupon_usage <cmd>: promotion_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | `promotion_id` **required**, plus optional match fields | Array of `coupon_usage` entities. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `promotion_id` | string | Parent key: the id of a `promotion`. Required by every command. |

```js
const coupon_usages = await seneca
  .entity('provider/learnworlds/coupon_usage')
  .list$({ promotion_id: '...' })
```

### `provider/learnworlds/course`

Backed by `sdk.Course()`, whose results are `CourseEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `course` entities. |
| `load$(q)` | `id` **required** | One `course`, or `null` if not found. |
| `save$()` | entity data | Created or updated `course`. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `titleId` | string |  |

```js
const courses = await seneca
  .entity('provider/learnworlds/course')
  .list$()
const course = await seneca
  .entity('provider/learnworlds/course')
  .load$('...')
```

### `provider/learnworlds/course_analytics`

Backed by `sdk.CourseAnalytics()`, whose results are `CourseAnalyticsEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `load$(q)` | `id` **required** | One `course_analytics`, or `null` if not found. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const course_analytics = await seneca
  .entity('provider/learnworlds/course_analytics')
  .load$('...')
```

### `provider/learnworlds/course_content`

Backed by `sdk.CourseContent()`, whose results are `CourseContentEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `course_content` entities. |
| `save$()` | entity data | Created `course_content`; the API declares no update operation. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const course_contents = await seneca
  .entity('provider/learnworlds/course_content')
  .list$()
```

### `provider/learnworlds/event_log`

Backed by `sdk.EventLog()`, whose results are `EventLogEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `event_log` entities. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const event_logs = await seneca
  .entity('provider/learnworlds/event_log')
  .list$()
```

### `provider/learnworlds/installment`

Backed by `sdk.Installment()`, whose results are `InstallmentEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `installment` entities. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const installments = await seneca
  .entity('provider/learnworlds/installment')
  .list$()
```

### `provider/learnworlds/lead`

Backed by `sdk.Lead()`, whose results are `LeadEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `lead` entities. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const leads = await seneca
  .entity('provider/learnworlds/lead')
  .list$()
```

### `provider/learnworlds/multiple_seat`

Backed by `sdk.MultipleSeat()`, whose results are `MultipleSeatEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`multiple_seat` is nested under `/v2/seats` in the API, so **every**
`multiple_seat` command requires `seat_id`. Omitting one throws —
`@seneca/learnworlds-provider: multiple_seat <cmd>: seat_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | `seat_id` **required**, plus optional match fields | Array of `multiple_seat` entities. |
| `save$()` | entity data, including `seat_id` | Created `multiple_seat`; the API declares no update operation. |
| `remove$(q)` | `seat_id` and `null`, both **required** | `null`. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `seat_id` | string | Parent key: the id of a `seat`. Required by every command. |

```js
const multiple_seats = await seneca
  .entity('provider/learnworlds/multiple_seat')
  .list$({ seat_id: '...' })
```

### `provider/learnworlds/payment`

Backed by `sdk.Payment()`, whose results are `PaymentEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `payment` entities. |
| `load$(q)` | `id` **required** | One `payment`, or `null` if not found. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const payments = await seneca
  .entity('provider/learnworlds/payment')
  .list$()
const payment = await seneca
  .entity('provider/learnworlds/payment')
  .load$('...')
```

### `provider/learnworlds/promotion`

Backed by `sdk.Promotion()`, whose results are `PromotionEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `promotion` entities. |
| `load$(q)` | `id` **required** | One `promotion`, or `null` if not found. |
| `save$()` | entity data | Created `promotion`; the API declares no update operation. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const promotions = await seneca
  .entity('provider/learnworlds/promotion')
  .list$()
const promotion = await seneca
  .entity('provider/learnworlds/promotion')
  .load$('...')
```

### `provider/learnworlds/reporting`

Backed by `sdk.Reporting()`, whose results are `ReportingEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`reporting` is nested under `/v2/users/{id}/progress` in the API, so **every**
`reporting` command requires `user_id`. Omitting one throws —
`@seneca/learnworlds-provider: reporting <cmd>: user_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | `user_id` **required**, plus optional match fields | Array of `reporting` entities. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `user_id` | string | Parent key: the id of a `user`. Required by every command. |

```js
const reportings = await seneca
  .entity('provider/learnworlds/reporting')
  .list$({ user_id: '...' })
```

### `provider/learnworlds/seat`

Backed by `sdk.Seat()`, whose results are `SeatEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `load$(q)` | `id` **required** | One `seat`, or `null` if not found. |
| `save$()` | entity data | Created or updated `seat`. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const seat = await seneca
  .entity('provider/learnworlds/seat')
  .load$('...')
```

### `provider/learnworlds/subscription_plan`

Backed by `sdk.SubscriptionPlan()`, whose results are `SubscriptionPlanEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `subscription_plan` entities. |
| `load$(q)` | `id` **required** | One `subscription_plan`, or `null` if not found. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const subscription_plans = await seneca
  .entity('provider/learnworlds/subscription_plan')
  .list$()
const subscription_plan = await seneca
  .entity('provider/learnworlds/subscription_plan')
  .load$('...')
```

### `provider/learnworlds/unit_analytics`

Backed by `sdk.UnitAnalytics()`, whose results are `UnitAnalyticsEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`unit_analytics` is nested under `/v2/courses/{id}/units/{uid}/analytics` in the API, so **every**
`unit_analytics` command requires `course_id`. Omitting one throws —
`@seneca/learnworlds-provider: unit_analytics <cmd>: course_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `load$(q)` | `course_id` and `id`, both **required** | One `unit_analytics`, or `null` if not found. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `course_id` | string | Parent key: the id of a `course`. Required by every command. |

```js
const unit_analytics = await seneca
  .entity('provider/learnworlds/unit_analytics')
  .load$({ course_id: '...', id: '...' })
```

### `provider/learnworlds/update_user_progress`

Backed by `sdk.UpdateUserProgress()`, whose results are `UpdateUserProgressEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`update_user_progress` is nested under `/v2/users/{id}/courses/{cid}/complete` in the API, so **every**
`update_user_progress` command requires `course_id` and `user_id`. Omitting one throws —
`@seneca/learnworlds-provider: update_user_progress <cmd>: course_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `save$()` | entity data, including `course_id` and `user_id` | Created `update_user_progress`; the API declares no update operation. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `send_course_complete_email` | boolean |  |
| `units` | array |  |
| `course_id` | string | Parent key: the id of a `course`. Required by every command. |
| `user_id` | string | Parent key: the id of a `user`. Required by every command. |

### `provider/learnworlds/user`

Backed by `sdk.User()`, whose results are `UserEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`user` is nested under `/v2/users` in the API, so **every**
`user` command requires `user_group_id`. Omitting one throws —
`@seneca/learnworlds-provider: user <cmd>: user_group_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | `user_group_id` **required**, plus optional match fields | Array of `user` entities. |
| `load$(q)` | `user_group_id` and `id`, both **required** | One `user`, or `null` if not found. |
| `save$()` | entity data, including `user_group_id` | Created or updated `user`. |
| `remove$(q)` | `user_group_id` and `id`, both **required** | `null`. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `action` | string |  |
| `price` | number |  |
| `productId` | string |  |
| `productType` | string |  |
| `user_group_id` | string | Parent key: the id of a `user_group`. Required by every command. |

```js
const users = await seneca
  .entity('provider/learnworlds/user')
  .list$({ user_group_id: '...' })
const user = await seneca
  .entity('provider/learnworlds/user')
  .load$({ user_group_id: '...', id: '...' })
```

### `provider/learnworlds/user_group`

Backed by `sdk.UserGroup()`, whose results are `UserGroupEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `user_group` entities. |
| `load$(q)` | `id` **required** | One `user_group`, or `null` if not found. |
| `save$()` | entity data | Created or updated `user_group`. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `role_id` | string |  |

```js
const user_groups = await seneca
  .entity('provider/learnworlds/user_group')
  .list$()
const user_group = await seneca
  .entity('provider/learnworlds/user_group')
  .load$('...')
```

### `provider/learnworlds/user_progress`

Backed by `sdk.UserProgress()`, whose results are `UserProgressEntity` instances; the
provider hands Seneca the plain record from `.data()`.

`user_progress` is nested under `/v2/users/{id}/courses/{cid}/progress` in the API, so **every**
`user_progress` command requires `course_id` and `user_id`. Omitting one throws —
`@seneca/learnworlds-provider: user_progress <cmd>: course_id is required` —
before any request is made, rather than issuing one that would 404.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | `course_id` and `user_id`, both **required**, plus optional match fields | Array of `user_progress` entities. |

Required fields, as declared by the API definition. Optional fields the API
also defines are passed through unchanged in both directions.

| Field | Type | Notes |
| ----- | ---- | ----- |
| `course_id` | string | Parent key: the id of a `course`. Required by every command. |
| `user_id` | string | Parent key: the id of a `user`. Required by every command. |

```js
const user_progresss = await seneca
  .entity('provider/learnworlds/user_progress')
  .list$({ course_id: '...', user_id: '...' })
```

### `provider/learnworlds/user_role`

Backed by `sdk.UserRole()`, whose results are `UserRoleEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `user_role` entities. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const user_roles = await seneca
  .entity('provider/learnworlds/user_role')
  .list$()
```

### `provider/learnworlds/user_subscription`

Backed by `sdk.UserSubscription()`, whose results are `UserSubscriptionEntity` instances; the
provider hands Seneca the plain record from `.data()`.

| Command | Query / data | Returns |
| ------- | ------------ | ------- |
| `list$(q)` | optional match fields | Array of `user_subscription` entities. |

The API definition declares no required fields for this entity; whatever it
returns is passed through unchanged.

```js
const user_subscriptions = await seneca
  .entity('provider/learnworlds/user_subscription')
  .list$()
```

### Create versus update

`save$` follows the Seneca convention: an entity **without** an id is
created, an entity **with** one is updated. The provider dispatches on the
id field, so the same call does both.

```js
// Create — no id.
const community_space = await seneca
  .entity('provider/learnworlds/community_space')
  .make$({  })
  .save$()

// Update — id present.
await community_space.save$()
```

Whether a client-supplied id survives a create is a property of the API, not
of this plugin: many assign the id themselves and ignore the one sent. Read
the id back off the returned entity rather than assuming the one you set.

These entities support only one half of that pair, so `save$` does not
dispatch for them:

| Canon | Behaviour of `save$` |
| ----- | -------------------- |
| `provider/learnworlds/affiliate` | Always creates; the API declares no update operation. |
| `provider/learnworlds/certificate` | Always updates; the API declares no create operation. |
| `provider/learnworlds/community` | Always creates; the API declares no update operation. |
| `provider/learnworlds/coupon` | Always creates; the API declares no update operation. |
| `provider/learnworlds/course_content` | Always creates; the API declares no update operation. |
| `provider/learnworlds/multiple_seat` | Always creates; the API declares no update operation. |
| `provider/learnworlds/promotion` | Always creates; the API declares no update operation. |
| `provider/learnworlds/update_user_progress` | Always creates; the API declares no update operation. |

### Command to SDK operation

| Seneca command | SDK call | Notes |
| -------------- | -------- | ----- |
| `list$(q)` | `.list(q)` | Query keys are passed through as match fields. |
| `load$(q)` | `.load({ ...keys })` | Only the keys the route needs are sent. |
| `save$()` on an entity with no id | `.create(data)` | Data is the entity's own fields, without Seneca metadata. |
| `save$()` on an entity with an id | `.update(data)` | |
| `remove$(q)` | `.remove({ ...keys })` | Resolves to `null` whatever the API returns. |

Every SDK operation resolves to an SDK entity instance, or a list of them,
rather than raw data. The provider calls `.data()` on each and hands the
plain record to `entize`, so what comes back is an ordinary Seneca entity
under this plugin's canon, carrying none of the SDK's own markers.

### Query fields

Seneca query directives — any key ending in `$`, such as `sort$` or
`limit$` — are stripped before the query reaches the SDK. They are
instructions to a store, not match fields for the API, and are not
otherwise supported.

`action$` is the one this plugin reads. It is stripped from the match
fields like the rest, but it is read FIRST, and it selects a custom API
action instead of the plain command. See
[Actions](#actions) below.

### Actions

An action is an API route folded into an ordinary operation as an
alternative point — a verb that is not create, read, update or delete.
Select one with the `action$` directive; the rest of the call is that
action's own payload.

| Entity | Action | Route | Operation | Command |
| --- | --- | --- | --- | --- |
| `affiliate` | `customer` | `/v2/affiliates/{id}/customers` | `list` | `list$` |
| `affiliate` | `lead` | `/v2/affiliates/{id}/leads` | `list` | `list$` |
| `affiliate` | `payment` | `/v2/affiliates/{id}/payments` | `list` | `list$` |
| `affiliate` | `payout_completed` | `/v2/affiliates/{id}/payouts/completed` | `list` | `list$` |
| `affiliate` | `payout_due` | `/v2/affiliates/{id}/payouts/due` | `list` | `list$` |
| `affiliate` | `payout_upcoming` | `/v2/affiliates/{id}/payouts/upcoming` | `list` | `list$` |
| `assessment` | `response` | `/v2/assessments/{id}/responses` | `list` | `list$` |
| `community` | `collection` | `/v2/community/collections` | `list` | `list$` |
| `community` | `post` | `/v2/community/posts` | `list` | `list$` |
| `community` | `space` | `/v2/community/spaces` | `list` | `list$` |
| `course` | `grade` | `/v2/courses/{id}/grades` | `list` | `list$` |
| `course` | `user` | `/v2/courses/{id}/users` | `list` | `list$` |
| `course_content` | `sections` | `/v2/courses/{id}/sections` | `create` | `save$` |
| `installment` | `active` | `/v2/installments/active` | `list` | `list$` |
| `payment` | `invoice_link` | `/v2/payments/{id}/invoice-link` | `load` | `load$` |
| `promotion` | `coupon` | `/v2/promotions/{pid}/coupons` | `list` | `list$` |
| `user` | `by_product` | `/v2/users/by-product` | `list` | `list$` |
| `user` | `by_segment` | `/v2/users/by-segment` | `list` | `list$` |
| `user` | `course` | `/v2/users/{id}/courses` | `list` | `list$` |
| `user` | `product` | `/v2/users/{id}/products` | `list` | `list$` |
| `user` | `segment` | `/v2/users/segments` | `list` | `list$` |
| `user` | `seat` | `/v2/users/{id}/seats` | `load` | `load$` |
| `user` | `enrollment` | `/v2/users/{id}/enrollment` | `remove` | `remove$` |
| `user` | `enrollment` | `/v2/users/{id}/enrollment` | `create` | `save$` |
| `user` | `suspend` | `/v2/users/{id}/suspend` | `update` | `save$` |
| `user` | `tag` | `/v2/users/{id}/tags` | `update` | `save$` |
| `user` | `unsuspend` | `/v2/users/{id}/unsuspend` | `update` | `save$` |
| `user_group` | `user-role` | `/v2/users/{id}/user-role` | `update` | `save$` |

On a read command (`list$`, `load$`, `remove$`) `action$` is a key of
the query. On `save$` it is a directive on the entity, set with
`directive$({ action$: '...' })` or assigned as a property —
`make$({ action$ })` does NOT work, because `seneca-entity`'s `make$`
drops any trailing-`$` key it does not know by name.

Routing is by the operation the action belongs to, not by the command:
`save$` covers both create and update, so an action folded into `create`
is called as a create even when the entity carries an id.

An action name the entity does not have throws, naming the entity, the
command and the valid actions. It never falls back to the plain command.


## Action patterns

### `sys:provider,provider:learnworlds,get:info`

Returns metadata about the plugin and SDK. Answered locally; makes no API
call.

```js
await seneca.post('sys:provider,provider:learnworlds,get:info')
```

```js
{
  ok: true,
  name: 'learnworlds',
  version: '0.0.1',
  sdk: {
    name: '@voxgig-sdk/learnworlds',
    version: '0.0.1',
  },
}
```

Both versions are read at runtime from the respective `package.json`, so
they describe what is installed rather than what was generated.

### Entity patterns

Registered by `@seneca/provider`. Normally reached through the entity API
rather than posted directly.

| Pattern |
| ------- |
| `sys:entity,zone:provider,base:learnworlds,name:affiliate,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:affiliate,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:assessment,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:bundle,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:bundle,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:calendar,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:certificate,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:certificate,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:certificate,cmd:remove` |
| `sys:entity,zone:provider,base:learnworlds,name:community,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:community,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:community,cmd:remove` |
| `sys:entity,zone:provider,base:learnworlds,name:community_post,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:community_space,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:community_space,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:coupon,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:coupon_usage,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:course,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:course,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:course,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:course_analytics,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:course_content,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:course_content,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:event_log,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:installment,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:lead,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:multiple_seat,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:multiple_seat,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:multiple_seat,cmd:remove` |
| `sys:entity,zone:provider,base:learnworlds,name:payment,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:payment,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:promotion,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:promotion,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:promotion,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:reporting,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:seat,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:seat,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:subscription_plan,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:subscription_plan,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:unit_analytics,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:update_user_progress,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:user,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:user,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:user,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:user,cmd:remove` |
| `sys:entity,zone:provider,base:learnworlds,name:user_group,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:user_group,cmd:load` |
| `sys:entity,zone:provider,base:learnworlds,name:user_group,cmd:save` |
| `sys:entity,zone:provider,base:learnworlds,name:user_progress,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:user_role,cmd:list` |
| `sys:entity,zone:provider,base:learnworlds,name:user_subscription,cmd:list` |

### Inherited from `@seneca/provider`

| Pattern | Purpose |
| ------- | ------- |
| `sys:provider,get:key` | Fetch one named key for a provider. |
| `sys:provider,get:keymap` | Fetch all keys for a provider. |
| `sys:provider,list:provider` | List registered providers and their key names. |

## Plugin exports

### `LearnworldsProvider/sdk`

A function returning the configured `LearnworldsSDK` instance.

```js
const sdk = seneca.export('LearnworldsProvider/sdk')()

// Every SDK operation resolves to an SDK entity (or a list of them),
// not raw data; `.data()` gives the plain record.
const certificates = (await sdk.Certificate().list()).map((e) => e.data())

// `direct` reaches endpoints outside the entity model.
const res = await sdk.direct({ path: '/v2/affiliates', method: 'GET' })
```

Available only after `seneca.ready()`. Use it for SDK features the entity
API does not surface — notably `direct()` and `prepare()` for endpoints
the entity model does not cover.

## Errors

| Situation | Behaviour |
| --------- | --------- |
| `load$` for a non-existent id | Resolves to `null`. |
| `remove$` for a non-existent id | Resolves to `null`; not an error. |
| A nested entity command missing a parent key | Throws before any request is made. |
| A 404 from `list$` or `save$` | Thrown. Only single-record reads and removes map a 404 to `null`. |
| Any other non-2xx response | Thrown as raised by the SDK. |
| A request that never got a response | Thrown, with `status` `-1`. |

SDK errors are `LearnworldsError` instances carrying
`isLearnworldsError: true`, a `code` (e.g. `request_status`), the
HTTP `status` at the top level (`-1` when the request never got a
response), a `notFound` flag, and a `ctx` holding the request context and
its `result` — `status`, `statusText`, `headers` and `body`. The
`null`-on-missing behaviour is triggered by `err.notFound`, not by
inspecting the status at the call site.

```js
try {
  await seneca.entity('provider/learnworlds/certificate').list$()
}
catch (err) {
  console.error(err.code, err.status, err.notFound)
}
```

The missing-parent-key guard is this plugin's own, thrown before the SDK is
called at all. Its message names the entity, the command and the key:

| Entity | Message |
| ------ | ------- |
| `assessment` | `@seneca/learnworlds-provider: assessment <cmd>: form_id is required` |
| `community` | `@seneca/learnworlds-provider: community <cmd>: space_id is required` |
| `coupon` | `@seneca/learnworlds-provider: coupon <cmd>: promotion_id is required` |
| `coupon_usage` | `@seneca/learnworlds-provider: coupon_usage <cmd>: promotion_id is required` |
| `multiple_seat` | `@seneca/learnworlds-provider: multiple_seat <cmd>: seat_id is required` |
| `reporting` | `@seneca/learnworlds-provider: reporting <cmd>: user_id is required` |
| `unit_analytics` | `@seneca/learnworlds-provider: unit_analytics <cmd>: course_id is required` |
| `update_user_progress` | `@seneca/learnworlds-provider: update_user_progress <cmd>: course_id is required` |
| `update_user_progress` | `@seneca/learnworlds-provider: update_user_progress <cmd>: user_id is required` |
| `user` | `@seneca/learnworlds-provider: user <cmd>: user_group_id is required` |
| `user_progress` | `@seneca/learnworlds-provider: user_progress <cmd>: course_id is required` |
| `user_progress` | `@seneca/learnworlds-provider: user_progress <cmd>: user_id is required` |

where `<cmd>` is the command that was called. A key counts as missing if
it is absent, `null` or the empty string.

## Authentication keys

The plugin follows the provider convention: if an `apikey` key is
configured and non-empty, it is sent as `authorization: Bearer <apikey>`
on every request. If the provider is not registered, or the key is absent or
empty, no header is added and startup proceeds normally — an API that needs
no credential exercises the same path.

```js
  .use('provider', {
    provider: {
      learnworlds: {
        keys: {
          apikey: { value: '$LEARNWORLDS_APIKEY' },
        },
      },
    },
  })
```

The key is read once, during `seneca.prepare()`, by posting
`sys:provider,get:keymap,provider:learnworlds`. An `authorization`
header supplied through the `sdk.headers` option takes precedence over it.

## Environment variables

The plugin never reads the environment itself. These are the variables the
surrounding convention and tooling resolve:

| Variable | Read by | Purpose |
| -------- | ------- | ------- |
| `$LEARNWORLDS_APIKEY` | `@seneca/env` | Supplies the `apikey` value when the key is declared as `'$LEARNWORLDS_APIKEY'`, as above. |

## Package scripts

| Script | Action |
| ------ | ------ |
| `npm run build` | `tsc --build src test` — compiles to `dist` and `dist-test`. |
| `npm run watch` | The same, in watch mode. |
| `npm test` | Runs the `node:test` suite. |
| `npm run test-some` | Runs tests matching `$TEST_PATTERN`. |
| `npm run test-watch` | Test suite in watch mode. |
| `npm run test-coverage` | Test suite with Node's built-in coverage. |
| `npm run clean` | Removes `node_modules`, `dist`, `dist-test`, `.tsbuildinfo`, lockfiles. |
| `npm run reset` | `clean`, then install, build and test. |
| `npm run repo-tag` | Commits, tags and pushes `v<version>` taken from `package.json`. |
| `npm run repo-publish` | Clean install, then `repo-publish-quick`. |
| `npm run repo-publish-quick` | Build, test, tag, and publish to npm. |

### Repository layout

| Path | Contents |
| ---- | -------- |
| `src/` | TypeScript source, with its own `tsconfig.json`. |
| `test/` | Test suite (`.js`, run by `node:test`) and TypeScript fixtures. |
| `dist/` | Compiled source. Committed; published. |
| `dist-test/` | Compiled test fixtures. Committed; **not** published. |
| `.tsbuildinfo/` | Incremental build cache. Not committed. |
| `doc/` | This documentation. |

This repository is generated by
[@voxgig/sdkgen](https://github.com/voxgig/sdkgen) from the Learnworlds
API definition. Anything edited here is overwritten by the next generation
run; changes belong in the model.
