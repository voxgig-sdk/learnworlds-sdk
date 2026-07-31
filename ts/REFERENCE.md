# Learnworlds TypeScript SDK Reference

Complete API reference for the Learnworlds TypeScript SDK.


## LearnworldsSDK

### Constructor

```ts
new LearnworldsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LearnworldsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = LearnworldsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `LearnworldsSDK` instance in test mode.


### Instance Methods

#### `Active(data?: object)`

Create a new `Active` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActiveEntity` instance.

#### `Affiliate(data?: object)`

Create a new `Affiliate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AffiliateEntity` instance.

#### `Assessment(data?: object)`

Create a new `Assessment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssessmentEntity` instance.

#### `Bundle(data?: object)`

Create a new `Bundle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BundleEntity` instance.

#### `ByProduct(data?: object)`

Create a new `ByProduct` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ByProductEntity` instance.

#### `BySegment(data?: object)`

Create a new `BySegment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BySegmentEntity` instance.

#### `Calendar(data?: object)`

Create a new `Calendar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CalendarEntity` instance.

#### `Certificate(data?: object)`

Create a new `Certificate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CertificateEntity` instance.

#### `Community(data?: object)`

Create a new `Community` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommunityEntity` instance.

#### `CommunityPost(data?: object)`

Create a new `CommunityPost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommunityPostEntity` instance.

#### `CommunitySpace(data?: object)`

Create a new `CommunitySpace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommunitySpaceEntity` instance.

#### `Completed(data?: object)`

Create a new `Completed` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompletedEntity` instance.

#### `Coupon(data?: object)`

Create a new `Coupon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CouponEntity` instance.

#### `CouponUsage(data?: object)`

Create a new `CouponUsage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CouponUsageEntity` instance.

#### `Course(data?: object)`

Create a new `Course` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CourseEntity` instance.

#### `CourseAnalytics(data?: object)`

Create a new `CourseAnalytics` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CourseAnalyticsEntity` instance.

#### `CourseContent(data?: object)`

Create a new `CourseContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CourseContentEntity` instance.

#### `Due(data?: object)`

Create a new `Due` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DueEntity` instance.

#### `Event(data?: object)`

Create a new `Event` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventEntity` instance.

#### `EventLog(data?: object)`

Create a new `EventLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventLogEntity` instance.

#### `Form(data?: object)`

Create a new `Form` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FormEntity` instance.

#### `Installment(data?: object)`

Create a new `Installment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InstallmentEntity` instance.

#### `Lead(data?: object)`

Create a new `Lead` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LeadEntity` instance.

#### `MultipleSeat(data?: object)`

Create a new `MultipleSeat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MultipleSeatEntity` instance.

#### `Payment(data?: object)`

Create a new `Payment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentEntity` instance.

#### `Post(data?: object)`

Create a new `Post` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostEntity` instance.

#### `Promotion(data?: object)`

Create a new `Promotion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PromotionEntity` instance.

#### `Reporting(data?: object)`

Create a new `Reporting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportingEntity` instance.

#### `Score(data?: object)`

Create a new `Score` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScoreEntity` instance.

#### `Seat(data?: object)`

Create a new `Seat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeatEntity` instance.

#### `Segment(data?: object)`

Create a new `Segment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SegmentEntity` instance.

#### `Space(data?: object)`

Create a new `Space` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SpaceEntity` instance.

#### `SubscriptionPlan(data?: object)`

Create a new `SubscriptionPlan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionPlanEntity` instance.

#### `Unit(data?: object)`

Create a new `Unit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UnitEntity` instance.

#### `UnitAnalytics(data?: object)`

Create a new `UnitAnalytics` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UnitAnalyticsEntity` instance.

#### `Upcoming(data?: object)`

Create a new `Upcoming` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpcomingEntity` instance.

#### `UpdateUserProgress(data?: object)`

Create a new `UpdateUserProgress` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateUserProgressEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserGroup(data?: object)`

Create a new `UserGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserGroupEntity` instance.

#### `UserProgress(data?: object)`

Create a new `UserProgress` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserProgressEntity` instance.

#### `UserRole(data?: object)`

