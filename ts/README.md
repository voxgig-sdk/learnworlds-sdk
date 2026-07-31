# Learnworlds TypeScript SDK



The TypeScript SDK for the Learnworlds API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Active()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/learnworlds-sdk/releases](https://github.com/voxgig-sdk/learnworlds-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { LearnworldsSDK } from '@voxgig-sdk/learnworlds'

const client = new LearnworldsSDK()
```

### 3. Load an unitanalytics

UnitAnalytics is nested under course, so provide the `course_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const unitanalytics = await client.UnitAnalytics().load({
    course_id: 'example_course_id',
    id: 'example_id',
  })
  console.log(unitanalytics)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const assessments = await client.Assessment().list()
  console.log(assessments)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = LearnworldsSDK.test()

const assessment = await client.Assessment().list()
// assessment is a bare entity populated with mock response data
console.log(assessment)
```

You can also use the instance method:

```ts
const client = new LearnworldsSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Assessment()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new LearnworldsSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
LEARNWORLDS_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### LearnworldsSDK

#### Constructor

```ts
new LearnworldsSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Active(data?)` | `ActiveEntity` | Create an Active entity instance. |
| `Affiliate(data?)` | `AffiliateEntity` | Create an Affiliate entity instance. |
| `Assessment(data?)` | `AssessmentEntity` | Create an Assessment entity instance. |
| `Bundle(data?)` | `BundleEntity` | Create a Bundle entity instance. |
| `ByProduct(data?)` | `ByProductEntity` | Create a ByProduct entity instance. |
| `BySegment(data?)` | `BySegmentEntity` | Create a BySegment entity instance. |
| `Calendar(data?)` | `CalendarEntity` | Create a Calendar entity instance. |
| `Certificate(data?)` | `CertificateEntity` | Create a Certificate entity instance. |
| `Community(data?)` | `CommunityEntity` | Create a Community entity instance. |
| `CommunityPost(data?)` | `CommunityPostEntity` | Create a CommunityPost entity instance. |
| `CommunitySpace(data?)` | `CommunitySpaceEntity` | Create a CommunitySpace entity instance. |
| `Completed(data?)` | `CompletedEntity` | Create a Completed entity instance. |
| `Coupon(data?)` | `CouponEntity` | Create a Coupon entity instance. |
| `CouponUsage(data?)` | `CouponUsageEntity` | Create a CouponUsage entity instance. |
| `Course(data?)` | `CourseEntity` | Create a Course entity instance. |
| `CourseAnalytics(data?)` | `CourseAnalyticsEntity` | Create a CourseAnalytics entity instance. |
| `CourseContent(data?)` | `CourseContentEntity` | Create a CourseContent entity instance. |
| `Due(data?)` | `DueEntity` | Create a Due entity instance. |
| `Event(data?)` | `EventEntity` | Create an Event entity instance. |
| `EventLog(data?)` | `EventLogEntity` | Create an EventLog entity instance. |
| `Form(data?)` | `FormEntity` | Create a Form entity instance. |
| `Installment(data?)` | `InstallmentEntity` | Create an Installment entity instance. |
| `Lead(data?)` | `LeadEntity` | Create a Lead entity instance. |
| `MultipleSeat(data?)` | `MultipleSeatEntity` | Create a MultipleSeat entity instance. |
| `Payment(data?)` | `PaymentEntity` | Create a Payment entity instance. |
| `Post(data?)` | `PostEntity` | Create a Post entity instance. |
| `Promotion(data?)` | `PromotionEntity` | Create a Promotion entity instance. |
| `Reporting(data?)` | `ReportingEntity` | Create a Reporting entity instance. |
| `Score(data?)` | `ScoreEntity` | Create a Score entity instance. |
| `Seat(data?)` | `SeatEntity` | Create a Seat entity instance. |
| `Segment(data?)` | `SegmentEntity` | Create a Segment entity instance. |
| `Space(data?)` | `SpaceEntity` | Create a Space entity instance. |
| `SubscriptionPlan(data?)` | `SubscriptionPlanEntity` | Create a SubscriptionPlan entity instance. |
| `Unit(data?)` | `UnitEntity` | Create an Unit entity instance. |
| `UnitAnalytics(data?)` | `UnitAnalyticsEntity` | Create an UnitAnalytics entity instance. |
| `Upcoming(data?)` | `UpcomingEntity` | Create an Upcoming entity instance. |
| `UpdateUserProgress(data?)` | `UpdateUserProgressEntity` | Create an UpdateUserProgress entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserGroup(data?)` | `UserGroupEntity` | Create an UserGroup entity instance. |
| `UserProgress(data?)` | `UserProgressEntity` | Create an UserProgress entity instance. |
| `UserRole(data?)` | `UserRoleEntity` | Create an UserRole entity instance. |
| `UserSubscription(data?)` | `UserSubscriptionEntity` | Create an UserSubscription entity instance. |
| `tester(testopts?, sdkopts?)` | `LearnworldsSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `LearnworldsSDK.test(testopts?, sdkopts?)` | `LearnworldsSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): LearnworldsSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Active

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Affiliate

| Field | Description |
| --- | --- |
| `affiliate` |  |
| `affiliate_id` |  |
| `amount` |  |
| `billing_info` |  |
| `click` |  |
| `code` |  |
| `commission` |  |
| `commission_percentage` |  |
| `completed_by` |  |
| `coupon` |  |
| `created` |  |
| `customer` |  |
| `date` |  |
| `discount` |  |
| `due` |  |
| `email` |  |
| `eu_customer` |  |
| `field` |  |
| `gateway` |  |
| `id` |  |
| `instructor` |  |
| `instructors_total_percentage` |  |
| `invoice` |  |
| `is_admin` |  |
| `is_affiliate` |  |
| `is_instructor` |  |
| `is_reporter` |  |
| `is_suspended` |  |
| `last_login` |  |
| `lead` |  |
| `nps_comment` |  |
| `nps_score` |  |
| `paid_at` |  |
| `payment` |  |
| `payment_method` |  |
| `payment_note` |  |
| `payment_plan_current_payment` |  |
| `payment_plan_total_payment` |  |
| `payout` |  |
| `pending` |  |
| `period` |  |
| `price` |  |
| `product` |  |
| `referrer_id` |  |
| `refund_at` |  |
| `role` |  |
| `sale` |  |
| `signup_approval_status` |  |
| `subscribed_for_marketing_email` |  |
| `tag` |  |
| `tax_amount` |  |
| `tax_percentage` |  |
| `transaction_id` |  |
| `type` |  |
| `user_id` |  |
| `username` |  |
| `utm` |  |

Operations: create, list.

API path: `/v2/affiliates/{id}`

#### Assessment

| Field | Description |
| --- | --- |
| `answer` |  |
| `created` |  |
| `email` |  |
| `general_feedback` |  |
| `grade` |  |
| `id` |  |
| `modified` |  |
| `passed` |  |
| `submitted_timestamp` |  |
| `user_id` |  |

Operations: list.

API path: `/v2/forms/{id}/responses`

#### Bundle

| Field | Description |
| --- | --- |
| `access` |  |
| `after_purchase` |  |
| `created` |  |
| `description` |  |
| `id` |  |
| `image` |  |
| `modified` |  |
| `payment_plan` |  |
| `price` |  |
| `product` |  |
| `title` |  |

Operations: list, load.

API path: `/v2/bundles`

#### ByProduct

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### BySegment

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Calendar

| Field | Description |
| --- | --- |
| `booking_detail` |  |
| `product_id` |  |
| `start_date` |  |
| `title` |  |
| `type` |  |

Operations: list.

API path: `/v2/school/events`

#### Certificate

| Field | Description |
| --- | --- |
| `attempt` |  |
| `course_id` |  |
| `external_url` |  |
| `form` |  |
| `id` |  |
| `issued` |  |
| `provider` |  |
| `score` |  |
| `short_url` |  |
| `status` |  |
| `title` |  |
| `type` |  |
| `user` |  |

Operations: list, remove, update.

API path: `/v2/certificates`

#### Community

| Field | Description |
| --- | --- |
| `access` |  |
| `collection_id` |  |
| `created` |  |
| `data` |  |
| `description` |  |
| `display_order` |  |
| `hidden_from_community` |  |
| `id` |  |
| `is_invitation_required` |  |
| `is_members_allowed_to_view_member` |  |
| `item` |  |
| `like` |  |
| `mention` |  |
| `modified` |  |
| `name` |  |
| `owner` |  |
| `posted_in` |  |
| `space_id` |  |
| `status` |  |
| `text` |  |
| `title` |  |
| `uid` |  |
| `upvote` |  |
| `usage` |  |
| `user` |  |
| `username` |  |

Operations: create, list, remove.

API path: `/v2/community/spaces/{id}/users`

#### CommunityPost

| Field | Description |
| --- | --- |
| `created` |  |
| `id` |  |
| `item` |  |
| `like` |  |
| `mention` |  |
| `posted_in` |  |
| `text` |  |
| `upvote` |  |
| `user` |  |

Operations: load.

API path: `/v2/community/posts/{id}`

#### CommunitySpace

| Field | Description |
| --- | --- |
| `access` |  |
| `collection_id` |  |
| `description` |  |
| `hidden_from_community` |  |
| `id` |  |
| `is_invitation_required` |  |
| `is_members_allowed_to_view_member` |  |
| `owner` |  |
| `title` |  |
| `usage` |  |

Operations: create, load, update.

API path: `/v2/community/spaces`

#### Completed

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Coupon

| Field | Description |
| --- | --- |
| `bulk` |  |
| `code` |  |
| `expire` |  |
| `prefix` |  |
| `quantity` |  |
| `times_used` |  |

Operations: create.

API path: `/v2/promotions/{pid}/coupons`

#### CouponUsage

| Field | Description |
| --- | --- |
| `affiliate` |  |
| `billing_info` |  |
| `coupon` |  |
| `created` |  |
| `discount` |  |
| `gateway` |  |
| `id` |  |
| `instructor` |  |
| `instructors_total_percentage` |  |
| `invoice` |  |
| `paid_at` |  |
| `payment_plan_current_payment` |  |
| `payment_plan_total_payment` |  |
| `period` |  |
| `price` |  |
| `product` |  |
| `refund_at` |  |
| `tax_amount` |  |
| `tax_percentage` |  |
| `transaction_id` |  |
| `type` |  |
| `user_id` |  |

Operations: list.

API path: `/v2/promotions/{pid}/coupons/{cid}/usage`

#### Course

| Field | Description |
| --- | --- |
| `access` |  |
| `after_purchase` |  |
| `author` |  |
| `billing_info` |  |
| `category` |  |
| `course_image` |  |
| `created` |  |
| `description` |  |
| `discount_price` |  |
| `drip_feed` |  |
| `email` |  |
| `eu_customer` |  |
| `expire` |  |
| `expires_type` |  |
| `field` |  |
| `final_price` |  |
| `grade` |  |
| `id` |  |
| `identifier` |  |
| `is_admin` |  |
| `is_affiliate` |  |
| `is_instructor` |  |
| `is_reporter` |  |
| `is_suspended` |  |
| `label` |  |
| `last_login` |  |
| `learning_unit` |  |
| `modified` |  |
| `nps_comment` |  |
| `nps_score` |  |
| `original_price` |  |
| `price` |  |
| `referrer_id` |  |
| `role` |  |
| `signup_approval_status` |  |
| `submitted_timestamp` |  |
| `subscribed_for_marketing_email` |  |
| `tag` |  |
| `title` |  |
| `title_id` |  |
| `user_id` |  |
| `username` |  |
| `utm` |  |

Operations: create, list, load, update.

API path: `/v2/courses`

#### CourseAnalytics

| Field | Description |
| --- | --- |
| `avg_score_rate` |  |
| `avg_time_to_finish` |  |
| `certificates_issued` |  |
| `learning_unit` |  |
| `social_interaction` |  |
| `student` |  |
| `success_rate` |  |
| `total_study_time` |  |
| `video` |  |
| `video_time` |  |
| `video_viewing_time` |  |

Operations: load.

API path: `/v2/courses/{id}/analytics`

#### CourseContent

| Field | Description |
| --- | --- |
| `access` |  |
| `description` |  |
| `drip` |  |
| `id` |  |
| `learning_unit` |  |
| `section` |  |
| `title` |  |

Operations: create, list.

API path: `/v2/courses/{id}/sections`

#### Due

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Event

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### EventLog

| Field | Description |
| --- | --- |
| `activity` |  |
| `additional_info` |  |
| `created` |  |
| `description` |  |
| `type` |  |
| `user` |  |

Operations: list.

API path: `/v2/event-logs`

#### Form

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Installment

| Field | Description |
| --- | --- |
| `amount` |  |
| `current_period_end` |  |
| `current_period_start` |  |
| `email` |  |
| `ends_at` |  |
| `first_amount` |  |
| `first_installment_date` |  |
| `first_installment_type` |  |
| `first_installmentl_day` |  |
| `id` |  |
| `installment_interval_type` |  |
| `is_cancelable` |  |
| `name` |  |
| `payments_count` |  |
| `payments_payed` |  |
| `plan_id` |  |
| `product_id` |  |
| `product_type` |  |
| `status` |  |
| `type` |  |
| `user_id` |  |

Operations: list.

API path: `/v2/installments/active`

#### Lead

| Field | Description |
| --- | --- |
| `created` |  |
| `email` |  |
| `eu_customer` |  |
| `first_name` |  |
| `last_name` |  |
| `page_submitted` |  |
| `submission` |  |
| `subscribed_for_marketing_email` |  |
| `tag` |  |
| `user_id` |  |
| `user_registered_at` |  |
| `utm` |  |

Operations: list.

API path: `/v2/leads`

#### MultipleSeat

| Field | Description |
| --- | --- |
| `access` |  |
| `add_to_active_seat` |  |
| `available_seat` |  |
| `created` |  |
| `description` |  |
| `id` |  |
| `max_number_of_user` |  |
| `modified` |  |
| `number_of_seat` |  |
| `product` |  |
| `seat_manager` |  |
| `success` |  |
| `tag` |  |
| `title` |  |
| `total_enrollment` |  |

Operations: create, list, remove.

API path: `/v2/seats/{id}/users/{uid}`

#### Payment

| Field | Description |
| --- | --- |
| `affiliate` |  |
| `billing_info` |  |
| `coupon` |  |
| `created` |  |
| `discount` |  |
| `expires_at` |  |
| `gateway` |  |
| `id` |  |
| `instructor` |  |
| `instructors_total_percentage` |  |
| `invoice` |  |
| `paid_at` |  |
| `payment_plan_current_payment` |  |
| `payment_plan_total_payment` |  |
| `period` |  |
| `price` |  |
| `product` |  |
| `refund_at` |  |
| `tax_amount` |  |
| `tax_percentage` |  |
| `transaction_id` |  |
| `type` |  |
| `url` |  |
| `user_id` |  |

Operations: list, load.

API path: `/v2/payments`

#### Post

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Promotion

| Field | Description |
| --- | --- |
| `applies_to_all` |  |
| `bulk` |  |
| `code` |  |
| `coupon` |  |
| `created` |  |
| `expire` |  |
| `id` |  |
| `modified` |  |
| `name` |  |
| `prefix` |  |
| `product` |  |
| `quantity` |  |
| `times_used` |  |
| `type` |  |
| `value` |  |

Operations: create, list, load.

API path: `/v2/promotions`

#### Reporting

| Field | Description |
| --- | --- |
| `average_score_rate` |  |
| `completed_at` |  |
| `completed_unit` |  |
| `course_id` |  |
| `progress_per_section_unit` |  |
| `progress_rate` |  |
| `status` |  |
| `time_on_course` |  |
| `total_unit` |  |

Operations: list.

API path: `/v2/users/{id}/progress`

#### Score

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Seat

| Field | Description |
| --- | --- |
| `access` |  |
| `available_seat` |  |
| `created` |  |
| `description` |  |
| `id` |  |
| `max_number_of_user` |  |
| `modified` |  |
| `number_of_seat` |  |
| `product` |  |
| `seat_manager` |  |
| `tag` |  |
| `title` |  |
| `total_enrollment` |  |

Operations: create, load, update.

API path: `/v2/seats`

#### Segment

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Space

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### SubscriptionPlan

| Field | Description |
| --- | --- |
| `access` |  |
| `after_purchase` |  |
| `created` |  |
| `description` |  |
| `id` |  |
| `image` |  |
| `interval` |  |
| `interval_type` |  |
| `modified` |  |
| `price` |  |
| `product` |  |
| `stripe_plan_id` |  |
| `title` |  |
| `trial_period_day` |  |

Operations: list, load.

API path: `/v2/subscription-plans`

#### Unit

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### UnitAnalytics

| Field | Description |
| --- | --- |
| `avg_score_rate` |  |
| `avg_study_time` |  |
| `name` |  |
| `total_study_time` |  |
| `type` |  |
| `users_completed` |  |
| `viewer` |  |

Operations: load.

API path: `/v2/courses/{id}/units/{uid}/analytics`

#### Upcoming

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### UpdateUserProgress

| Field | Description |
| --- | --- |
| `async` |  |
| `job_id` |  |
| `send_course_complete_email` |  |
| `unit` |  |

Operations: create.

API path: `/v2/users/{id}/courses/{cid}/complete`

#### User

| Field | Description |
| --- | --- |
| `action` |  |
| `active` |  |
| `answer` |  |
| `billing_info` |  |
| `course` |  |
| `created` |  |
| `description` |  |
| `duration` |  |
| `duration_type` |  |
| `email` |  |
| `eu_customer` |  |
| `expire` |  |
| `field` |  |
| `general_feedback` |  |
| `got_seat_on` |  |
| `grade` |  |
| `id` |  |
| `is_admin` |  |
| `is_affiliate` |  |
| `is_instructor` |  |
| `is_reporter` |  |
| `is_suspended` |  |
| `justification` |  |
| `last_login` |  |
| `modified` |  |
| `name` |  |
| `nps_comment` |  |
| `nps_score` |  |
| `passed` |  |
| `password` |  |
| `price` |  |
| `product_id` |  |
| `product_type` |  |
| `referrer_id` |  |
| `role` |  |
| `send_enrollment_email` |  |
| `send_registration_email` |  |
| `signup_approval_status` |  |
| `signup_validation_rule` |  |
| `submitted_timestamp` |  |
| `subscribed_for_marketing_email` |  |
| `success` |  |
| `tag` |  |
| `title` |  |
| `type` |  |
| `user_id` |  |
| `username` |  |
| `utm` |  |

Operations: create, list, load, remove, update.

API path: `/v2/assessments/scores/{id}/review`

#### UserGroup

| Field | Description |
| --- | --- |
| `assigned_course` |  |
| `assigned_seat_offering_id` |  |
| `assigned_segment_id` |  |
| `assigned_user_group_id` |  |
| `created` |  |
| `description` |  |
| `enroll_users_on_course` |  |
| `group_manager` |  |
| `id` |  |
| `max_number_of_user` |  |
| `modified` |  |
| `product` |  |
| `role_id` |  |
| `tag` |  |
| `title` |  |

Operations: create, list, load, update.

API path: `/v2/user_groups`

#### UserProgress

| Field | Description |
| --- | --- |
| `section_id` |  |
| `unit` |  |

Operations: list.

API path: `/v2/users/{id}/courses/{cid}/progress`

#### UserRole

| Field | Description |
| --- | --- |
| `access_level` |  |
| `course_id` |  |
| `custom_role` |  |
| `description` |  |
| `id` |  |
| `revenue_share_percentage` |  |
| `title` |  |

Operations: list.

API path: `/v2/user-roles`

#### UserSubscription

| Field | Description |
| --- | --- |
| `created` |  |
| `email` |  |
| `expires_at` |  |
| `plan_id` |  |
| `provider` |  |
| `provider_meta` |  |
| `status` |  |
| `user_id` |  |

Operations: list.

API path: `/v2/user-subscriptions`



## Entities


### Active

Create an instance: `const active = client.Active()`


### Affiliate

Create an instance: `const affiliate = client.Affiliate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affiliate` | `Record<string, any>` |  |
| `affiliate_id` | `string` |  |
| `amount` | `number` |  |
| `billing_info` | `Record<string, any> | null` |  |
| `click` | `number` |  |
| `code` | `string` |  |
| `commission` | `number` |  |
| `commission_percentage` | `number` |  |
| `completed_by` | `Record<string, any>` |  |
| `coupon` | `null | string` |  |
| `created` | `number` |  |
| `customer` | `number` |  |
| `date` | `number` |  |
| `discount` | `number` |  |
| `due` | `number` |  |
| `email` | `string` |  |
| `eu_customer` | `boolean | null` |  |
| `field` | `Record<string, any>` |  |
| `gateway` | `null | string` |  |
| `id` | `string` |  |
| `instructor` | `any[]` |  |
| `instructors_total_percentage` | `null | number` |  |
| `invoice` | `null | string` |  |
| `is_admin` | `boolean` |  |
| `is_affiliate` | `boolean` |  |
| `is_instructor` | `boolean` |  |
| `is_reporter` | `boolean` |  |
| `is_suspended` | `boolean` |  |
| `last_login` | `null | number` |  |
| `lead` | `number` |  |
| `nps_comment` | `string | null` |  |
| `nps_score` | `number | null` |  |
| `paid_at` | `number | null` |  |
| `payment` | `any[]` |  |
| `payment_method` | `string` |  |
| `payment_note` | `string | null` |  |
| `payment_plan_current_payment` | `number | null` |  |
| `payment_plan_total_payment` | `number | null` |  |
| `payout` | `number` |  |
| `pending` | `number` |  |
| `period` | `null | string` |  |
| `price` | `number` |  |
| `product` | `Record<string, any>` |  |
| `referrer_id` | `string | null` |  |
| `refund_at` | `null | number` |  |
| `role` | `Record<string, any>` |  |
| `sale` | `number` |  |
| `signup_approval_status` | `string | null` |  |
| `subscribed_for_marketing_email` | `boolean | null` |  |
| `tag` | `any[]` |  |
| `tax_amount` | `number` |  |
| `tax_percentage` | `number` |  |
| `transaction_id` | `string` |  |
| `type` | `string` |  |
| `user_id` | `string` |  |
| `username` | `string` |  |
| `utm` | `Record<string, any>` |  |

#### Example: List

```ts
const affiliates = await client.Affiliate().list()
```

#### Example: Create

```ts
const affiliate = await client.Affiliate().create({
  id: 'example_id',
})
```


### Assessment

Create an instance: `const assessment = client.Assessment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `answer` | `any[]` |  |
| `created` | `number` |  |
| `email` | `string` |  |
| `general_feedback` | `string | null` |  |
| `grade` | `number | null` |  |
| `id` | `string` |  |
| `modified` | `number` |  |
| `passed` | `boolean | null` |  |
| `submitted_timestamp` | `number` |  |
| `user_id` | `string` |  |

#### Example: List

```ts
const assessments = await client.Assessment().list()
```


### Bundle

Create an instance: `const bundle = client.Bundle()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `after_purchase` | `Record<string, any>` |  |
| `created` | `number` |  |
| `description` | `string | null` |  |
| `id` | `string` |  |
| `image` | `null | string` |  |
| `modified` | `number` |  |
| `payment_plan` | `any[]` |  |
| `price` | `number` |  |
| `product` | `Record<string, any>` |  |
| `title` | `string` |  |

#### Example: Load

```ts
const bundle = await client.Bundle().load({ id: 'bundle_id' })
```

#### Example: List

```ts
const bundles = await client.Bundle().list()
```


### ByProduct

Create an instance: `const by_product = client.ByProduct()`


### BySegment

Create an instance: `const by_segment = client.BySegment()`


### Calendar

Create an instance: `const calendar = client.Calendar()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `booking_detail` | `null | Record<string, any>` |  |
| `product_id` | `string` |  |
| `start_date` | `number` |  |
| `title` | `string` |  |
| `type` | `string` |  |

#### Example: List

```ts
const calendars = await client.Calendar().list()
```


### Certificate

Create an instance: `const certificate = client.Certificate()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attempt` | `number` |  |
| `course_id` | `string` |  |
| `external_url` | `string | null` |  |
| `form` | `Record<string, any> | null` |  |
| `id` | `string` |  |
| `issued` | `number` |  |
| `provider` | `string` |  |
| `score` | `string` |  |
| `short_url` | `string | null` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `user` | `Record<string, any>` |  |

#### Example: List

```ts
const certificates = await client.Certificate().list()
```


### Community

Create an instance: `const community = client.Community()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `any` |  |
| `collection_id` | `string` |  |
| `created` | `number` |  |
| `data` | `Record<string, any>` |  |
| `description` | `string` |  |
| `display_order` | `number` |  |
| `hidden_from_community` | `boolean` |  |
| `id` | `string` |  |
| `is_invitation_required` | `boolean` |  |
| `is_members_allowed_to_view_member` | `boolean` |  |
| `item` | `any[]` |  |
| `like` | `any[]` |  |
| `mention` | `any[]` |  |
| `modified` | `number` |  |
| `name` | `string` |  |
| `owner` | `Record<string, any>` |  |
| `posted_in` | `Record<string, any>` |  |
| `space_id` | `any[]` |  |
| `status` | `any` |  |
| `text` | `string` |  |
| `title` | `string` |  |
| `uid` | `any[]` |  |
| `upvote` | `any[]` |  |
| `usage` | `any[]` |  |
| `user` | `Record<string, any>` |  |
| `username` | `string` |  |

#### Example: List

```ts
const communitys = await client.Community().list()
```

#### Example: Create

```ts
const community = await client.Community().create({
  space_id: 'example_space_id',
})
```


### CommunityPost

Create an instance: `const community_post = client.CommunityPost()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` |  |
| `id` | `string` |  |
| `item` | `any[]` |  |
| `like` | `any[]` |  |
| `mention` | `any[]` |  |
| `posted_in` | `Record<string, any>` |  |
| `text` | `string` |  |
| `upvote` | `any[]` |  |
| `user` | `Record<string, any>` |  |

#### Example: Load

```ts
const community_post = await client.CommunityPost().load({ id: 'community_post_id' })
```


### CommunitySpace

Create an instance: `const community_space = client.CommunitySpace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `any` |  |
| `collection_id` | `string` |  |
| `description` | `string` |  |
| `hidden_from_community` | `boolean` |  |
| `id` | `string` |  |
| `is_invitation_required` | `boolean` |  |
| `is_members_allowed_to_view_member` | `boolean` |  |
| `owner` | `Record<string, any>` |  |
| `title` | `string` |  |
| `usage` | `any[]` |  |

#### Example: Load

```ts
const community_space = await client.CommunitySpace().load({ id: 'community_space_id' })
```

#### Example: Create

```ts
const community_space = await client.CommunitySpace().create({
})
```


### Completed

Create an instance: `const completed = client.Completed()`


### Coupon

Create an instance: `const coupon = client.Coupon()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bulk` | `boolean` |  |
| `code` | `string` |  |
| `expire` | `null | string` |  |
| `prefix` | `string | null` |  |
| `quantity` | `number | null` |  |
| `times_used` | `number` |  |

#### Example: Create

```ts
const coupon = await client.Coupon().create({
  promotion_id: 'example_promotion_id',
})
```


### CouponUsage

Create an instance: `const coupon_usage = client.CouponUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affiliate` | `Record<string, any>` |  |
| `billing_info` | `null | Record<string, any>` |  |
| `coupon` | `null | string` |  |
| `created` | `number` |  |
| `discount` | `number` |  |
| `gateway` | `null | string` |  |
| `id` | `string` |  |
| `instructor` | `any[]` |  |
| `instructors_total_percentage` | `null | number` |  |
| `invoice` | `null | string` |  |
| `paid_at` | `number | null` |  |
| `payment_plan_current_payment` | `number | null` |  |
| `payment_plan_total_payment` | `number | null` |  |
| `period` | `null | string` |  |
| `price` | `number` |  |
| `product` | `Record<string, any>` |  |
| `refund_at` | `null | number` |  |
| `tax_amount` | `number` |  |
| `tax_percentage` | `number` |  |
| `transaction_id` | `string` |  |
| `type` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```ts
const coupon_usages = await client.CouponUsage().list()
```


### Course

Create an instance: `const course = client.Course()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `after_purchase` | `Record<string, any>` |  |
| `author` | `Record<string, any> | null` |  |
| `billing_info` | `Record<string, any> | null` |  |
| `category` | `any[]` |  |
| `course_image` | `string | null` |  |
| `created` | `number` |  |
| `description` | `string | null` |  |
| `discount_price` | `number` |  |
| `drip_feed` | `string` |  |
| `email` | `string` |  |
| `eu_customer` | `boolean | null` |  |
| `expire` | `null | number` |  |
| `expires_type` | `string` |  |
| `field` | `Record<string, any>` |  |
| `final_price` | `number` |  |
| `grade` | `number` |  |
| `id` | `string` |  |
| `identifier` | `Record<string, any>` |  |
| `is_admin` | `boolean` |  |
| `is_affiliate` | `boolean` |  |
| `is_instructor` | `boolean` |  |
| `is_reporter` | `boolean` |  |
| `is_suspended` | `boolean` |  |
| `label` | `null | string` |  |
| `last_login` | `null | number` |  |
| `learning_unit` | `Record<string, any>` |  |
| `modified` | `number` |  |
| `nps_comment` | `string | null` |  |
| `nps_score` | `number | null` |  |
| `original_price` | `number` |  |
| `price` | `number` |  |
| `referrer_id` | `string | null` |  |
| `role` | `Record<string, any>` |  |
| `signup_approval_status` | `string | null` |  |
| `submitted_timestamp` | `number` |  |
| `subscribed_for_marketing_email` | `boolean | null` |  |
| `tag` | `any[]` |  |
| `title` | `string` |  |
| `title_id` | `string` |  |
| `user_id` | `string` |  |
| `username` | `string` |  |
| `utm` | `Record<string, any>` |  |

#### Example: Load

```ts
const course = await client.Course().load({ id: 'course_id' })
```

#### Example: List

```ts
const courses = await client.Course().list()
```

#### Example: Create

```ts
const course = await client.Course().create({
  title_id: 'example_title_id',
})
```


### CourseAnalytics

Create an instance: `const course_analytics = client.CourseAnalytics()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avg_score_rate` | `number` |  |
| `avg_time_to_finish` | `number` |  |
| `certificates_issued` | `number` |  |
| `learning_unit` | `number` |  |
| `social_interaction` | `number` |  |
| `student` | `number` |  |
| `success_rate` | `number` |  |
| `total_study_time` | `number` |  |
| `video` | `number` |  |
| `video_time` | `number` |  |
| `video_viewing_time` | `number` |  |

#### Example: Load

```ts
const course_analytics = await client.CourseAnalytics().load({ id: 'course_analytics_id' })
```


### CourseContent

Create an instance: `const course_content = client.CourseContent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `description` | `string | null` |  |
| `drip` | `Record<string, any> | null` |  |
| `id` | `string` |  |
| `learning_unit` | `any[]` |  |
| `section` | `any[]` |  |
| `title` | `string` |  |

#### Example: List

```ts
const course_contents = await client.CourseContent().list()
```

#### Example: Create

```ts
const course_content = await client.CourseContent().create({
  id: 'example_id',
})
```


### Due

Create an instance: `const due = client.Due()`


### Event

Create an instance: `const event = client.Event()`


### EventLog

Create an instance: `const event_log = client.EventLog()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity` | `string` |  |
| `additional_info` | `Record<string, any> | null` |  |
| `created` | `number` |  |
| `description` | `string` |  |
| `type` | `string | null` |  |
| `user` | `Record<string, any>` |  |

#### Example: List

```ts
const event_logs = await client.EventLog().list()
```


### Form

Create an instance: `const form = client.Form()`


### Installment

Create an instance: `const installment = client.Installment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` |  |
| `current_period_end` | `number` |  |
| `current_period_start` | `number` |  |
| `email` | `string` |  |
| `ends_at` | `number | null` |  |
| `first_amount` | `number` |  |
| `first_installment_date` | `number | null` |  |
| `first_installment_type` | `string` |  |
| `first_installmentl_day` | `number` |  |
| `id` | `string` |  |
| `installment_interval_type` | `string` |  |
| `is_cancelable` | `boolean` |  |
| `name` | `string` |  |
| `payments_count` | `number` |  |
| `payments_payed` | `number` |  |
| `plan_id` | `string` |  |
| `product_id` | `string` |  |
| `product_type` | `string` |  |
| `status` | `string` |  |
| `type` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```ts
const installments = await client.Installment().list()
```


### Lead

Create an instance: `const lead = client.Lead()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` |  |
| `email` | `string` |  |
| `eu_customer` | `boolean | null` |  |
| `first_name` | `string` |  |
| `last_name` | `string` |  |
| `page_submitted` | `string | null` |  |
| `submission` | `any[]` |  |
| `subscribed_for_marketing_email` | `boolean | null` |  |
| `tag` | `any[]` |  |
| `user_id` | `string | null` |  |
| `user_registered_at` | `number | null` |  |
| `utm` | `Record<string, any>` |  |

#### Example: List

```ts
const leads = await client.Lead().list()
```


### MultipleSeat

Create an instance: `const multiple_seat = client.MultipleSeat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `add_to_active_seat` | `boolean` |  |
| `available_seat` | `number` |  |
| `created` | `number` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `max_number_of_user` | `number` |  |
| `modified` | `number` |  |
| `number_of_seat` | `number` |  |
| `product` | `Record<string, any>` |  |
| `seat_manager` | `any[]` |  |
| `success` | `boolean` |  |
| `tag` | `any[]` |  |
| `title` | `string` |  |
| `total_enrollment` | `number` |  |

#### Example: List

```ts
const multiple_seats = await client.MultipleSeat().list()
```

#### Example: Create

```ts
const multiple_seat = await client.MultipleSeat().create({
  seat_id: 'example_seat_id',
  uid: 'example_uid',
})
```


### Payment

Create an instance: `const payment = client.Payment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affiliate` | `Record<string, any>` |  |
| `billing_info` | `null | Record<string, any>` |  |
| `coupon` | `null | string` |  |
| `created` | `number` |  |
| `discount` | `number` |  |
| `expires_at` | `number` |  |
| `gateway` | `null | string` |  |
| `id` | `string` |  |
| `instructor` | `any[]` |  |
| `instructors_total_percentage` | `null | number` |  |
| `invoice` | `null | string` |  |
| `paid_at` | `number | null` |  |
| `payment_plan_current_payment` | `number | null` |  |
| `payment_plan_total_payment` | `number | null` |  |
| `period` | `null | string` |  |
| `price` | `number` |  |
| `product` | `Record<string, any>` |  |
| `refund_at` | `null | number` |  |
| `tax_amount` | `number` |  |
| `tax_percentage` | `number` |  |
| `transaction_id` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_id` | `string` |  |

#### Example: Load

```ts
const payment = await client.Payment().load({ id: 'payment_id' })
```

#### Example: List

```ts
const payments = await client.Payment().list()
```


### Post

Create an instance: `const post = client.Post()`


### Promotion

Create an instance: `const promotion = client.Promotion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `applies_to_all` | `any[]` |  |
| `bulk` | `boolean` |  |
| `code` | `string` |  |
| `coupon` | `any[]` |  |
| `created` | `number` |  |
| `expire` | `null | string` |  |
| `id` | `string` |  |
| `modified` | `number` |  |
| `name` | `string` |  |
| `prefix` | `string | null` |  |
| `product` | `any[]` |  |
| `quantity` | `number | null` |  |
| `times_used` | `number` |  |
| `type` | `string` |  |
| `value` | `number` |  |

#### Example: Load

```ts
const promotion = await client.Promotion().load({ id: 'promotion_id' })
```

#### Example: List

```ts
const promotions = await client.Promotion().list()
```

#### Example: Create

```ts
const promotion = await client.Promotion().create({
})
```


### Reporting

Create an instance: `const reporting = client.Reporting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average_score_rate` | `number` |  |
| `completed_at` | `number | null` |  |
| `completed_unit` | `number` |  |
| `course_id` | `string` |  |
| `progress_per_section_unit` | `any[]` |  |
| `progress_rate` | `number` |  |
| `status` | `string` |  |
| `time_on_course` | `number` |  |
| `total_unit` | `number` |  |

#### Example: List

```ts
const reportings = await client.Reporting().list()
```


### Score

Create an instance: `const score = client.Score()`


### Seat

Create an instance: `const seat = client.Seat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `available_seat` | `number` |  |
| `created` | `number` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `max_number_of_user` | `number` |  |
| `modified` | `number` |  |
| `number_of_seat` | `number` |  |
| `product` | `Record<string, any>` |  |
| `seat_manager` | `any[]` |  |
| `tag` | `any[]` |  |
| `title` | `string` |  |
| `total_enrollment` | `number` |  |

#### Example: Load

```ts
const seat = await client.Seat().load({ id: 'seat_id' })
```

#### Example: Create

```ts
const seat = await client.Seat().create({
})
```


### Segment

Create an instance: `const segment = client.Segment()`


### Space

Create an instance: `const space = client.Space()`


### SubscriptionPlan

Create an instance: `const subscription_plan = client.SubscriptionPlan()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `after_purchase` | `Record<string, any>` |  |
| `created` | `number` |  |
| `description` | `string | null` |  |
| `id` | `string` |  |
| `image` | `string | null` |  |
| `interval` | `number` |  |
| `interval_type` | `string` |  |
| `modified` | `number` |  |
| `price` | `number` |  |
| `product` | `Record<string, any>` |  |
| `stripe_plan_id` | `string` |  |
| `title` | `string` |  |
| `trial_period_day` | `number` |  |

#### Example: Load

```ts
const subscription_plan = await client.SubscriptionPlan().load({ id: 'subscription_plan_id' })
```

#### Example: List

```ts
const subscription_plans = await client.SubscriptionPlan().list()
```


### Unit

Create an instance: `const unit = client.Unit()`


### UnitAnalytics

Create an instance: `const unit_analytics = client.UnitAnalytics()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avg_score_rate` | `number` |  |
| `avg_study_time` | `number` |  |
| `name` | `string` |  |
| `total_study_time` | `number` |  |
| `type` | `string` |  |
| `users_completed` | `number` |  |
| `viewer` | `number` |  |

#### Example: Load

```ts
const unit_analytics = await client.UnitAnalytics().load({ id: 'unit_analytics_id', course_id: 'course_id' })
```


### Upcoming

Create an instance: `const upcoming = client.Upcoming()`


### UpdateUserProgress

Create an instance: `const update_user_progress = client.UpdateUserProgress()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `async` | `boolean` |  |
| `job_id` | `string` |  |
| `send_course_complete_email` | `boolean` |  |
| `unit` | `any[]` |  |

#### Example: Create

```ts
const update_user_progress = await client.UpdateUserProgress().create({
  course_id: 'example_course_id',
  user_id: 'example_user_id',
})
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `active` | `boolean` |  |
| `answer` | `any[]` |  |
| `billing_info` | `Record<string, any> | null` |  |
| `course` | `Record<string, any>` |  |
| `created` | `number` |  |
| `description` | `string | null` |  |
| `duration` | `number` |  |
| `duration_type` | `string` |  |
| `email` | `string` |  |
| `eu_customer` | `boolean | null` |  |
| `expire` | `null | number` |  |
| `field` | `Record<string, any>` |  |
| `general_feedback` | `string | null` |  |
| `got_seat_on` | `number` |  |
| `grade` | `number | null` |  |
| `id` | `string` |  |
| `is_admin` | `boolean` |  |
| `is_affiliate` | `boolean` |  |
| `is_instructor` | `boolean` |  |
| `is_reporter` | `boolean` |  |
| `is_suspended` | `boolean` |  |
| `justification` | `string | null` |  |
| `last_login` | `null | number` |  |
| `modified` | `number` |  |
| `name` | `string` |  |
| `nps_comment` | `string | null` |  |
| `nps_score` | `number | null` |  |
| `passed` | `boolean | null` |  |
| `password` | `string` |  |
| `price` | `number` |  |
| `product_id` | `string` |  |
| `product_type` | `string` |  |
| `referrer_id` | `string | null` |  |
| `role` | `Record<string, any>` |  |
| `send_enrollment_email` | `boolean | null` |  |
| `send_registration_email` | `boolean | null` |  |
| `signup_approval_status` | `string | null` |  |
| `signup_validation_rule` | `boolean` |  |
| `submitted_timestamp` | `number` |  |
| `subscribed_for_marketing_email` | `boolean | null` |  |
| `success` | `boolean` |  |
| `tag` | `any[]` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `user_id` | `string` |  |
| `username` | `string` |  |
| `utm` | `Record<string, any>` |  |

#### Example: Load

```ts
const user = await client.User().load({ id: 'user_id' })
```

#### Example: List

```ts
const users = await client.User().list()
```

#### Example: Create

```ts
const user = await client.User().create({
})
```


### UserGroup

Create an instance: `const user_group = client.UserGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_course` | `any[]` |  |
| `assigned_seat_offering_id` | `any[]` |  |
| `assigned_segment_id` | `string` |  |
| `assigned_user_group_id` | `any[]` |  |
| `created` | `number` |  |
| `description` | `string` |  |
| `enroll_users_on_course` | `boolean` |  |
| `group_manager` | `any[]` |  |
| `id` | `string` |  |
| `max_number_of_user` | `number` |  |
| `modified` | `number` |  |
| `product` | `Record<string, any>` |  |
| `role_id` | `string` |  |
| `tag` | `any[]` |  |
| `title` | `string` |  |

#### Example: Load

```ts
const user_group = await client.UserGroup().load({ id: 'user_group_id' })
```

#### Example: List

```ts
const user_groups = await client.UserGroup().list()
```

#### Example: Create

```ts
const user_group = await client.UserGroup().create({
  role_id: 'example_role_id',
})
```


### UserProgress

Create an instance: `const user_progress = client.UserProgress()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `section_id` | `string` |  |
| `unit` | `any[]` |  |

#### Example: List

```ts
const user_progresss = await client.UserProgress().list()
```


### UserRole

Create an instance: `const user_role = client.UserRole()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `any` |  |
| `course_id` | `string` |  |
| `custom_role` | `boolean` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `revenue_share_percentage` | `number` |  |
| `title` | `string` |  |

#### Example: List

```ts
const user_roles = await client.UserRole().list()
```


### UserSubscription

Create an instance: `const user_subscription = client.UserSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `null | number` |  |
| `email` | `string` |  |
| `expires_at` | `null | number` |  |
| `plan_id` | `string` |  |
| `provider` | `string` |  |
| `provider_meta` | `Record<string, any> | null` |  |
| `status` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```ts
const user_subscriptions = await client.UserSubscription().list()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
learnworlds/
├── src/
│   ├── LearnworldsSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { LearnworldsSDK } from '@voxgig-sdk/learnworlds'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const assessment = client.Assessment()
await assessment.list()

// assessment.data() now returns the assessment data from the last `list`
// assessment.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
