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
| `affiliate` | `Record<string, any>` | No | Related affiliate data |
| `affiliateId` | `string` | No | Unique identifier of the affiliate |
| `amount` | `number` | No | Amount of the payout |
| `billing_info` | `Record<string, any> | null` | No | Values of the billing info fields for this user |
| `clicks` | `number` | No | Number of referral link clicks |
| `code` | `string` | No | Unique affiliate code |
| `commission_percentage` | `number` | No | This is the percentage of the sale that goes to the affiliate. |
| `commissions` | `number` | No | Total commission amount |
| `completedBy` | `Record<string, any>` | No |  |
| `coupon` | `null | string` | No | Coupon code |
| `created` | `number` | No | Date the user was created, in UNIX timestamp format |
| `customers` | `number` | No | Number of referred customers |
| `date` | `number` | No | Datetime the affiliation was created, in UNIX timestamp format |
| `discount` | `number` | No | Discount of the payment |
| `due` | `number` | No | Total amount of due payouts |
| `email` | `string` | No | Email account of the user |
| `eu_customer` | `boolean | null` | No | Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe. |
| `fields` | `Record<string, any>` | No | Default sign up fields for the School. |
| `gateway` | `null | string` | No | Payment gateway name |
| `id` | `string` | No | Unique identifier of the user |
| `instructors` | `any[]` | No | Related instructor data |
| `instructors_total_percentage` | `null | number` | No | Total percentage of the revenue for the instructor |
| `invoice` | `null | string` | No | Invoice identifier |
| `is_admin` | `boolean` | No | Indication about whether the user is an administrator of the school; true if she is, or false if she is not. |
| `is_affiliate` | `boolean` | No | Indication about whether the user is an affiliate of the school; true if she is, or false if she is not. |
| `is_instructor` | `boolean` | No | Indication about whether the user is an instructor in the school; true if she is, or false if she is not. |
| `is_reporter` | `boolean` | No | Indication about whether the user is an reporter in the school; true if she is, or false if she is not. |
| `is_suspended` | `boolean` | No | Indication about whether the user is suspended in the school; true if she is, or false if she is not. |
| `last_login` | `null | number` | No | Date of the last login of the user, in UNIX timestamp format |
| `leads` | `number` | No | Number of leads |
| `nps_comment` | `string | null` | No | The latest comment submitted by the user on the NPS form. |
| `nps_score` | `number | null` | No | The latest NPS score submitted by the user. |
| `paid_at` | `number | null` | No | Payment date, in UNIX timestamp format |
| `paymentMethod` | `string` | No | Payment method |
| `paymentNotes` | `string | null` | No | Payment notes |
| `payment_plan_current_payment` | `number | null` | No | Current payment number of payment plan |
| `payment_plan_total_payments` | `number | null` | No | Total payments number of payment plan |
| `payments` | `any[]` | No |  |
| `payouts` | `number` | No | Total amount of completed payouts |
| `pending` | `number` | No | Total amount of upcoming payouts |
| `period` | `null | string` | No | Payment plan period |
| `price` | `number` | No | Price of the payment |
| `product` | `Record<string, any>` | No | Related product data |
| `referrer_id` | `string | null` | No | Unique user id of the referrer for this user |
| `refund_at` | `null | number` | No | Refund date, in UNIX timestamp format |
| `role` | `Record<string, any>` | No | Values of the role fields for this user |
| `sales` | `number` | No | Sales total amount |
| `signup_approval_status` | `string | null` | No | User status regarding the Signup Approval flow |
| `subscribed_for_marketing_emails` | `boolean | null` | No | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `tags` | `any[]` | No | Array of the tags of the user |
| `tax_amount` | `number` | No | Tax amount of the payment |
| `tax_percentage` | `number` | No | Tax percentage of the payment |
| `transaction_id` | `string` | No | Transaction id of the payment |
| `type` | `string` | No | Type of the payment |
| `user_id` | `string` | No | Unique identifier of the user |
| `username` | `string` | No | Username of the user |
| `utms` | `Record<string, any>` | No | Values of the UTM fields for this user |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `customer` | `/v2/affiliates/{id}/customers` | `client.Affiliate().list({ $action: 'customer', ... })` |
| `lead` | `/v2/affiliates/{id}/leads` | `client.Affiliate().list({ $action: 'lead', ... })` |
| `payment` | `/v2/affiliates/{id}/payments` | `client.Affiliate().list({ $action: 'payment', ... })` |
| `payout_completed` | `/v2/affiliates/{id}/payouts/completed` | `client.Affiliate().list({ $action: 'payout_completed', ... })` |
| `payout_due` | `/v2/affiliates/{id}/payouts/due` | `client.Affiliate().list({ $action: 'payout_due', ... })` |
| `payout_upcoming` | `/v2/affiliates/{id}/payouts/upcoming` | `client.Affiliate().list({ $action: 'payout_upcoming', ... })` |

An action returns that action's OWN response, which is not necessarily a
Affiliate record — check the API definition for its shape.

```ts
const result = await client.Affiliate().list({
  $action: 'customer',
  /* ...the action's own arguments */
})
```

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
| `answers` | `any[]` | No | Related answers data |
| `created` | `number` | No | Date the submission was created (started), in UNIX timestamp format |
| `email` | `string` | No | Email account of the user who submitted the responses |
| `generalFeedback` | `string | null` | No | General feedback for a submission |
| `grade` | `number | null` | No | The grade that corresponds to the responses provided by the user |
| `id` | `string` | No | Unique identifier of the submission of responses by the user specified by the user id |
| `modified` | `number` | No | Date the submission was modified for the last time, in UNIX timestamp format |
| `passed` | `boolean | null` | No | Indication about whether or not the assessment result was passed or failed |
| `submittedTimestamp` | `number` | No | Date the submission was finished (submitted), in UNIX timestamp format |
| `user_id` | `string` | No | Unique identifier of the user who submitted the responses |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `response` | `/v2/assessments/{id}/responses` | `client.Assessment().list({ $action: 'response', ... })` |