Create a new `UserRole` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserRoleEntity` instance.

#### `UserSubscription(data?: object)`

Create a new `UserSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserSubscriptionEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `LearnworldsSDK.test()`.

**Returns:** `LearnworldsSDK` instance in test mode.


---

## ActiveEntity

```ts
const active = client.Active()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActiveEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AffiliateEntity

```ts
const affiliate = client.Affiliate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affiliate` | `Record<string, any>` | No |  |
| `affiliate_id` | `string` | No |  |
| `amount` | `number` | No |  |
| `billing_info` | `Record<string, any> | null` | No |  |
| `click` | `number` | No |  |
| `code` | `string` | No |  |
| `commission` | `number` | No |  |
| `commission_percentage` | `number` | No |  |
| `completed_by` | `Record<string, any>` | No |  |
| `coupon` | `null | string` | No |  |
| `created` | `number` | No |  |
| `customer` | `number` | No |  |
| `date` | `number` | No |  |
| `discount` | `number` | No |  |
| `due` | `number` | No |  |
| `email` | `string` | No |  |
| `eu_customer` | `boolean | null` | No |  |
| `field` | `Record<string, any>` | No |  |
| `gateway` | `null | string` | No |  |
| `id` | `string` | No |  |
| `instructor` | `any[]` | No |  |
| `instructors_total_percentage` | `null | number` | No |  |
| `invoice` | `null | string` | No |  |
| `is_admin` | `boolean` | No |  |
| `is_affiliate` | `boolean` | No |  |
| `is_instructor` | `boolean` | No |  |
| `is_reporter` | `boolean` | No |  |
| `is_suspended` | `boolean` | No |  |
| `last_login` | `null | number` | No |  |
| `lead` | `number` | No |  |
| `nps_comment` | `string | null` | No |  |
| `nps_score` | `number | null` | No |  |
| `paid_at` | `number | null` | No |  |
| `payment` | `any[]` | No |  |
| `payment_method` | `string` | No |  |
| `payment_note` | `string | null` | No |  |
| `payment_plan_current_payment` | `number | null` | No |  |
| `payment_plan_total_payment` | `number | null` | No |  |
| `payout` | `number` | No |  |
| `pending` | `number` | No |  |
| `period` | `null | string` | No |  |
| `price` | `number` | No |  |
| `product` | `Record<string, any>` | No |  |
| `referrer_id` | `string | null` | No |  |
| `refund_at` | `null | number` | No |  |
| `role` | `Record<string, any>` | No |  |
| `sale` | `number` | No |  |
| `signup_approval_status` | `string | null` | No |  |
| `subscribed_for_marketing_email` | `boolean | null` | No |  |
| `tag` | `any[]` | No |  |
| `tax_amount` | `number` | No |  |
| `tax_percentage` | `number` | No |  |
| `transaction_id` | `string` | No |  |
| `type` | `string` | No |  |
| `user_id` | `string` | No |  |
| `username` | `string` | No |  |
| `utm` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Affiliate().create({
  id: 'example_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Affiliate().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AffiliateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssessmentEntity

```ts
const assessment = client.Assessment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | `any[]` | No |  |
| `created` | `number` | No |  |
| `email` | `string` | No |  |
| `general_feedback` | `string | null` | No |  |
| `grade` | `number | null` | No |  |
| `id` | `string` | No |  |
| `modified` | `number` | No |  |
| `passed` | `boolean | null` | No |  |
| `submitted_timestamp` | `number` | No |  |
| `user_id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Assessment().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssessmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BundleEntity

```ts
const bundle = client.Bundle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `after_purchase` | `Record<string, any>` | No |  |
| `created` | `number` | No |  |
| `description` | `string | null` | No |  |
| `id` | `string` | No |  |
| `image` | `null | string` | No |  |
| `modified` | `number` | No |  |
| `payment_plan` | `any[]` | No |  |
| `price` | `number` | No |  |
| `product` | `Record<string, any>` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Bundle().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Bundle().load({ id: 'bundle_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BundleEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ByProductEntity

```ts
const by_product = client.ByProduct()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ByProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BySegmentEntity

```ts
const by_segment = client.BySegment()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BySegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CalendarEntity

```ts
const calendar = client.Calendar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `booking_detail` | `null | Record<string, any>` | No |  |
| `product_id` | `string` | No |  |
| `start_date` | `number` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Calendar().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CalendarEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CertificateEntity

```ts
const certificate = client.Certificate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attempt` | `number` | No |  |
| `course_id` | `string` | No |  |
| `external_url` | `string | null` | No |  |
| `form` | `Record<string, any> | null` | No |  |
| `id` | `string` | No |  |
| `issued` | `number` | No |  |
| `provider` | `string` | No |  |
| `score` | `string` | No |  |
| `short_url` | `string | null` | No |  |
| `status` | `string` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Field Usage by Operation

| Field | list | update | remove |
| --- | --- | --- | --- |
| `attempt` | - | - | - |
| `course_id` | - | - | - |
| `external_url` | - | - | - |
| `form` | - | Yes | - |
| `id` | - | - | - |
| `issued` | - | Yes | - |
| `provider` | - | - | - |
| `score` | - | - | - |
| `short_url` | - | - | - |
| `status` | - | - | - |
| `title` | - | - | - |
| `type` | - | - | - |
| `user` | - | - | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Certificate().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Certificate().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Certificate().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CertificateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommunityEntity

```ts
const community = client.Community()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `any` | No |  |
| `collection_id` | `string` | No |  |
| `created` | `number` | No |  |
| `data` | `Record<string, any>` | No |  |
| `description` | `string` | No |  |
| `display_order` | `number` | No |  |
| `hidden_from_community` | `boolean` | No |  |
| `id` | `string` | No |  |
| `is_invitation_required` | `boolean` | No |  |
| `is_members_allowed_to_view_member` | `boolean` | No |  |
| `item` | `any[]` | No |  |
| `like` | `any[]` | No |  |
| `mention` | `any[]` | No |  |
| `modified` | `number` | No |  |
| `name` | `string` | No |  |
| `owner` | `Record<string, any>` | No |  |
| `posted_in` | `Record<string, any>` | No |  |
| `space_id` | `any[]` | No |  |
| `status` | `any` | No |  |
| `text` | `string` | No |  |
| `title` | `string` | No |  |
| `uid` | `any[]` | No |  |
| `upvote` | `any[]` | No |  |
| `usage` | `any[]` | No |  |
| `user` | `Record<string, any>` | No |  |
| `username` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Community().create({
  space_id: 'example_space_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Community().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Community().remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommunityEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommunityPostEntity

```ts
const community_post = client.CommunityPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | No |  |
| `id` | `string` | No |  |
| `item` | `any[]` | No |  |
| `like` | `any[]` | No |  |
| `mention` | `any[]` | No |  |
| `posted_in` | `Record<string, any>` | No |  |
| `text` | `string` | No |  |
| `upvote` | `any[]` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CommunityPost().load({ id: 'community_post_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommunityPostEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommunitySpaceEntity

```ts
const community_space = client.CommunitySpace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `any` | No |  |
| `collection_id` | `string` | No |  |
| `description` | `string` | No |  |
| `hidden_from_community` | `boolean` | No |  |
| `id` | `string` | No |  |
| `is_invitation_required` | `boolean` | No |  |
| `is_members_allowed_to_view_member` | `boolean` | No |  |
| `owner` | `Record<string, any>` | No |  |
| `title` | `string` | No |  |
| `usage` | `any[]` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `access` | - | Yes | - |
| `collection_id` | - | - | - |
| `description` | - | - | - |
| `hidden_from_community` | - | - | - |
| `id` | - | - | - |
| `is_invitation_required` | - | - | - |
| `is_members_allowed_to_view_member` | - | - | - |
| `owner` | - | - | - |
| `title` | - | Yes | - |
| `usage` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CommunitySpace().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CommunitySpace().load({ id: 'community_space_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CommunitySpace().update({
  id: 'community_space_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommunitySpaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompletedEntity

```ts
const completed = client.Completed()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompletedEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CouponEntity

```ts
const coupon = client.Coupon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bulk` | `boolean` | No |  |
| `code` | `string` | No |  |
| `expire` | `null | string` | No |  |
| `prefix` | `string | null` | No |  |
| `quantity` | `number | null` | No |  |
| `times_used` | `number` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `bulk` | - |
| `code` | Yes |
| `expire` | - |
| `prefix` | Yes |
| `quantity` | Yes |
| `times_used` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Coupon().create({
  promotion_id: 'example_promotion_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CouponEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CouponUsageEntity

```ts
const coupon_usage = client.CouponUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affiliate` | `Record<string, any>` | No |  |
| `billing_info` | `null | Record<string, any>` | No |  |
| `coupon` | `null | string` | No |  |
| `created` | `number` | No |  |
| `discount` | `number` | No |  |
| `gateway` | `null | string` | No |  |
| `id` | `string` | No |  |
| `instructor` | `any[]` | No |  |
| `instructors_total_percentage` | `null | number` | No |  |
| `invoice` | `null | string` | No |  |
| `paid_at` | `number | null` | No |  |
| `payment_plan_current_payment` | `number | null` | No |  |
| `payment_plan_total_payment` | `number | null` | No |  |
| `period` | `null | string` | No |  |
| `price` | `number` | No |  |
| `product` | `Record<string, any>` | No |  |
| `refund_at` | `null | number` | No |  |
| `tax_amount` | `number` | No |  |
| `tax_percentage` | `number` | No |  |
| `transaction_id` | `string` | No |  |
| `type` | `string` | No |  |
| `user_id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CouponUsage().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CouponUsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CourseEntity

```ts
const course = client.Course()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `after_purchase` | `Record<string, any>` | No |  |
| `author` | `Record<string, any> | null` | No |  |
| `billing_info` | `Record<string, any> | null` | No |  |
| `category` | `any[]` | No |  |
| `course_image` | `string | null` | No |  |
| `created` | `number` | No |  |
| `description` | `string | null` | No |  |
| `discount_price` | `number` | No |  |
| `drip_feed` | `string` | No |  |
| `email` | `string` | No |  |
| `eu_customer` | `boolean | null` | No |  |
| `expire` | `null | number` | No |  |
| `expires_type` | `string` | No |  |
| `field` | `Record<string, any>` | No |  |
| `final_price` | `number` | No |  |
| `grade` | `number` | No |  |
| `id` | `string` | No |  |
| `identifier` | `Record<string, any>` | No |  |
| `is_admin` | `boolean` | No |  |
| `is_affiliate` | `boolean` | No |  |
| `is_instructor` | `boolean` | No |  |
| `is_reporter` | `boolean` | No |  |
| `is_suspended` | `boolean` | No |  |
| `label` | `null | string` | No |  |
| `last_login` | `null | number` | No |  |
| `learning_unit` | `Record<string, any>` | No |  |
| `modified` | `number` | No |  |
| `nps_comment` | `string | null` | No |  |
| `nps_score` | `number | null` | No |  |
| `original_price` | `number` | No |  |
| `price` | `number` | No |  |
| `referrer_id` | `string | null` | No |  |
| `role` | `Record<string, any>` | No |  |
| `signup_approval_status` | `string | null` | No |  |
| `submitted_timestamp` | `number` | No |  |
| `subscribed_for_marketing_email` | `boolean | null` | No |  |
| `tag` | `any[]` | No |  |
| `title` | `string` | No |  |
| `title_id` | `string` | Yes |  |
| `user_id` | `string` | No |  |
| `username` | `string` | No |  |
| `utm` | `Record<string, any>` | No |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `access` | - | - | Yes | - |
| `after_purchase` | - | - | - | - |
| `author` | - | - | - | - |
| `billing_info` | - | - | - | - |
| `category` | - | - | - | - |
| `course_image` | - | - | - | - |
| `created` | - | - | - | - |
| `description` | - | - | - | - |
| `discount_price` | - | - | - | - |
| `drip_feed` | - | - | - | - |
| `email` | - | - | - | - |
| `eu_customer` | - | - | - | - |
| `expire` | - | - | - | - |
| `expires_type` | - | - | - | - |
| `field` | - | - | - | - |
| `final_price` | - | - | - | - |
| `grade` | - | - | - | - |
| `id` | - | - | - | - |
| `identifier` | - | - | - | - |
| `is_admin` | - | - | - | - |
| `is_affiliate` | - | - | - | - |
| `is_instructor` | - | - | - | - |
| `is_reporter` | - | - | - | - |
| `is_suspended` | - | - | - | - |
| `label` | - | - | - | - |
| `last_login` | - | - | - | - |
| `learning_unit` | - | - | - | - |
| `modified` | - | - | - | - |
| `nps_comment` | - | - | - | - |
| `nps_score` | - | - | - | - |
| `original_price` | - | - | - | - |
| `price` | - | - | - | - |
| `referrer_id` | - | - | - | - |
| `role` | - | - | - | - |
| `signup_approval_status` | - | - | - | - |
| `submitted_timestamp` | - | - | - | - |
| `subscribed_for_marketing_email` | - | - | - | - |
| `tag` | - | - | - | - |
| `title` | - | - | Yes | - |
| `title_id` | - | - | - | - |
| `user_id` | - | - | - | - |
| `username` | - | - | - | - |
| `utm` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Course().create({
  title_id: 'example_title_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Course().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Course().load({ id: 'course_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Course().update({
  id: 'course_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CourseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CourseAnalyticsEntity

```ts
const course_analytics = client.CourseAnalytics()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_score_rate` | `number` | No |  |
| `avg_time_to_finish` | `number` | No |  |
| `certificates_issued` | `number` | No |  |
| `learning_unit` | `number` | No |  |
| `social_interaction` | `number` | No |  |
| `student` | `number` | No |  |
| `success_rate` | `number` | No |  |
| `total_study_time` | `number` | No |  |
| `video` | `number` | No |  |
| `video_time` | `number` | No |  |
| `video_viewing_time` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CourseAnalytics().load({ id: 'course_analytics_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CourseAnalyticsEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CourseContentEntity

```ts
const course_content = client.CourseContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `description` | `string | null` | No |  |
| `drip` | `Record<string, any> | null` | No |  |
| `id` | `string` | No |  |
| `learning_unit` | `any[]` | No |  |
| `section` | `any[]` | No |  |
| `title` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CourseContent().create({
  id: 'example_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CourseContent().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CourseContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DueEntity

```ts
const due = client.Due()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DueEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventEntity

```ts
const event = client.Event()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventLogEntity

```ts
const event_log = client.EventLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity` | `string` | No |  |
| `additional_info` | `Record<string, any> | null` | No |  |
| `created` | `number` | No |  |
| `description` | `string` | No |  |
| `type` | `string | null` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EventLog().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FormEntity

```ts
const form = client.Form()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FormEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InstallmentEntity

```ts
const installment = client.Installment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | No |  |
| `current_period_end` | `number` | No |  |
| `current_period_start` | `number` | No |  |
| `email` | `string` | No |  |
| `ends_at` | `number | null` | No |  |
| `first_amount` | `number` | No |  |
| `first_installment_date` | `number | null` | No |  |
| `first_installment_type` | `string` | No |  |
| `first_installmentl_day` | `number` | No |  |
| `id` | `string` | No |  |
| `installment_interval_type` | `string` | No |  |
| `is_cancelable` | `boolean` | No |  |
| `name` | `string` | No |  |
| `payments_count` | `number` | No |  |
| `payments_payed` | `number` | No |  |
| `plan_id` | `string` | No |  |
| `product_id` | `string` | No |  |
| `product_type` | `string` | No |  |
| `status` | `string` | No |  |
| `type` | `string` | No |  |
| `user_id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Installment().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InstallmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LeadEntity

```ts
const lead = client.Lead()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | No |  |
| `email` | `string` | No |  |
| `eu_customer` | `boolean | null` | No |  |
| `first_name` | `string` | No |  |
| `last_name` | `string` | No |  |
| `page_submitted` | `string | null` | No |  |
| `submission` | `any[]` | No |  |
| `subscribed_for_marketing_email` | `boolean | null` | No |  |
| `tag` | `any[]` | No |  |
| `user_id` | `string | null` | No |  |
| `user_registered_at` | `number | null` | No |  |
| `utm` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Lead().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LeadEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MultipleSeatEntity

```ts
const multiple_seat = client.MultipleSeat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `add_to_active_seat` | `boolean` | No |  |
| `available_seat` | `number` | No |  |
| `created` | `number` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `max_number_of_user` | `number` | No |  |
| `modified` | `number` | No |  |
| `number_of_seat` | `number` | No |  |
| `product` | `Record<string, any>` | No |  |
| `seat_manager` | `any[]` | No |  |
| `success` | `boolean` | No |  |
| `tag` | `any[]` | No |  |
| `title` | `string` | No |  |
| `total_enrollment` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MultipleSeat().create({
  seat_id: 'example_seat_id',
  uid: 'example_uid',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MultipleSeat().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.MultipleSeat().remove({ seat_id: 'seat_id', uid: 'uid' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MultipleSeatEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentEntity

```ts
const payment = client.Payment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affiliate` | `Record<string, any>` | No |  |
| `billing_info` | `null | Record<string, any>` | No |  |
| `coupon` | `null | string` | No |  |
| `created` | `number` | No |  |
| `discount` | `number` | No |  |
| `expires_at` | `number` | No |  |
| `gateway` | `null | string` | No |  |
| `id` | `string` | No |  |
| `instructor` | `any[]` | No |  |
| `instructors_total_percentage` | `null | number` | No |  |
| `invoice` | `null | string` | No |  |
| `paid_at` | `number | null` | No |  |
| `payment_plan_current_payment` | `number | null` | No |  |
| `payment_plan_total_payment` | `number | null` | No |  |
| `period` | `null | string` | No |  |
| `price` | `number` | No |  |
| `product` | `Record<string, any>` | No |  |
| `refund_at` | `null | number` | No |  |
| `tax_amount` | `number` | No |  |
| `tax_percentage` | `number` | No |  |
| `transaction_id` | `string` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `user_id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Payment().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Payment().load({ id: 'payment_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostEntity

```ts
const post = client.Post()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PromotionEntity

```ts
const promotion = client.Promotion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applies_to_all` | `any[]` | No |  |
| `bulk` | `boolean` | No |  |
| `code` | `string` | No |  |
| `coupon` | `any[]` | No |  |
| `created` | `number` | No |  |
| `expire` | `null | string` | No |  |
| `id` | `string` | No |  |
| `modified` | `number` | No |  |
| `name` | `string` | No |  |
| `prefix` | `string | null` | No |  |
| `product` | `any[]` | No |  |
| `quantity` | `number | null` | No |  |
| `times_used` | `number` | No |  |
| `type` | `string` | No |  |
| `value` | `number` | No |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `applies_to_all` | - | - | - |
| `bulk` | - | - | - |
| `code` | - | - | - |
| `coupon` | - | - | - |
| `created` | - | - | - |
| `expire` | - | - | - |
| `id` | - | - | - |
| `modified` | - | - | - |
| `name` | - | - | Yes |
| `prefix` | - | - | - |
| `product` | - | - | - |
| `quantity` | - | - | - |
| `times_used` | - | - | - |
| `type` | - | - | - |
| `value` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Promotion().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Promotion().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Promotion().load({ id: 'promotion_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PromotionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportingEntity

```ts
const reporting = client.Reporting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average_score_rate` | `number` | No |  |
| `completed_at` | `number | null` | No |  |
| `completed_unit` | `number` | No |  |
| `course_id` | `string` | No |  |
| `progress_per_section_unit` | `any[]` | No |  |
| `progress_rate` | `number` | No |  |
| `status` | `string` | No |  |
| `time_on_course` | `number` | No |  |
| `total_unit` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Reporting().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportingEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScoreEntity

```ts
const score = client.Score()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScoreEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeatEntity

```ts
const seat = client.Seat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `available_seat` | `number` | No |  |
| `created` | `number` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `max_number_of_user` | `number` | No |  |
| `modified` | `number` | No |  |
| `number_of_seat` | `number` | No |  |
| `product` | `Record<string, any>` | No |  |
| `seat_manager` | `any[]` | No |  |
| `tag` | `any[]` | No |  |
| `title` | `string` | No |  |
| `total_enrollment` | `number` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `access` | - | - | - |
| `available_seat` | - | - | - |
| `created` | - | - | - |
| `description` | - | - | - |
| `id` | - | - | - |
| `max_number_of_user` | - | - | - |
| `modified` | - | - | - |
| `number_of_seat` | - | Yes | Yes |
| `product` | - | Yes | Yes |
| `seat_manager` | - | - | - |
| `tag` | - | - | - |
| `title` | - | Yes | Yes |
| `total_enrollment` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Seat().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Seat().load({ id: 'seat_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Seat().update({
  id: 'seat_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeatEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SegmentEntity

```ts
const segment = client.Segment()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SpaceEntity

```ts
const space = client.Space()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SpaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionPlanEntity

```ts
const subscription_plan = client.SubscriptionPlan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `after_purchase` | `Record<string, any>` | No |  |
| `created` | `number` | No |  |
| `description` | `string | null` | No |  |
| `id` | `string` | No |  |
| `image` | `string | null` | No |  |
| `interval` | `number` | No |  |
| `interval_type` | `string` | No |  |
| `modified` | `number` | No |  |
| `price` | `number` | No |  |
| `product` | `Record<string, any>` | No |  |
| `stripe_plan_id` | `string` | No |  |
| `title` | `string` | No |  |
| `trial_period_day` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionPlan().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SubscriptionPlan().load({ id: 'subscription_plan_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionPlanEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UnitEntity

```ts
const unit = client.Unit()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UnitEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UnitAnalyticsEntity

```ts
const unit_analytics = client.UnitAnalytics()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avg_score_rate` | `number` | No |  |
| `avg_study_time` | `number` | No |  |
| `name` | `string` | No |  |
| `total_study_time` | `number` | No |  |
| `type` | `string` | No |  |
| `users_completed` | `number` | No |  |
| `viewer` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UnitAnalytics().load({ id: 'unit_analytics_id', course_id: 'course_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UnitAnalyticsEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpcomingEntity

```ts
const upcoming = client.Upcoming()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpcomingEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateUserProgressEntity

```ts
const update_user_progress = client.UpdateUserProgress()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `async` | `boolean` | No |  |
| `job_id` | `string` | No |  |
| `send_course_complete_email` | `boolean` | Yes |  |
| `unit` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UpdateUserProgress().create({
  course_id: 'example_course_id',
  user_id: 'example_user_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateUserProgressEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `active` | `boolean` | No |  |
| `answer` | `any[]` | No |  |
| `billing_info` | `Record<string, any> | null` | No |  |
| `course` | `Record<string, any>` | No |  |
| `created` | `number` | No |  |
| `description` | `string | null` | No |  |
| `duration` | `number` | No |  |
| `duration_type` | `string` | No |  |
| `email` | `string` | No |  |
| `eu_customer` | `boolean | null` | No |  |
| `expire` | `null | number` | No |  |
| `field` | `Record<string, any>` | No |  |
| `general_feedback` | `string | null` | No |  |
| `got_seat_on` | `number` | No |  |
| `grade` | `number | null` | No |  |
| `id` | `string` | No |  |
| `is_admin` | `boolean` | No |  |
| `is_affiliate` | `boolean` | No |  |
| `is_instructor` | `boolean` | No |  |
| `is_reporter` | `boolean` | No |  |
| `is_suspended` | `boolean` | No |  |
| `justification` | `string | null` | No |  |
| `last_login` | `null | number` | No |  |
| `modified` | `number` | No |  |
| `name` | `string` | No |  |
| `nps_comment` | `string | null` | No |  |
| `nps_score` | `number | null` | No |  |
| `passed` | `boolean | null` | No |  |
| `password` | `string` | No |  |
| `price` | `number` | Yes |  |
| `product_id` | `string` | Yes |  |
| `product_type` | `string` | Yes |  |
| `referrer_id` | `string | null` | No |  |
| `role` | `Record<string, any>` | No |  |
| `send_enrollment_email` | `boolean | null` | No |  |
| `send_registration_email` | `boolean | null` | No |  |
| `signup_approval_status` | `string | null` | No |  |
| `signup_validation_rule` | `boolean` | No |  |
| `submitted_timestamp` | `number` | No |  |
| `subscribed_for_marketing_email` | `boolean | null` | No |  |
| `success` | `boolean` | No |  |
| `tag` | `any[]` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `user_id` | `string` | No |  |
| `username` | `string` | No |  |
| `utm` | `Record<string, any>` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `action` | - | - | - | - | - |
| `active` | - | - | - | - | - |
| `answer` | - | - | - | - | - |
| `billing_info` | - | - | - | - | - |
| `course` | - | - | - | - | - |
| `created` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `duration` | - | - | - | - | - |
| `duration_type` | - | - | - | - | - |
| `email` | - | - | Yes | - | - |
| `eu_customer` | - | - | - | - | - |
| `expire` | - | - | - | - | - |
| `field` | - | - | - | - | - |
| `general_feedback` | - | - | - | - | - |
| `got_seat_on` | - | - | - | - | - |
| `grade` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `is_admin` | - | - | - | - | - |
| `is_affiliate` | - | - | - | - | - |
| `is_instructor` | - | - | - | - | - |
| `is_reporter` | - | - | - | - | - |
| `is_suspended` | - | - | - | - | - |
| `justification` | - | - | - | - | - |
| `last_login` | - | - | - | - | - |
| `modified` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `nps_comment` | - | - | - | - | - |
| `nps_score` | - | - | - | - | - |
| `passed` | - | - | - | - | - |
| `password` | - | - | - | - | - |
| `price` | - | - | - | - | - |
| `product_id` | - | - | - | - | - |
| `product_type` | - | - | - | - | - |
| `referrer_id` | - | - | - | - | - |
| `role` | - | - | - | - | - |
| `send_enrollment_email` | - | - | - | - | - |
| `send_registration_email` | - | - | - | - | - |
| `signup_approval_status` | - | - | - | - | - |
| `signup_validation_rule` | - | - | - | - | - |
| `submitted_timestamp` | - | - | - | - | - |
| `subscribed_for_marketing_email` | - | - | - | - | - |
| `success` | - | - | - | - | - |
| `tag` | - | - | - | Yes | - |
| `title` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `user_id` | - | - | - | - | - |
| `username` | - | - | Yes | - | - |
| `utm` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.User().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.User().load({ id: 'user_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.User().remove({ id: 'user_id', user_group_id: 'user_group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.User().update({
  id: 'user_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserGroupEntity

```ts
const user_group = client.UserGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_course` | `any[]` | No |  |
| `assigned_seat_offering_id` | `any[]` | No |  |
| `assigned_segment_id` | `string` | No |  |
| `assigned_user_group_id` | `any[]` | No |  |
| `created` | `number` | No |  |
| `description` | `string` | No |  |
| `enroll_users_on_course` | `boolean` | No |  |
| `group_manager` | `any[]` | No |  |
| `id` | `string` | No |  |
| `max_number_of_user` | `number` | No |  |
| `modified` | `number` | No |  |
| `product` | `Record<string, any>` | No |  |
| `role_id` | `string` | Yes |  |
| `tag` | `any[]` | No |  |
| `title` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `assigned_course` | - | - | - | - |
| `assigned_seat_offering_id` | - | - | - | - |
| `assigned_segment_id` | - | - | - | - |
| `assigned_user_group_id` | - | - | - | - |
| `created` | - | - | - | - |
| `description` | - | - | - | - |
| `enroll_users_on_course` | - | - | - | - |
| `group_manager` | - | - | - | - |
| `id` | - | - | - | - |
| `max_number_of_user` | - | - | - | - |
| `modified` | - | - | - | - |
| `product` | - | - | Yes | Yes |
| `role_id` | - | - | - | - |
| `tag` | - | - | - | - |
| `title` | - | - | Yes | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UserGroup().create({
  role_id: 'example_role_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserGroup().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UserGroup().load({ id: 'user_group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UserGroup().update({
  id: 'user_group_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserProgressEntity

```ts
const user_progress = client.UserProgress()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `section_id` | `string` | No |  |
| `unit` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserProgress().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserProgressEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserRoleEntity

```ts
const user_role = client.UserRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `any` | No |  |
| `course_id` | `string` | No |  |
| `custom_role` | `boolean` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `revenue_share_percentage` | `number` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserRole().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserRoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserSubscriptionEntity

```ts
const user_subscription = client.UserSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `null | number` | No |  |
| `email` | `string` | No |  |
| `expires_at` | `null | number` | No |  |
| `plan_id` | `string` | No |  |
| `provider` | `string` | No |  |
| `provider_meta` | `Record<string, any> | null` | No |  |
| `status` | `string` | No |  |
| `user_id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserSubscription().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LearnworldsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new LearnworldsSDK({
  feature: {
    test: { active: true },
  }
})
```