An action returns that action's OWN response, which is not necessarily a
Assessment record — check the API definition for its shape.

```ts
const result = await client.Assessment().list({
  $action: 'response',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Assessment().list({ form_id: "example" })
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
| `access` | `string` | No | Access type of the bundle |
| `afterPurchase` | `Record<string, any>` | No | After purchase navigation settings for this bundle |
| `created` | `number` | No | Date the bundle was created, in UNIX timestamp format |
| `description` | `string | null` | No | Bundle description |
| `id` | `string` | No | Unique identifier of the bundle |
| `image` | `null | string` | No | Bundle image (full URL) |
| `modified` | `number` | No | Date the bundle was modified for the last time, in UNIX timestamp format |
| `paymentPlans` | `any[]` | No | Payment plans associated with the bundle. |
| `price` | `number` | No | Price of the bundle |
| `products` | `Record<string, any>` | No | Products in the bundle |
| `title` | `string` | No | Title of the bundle |

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
| `bookingDetails` | `null | Record<string, any>` | No | Booking details of the event. |
| `productId` | `string` | No | Unique identifier of the product |
| `startDate` | `number` | No | Start date of the event, in UNIX timestamp format |
| `title` | `string` | No | Title of the event |
| `type` | `string` | No | Type of the event |

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
| `attempts` | `number` | No | Number of attempts |
| `course_id` | `string` | No | Unique identifier of the course |
| `external_url` | `string | null` | No | External URL of the certificate; null if provider is LearnWorlds |
| `form` | `Record<string, any> | null` | No | Form data of the certificate |
| `id` | `string` | No | Unique identifier of the certificate |
| `issued` | `number` | No | Date the certification was issued, in Unix timestamp format |
| `provider` | `string` | No | Provider of the certificate |
| `score` | `string` | No | Score of the certificate |
| `short_url` | `string | null` | No | Short URL of the certificate |
| `status` | `string` | No | Status of the certificate |
| `title` | `string` | No | Title of the certificate |
| `type` | `string` | No | Type of the certificate |
| `user` | `Record<string, any>` | No | User related data |

### Field Usage by Operation

| Field | list | update | remove |
| --- | --- | --- | --- |
| `attempts` | - | - | - |
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
| `access` | `any` | No | Access type of the space |
| `collectionId` | `string` | No | Unique identifier of the collection under which the space is displayed |
| `created` | `number` | No | Date the post was made, in UNIX timestamp format |
| `description` | `string` | No | Description of the space |
| `display_order` | `number` | No | Display order of the collection as it appears in the community sidebar |
| `hidden_from_community` | `boolean` | No | Indication about whether the space is visible in the community |
| `id` | `string` | No | Unique identifier of the post |
| `invitation` | `boolean` | No | Indication whether the user was sent an invitation. |
| `is_invitation_required` | `boolean` | No | Indication about whether users are sent an invitation to join or are directly added to space |
| `is_members_allowed_to_view_members` | `boolean` | No | Indication about whether users can view other users in space |
| `items` | `any[]` | No | List of post content items outside of text content |
| `likes` | `any[]` | No | List of users who have liked the post |
| `mentions` | `any[]` | No | User mentions of the post |
| `modified` | `number` | No | Date the collection was modified for the last time, in UNIX timestamp format |
| `name` | `string` | No | Name of the collection |
| `owner` | `Record<string, any>` | No | Information about the space owner |
| `posted_in` | `Record<string, any>` | No | Information about where the post was made |
| `space_ids` | `any[]` | No | List of spaces in this collection |
| `status` | `any` | No | The status of the user - `joined`, the user has joined the space - `invited`, the user has been sent an invitation to gain access to the space - `deleted`, the user has been removed from the space - `left`, the user has left the space |
| `text` | `string` | No | Text content of the post |
| `title` | `string` | No | Name of the space |
| `uids` | `any[]` | No | Unique identifiers or emails of the users to be invited/added |
| `upvotes` | `any[]` | No | List of users who have upvoted the post |
| `usages` | `any[]` | No | List of space usages in the platform |
| `user` | `Record<string, any>` | No | Information about the post author |
| `username` | `string` | No | The username of the user |
| `users` | `Record<string, any>` | No | List of users that were added or invited to space |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `collection` | `/v2/community/collections` | `client.Community().list({ $action: 'collection', ... })` |
| `post` | `/v2/community/posts` | `client.Community().list({ $action: 'post', ... })` |
| `space` | `/v2/community/spaces` | `client.Community().list({ $action: 'space', ... })` |

An action returns that action's OWN response, which is not necessarily a
Community record — check the API definition for its shape.

```ts
const result = await client.Community().list({
  $action: 'collection',
  /* ...the action's own arguments */
})
```

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
const results = await client.Community().list({ space_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Community().remove({ id: 'id' })
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
| `created` | `number` | No | Date the post was made, in UNIX timestamp format |
| `id` | `string` | No | Unique identifier of the post |
| `items` | `any[]` | No | List of post content items outside of text content |
| `likes` | `any[]` | No | List of users who have liked the post |
| `mentions` | `any[]` | No | User mentions of the post |
| `posted_in` | `Record<string, any>` | No | Information about where the post was made |
| `text` | `string` | No | Text content of the post |
| `upvotes` | `any[]` | No | List of users who have upvoted the post |
| `user` | `Record<string, any>` | No | Information about the post author |

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
| `access` | `any` | No | Access type of the space |
| `collectionId` | `string` | No | Unique identifier of the collection under which the space is displayed |
| `description` | `string` | No | Description of the space |
| `hidden_from_community` | `boolean` | No | Indication about whether the space is visible in the community |
| `id` | `string` | No | Unique identifier of the space |
| `is_invitation_required` | `boolean` | No | Indication about whether users are sent an invitation to join or are directly added to space |
| `is_members_allowed_to_view_members` | `boolean` | No | Indication about whether users can view other users in space |
| `owner` | `Record<string, any>` | No | Information about the space owner |
| `title` | `string` | No | Name of the space |
| `usages` | `any[]` | No | List of space usages in the platform |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `access` | - | Yes | - |
| `collectionId` | - | - | - |
| `description` | - | - | - |
| `hidden_from_community` | - | - | - |
| `id` | - | - | - |
| `is_invitation_required` | - | - | - |
| `is_members_allowed_to_view_members` | - | - | - |
| `owner` | - | - | - |
| `title` | - | Yes | - |
| `usages` | - | - | - |

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
| `bulk` | `boolean` | No | Indication about whether there's a bulk set of codes created for this coupon. |
| `code` | `string` | No | Coupon code |
| `expires` | `null | string` | No | Coupon expiration date, in YYYY-MM-DD format |
| `prefix` | `string | null` | No | Coupon prefix |
| `quantity` | `number | null` | No | Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed) |
| `times_used` | `number` | No | Coupon number of times used. |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `bulk` | - |
| `code` | Yes |
| `expires` | - |
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
| `affiliate` | `Record<string, any>` | No | Related affiliate data |
| `billing_info` | `null | Record<string, any>` | No | Billing info of the payment |
| `coupon` | `null | string` | No | Coupon code |
| `created` | `number` | No | Datetime of the payment was created, in UNIX timestamp format |
| `discount` | `number` | No | Discount of the payment |
| `gateway` | `null | string` | No | Payment gateway name |
| `id` | `string` | No | Unique identifier of the payment |
| `instructors` | `any[]` | No | Related instructor data |
| `instructors_total_percentage` | `null | number` | No | Total percentage of the revenue for the instructor |
| `invoice` | `null | string` | No | Invoice identifier |
| `paid_at` | `number | null` | No | Payment date, in UNIX timestamp format |
| `payment_plan_current_payment` | `number | null` | No | Current payment number of payment plan |
| `payment_plan_total_payments` | `number | null` | No | Total payments number of payment plan |
| `period` | `null | string` | No | Payment plan period |
| `price` | `number` | No | Price of the payment |
| `product` | `Record<string, any>` | No | Related product data |
| `refund_at` | `null | number` | No | Refund date, in UNIX timestamp format |
| `tax_amount` | `number` | No | Tax amount of the payment |
| `tax_percentage` | `number` | No | Tax percentage of the payment |
| `transaction_id` | `string` | No | Transaction id of the payment |
| `type` | `string` | No | Type of the payment |
| `user_id` | `string` | No | Unique identifier of the user |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CouponUsage().list({ id: "example", promotion_id: "example" })
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
| `access` | `string` | No | Access type of course |
| `afterPurchase` | `Record<string, any>` | No | After purchase navigation settings for this course |
| `author` | `Record<string, any> | null` | No | Information about the course author |
| `billing_info` | `Record<string, any> | null` | No | Values of the billing info fields for this user |
| `categories` | `any[]` | No | Categories this course belongs in |
| `courseImage` | `string | null` | No | Course image (full URL) |
| `created` | `number` | No | Date the course was created, in UNIX timestamp format |
| `description` | `string | null` | No | Description of the course |
| `discount_price` | `number` | No | Discount price of the course |
| `dripFeed` | `string` | No | Course setting for scheduled course delivery (drip feed); none refers to drip feed not being enabled. |
| `email` | `string` | No | Email account of the user who submitted the responses |
| `eu_customer` | `boolean | null` | No | Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe. |
| `expires` | `null | number` | No | Expiration timeframe value, defines the expiration timeframe, together with the type / unit in the "expiresType" field. |
| `expiresType` | `string` | No | Expiration timeframe type / unit, defines the expiration timeframe, together with the actual value in the "expires" field. |
| `fields` | `Record<string, any>` | No | Default sign up fields for the School. |
| `final_price` | `number` | No | Final price of the course |
| `grade` | `number` | No | The grade that corresponds to the responses provided by the user |
| `id` | `string` | No | Unique identifier of the course |
| `identifiers` | `Record<string, any>` | No | Course identifiers for in app purchases. |
| `is_admin` | `boolean` | No | Indication about whether the user is an administrator of the school; true if she is, or false if she is not. |
| `is_affiliate` | `boolean` | No | Indication about whether the user is an affiliate of the school; true if she is, or false if she is not. |
| `is_instructor` | `boolean` | No | Indication about whether the user is an instructor in the school; true if she is, or false if she is not. |
| `is_reporter` | `boolean` | No | Indication about whether the user is an reporter in the school; true if she is, or false if she is not. |
| `is_suspended` | `boolean` | No | Indication about whether the user is suspended in the school; true if she is, or false if she is not. |
| `label` | `null | string` | No | Label of the course |
| `last_login` | `null | number` | No | Date of the last login of the user, in UNIX timestamp format |
| `learningUnit` | `Record<string, any>` | No |  |
| `modified` | `number` | No | Date the course was modified for the last time, in UNIX timestamp format |
| `nps_comment` | `string | null` | No | The latest comment submitted by the user on the NPS form. |
| `nps_score` | `number | null` | No | The latest NPS score submitted by the user. |
| `original_price` | `number` | No | Original price of the course |
| `price` | `number` | No | Price of the course |
| `referrer_id` | `string | null` | No | Unique user id of the referrer for this user |
| `role` | `Record<string, any>` | No | Values of the role fields for this user |
| `signup_approval_status` | `string | null` | No | User status regarding the Signup Approval flow |
| `submittedTimestamp` | `number` | No | Date the submission was finished (submitted), in UNIX timestamp format |
| `subscribed_for_marketing_emails` | `boolean | null` | No | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `tags` | `any[]` | No | Array of the tags of the user |
| `title` | `string` | No | Title of the course |
| `titleId` | `string` | Yes | Unique identifier of the course title. |
| `user_id` | `string` | No | Unique identifier of the user who submitted the responses |
| `username` | `string` | No | Username of the user |
| `utms` | `Record<string, any>` | No | Values of the UTM fields for this user |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `access` | - | - | Yes | - |
| `afterPurchase` | - | - | - | - |
| `author` | - | - | - | - |
| `billing_info` | - | - | - | - |
| `categories` | - | - | - | - |
| `courseImage` | - | - | - | - |
| `created` | - | - | - | - |
| `description` | - | - | - | - |
| `discount_price` | - | - | - | - |
| `dripFeed` | - | - | - | - |
| `email` | - | - | - | - |
| `eu_customer` | - | - | - | - |
| `expires` | - | - | - | - |
| `expiresType` | - | - | - | - |
| `fields` | - | - | - | - |
| `final_price` | - | - | - | - |
| `grade` | - | - | - | - |
| `id` | - | - | - | - |
| `identifiers` | - | - | - | - |
| `is_admin` | - | - | - | - |
| `is_affiliate` | - | - | - | - |
| `is_instructor` | - | - | - | - |
| `is_reporter` | - | - | - | - |
| `is_suspended` | - | - | - | - |
| `label` | - | - | - | - |
| `last_login` | - | - | - | - |
| `learningUnit` | - | - | - | - |
| `modified` | - | - | - | - |
| `nps_comment` | - | - | - | - |
| `nps_score` | - | - | - | - |
| `original_price` | - | - | - | - |
| `price` | - | - | - | - |
| `referrer_id` | - | - | - | - |
| `role` | - | - | - | - |
| `signup_approval_status` | - | - | - | - |
| `submittedTimestamp` | - | - | - | - |
| `subscribed_for_marketing_emails` | - | - | - | - |
| `tags` | - | - | - | - |
| `title` | - | - | Yes | - |
| `titleId` | - | - | - | - |
| `user_id` | - | - | - | - |
| `username` | - | - | - | - |
| `utms` | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `grade` | `/v2/courses/{id}/grades` | `client.Course().list({ $action: 'grade', ... })` |
| `user` | `/v2/courses/{id}/users` | `client.Course().list({ $action: 'user', ... })` |

An action returns that action's OWN response, which is not necessarily a
Course record — check the API definition for its shape.

```ts
const result = await client.Course().list({
  $action: 'grade',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Course().create({
  titleId: 'example_titleId',
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
| `avg_score_rate` | `number` | No | Average score (%) |
| `avg_time_to_finish` | `number` | No | Average time to finish the course in seconds |
| `certificates_issued` | `number` | No | Number of issued certifications |
| `id` | `string` | No |  |
| `learning_units` | `number` | No | Number of learning activities |
| `social_interactions` | `number` | No | Number of social interactions |
| `students` | `number` | No | Number of students |
| `success_rate` | `number` | No | Success rate (%) |
| `total_study_time` | `number` | No | Total study time in seconds |
| `video_time` | `number` | No | Total video duration of the course in seconds |
| `video_viewing_time` | `number` | No | Total video time viewed |
| `videos` | `number` | No | Number of videos |

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
| `access` | `string` | No | Access type of the section |
| `description` | `string | null` | No | Description of the section |
| `drip` | `Record<string, any> | null` | No | Drip feed details of the content. |
| `id` | `string` | No | Unique identifier of the section |
| `learningUnits` | `any[]` | No | Learning activities of section |
| `sections` | `any[]` | No |  |
| `title` | `string` | No | Title of the section |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `sections` | `/v2/courses/{id}/sections` | `client.CourseContent().create({ $action: 'sections', ... })` |

An action returns that action's OWN response, which is not necessarily a
CourseContent record — check the API definition for its shape.

```ts
const result = await client.CourseContent().create({
  $action: 'sections',
  /* ...the action's own arguments */
})
```

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
const results = await client.CourseContent().list({ id: "example" })
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
| `activity` | `string` | No | Name of the activity |
| `additional_info` | `Record<string, any> | null` | No | Additional info related to the activity. |
| `created` | `number` | No | Date the event log was created, in UNIX timestamp format |
| `description` | `string` | No | Description of the activity |
| `type` | `string | null` | No | Type of the activity |
| `user` | `Record<string, any>` | No | User details related to event log |

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
| `amount` | `number` | No | Amount per installment |
| `current_period_end` | `number` | No | End of the current period that the installment has been invoiced for, in UNIX timestamp format |
| `current_period_start` | `number` | No | Start of the current period that the installment has been invoiced for, in UNIX timestamp format |
| `email` | `string` | No | Email of the user |
| `ends_at` | `number | null` | No | Datetime the installment ends, in UNIX timestamp format |
| `firstAmount` | `number` | No | Ιnitial amount of money the customers have to pay up front. |
| `firstInstallmentDate` | `number | null` | No | Date of the first installment, in UNIX timestamp format |
| `firstInstallmentType` | `string` | No | Type of the first installment |
| `firstInstallmentlDays` | `number` | No | Number of days since the first installment |
| `id` | `string` | No | Unique identifier of the installment |
| `installmentIntervalType` | `string` | No | How much time between each installment |
| `isCancelable` | `boolean` | No | Indication about whether the installment can be canceled; true if it is cancelable, or false if it is not. |
| `name` | `string` | No | Name of the installment |
| `paymentsCount` | `number` | No | Number of payments of the installment |
| `paymentsPayed` | `number` | No | Number of completed payments of the installment |
| `plan_id` | `string` | No | Unique identifier of the subscription plan |
| `productId` | `string` | No | Unique identifier of the product |
| `productType` | `string` | No | Type of the product |
| `status` | `string` | No | Status of the installment |
| `type` | `string` | No | Type of the installment |
| `user_id` | `string` | No | Unique identifier of the user |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `active` | `/v2/installments/active` | `client.Installment().list({ $action: 'active', ... })` |

An action returns that action's OWN response, which is not necessarily a
Installment record — check the API definition for its shape.

```ts
const result = await client.Installment().list({
  $action: 'active',
  /* ...the action's own arguments */
})
```

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
| `created` | `number` | No | Date the lead was created, in UNIX timestamp format |
| `email` | `string` | No | Email account of the user |
| `eu_customer` | `boolean | null` | No | Indication of whether the user is located in Europe; true if she is, or false if she's not located in Europe. |
| `first_name` | `string` | No | First Name of the user |
| `last_name` | `string` | No | Last name of the user |
| `page_submitted` | `string | null` | No | Page of the academy, in which the lead submitted their email account |
| `submissions` | `any[]` | No | Array of the all the submissions of this email account in lead capture forms of the academy |
| `subscribed_for_marketing_emails` | `boolean | null` | No | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `tags` | `any[]` | No | Array of the tags of the user |
| `user_id` | `string | null` | No | The unique identifier of the respective user |
| `user_registered_at` | `number | null` | No | Date the respective lead was also registered as a user, in UNIX timestamp format |
| `utms` | `Record<string, any>` | No | Values of the UTM fields for this user |

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
| `access` | `string` | No | Access status of the seat offering. |
| `add_to_active_seat` | `boolean` | No | Indication about whether the user is assigned a seat in the seat offering; true if she is, or false if she is not. |
| `available_seats` | `number` | No | Number of available seats in the offering. |
| `created` | `number` | No | Date the seat offering was created; displayed in UNIX timestamp format. |
| `description` | `string` | No | Description of the seat offering. |
| `id` | `string` | No | Unique identifier of the seat offering. |
| `max_number_of_users` | `number` | No | Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added. |
| `modified` | `number` | No | Date the seat offering was modified for the last time; displayed in UNIX timestamp format. |
| `number_of_seats` | `number` | No | Number of the seats in the offering. |
| `products` | `Record<string, any>` | No | Products in the seat offering |
| `seat_managers` | `any[]` | No | Unique identifier of each seat manager. |
| `success` | `boolean` | No |  |
| `tags` | `any[]` | No | Tags assigned to the users added to the seat offering. |
| `title` | `string` | No | Title of the seat offering. |
| `total_enrollments` | `number` | No | Total enrollements of the seat offering. |

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
| `affiliate` | `Record<string, any>` | No | Related affiliate data |
| `billing_info` | `null | Record<string, any>` | No | Billing info of the payment |
| `coupon` | `null | string` | No | Coupon code |
| `created` | `number` | No | Datetime of the payment was created, in UNIX timestamp format |
| `discount` | `number` | No | Discount of the payment |
| `expires_at` | `number` | No | Date the invoice expires, in UNIX timestamp format |
| `gateway` | `null | string` | No | Payment gateway name |
| `id` | `string` | No | Unique identifier of the payment |
| `instructors` | `any[]` | No | Related instructor data |
| `instructors_total_percentage` | `null | number` | No | Total percentage of the revenue for the instructor |
| `invoice` | `null | string` | No | Invoice identifier |
| `paid_at` | `number | null` | No | Payment date, in UNIX timestamp format |
| `payment_plan_current_payment` | `number | null` | No | Current payment number of payment plan |
| `payment_plan_total_payments` | `number | null` | No | Total payments number of payment plan |
| `period` | `null | string` | No | Payment plan period |
| `price` | `number` | No | Price of the payment |
| `product` | `Record<string, any>` | No | Related product data |
| `refund_at` | `null | number` | No | Refund date, in UNIX timestamp format |
| `tax_amount` | `number` | No | Tax amount of the payment |
| `tax_percentage` | `number` | No | Tax percentage of the payment |
| `transaction_id` | `string` | No | Transaction id of the payment |
| `type` | `string` | No | Type of the payment |
| `url` | `string` | No | Url of invoice |
| `user_id` | `string` | No | Unique identifier of the user |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `invoice_link` | `/v2/payments/{id}/invoice-link` | `client.Payment().load({ $action: 'invoice_link', ... })` |

An action returns that action's OWN response, which is not necessarily a
Payment record — check the API definition for its shape.

```ts
const result = await client.Payment().load({
  $action: 'invoice_link',
  /* ...the action's own arguments */
})
```

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
| `applies_to_all` | `any[]` | No | All courses and/or bundles that the promotion coupon will be applied to. |
| `bulk` | `boolean` | No | Indication about whether there's a bulk set of codes created for this coupon. |
| `code` | `string` | No | Coupon code |
| `coupons` | `any[]` | No | Promotion coupons |
| `created` | `number` | No | Date the promotion was created, in UNIX timestamp format |
| `expires` | `null | string` | No | Coupon expiration date, in YYYY-MM-DD format |
| `id` | `string` | No | Unique identifier of the promotion |
| `modified` | `number` | No | Date the promotion was modified for the last time, in UNIX timestamp format |
| `name` | `string` | No | Name of the promotion |
| `prefix` | `string | null` | No | Coupon prefix |
| `products` | `any[]` | No | Specific products that the promotion coupon will be applied to |
| `quantity` | `number | null` | No | Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed) |
| `times_used` | `number` | No | Coupon number of times used. |
| `type` | `string` | No | Type of discount |
| `value` | `number` | No | Percentage or fixed amount of discount |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `applies_to_all` | - | - | - |
| `bulk` | - | - | - |
| `code` | - | - | - |
| `coupons` | - | - | - |
| `created` | - | - | - |
| `expires` | - | - | - |
| `id` | - | - | - |
| `modified` | - | - | - |
| `name` | - | - | Yes |
| `prefix` | - | - | - |
| `products` | - | - | - |
| `quantity` | - | - | - |
| `times_used` | - | - | - |
| `type` | - | - | - |
| `value` | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `coupon` | `/v2/promotions/{pid}/coupons` | `client.Promotion().list({ $action: 'coupon', ... })` |

An action returns that action's OWN response, which is not necessarily a
Promotion record — check the API definition for its shape.

```ts
const result = await client.Promotion().list({
  $action: 'coupon',
  /* ...the action's own arguments */
})
```

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
| `average_score_rate` | `number` | No | Average score percentage |
| `completed_at` | `number | null` | No | Completion date in UNIX timestamp format. |
| `completed_units` | `number` | No | Total number of completed course learning activities by the user |
| `course_id` | `string` | No | Unique identifier of the course |
| `progress_per_section_unit` | `any[]` | No | User progress data per section/learning activity |
| `progress_rate` | `number` | No | Progress rate (%) |
| `status` | `string` | No | Status of user progress |
| `time_on_course` | `number` | No | Time spent on the course in seconds |
| `total_units` | `number` | No | Total number of course learning activities |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Reporting().list({ user_id: "example" })
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
| `access` | `string` | No | Access status of the seat offering. |
| `available_seats` | `number` | No | Number of available seats in the offering. |
| `created` | `number` | No | Date the seat offering was created; displayed in UNIX timestamp format. |
| `description` | `string` | No | Description of the seat offering. |
| `id` | `string` | No | Unique identifier of the seat offering. |
| `max_number_of_users` | `number` | No | Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added. |
| `modified` | `number` | No | Date the seat offering was modified for the last time; displayed in UNIX timestamp format. |
| `number_of_seats` | `number` | No | Number of the seats in the offering. |
| `products` | `Record<string, any>` | No | Products in the seat offering |
| `seat_managers` | `any[]` | No | Unique identifier of each seat manager. |
| `tags` | `any[]` | No | Tags assigned to the users added to the seat offering. |
| `title` | `string` | No | Title of the seat offering. |
| `total_enrollments` | `number` | No | Total enrollements of the seat offering. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `access` | - | - | - |
| `available_seats` | - | - | - |
| `created` | - | - | - |
| `description` | - | - | - |
| `id` | - | - | - |
| `max_number_of_users` | - | - | - |
| `modified` | - | - | - |
| `number_of_seats` | - | Yes | Yes |
| `products` | - | Yes | Yes |
| `seat_managers` | - | - | - |
| `tags` | - | - | - |
| `title` | - | Yes | Yes |
| `total_enrollments` | - | - | - |

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
| `access` | `string` | No | Access type of the subscription |
| `afterPurchase` | `Record<string, any>` | No | After purchase navigation settings for this subscription plan |
| `created` | `number` | No | Date the subscription plan was created, in UNIX timestamp format |
| `description` | `string | null` | No | Description of the subscription |
| `id` | `string` | No | Unique identifier of the subscription plan |
| `image` | `string | null` | No | Subscription plan image (full URL) |
| `interval` | `number` | No | Billing interval value |
| `interval_type` | `string` | No | Billing interval type |
| `modified` | `number` | No | Date the subscription plan was modified for the last time, in UNIX timestamp format |
| `price` | `number` | No | Price of the subscription plan |
| `products` | `Record<string, any>` | No | Products in the subsription |
| `stripePlanId` | `string` | No | Stripe's plan Id |
| `title` | `string` | No | Title of the subscription plan |
| `trial_period_days` | `number` | No | Number of days the trial subscription plan lasts |

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
| `avg_score_rate` | `number` | No | Average score (%) |
| `avg_study_time` | `number` | No | Average study time in seconds |
| `id` | `string` | No |  |
| `name` | `string` | No | Name of the learning activity |
| `total_study_time` | `number` | No | Total study time in seconds |
| `type` | `string` | No | Type of the learning activity |
| `users_completed` | `number` | No | Number of users that have completed this learning activity |
| `viewers` | `number` | No | Number of users that have viewed this learning activity |

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
| `async` | `boolean` | No | Indication about whether the request will be executed asynchronously; true if it’s an asynchronous task, false if it is not. |
| `job_id` | `string` | No | Unique identifier of the asynchronous task; empty if the task is not asynchronous.” Ensure that the documentation link is accordingly updated |
| `send_course_complete_email` | `boolean` | Yes | Indication about whether the user will receive the completion emails; true if she should receive the emails, false if she should not. |
| `units` | `any[]` | Yes | Unique identifiers of the learning activities that should be marked as complete; empty if the progress of the whole course should be marked as complete. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UpdateUserProgress().create({
  course_id: 'example_course_id',
  user_id: 'example_user_id',
  send_course_complete_email: true,
  units: [],
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
| `action` | `string` | Yes | The exact action to be performed with the aforementioned tags to the specified user; 'attach' is the indication to add these tags to the user and 'detach' is the indication to remove them from the user. |
| `active` | `boolean` | No | True or false whether user is active in seat offering |
| `answers` | `any[]` | No | Related answers data |
| `billing_info` | `Record<string, any> | null` | No | Values of the billing info fields for this user |
| `course` | `Record<string, any>` | No |  |
| `created` | `number` | No | Date the user was created, in UNIX timestamp format |
| `description` | `string | null` | No | Description of the segment |
| `duration` | `number` | No | Duration of the product. |
| `duration_type` | `string` | No | Duration type of the product. |
| `email` | `string` | No | Email account of the user |
| `eu_customer` | `boolean | null` | No | Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe. |
| `expires` | `null | number` | No | Date the enrollment expires, in UNIX timestamp format |
| `fields` | `Record<string, any>` | No | Default sign up fields for the School. |
| `generalFeedback` | `string | null` | No | General feedback for a submission |
| `got_seat_on` | `number` | No | Date user was added to the seat offering, in UNIX timestamp |
| `grade` | `number | null` | No | The grade that corresponds to the responses provided by the user |
| `id` | `string` | No | Unique identifier of the user |
| `is_admin` | `boolean` | No | Indication about whether the user is an administrator of the school; true if she is, or false if she is not. |
| `is_affiliate` | `boolean` | No | Indication about whether the user is an affiliate of the school; true if she is, or false if she is not. |
| `is_instructor` | `boolean` | No | Indication about whether the user is an instructor in the school; true if she is, or false if she is not. |
| `is_reporter` | `boolean` | No | Indication about whether the user is an reporter in the school; true if she is, or false if she is not. |
| `is_suspended` | `boolean` | No | Indication about whether the user is suspended in the school; true if she is, or false if she is not. |
| `justification` | `string | null` | No | Any justification/note for the enrollment |
| `last_login` | `null | number` | No | Date of the last login of the user, in UNIX timestamp format |
| `modified` | `number` | No | Date the submission was modified for the last time, in UNIX timestamp format |
| `name` | `string` | No | Name of the segment |
| `nps_comment` | `string | null` | No | The latest comment submitted by the user on the NPS form. |
| `nps_score` | `number | null` | No | The latest NPS score submitted by the user. |
| `passed` | `boolean | null` | No | Indication about whether or not the assessment result was passed or failed |
| `password` | `string` | No | Password of the user |
| `price` | `number` | Yes | Price of the product |
| `productId` | `string` | Yes | Unique identifier of the product |
| `productType` | `string` | Yes | Type of the product |
| `referrer_id` | `string | null` | No | Unique user id of the referrer for this user |
| `role` | `Record<string, any>` | No | Values of the role fields for this user |
| `send_enrollment_email` | `boolean | null` | No | Indication about whether the user should receive the enrollment email; true if she should receive the email, false if she should not. |
| `send_registration_email` | `boolean | null` | No | Indication about whether the user will receive the registration emails; true if she should receive the emails, false if she should not. |
| `signup_approval_status` | `string | null` | No | User status regarding the Signup Approval flow |
| `signup_validation_rules` | `boolean` | No | Indication about whether validation rules should be applied; default value equals to false, which means that validation rules should not be applied. |
| `submittedTimestamp` | `number` | No | Date the submission was finished (submitted), in UNIX timestamp format |
| `subscribed_for_marketing_emails` | `boolean | null` | No | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `success` | `boolean` | No | Indication about whether the action of the enrollment was successful; true if it was successful, or false if it was not. |
| `tags` | `any[]` | No | Array of the tags of the user |
| `title` | `string` | No | Title of the seat offering. |
| `type` | `string` | No | Type of the product |
| `user_id` | `string` | No | Unique identifier of the user who submitted the responses |
| `username` | `string` | No | Username of the user |
| `utms` | `Record<string, any>` | No | Values of the UTM fields for this user |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `action` | - | - | - | - | - |
| `active` | - | - | - | - | - |
| `answers` | - | - | - | - | - |
| `billing_info` | - | - | - | - | - |
| `course` | - | - | - | - | - |
| `created` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `duration` | - | - | - | - | - |
| `duration_type` | - | - | - | - | - |
| `email` | - | - | Yes | - | - |
| `eu_customer` | - | - | - | - | - |
| `expires` | - | - | - | - | - |
| `fields` | - | - | - | - | - |
| `generalFeedback` | - | - | - | - | - |
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
| `productId` | - | - | - | - | - |
| `productType` | - | - | - | - | - |
| `referrer_id` | - | - | - | - | - |
| `role` | - | - | - | - | - |
| `send_enrollment_email` | - | - | - | - | - |
| `send_registration_email` | - | - | - | - | - |
| `signup_approval_status` | - | - | - | - | - |
| `signup_validation_rules` | - | - | - | - | - |
| `submittedTimestamp` | - | - | - | - | - |
| `subscribed_for_marketing_emails` | - | - | - | - | - |
| `success` | - | - | - | - | - |
| `tags` | - | - | - | Yes | - |
| `title` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `user_id` | - | - | - | - | - |
| `username` | - | - | Yes | - | - |
| `utms` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `enrollment` | `/v2/users/{id}/enrollment` | `client.User().create({ $action: 'enrollment', ... })` |
| `by_product` | `/v2/users/by-product` | `client.User().list({ $action: 'by_product', ... })` |
| `by_segment` | `/v2/users/by-segment` | `client.User().list({ $action: 'by_segment', ... })` |
| `course` | `/v2/users/{id}/courses` | `client.User().list({ $action: 'course', ... })` |
| `product` | `/v2/users/{id}/products` | `client.User().list({ $action: 'product', ... })` |
| `segment` | `/v2/users/segments` | `client.User().list({ $action: 'segment', ... })` |
| `seat` | `/v2/users/{id}/seats` | `client.User().load({ $action: 'seat', ... })` |
| `enrollment` | `/v2/users/{id}/enrollment` | `client.User().remove({ $action: 'enrollment', ... })` |
| `suspend` | `/v2/users/{id}/suspend` | `client.User().update({ $action: 'suspend', ... })` |
| `tag` | `/v2/users/{id}/tags` | `client.User().update({ $action: 'tag', ... })` |
| `unsuspend` | `/v2/users/{id}/unsuspend` | `client.User().update({ $action: 'unsuspend', ... })` |

An action returns that action's OWN response, which is not necessarily a
User record — check the API definition for its shape.

```ts
const result = await client.User().create({
  $action: 'enrollment',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.User().create({
  id: 'example_id',
  user_group_id: 'example_user_group_id',
  action: 'example_action',
  price: 1,
  productId: 'example_productId',
  productType: 'example_productType',
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
| `assigned_courses` | `any[]` | No | Courses to be assigned to the instructor; empty if the user is not an instructor or if no courses should be assigned to the user. |
| `assigned_seat_offering_ids` | `any[]` | No | Unique identifier of the seat offerings to be assigned to the seat manager; empty if the user is not a seat manager or if no offerings should be assigned to the user. |
| `assigned_segment_id` | `string` | No | Unique identifier of the segment to be assigned to the reporter; empty if the user is not a reporter or if no segment should be assigned to the user. |
| `assigned_user_group_ids` | `any[]` | No | Unique identifier of the user groups to be assigned to the user group manager; empty if the user is not a group manager or if no groups should be assigned to the user. |
| `created` | `number` | No | Date the user group was created; displayed in UNIX timestamp format. |
| `description` | `string` | No | Description of the user group. |
| `enroll_users_on_courses` | `boolean` | No | Enroll users in all selected courses automatically upon joining the user group. |
| `group_managers` | `any[]` | No | Unique identifier of each group manager. |
| `id` | `string` | No | Unique identifier of the user group. |
| `max_number_of_users` | `number` | No | Max number of users who can be added to a user group; empty if there is no limit to the number of users who can be added. |
| `modified` | `number` | No | Date the user group was modified for the last time; displayed in UNIX timestamp format. |
| `products` | `Record<string, any>` | No | Products in the user group |
| `role_id` | `string` | Yes | Unique identifier of the new user role |
| `tags` | `any[]` | No | Tags assigned to the users added to the user group. |
| `title` | `string` | No | Title of the user group. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `assigned_courses` | - | - | - | - |
| `assigned_seat_offering_ids` | - | - | - | - |
| `assigned_segment_id` | - | - | - | - |
| `assigned_user_group_ids` | - | - | - | - |
| `created` | - | - | - | - |
| `description` | - | - | - | - |
| `enroll_users_on_courses` | - | - | - | - |
| `group_managers` | - | - | - | - |
| `id` | - | - | - | - |
| `max_number_of_users` | - | - | - | - |
| `modified` | - | - | - | - |
| `products` | - | - | Yes | Yes |
| `role_id` | - | - | - | - |
| `tags` | - | - | - | - |
| `title` | - | - | Yes | Yes |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `user-role` | `/v2/users/{id}/user-role` | `client.UserGroup().update({ $action: 'user-role', ... })` |

An action returns that action's OWN response, which is not necessarily a
UserGroup record — check the API definition for its shape.

```ts
const result = await client.UserGroup().update({
  $action: 'user-role',
  /* ...the action's own arguments */
})
```

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
| `section_id` | `string` | No | Unique identifier of the section |
| `units` | `any[]` | No | User progress data per unit |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserProgress().list({ course_id: "example", user_id: "example" })
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
| `access_level` | `any` | No | Access level of the user role |
| `course_id` | `string` | No | Unique identifier of the course assigned to the instructor. |
| `custom_role` | `boolean` | No | `true` if role is a custom role created by school owner |
| `description` | `string` | No | Description of the user role |
| `id` | `string` | No | Unique identifier of the role |
| `revenue_share_percentage` | `number` | No | Instructor's revenue share (% ) from the assigned course e.g. |
| `title` | `string` | No | Title of the role |

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
| `created` | `null | number` | No | Date the subscription was created, in UNIX timestamp format |
| `email` | `string` | No | Email of the user |
| `expires_at` | `null | number` | No | Date the subscription expires, in UNIX timestamp format |
| `plan_id` | `string` | No | Unique identifier of the subscription plan |
| `provider` | `string` | No | Provider of the subscription |
| `provider_meta` | `Record<string, any> | null` | No | Metadata of the subscription provider. |
| `status` | `string` | No | Status of the subscription |
| `user_id` | `string` | No | Unique identifier of the user |

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
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ts
const client = new LearnworldsSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

