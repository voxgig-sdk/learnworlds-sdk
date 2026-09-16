# Learnworlds TypeScript SDK



The TypeScript SDK for the Learnworlds API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Active()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `seneca-provider` — see
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
// assessment is the entity, populated with mock response data
// — call assessment.data() for the record itself
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

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


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
| `affiliate` | Related affiliate data |
| `affiliateId` | Unique identifier of the affiliate |
| `amount` | Amount of the payout |
| `billing_info` | Values of the billing info fields for this user |
| `clicks` | Number of referral link clicks |
| `code` | Unique affiliate code |
| `commission_percentage` | This is the percentage of the sale that goes to the affiliate. |
| `commissions` | Total commission amount |
| `completedBy` |  |
| `coupon` | Coupon code |
| `created` | Date the user was created, in UNIX timestamp format |
| `customers` | Number of referred customers |
| `date` | Datetime the affiliation was created, in UNIX timestamp format |
| `discount` | Discount of the payment |
| `due` | Total amount of due payouts |
| `email` | Email account of the user |
| `eu_customer` | Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe. |
| `fields` | Default sign up fields for the School. |
| `gateway` | Payment gateway name |
| `id` | Unique identifier of the user |
| `instructors` | Related instructor data |
| `instructors_total_percentage` | Total percentage of the revenue for the instructor |
| `invoice` | Invoice identifier |
| `is_admin` | Indication about whether the user is an administrator of the school; true if she is, or false if she is not. |
| `is_affiliate` | Indication about whether the user is an affiliate of the school; true if she is, or false if she is not. |
| `is_instructor` | Indication about whether the user is an instructor in the school; true if she is, or false if she is not. |
| `is_reporter` | Indication about whether the user is an reporter in the school; true if she is, or false if she is not. |
| `is_suspended` | Indication about whether the user is suspended in the school; true if she is, or false if she is not. |
| `last_login` | Date of the last login of the user, in UNIX timestamp format |
| `leads` | Number of leads |
| `nps_comment` | The latest comment submitted by the user on the NPS form. |
| `nps_score` | The latest NPS score submitted by the user. |
| `paid_at` | Payment date, in UNIX timestamp format |
| `paymentMethod` | Payment method |
| `paymentNotes` | Payment notes |
| `payment_plan_current_payment` | Current payment number of payment plan |
| `payment_plan_total_payments` | Total payments number of payment plan |
| `payments` |  |
| `payouts` | Total amount of completed payouts |
| `pending` | Total amount of upcoming payouts |
| `period` | Payment plan period |
| `price` | Price of the payment |
| `product` | Related product data |
| `referrer_id` | Unique user id of the referrer for this user |
| `refund_at` | Refund date, in UNIX timestamp format |
| `role` | Values of the role fields for this user |
| `sales` | Sales total amount |
| `signup_approval_status` | User status regarding the Signup Approval flow |
| `subscribed_for_marketing_emails` | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `tags` | Array of the tags of the user |
| `tax_amount` | Tax amount of the payment |
| `tax_percentage` | Tax percentage of the payment |
| `transaction_id` | Transaction id of the payment |
| `type` | Type of the payment |
| `user_id` | Unique identifier of the user |
| `username` | Username of the user |
| `utms` | Values of the UTM fields for this user |

Operations: create, list.

API path: `/v2/affiliates/{id}`

#### Assessment

| Field | Description |
| --- | --- |
| `answers` | Related answers data |
| `created` | Date the submission was created (started), in UNIX timestamp format |
| `email` | Email account of the user who submitted the responses |
| `generalFeedback` | General feedback for a submission |
| `grade` | The grade that corresponds to the responses provided by the user |
| `id` | Unique identifier of the submission of responses by the user specified by the user id |
| `modified` | Date the submission was modified for the last time, in UNIX timestamp format |
| `passed` | Indication about whether or not the assessment result was passed or failed |
| `submittedTimestamp` | Date the submission was finished (submitted), in UNIX timestamp format |
| `user_id` | Unique identifier of the user who submitted the responses |

Operations: list.

API path: `/v2/forms/{id}/responses`

#### Bundle

| Field | Description |
| --- | --- |
| `access` | Access type of the bundle |
| `afterPurchase` | After purchase navigation settings for this bundle |
| `created` | Date the bundle was created, in UNIX timestamp format |
| `description` | Bundle description |
| `id` | Unique identifier of the bundle |
| `image` | Bundle image (full URL) |
| `modified` | Date the bundle was modified for the last time, in UNIX timestamp format |
| `paymentPlans` | Payment plans associated with the bundle. |
| `price` | Price of the bundle |
| `products` | Products in the bundle |
| `title` | Title of the bundle |

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
| `bookingDetails` | Booking details of the event. |
| `productId` | Unique identifier of the product |
| `startDate` | Start date of the event, in UNIX timestamp format |
| `title` | Title of the event |
| `type` | Type of the event |

Operations: list.

API path: `/v2/school/events`

#### Certificate

| Field | Description |
| --- | --- |
| `attempts` | Number of attempts |
| `course_id` | Unique identifier of the course |
| `external_url` | External URL of the certificate; null if provider is LearnWorlds |
| `form` | Form data of the certificate |
| `id` | Unique identifier of the certificate |
| `issued` | Date the certification was issued, in Unix timestamp format |
| `provider` | Provider of the certificate |
| `score` | Score of the certificate |
| `short_url` | Short URL of the certificate |
| `status` | Status of the certificate |
| `title` | Title of the certificate |
| `type` | Type of the certificate |
| `user` | User related data |

Operations: list, remove, update.

API path: `/v2/certificates`

#### Community

| Field | Description |
| --- | --- |
| `access` | Access type of the space |
| `collectionId` | Unique identifier of the collection under which the space is displayed |
| `created` | Date the post was made, in UNIX timestamp format |
| `description` | Description of the space |
| `display_order` | Display order of the collection as it appears in the community sidebar |
| `hidden_from_community` | Indication about whether the space is visible in the community |
| `id` | Unique identifier of the post |
| `invitation` | Indication whether the user was sent an invitation. |
| `is_invitation_required` | Indication about whether users are sent an invitation to join or are directly added to space |
| `is_members_allowed_to_view_members` | Indication about whether users can view other users in space |
| `items` | List of post content items outside of text content |
| `likes` | List of users who have liked the post |
| `mentions` | User mentions of the post |
| `modified` | Date the collection was modified for the last time, in UNIX timestamp format |
| `name` | Name of the collection |
| `owner` | Information about the space owner |
| `posted_in` | Information about where the post was made |
| `space_ids` | List of spaces in this collection |
| `status` | The status of the user - `joined`, the user has joined the space - `invited`, the user has been sent an invitation to gain access to the space - `deleted`, the user has been removed from the space - `left`, the user has left the space |
| `text` | Text content of the post |
| `title` | Name of the space |
| `uids` | Unique identifiers or emails of the users to be invited/added |
| `upvotes` | List of users who have upvoted the post |
| `usages` | List of space usages in the platform |
| `user` | Information about the post author |
| `username` | The username of the user |
| `users` | List of users that were added or invited to space |

Operations: create, list, remove.

API path: `/v2/community/spaces/{id}/users`

#### CommunityPost

| Field | Description |
| --- | --- |
| `created` | Date the post was made, in UNIX timestamp format |
| `id` | Unique identifier of the post |
| `items` | List of post content items outside of text content |
| `likes` | List of users who have liked the post |
| `mentions` | User mentions of the post |
| `posted_in` | Information about where the post was made |
| `text` | Text content of the post |
| `upvotes` | List of users who have upvoted the post |
| `user` | Information about the post author |

Operations: load.

API path: `/v2/community/posts/{id}`

#### CommunitySpace

| Field | Description |
| --- | --- |
| `access` | Access type of the space |
| `collectionId` | Unique identifier of the collection under which the space is displayed |
| `description` | Description of the space |
| `hidden_from_community` | Indication about whether the space is visible in the community |
| `id` | Unique identifier of the space |
| `is_invitation_required` | Indication about whether users are sent an invitation to join or are directly added to space |
| `is_members_allowed_to_view_members` | Indication about whether users can view other users in space |
| `owner` | Information about the space owner |
| `title` | Name of the space |
| `usages` | List of space usages in the platform |

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
| `bulk` | Indication about whether there's a bulk set of codes created for this coupon. |
| `code` | Coupon code |
| `expires` | Coupon expiration date, in YYYY-MM-DD format |
| `prefix` | Coupon prefix |
| `quantity` | Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed) |
| `times_used` | Coupon number of times used. |

Operations: create.

API path: `/v2/promotions/{pid}/coupons`

#### CouponUsage

| Field | Description |
| --- | --- |
| `affiliate` | Related affiliate data |
| `billing_info` | Billing info of the payment |
| `coupon` | Coupon code |
| `created` | Datetime of the payment was created, in UNIX timestamp format |
| `discount` | Discount of the payment |
| `gateway` | Payment gateway name |
| `id` | Unique identifier of the payment |
| `instructors` | Related instructor data |
| `instructors_total_percentage` | Total percentage of the revenue for the instructor |
| `invoice` | Invoice identifier |
| `paid_at` | Payment date, in UNIX timestamp format |
| `payment_plan_current_payment` | Current payment number of payment plan |
| `payment_plan_total_payments` | Total payments number of payment plan |
| `period` | Payment plan period |
| `price` | Price of the payment |
| `product` | Related product data |
| `refund_at` | Refund date, in UNIX timestamp format |
| `tax_amount` | Tax amount of the payment |
| `tax_percentage` | Tax percentage of the payment |
| `transaction_id` | Transaction id of the payment |
| `type` | Type of the payment |
| `user_id` | Unique identifier of the user |

Operations: list.

API path: `/v2/promotions/{pid}/coupons/{cid}/usage`

#### Course

| Field | Description |
| --- | --- |
| `access` | Access type of course |
| `afterPurchase` | After purchase navigation settings for this course |
| `author` | Information about the course author |
| `billing_info` | Values of the billing info fields for this user |
| `categories` | Categories this course belongs in |
| `courseImage` | Course image (full URL) |
| `created` | Date the course was created, in UNIX timestamp format |
| `description` | Description of the course |
| `discount_price` | Discount price of the course |
| `dripFeed` | Course setting for scheduled course delivery (drip feed); none refers to drip feed not being enabled. |
| `email` | Email account of the user who submitted the responses |
| `eu_customer` | Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe. |
| `expires` | Expiration timeframe value, defines the expiration timeframe, together with the type / unit in the "expiresType" field. |
| `expiresType` | Expiration timeframe type / unit, defines the expiration timeframe, together with the actual value in the "expires" field. |
| `fields` | Default sign up fields for the School. |
| `final_price` | Final price of the course |
| `grade` | The grade that corresponds to the responses provided by the user |
| `id` | Unique identifier of the course |
| `identifiers` | Course identifiers for in app purchases. |
| `is_admin` | Indication about whether the user is an administrator of the school; true if she is, or false if she is not. |
| `is_affiliate` | Indication about whether the user is an affiliate of the school; true if she is, or false if she is not. |
| `is_instructor` | Indication about whether the user is an instructor in the school; true if she is, or false if she is not. |
| `is_reporter` | Indication about whether the user is an reporter in the school; true if she is, or false if she is not. |
| `is_suspended` | Indication about whether the user is suspended in the school; true if she is, or false if she is not. |
| `label` | Label of the course |
| `last_login` | Date of the last login of the user, in UNIX timestamp format |
| `learningUnit` |  |
| `modified` | Date the course was modified for the last time, in UNIX timestamp format |
| `nps_comment` | The latest comment submitted by the user on the NPS form. |
| `nps_score` | The latest NPS score submitted by the user. |
| `original_price` | Original price of the course |
| `price` | Price of the course |
| `referrer_id` | Unique user id of the referrer for this user |
| `role` | Values of the role fields for this user |
| `signup_approval_status` | User status regarding the Signup Approval flow |
| `submittedTimestamp` | Date the submission was finished (submitted), in UNIX timestamp format |
| `subscribed_for_marketing_emails` | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `tags` | Array of the tags of the user |
| `title` | Title of the course |
| `titleId` | Unique identifier of the course title. |
| `user_id` | Unique identifier of the user who submitted the responses |
| `username` | Username of the user |
| `utms` | Values of the UTM fields for this user |

Operations: create, list, load, update.

API path: `/v2/courses`

#### CourseAnalytics

| Field | Description |
| --- | --- |
| `avg_score_rate` | Average score (%) |
| `avg_time_to_finish` | Average time to finish the course in seconds |
| `certificates_issued` | Number of issued certifications |
| `id` |  |
| `learning_units` | Number of learning activities |
| `social_interactions` | Number of social interactions |
| `students` | Number of students |
| `success_rate` | Success rate (%) |
| `total_study_time` | Total study time in seconds |
| `video_time` | Total video duration of the course in seconds |
| `video_viewing_time` | Total video time viewed |
| `videos` | Number of videos |

Operations: load.

API path: `/v2/courses/{id}/analytics`

#### CourseContent

| Field | Description |
| --- | --- |
| `access` | Access type of the section |
| `description` | Description of the section |
| `drip` | Drip feed details of the content. |
| `id` | Unique identifier of the section |
| `learningUnits` | Learning activities of section |
| `sections` |  |
| `title` | Title of the section |

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
| `activity` | Name of the activity |
| `additional_info` | Additional info related to the activity. |
| `created` | Date the event log was created, in UNIX timestamp format |
| `description` | Description of the activity |
| `type` | Type of the activity |
| `user` | User details related to event log |

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
| `amount` | Amount per installment |
| `current_period_end` | End of the current period that the installment has been invoiced for, in UNIX timestamp format |
| `current_period_start` | Start of the current period that the installment has been invoiced for, in UNIX timestamp format |
| `email` | Email of the user |
| `ends_at` | Datetime the installment ends, in UNIX timestamp format |
| `firstAmount` | Ιnitial amount of money the customers have to pay up front. |
| `firstInstallmentDate` | Date of the first installment, in UNIX timestamp format |
| `firstInstallmentType` | Type of the first installment |
| `firstInstallmentlDays` | Number of days since the first installment |
| `id` | Unique identifier of the installment |
| `installmentIntervalType` | How much time between each installment |
| `isCancelable` | Indication about whether the installment can be canceled; true if it is cancelable, or false if it is not. |
| `name` | Name of the installment |
| `paymentsCount` | Number of payments of the installment |
| `paymentsPayed` | Number of completed payments of the installment |
| `plan_id` | Unique identifier of the subscription plan |
| `productId` | Unique identifier of the product |
| `productType` | Type of the product |
| `status` | Status of the installment |
| `type` | Type of the installment |
| `user_id` | Unique identifier of the user |

Operations: list.

API path: `/v2/installments/active`

#### Lead

| Field | Description |
| --- | --- |
| `created` | Date the lead was created, in UNIX timestamp format |
| `email` | Email account of the user |
| `eu_customer` | Indication of whether the user is located in Europe; true if she is, or false if she's not located in Europe. |
| `first_name` | First Name of the user |
| `last_name` | Last name of the user |
| `page_submitted` | Page of the academy, in which the lead submitted their email account |
| `submissions` | Array of the all the submissions of this email account in lead capture forms of the academy |
| `subscribed_for_marketing_emails` | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `tags` | Array of the tags of the user |
| `user_id` | The unique identifier of the respective user |
| `user_registered_at` | Date the respective lead was also registered as a user, in UNIX timestamp format |
| `utms` | Values of the UTM fields for this user |

Operations: list.

API path: `/v2/leads`

#### MultipleSeat

| Field | Description |
| --- | --- |
| `access` | Access status of the seat offering. |
| `add_to_active_seat` | Indication about whether the user is assigned a seat in the seat offering; true if she is, or false if she is not. |
| `available_seats` | Number of available seats in the offering. |
| `created` | Date the seat offering was created; displayed in UNIX timestamp format. |
| `description` | Description of the seat offering. |
| `id` | Unique identifier of the seat offering. |
| `max_number_of_users` | Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added. |
| `modified` | Date the seat offering was modified for the last time; displayed in UNIX timestamp format. |
| `number_of_seats` | Number of the seats in the offering. |
| `products` | Products in the seat offering |
| `seat_managers` | Unique identifier of each seat manager. |
| `success` |  |
| `tags` | Tags assigned to the users added to the seat offering. |
| `title` | Title of the seat offering. |
| `total_enrollments` | Total enrollements of the seat offering. |

Operations: create, list, remove.

API path: `/v2/seats/{id}/users/{uid}`

#### Payment

| Field | Description |
| --- | --- |
| `affiliate` | Related affiliate data |
| `billing_info` | Billing info of the payment |
| `coupon` | Coupon code |
| `created` | Datetime of the payment was created, in UNIX timestamp format |
| `discount` | Discount of the payment |
| `expires_at` | Date the invoice expires, in UNIX timestamp format |
| `gateway` | Payment gateway name |
| `id` | Unique identifier of the payment |
| `instructors` | Related instructor data |
| `instructors_total_percentage` | Total percentage of the revenue for the instructor |
| `invoice` | Invoice identifier |
| `paid_at` | Payment date, in UNIX timestamp format |
| `payment_plan_current_payment` | Current payment number of payment plan |
| `payment_plan_total_payments` | Total payments number of payment plan |
| `period` | Payment plan period |
| `price` | Price of the payment |
| `product` | Related product data |
| `refund_at` | Refund date, in UNIX timestamp format |
| `tax_amount` | Tax amount of the payment |
| `tax_percentage` | Tax percentage of the payment |
| `transaction_id` | Transaction id of the payment |
| `type` | Type of the payment |
| `url` | Url of invoice |
| `user_id` | Unique identifier of the user |

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
| `applies_to_all` | All courses and/or bundles that the promotion coupon will be applied to. |
| `bulk` | Indication about whether there's a bulk set of codes created for this coupon. |
| `code` | Coupon code |
| `coupons` | Promotion coupons |
| `created` | Date the promotion was created, in UNIX timestamp format |
| `expires` | Coupon expiration date, in YYYY-MM-DD format |
| `id` | Unique identifier of the promotion |
| `modified` | Date the promotion was modified for the last time, in UNIX timestamp format |
| `name` | Name of the promotion |
| `prefix` | Coupon prefix |
| `products` | Specific products that the promotion coupon will be applied to |
| `quantity` | Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed) |
| `times_used` | Coupon number of times used. |
| `type` | Type of discount |
| `value` | Percentage or fixed amount of discount |

Operations: create, list, load.

API path: `/v2/promotions`

#### Reporting

| Field | Description |
| --- | --- |
| `average_score_rate` | Average score percentage |
| `completed_at` | Completion date in UNIX timestamp format. |
| `completed_units` | Total number of completed course learning activities by the user |
| `course_id` | Unique identifier of the course |
| `progress_per_section_unit` | User progress data per section/learning activity |
| `progress_rate` | Progress rate (%) |
| `status` | Status of user progress |
| `time_on_course` | Time spent on the course in seconds |
| `total_units` | Total number of course learning activities |

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
| `access` | Access status of the seat offering. |
| `available_seats` | Number of available seats in the offering. |
| `created` | Date the seat offering was created; displayed in UNIX timestamp format. |
| `description` | Description of the seat offering. |
| `id` | Unique identifier of the seat offering. |
| `max_number_of_users` | Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added. |
| `modified` | Date the seat offering was modified for the last time; displayed in UNIX timestamp format. |
| `number_of_seats` | Number of the seats in the offering. |
| `products` | Products in the seat offering |
| `seat_managers` | Unique identifier of each seat manager. |
| `tags` | Tags assigned to the users added to the seat offering. |
| `title` | Title of the seat offering. |
| `total_enrollments` | Total enrollements of the seat offering. |

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
| `access` | Access type of the subscription |
| `afterPurchase` | After purchase navigation settings for this subscription plan |
| `created` | Date the subscription plan was created, in UNIX timestamp format |
| `description` | Description of the subscription |
| `id` | Unique identifier of the subscription plan |
| `image` | Subscription plan image (full URL) |
| `interval` | Billing interval value |
| `interval_type` | Billing interval type |
| `modified` | Date the subscription plan was modified for the last time, in UNIX timestamp format |
| `price` | Price of the subscription plan |
| `products` | Products in the subsription |
| `stripePlanId` | Stripe's plan Id |
| `title` | Title of the subscription plan |
| `trial_period_days` | Number of days the trial subscription plan lasts |

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
| `avg_score_rate` | Average score (%) |
| `avg_study_time` | Average study time in seconds |
| `id` |  |
| `name` | Name of the learning activity |
| `total_study_time` | Total study time in seconds |
| `type` | Type of the learning activity |
| `users_completed` | Number of users that have completed this learning activity |
| `viewers` | Number of users that have viewed this learning activity |

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
| `async` | Indication about whether the request will be executed asynchronously; true if it’s an asynchronous task, false if it is not. |
| `job_id` | Unique identifier of the asynchronous task; empty if the task is not asynchronous.” Ensure that the documentation link is accordingly updated |
| `send_course_complete_email` | Indication about whether the user will receive the completion emails; true if she should receive the emails, false if she should not. |
| `units` | Unique identifiers of the learning activities that should be marked as complete; empty if the progress of the whole course should be marked as complete. |

Operations: create.

API path: `/v2/users/{id}/courses/{cid}/complete`

#### User

| Field | Description |
| --- | --- |
| `action` | The exact action to be performed with the aforementioned tags to the specified user; 'attach' is the indication to add these tags to the user and 'detach' is the indication to remove them from the user. |
| `active` | True or false whether user is active in seat offering |
| `answers` | Related answers data |
| `billing_info` | Values of the billing info fields for this user |
| `course` |  |
| `created` | Date the user was created, in UNIX timestamp format |
| `description` | Description of the segment |
| `duration` | Duration of the product. |
| `duration_type` | Duration type of the product. |
| `email` | Email account of the user |
| `eu_customer` | Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe. |
| `expires` | Date the enrollment expires, in UNIX timestamp format |
| `fields` | Default sign up fields for the School. |
| `generalFeedback` | General feedback for a submission |
| `got_seat_on` | Date user was added to the seat offering, in UNIX timestamp |
| `grade` | The grade that corresponds to the responses provided by the user |
| `id` | Unique identifier of the user |
| `is_admin` | Indication about whether the user is an administrator of the school; true if she is, or false if she is not. |
| `is_affiliate` | Indication about whether the user is an affiliate of the school; true if she is, or false if she is not. |
| `is_instructor` | Indication about whether the user is an instructor in the school; true if she is, or false if she is not. |
| `is_reporter` | Indication about whether the user is an reporter in the school; true if she is, or false if she is not. |
| `is_suspended` | Indication about whether the user is suspended in the school; true if she is, or false if she is not. |
| `justification` | Any justification/note for the enrollment |
| `last_login` | Date of the last login of the user, in UNIX timestamp format |
| `modified` | Date the submission was modified for the last time, in UNIX timestamp format |
| `name` | Name of the segment |
| `nps_comment` | The latest comment submitted by the user on the NPS form. |
| `nps_score` | The latest NPS score submitted by the user. |
| `passed` | Indication about whether or not the assessment result was passed or failed |
| `password` | Password of the user |
| `price` | Price of the product |
| `productId` | Unique identifier of the product |
| `productType` | Type of the product |
| `referrer_id` | Unique user id of the referrer for this user |
| `role` | Values of the role fields for this user |
| `send_enrollment_email` | Indication about whether the user should receive the enrollment email; true if she should receive the email, false if she should not. |
| `send_registration_email` | Indication about whether the user will receive the registration emails; true if she should receive the emails, false if she should not. |
| `signup_approval_status` | User status regarding the Signup Approval flow |
| `signup_validation_rules` | Indication about whether validation rules should be applied; default value equals to false, which means that validation rules should not be applied. |
| `submittedTimestamp` | Date the submission was finished (submitted), in UNIX timestamp format |
| `subscribed_for_marketing_emails` | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `success` | Indication about whether the action of the enrollment was successful; true if it was successful, or false if it was not. |
| `tags` | Array of the tags of the user |
| `title` | Title of the seat offering. |
| `type` | Type of the product |
| `user_id` | Unique identifier of the user who submitted the responses |
| `username` | Username of the user |
| `utms` | Values of the UTM fields for this user |

Operations: create, list, load, remove, update.

API path: `/v2/user_groups/{id}/users/{uid}`

#### UserGroup

| Field | Description |
| --- | --- |
| `assigned_courses` | Courses to be assigned to the instructor; empty if the user is not an instructor or if no courses should be assigned to the user. |
| `assigned_seat_offering_ids` | Unique identifier of the seat offerings to be assigned to the seat manager; empty if the user is not a seat manager or if no offerings should be assigned to the user. |
| `assigned_segment_id` | Unique identifier of the segment to be assigned to the reporter; empty if the user is not a reporter or if no segment should be assigned to the user. |
| `assigned_user_group_ids` | Unique identifier of the user groups to be assigned to the user group manager; empty if the user is not a group manager or if no groups should be assigned to the user. |
| `created` | Date the user group was created; displayed in UNIX timestamp format. |
| `description` | Description of the user group. |
| `enroll_users_on_courses` | Enroll users in all selected courses automatically upon joining the user group. |
| `group_managers` | Unique identifier of each group manager. |
| `id` | Unique identifier of the user group. |
| `max_number_of_users` | Max number of users who can be added to a user group; empty if there is no limit to the number of users who can be added. |
| `modified` | Date the user group was modified for the last time; displayed in UNIX timestamp format. |
| `products` | Products in the user group |
| `role_id` | Unique identifier of the new user role |
| `tags` | Tags assigned to the users added to the user group. |
| `title` | Title of the user group. |

Operations: create, list, load, update.

API path: `/v2/user_groups`

#### UserProgress

| Field | Description |
| --- | --- |
| `section_id` | Unique identifier of the section |
| `units` | User progress data per unit |

Operations: list.

API path: `/v2/users/{id}/courses/{cid}/progress`

#### UserRole

| Field | Description |
| --- | --- |
| `access_level` | Access level of the user role |
| `course_id` | Unique identifier of the course assigned to the instructor. |
| `custom_role` | `true` if role is a custom role created by school owner |
| `description` | Description of the user role |
| `id` | Unique identifier of the role |
| `revenue_share_percentage` | Instructor's revenue share (% ) from the assigned course e.g. |
| `title` | Title of the role |

Operations: list.

API path: `/v2/user-roles`

#### UserSubscription

| Field | Description |
| --- | --- |
| `created` | Date the subscription was created, in UNIX timestamp format |
| `email` | Email of the user |
| `expires_at` | Date the subscription expires, in UNIX timestamp format |
| `plan_id` | Unique identifier of the subscription plan |
| `provider` | Provider of the subscription |
| `provider_meta` | Metadata of the subscription provider. |
| `status` | Status of the subscription |
| `user_id` | Unique identifier of the user |

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
| `affiliate` | `Record<string, any>` | Related affiliate data |
| `affiliateId` | `string` | Unique identifier of the affiliate |
| `amount` | `number` | Amount of the payout |
| `billing_info` | `Record<string, any> | null` | Values of the billing info fields for this user |
| `clicks` | `number` | Number of referral link clicks |
| `code` | `string` | Unique affiliate code |
| `commission_percentage` | `number` | This is the percentage of the sale that goes to the affiliate. |
| `commissions` | `number` | Total commission amount |
| `completedBy` | `Record<string, any>` |  |
| `coupon` | `null | string` | Coupon code |
| `created` | `number` | Date the user was created, in UNIX timestamp format |
| `customers` | `number` | Number of referred customers |
| `date` | `number` | Datetime the affiliation was created, in UNIX timestamp format |
| `discount` | `number` | Discount of the payment |
| `due` | `number` | Total amount of due payouts |
| `email` | `string` | Email account of the user |
| `eu_customer` | `boolean | null` | Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe. |
| `fields` | `Record<string, any>` | Default sign up fields for the School. |
| `gateway` | `null | string` | Payment gateway name |
| `id` | `string` | Unique identifier of the user |
| `instructors` | `any[]` | Related instructor data |
| `instructors_total_percentage` | `null | number` | Total percentage of the revenue for the instructor |
| `invoice` | `null | string` | Invoice identifier |
| `is_admin` | `boolean` | Indication about whether the user is an administrator of the school; true if she is, or false if she is not. |
| `is_affiliate` | `boolean` | Indication about whether the user is an affiliate of the school; true if she is, or false if she is not. |
| `is_instructor` | `boolean` | Indication about whether the user is an instructor in the school; true if she is, or false if she is not. |
| `is_reporter` | `boolean` | Indication about whether the user is an reporter in the school; true if she is, or false if she is not. |
| `is_suspended` | `boolean` | Indication about whether the user is suspended in the school; true if she is, or false if she is not. |
| `last_login` | `null | number` | Date of the last login of the user, in UNIX timestamp format |
| `leads` | `number` | Number of leads |
| `nps_comment` | `string | null` | The latest comment submitted by the user on the NPS form. |
| `nps_score` | `number | null` | The latest NPS score submitted by the user. |
| `paid_at` | `number | null` | Payment date, in UNIX timestamp format |
| `paymentMethod` | `string` | Payment method |
| `paymentNotes` | `string | null` | Payment notes |
| `payment_plan_current_payment` | `number | null` | Current payment number of payment plan |
| `payment_plan_total_payments` | `number | null` | Total payments number of payment plan |
| `payments` | `any[]` |  |
| `payouts` | `number` | Total amount of completed payouts |
| `pending` | `number` | Total amount of upcoming payouts |
| `period` | `null | string` | Payment plan period |
| `price` | `number` | Price of the payment |
| `product` | `Record<string, any>` | Related product data |
| `referrer_id` | `string | null` | Unique user id of the referrer for this user |
| `refund_at` | `null | number` | Refund date, in UNIX timestamp format |
| `role` | `Record<string, any>` | Values of the role fields for this user |
| `sales` | `number` | Sales total amount |
| `signup_approval_status` | `string | null` | User status regarding the Signup Approval flow |
| `subscribed_for_marketing_emails` | `boolean | null` | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `tags` | `any[]` | Array of the tags of the user |
| `tax_amount` | `number` | Tax amount of the payment |
| `tax_percentage` | `number` | Tax percentage of the payment |
| `transaction_id` | `string` | Transaction id of the payment |
| `type` | `string` | Type of the payment |
| `user_id` | `string` | Unique identifier of the user |
| `username` | `string` | Username of the user |
| `utms` | `Record<string, any>` | Values of the UTM fields for this user |

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
| `answers` | `any[]` | Related answers data |
| `created` | `number` | Date the submission was created (started), in UNIX timestamp format |
| `email` | `string` | Email account of the user who submitted the responses |
| `generalFeedback` | `string | null` | General feedback for a submission |
| `grade` | `number | null` | The grade that corresponds to the responses provided by the user |
| `id` | `string` | Unique identifier of the submission of responses by the user specified by the user id |
| `modified` | `number` | Date the submission was modified for the last time, in UNIX timestamp format |
| `passed` | `boolean | null` | Indication about whether or not the assessment result was passed or failed |
| `submittedTimestamp` | `number` | Date the submission was finished (submitted), in UNIX timestamp format |
| `user_id` | `string` | Unique identifier of the user who submitted the responses |

#### Example: List

```ts
const assessments = await client.Assessment().list({ form_id: "example" })
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
| `access` | `string` | Access type of the bundle |
| `afterPurchase` | `Record<string, any>` | After purchase navigation settings for this bundle |
| `created` | `number` | Date the bundle was created, in UNIX timestamp format |
| `description` | `string | null` | Bundle description |
| `id` | `string` | Unique identifier of the bundle |
| `image` | `null | string` | Bundle image (full URL) |
| `modified` | `number` | Date the bundle was modified for the last time, in UNIX timestamp format |
| `paymentPlans` | `any[]` | Payment plans associated with the bundle. |
| `price` | `number` | Price of the bundle |
| `products` | `Record<string, any>` | Products in the bundle |
| `title` | `string` | Title of the bundle |

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
| `bookingDetails` | `null | Record<string, any>` | Booking details of the event. |
| `productId` | `string` | Unique identifier of the product |
| `startDate` | `number` | Start date of the event, in UNIX timestamp format |
| `title` | `string` | Title of the event |
| `type` | `string` | Type of the event |

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
| `attempts` | `number` | Number of attempts |
| `course_id` | `string` | Unique identifier of the course |
| `external_url` | `string | null` | External URL of the certificate; null if provider is LearnWorlds |
| `form` | `Record<string, any> | null` | Form data of the certificate |
| `id` | `string` | Unique identifier of the certificate |
| `issued` | `number` | Date the certification was issued, in Unix timestamp format |
| `provider` | `string` | Provider of the certificate |
| `score` | `string` | Score of the certificate |
| `short_url` | `string | null` | Short URL of the certificate |
| `status` | `string` | Status of the certificate |
| `title` | `string` | Title of the certificate |
| `type` | `string` | Type of the certificate |
| `user` | `Record<string, any>` | User related data |

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
| `access` | `any` | Access type of the space |
| `collectionId` | `string` | Unique identifier of the collection under which the space is displayed |
| `created` | `number` | Date the post was made, in UNIX timestamp format |
| `description` | `string` | Description of the space |
| `display_order` | `number` | Display order of the collection as it appears in the community sidebar |
| `hidden_from_community` | `boolean` | Indication about whether the space is visible in the community |
| `id` | `string` | Unique identifier of the post |
| `invitation` | `boolean` | Indication whether the user was sent an invitation. |
| `is_invitation_required` | `boolean` | Indication about whether users are sent an invitation to join or are directly added to space |
| `is_members_allowed_to_view_members` | `boolean` | Indication about whether users can view other users in space |
| `items` | `any[]` | List of post content items outside of text content |
| `likes` | `any[]` | List of users who have liked the post |
| `mentions` | `any[]` | User mentions of the post |
| `modified` | `number` | Date the collection was modified for the last time, in UNIX timestamp format |
| `name` | `string` | Name of the collection |
| `owner` | `Record<string, any>` | Information about the space owner |
| `posted_in` | `Record<string, any>` | Information about where the post was made |
| `space_ids` | `any[]` | List of spaces in this collection |
| `status` | `any` | The status of the user - `joined`, the user has joined the space - `invited`, the user has been sent an invitation to gain access to the space - `deleted`, the user has been removed from the space - `left`, the user has left the space |
| `text` | `string` | Text content of the post |
| `title` | `string` | Name of the space |
| `uids` | `any[]` | Unique identifiers or emails of the users to be invited/added |
| `upvotes` | `any[]` | List of users who have upvoted the post |
| `usages` | `any[]` | List of space usages in the platform |
| `user` | `Record<string, any>` | Information about the post author |
| `username` | `string` | The username of the user |
| `users` | `Record<string, any>` | List of users that were added or invited to space |

#### Example: List

```ts
const communitys = await client.Community().list({ space_id: "example" })
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
| `created` | `number` | Date the post was made, in UNIX timestamp format |
| `id` | `string` | Unique identifier of the post |
| `items` | `any[]` | List of post content items outside of text content |
| `likes` | `any[]` | List of users who have liked the post |
| `mentions` | `any[]` | User mentions of the post |
| `posted_in` | `Record<string, any>` | Information about where the post was made |
| `text` | `string` | Text content of the post |
| `upvotes` | `any[]` | List of users who have upvoted the post |
| `user` | `Record<string, any>` | Information about the post author |

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
| `access` | `any` | Access type of the space |
| `collectionId` | `string` | Unique identifier of the collection under which the space is displayed |
| `description` | `string` | Description of the space |
| `hidden_from_community` | `boolean` | Indication about whether the space is visible in the community |
| `id` | `string` | Unique identifier of the space |
| `is_invitation_required` | `boolean` | Indication about whether users are sent an invitation to join or are directly added to space |
| `is_members_allowed_to_view_members` | `boolean` | Indication about whether users can view other users in space |
| `owner` | `Record<string, any>` | Information about the space owner |
| `title` | `string` | Name of the space |
| `usages` | `any[]` | List of space usages in the platform |

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
| `bulk` | `boolean` | Indication about whether there's a bulk set of codes created for this coupon. |
| `code` | `string` | Coupon code |
| `expires` | `null | string` | Coupon expiration date, in YYYY-MM-DD format |
| `prefix` | `string | null` | Coupon prefix |
| `quantity` | `number | null` | Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed) |
| `times_used` | `number` | Coupon number of times used. |

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
| `affiliate` | `Record<string, any>` | Related affiliate data |
| `billing_info` | `null | Record<string, any>` | Billing info of the payment |
| `coupon` | `null | string` | Coupon code |
| `created` | `number` | Datetime of the payment was created, in UNIX timestamp format |
| `discount` | `number` | Discount of the payment |
| `gateway` | `null | string` | Payment gateway name |
| `id` | `string` | Unique identifier of the payment |
| `instructors` | `any[]` | Related instructor data |
| `instructors_total_percentage` | `null | number` | Total percentage of the revenue for the instructor |
| `invoice` | `null | string` | Invoice identifier |
| `paid_at` | `number | null` | Payment date, in UNIX timestamp format |
| `payment_plan_current_payment` | `number | null` | Current payment number of payment plan |
| `payment_plan_total_payments` | `number | null` | Total payments number of payment plan |
| `period` | `null | string` | Payment plan period |
| `price` | `number` | Price of the payment |
| `product` | `Record<string, any>` | Related product data |
| `refund_at` | `null | number` | Refund date, in UNIX timestamp format |
| `tax_amount` | `number` | Tax amount of the payment |
| `tax_percentage` | `number` | Tax percentage of the payment |
| `transaction_id` | `string` | Transaction id of the payment |
| `type` | `string` | Type of the payment |
| `user_id` | `string` | Unique identifier of the user |

#### Example: List

```ts
const coupon_usages = await client.CouponUsage().list({ id: "example", promotion_id: "example" })
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
| `access` | `string` | Access type of course |
| `afterPurchase` | `Record<string, any>` | After purchase navigation settings for this course |
| `author` | `Record<string, any> | null` | Information about the course author |
| `billing_info` | `Record<string, any> | null` | Values of the billing info fields for this user |
| `categories` | `any[]` | Categories this course belongs in |
| `courseImage` | `string | null` | Course image (full URL) |
| `created` | `number` | Date the course was created, in UNIX timestamp format |
| `description` | `string | null` | Description of the course |
| `discount_price` | `number` | Discount price of the course |
| `dripFeed` | `string` | Course setting for scheduled course delivery (drip feed); none refers to drip feed not being enabled. |
| `email` | `string` | Email account of the user who submitted the responses |
| `eu_customer` | `boolean | null` | Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe. |
| `expires` | `null | number` | Expiration timeframe value, defines the expiration timeframe, together with the type / unit in the "expiresType" field. |
| `expiresType` | `string` | Expiration timeframe type / unit, defines the expiration timeframe, together with the actual value in the "expires" field. |
| `fields` | `Record<string, any>` | Default sign up fields for the School. |
| `final_price` | `number` | Final price of the course |
| `grade` | `number` | The grade that corresponds to the responses provided by the user |
| `id` | `string` | Unique identifier of the course |
| `identifiers` | `Record<string, any>` | Course identifiers for in app purchases. |
| `is_admin` | `boolean` | Indication about whether the user is an administrator of the school; true if she is, or false if she is not. |
| `is_affiliate` | `boolean` | Indication about whether the user is an affiliate of the school; true if she is, or false if she is not. |
| `is_instructor` | `boolean` | Indication about whether the user is an instructor in the school; true if she is, or false if she is not. |
| `is_reporter` | `boolean` | Indication about whether the user is an reporter in the school; true if she is, or false if she is not. |
| `is_suspended` | `boolean` | Indication about whether the user is suspended in the school; true if she is, or false if she is not. |
| `label` | `null | string` | Label of the course |
| `last_login` | `null | number` | Date of the last login of the user, in UNIX timestamp format |
| `learningUnit` | `Record<string, any>` |  |
| `modified` | `number` | Date the course was modified for the last time, in UNIX timestamp format |
| `nps_comment` | `string | null` | The latest comment submitted by the user on the NPS form. |
| `nps_score` | `number | null` | The latest NPS score submitted by the user. |
| `original_price` | `number` | Original price of the course |
| `price` | `number` | Price of the course |
| `referrer_id` | `string | null` | Unique user id of the referrer for this user |
| `role` | `Record<string, any>` | Values of the role fields for this user |
| `signup_approval_status` | `string | null` | User status regarding the Signup Approval flow |
| `submittedTimestamp` | `number` | Date the submission was finished (submitted), in UNIX timestamp format |
| `subscribed_for_marketing_emails` | `boolean | null` | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `tags` | `any[]` | Array of the tags of the user |
| `title` | `string` | Title of the course |
| `titleId` | `string` | Unique identifier of the course title. |
| `user_id` | `string` | Unique identifier of the user who submitted the responses |
| `username` | `string` | Username of the user |
| `utms` | `Record<string, any>` | Values of the UTM fields for this user |

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
  titleId: 'example_titleId',
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
| `avg_score_rate` | `number` | Average score (%) |
| `avg_time_to_finish` | `number` | Average time to finish the course in seconds |
| `certificates_issued` | `number` | Number of issued certifications |
| `id` | `string` |  |
| `learning_units` | `number` | Number of learning activities |
| `social_interactions` | `number` | Number of social interactions |
| `students` | `number` | Number of students |
| `success_rate` | `number` | Success rate (%) |
| `total_study_time` | `number` | Total study time in seconds |
| `video_time` | `number` | Total video duration of the course in seconds |
| `video_viewing_time` | `number` | Total video time viewed |
| `videos` | `number` | Number of videos |

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
| `access` | `string` | Access type of the section |
| `description` | `string | null` | Description of the section |
| `drip` | `Record<string, any> | null` | Drip feed details of the content. |
| `id` | `string` | Unique identifier of the section |
| `learningUnits` | `any[]` | Learning activities of section |
| `sections` | `any[]` |  |
| `title` | `string` | Title of the section |

#### Example: List

```ts
const course_contents = await client.CourseContent().list({ id: "example" })
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
| `activity` | `string` | Name of the activity |
| `additional_info` | `Record<string, any> | null` | Additional info related to the activity. |
| `created` | `number` | Date the event log was created, in UNIX timestamp format |
| `description` | `string` | Description of the activity |
| `type` | `string | null` | Type of the activity |
| `user` | `Record<string, any>` | User details related to event log |

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
| `amount` | `number` | Amount per installment |
| `current_period_end` | `number` | End of the current period that the installment has been invoiced for, in UNIX timestamp format |
| `current_period_start` | `number` | Start of the current period that the installment has been invoiced for, in UNIX timestamp format |
| `email` | `string` | Email of the user |
| `ends_at` | `number | null` | Datetime the installment ends, in UNIX timestamp format |
| `firstAmount` | `number` | Ιnitial amount of money the customers have to pay up front. |
| `firstInstallmentDate` | `number | null` | Date of the first installment, in UNIX timestamp format |
| `firstInstallmentType` | `string` | Type of the first installment |
| `firstInstallmentlDays` | `number` | Number of days since the first installment |
| `id` | `string` | Unique identifier of the installment |
| `installmentIntervalType` | `string` | How much time between each installment |
| `isCancelable` | `boolean` | Indication about whether the installment can be canceled; true if it is cancelable, or false if it is not. |
| `name` | `string` | Name of the installment |
| `paymentsCount` | `number` | Number of payments of the installment |
| `paymentsPayed` | `number` | Number of completed payments of the installment |
| `plan_id` | `string` | Unique identifier of the subscription plan |
| `productId` | `string` | Unique identifier of the product |
| `productType` | `string` | Type of the product |
| `status` | `string` | Status of the installment |
| `type` | `string` | Type of the installment |
| `user_id` | `string` | Unique identifier of the user |

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
| `created` | `number` | Date the lead was created, in UNIX timestamp format |
| `email` | `string` | Email account of the user |
| `eu_customer` | `boolean | null` | Indication of whether the user is located in Europe; true if she is, or false if she's not located in Europe. |
| `first_name` | `string` | First Name of the user |
| `last_name` | `string` | Last name of the user |
| `page_submitted` | `string | null` | Page of the academy, in which the lead submitted their email account |
| `submissions` | `any[]` | Array of the all the submissions of this email account in lead capture forms of the academy |
| `subscribed_for_marketing_emails` | `boolean | null` | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `tags` | `any[]` | Array of the tags of the user |
| `user_id` | `string | null` | The unique identifier of the respective user |
| `user_registered_at` | `number | null` | Date the respective lead was also registered as a user, in UNIX timestamp format |
| `utms` | `Record<string, any>` | Values of the UTM fields for this user |

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
| `access` | `string` | Access status of the seat offering. |
| `add_to_active_seat` | `boolean` | Indication about whether the user is assigned a seat in the seat offering; true if she is, or false if she is not. |
| `available_seats` | `number` | Number of available seats in the offering. |
| `created` | `number` | Date the seat offering was created; displayed in UNIX timestamp format. |
| `description` | `string` | Description of the seat offering. |
| `id` | `string` | Unique identifier of the seat offering. |
| `max_number_of_users` | `number` | Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added. |
| `modified` | `number` | Date the seat offering was modified for the last time; displayed in UNIX timestamp format. |
| `number_of_seats` | `number` | Number of the seats in the offering. |
| `products` | `Record<string, any>` | Products in the seat offering |
| `seat_managers` | `any[]` | Unique identifier of each seat manager. |
| `success` | `boolean` |  |
| `tags` | `any[]` | Tags assigned to the users added to the seat offering. |
| `title` | `string` | Title of the seat offering. |
| `total_enrollments` | `number` | Total enrollements of the seat offering. |

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
| `affiliate` | `Record<string, any>` | Related affiliate data |
| `billing_info` | `null | Record<string, any>` | Billing info of the payment |
| `coupon` | `null | string` | Coupon code |
| `created` | `number` | Datetime of the payment was created, in UNIX timestamp format |
| `discount` | `number` | Discount of the payment |
| `expires_at` | `number` | Date the invoice expires, in UNIX timestamp format |
| `gateway` | `null | string` | Payment gateway name |
| `id` | `string` | Unique identifier of the payment |
| `instructors` | `any[]` | Related instructor data |
| `instructors_total_percentage` | `null | number` | Total percentage of the revenue for the instructor |
| `invoice` | `null | string` | Invoice identifier |
| `paid_at` | `number | null` | Payment date, in UNIX timestamp format |
| `payment_plan_current_payment` | `number | null` | Current payment number of payment plan |
| `payment_plan_total_payments` | `number | null` | Total payments number of payment plan |
| `period` | `null | string` | Payment plan period |
| `price` | `number` | Price of the payment |
| `product` | `Record<string, any>` | Related product data |
| `refund_at` | `null | number` | Refund date, in UNIX timestamp format |
| `tax_amount` | `number` | Tax amount of the payment |
| `tax_percentage` | `number` | Tax percentage of the payment |
| `transaction_id` | `string` | Transaction id of the payment |
| `type` | `string` | Type of the payment |
| `url` | `string` | Url of invoice |
| `user_id` | `string` | Unique identifier of the user |

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
| `applies_to_all` | `any[]` | All courses and/or bundles that the promotion coupon will be applied to. |
| `bulk` | `boolean` | Indication about whether there's a bulk set of codes created for this coupon. |
| `code` | `string` | Coupon code |
| `coupons` | `any[]` | Promotion coupons |
| `created` | `number` | Date the promotion was created, in UNIX timestamp format |
| `expires` | `null | string` | Coupon expiration date, in YYYY-MM-DD format |
| `id` | `string` | Unique identifier of the promotion |
| `modified` | `number` | Date the promotion was modified for the last time, in UNIX timestamp format |
| `name` | `string` | Name of the promotion |
| `prefix` | `string | null` | Coupon prefix |
| `products` | `any[]` | Specific products that the promotion coupon will be applied to |
| `quantity` | `number | null` | Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed) |
| `times_used` | `number` | Coupon number of times used. |
| `type` | `string` | Type of discount |
| `value` | `number` | Percentage or fixed amount of discount |

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
| `average_score_rate` | `number` | Average score percentage |
| `completed_at` | `number | null` | Completion date in UNIX timestamp format. |
| `completed_units` | `number` | Total number of completed course learning activities by the user |
| `course_id` | `string` | Unique identifier of the course |
| `progress_per_section_unit` | `any[]` | User progress data per section/learning activity |
| `progress_rate` | `number` | Progress rate (%) |
| `status` | `string` | Status of user progress |
| `time_on_course` | `number` | Time spent on the course in seconds |
| `total_units` | `number` | Total number of course learning activities |

#### Example: List

```ts
const reportings = await client.Reporting().list({ user_id: "example" })
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
| `access` | `string` | Access status of the seat offering. |
| `available_seats` | `number` | Number of available seats in the offering. |
| `created` | `number` | Date the seat offering was created; displayed in UNIX timestamp format. |
| `description` | `string` | Description of the seat offering. |
| `id` | `string` | Unique identifier of the seat offering. |
| `max_number_of_users` | `number` | Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added. |
| `modified` | `number` | Date the seat offering was modified for the last time; displayed in UNIX timestamp format. |
| `number_of_seats` | `number` | Number of the seats in the offering. |
| `products` | `Record<string, any>` | Products in the seat offering |
| `seat_managers` | `any[]` | Unique identifier of each seat manager. |
| `tags` | `any[]` | Tags assigned to the users added to the seat offering. |
| `title` | `string` | Title of the seat offering. |
| `total_enrollments` | `number` | Total enrollements of the seat offering. |

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
| `access` | `string` | Access type of the subscription |
| `afterPurchase` | `Record<string, any>` | After purchase navigation settings for this subscription plan |
| `created` | `number` | Date the subscription plan was created, in UNIX timestamp format |
| `description` | `string | null` | Description of the subscription |
| `id` | `string` | Unique identifier of the subscription plan |
| `image` | `string | null` | Subscription plan image (full URL) |
| `interval` | `number` | Billing interval value |
| `interval_type` | `string` | Billing interval type |
| `modified` | `number` | Date the subscription plan was modified for the last time, in UNIX timestamp format |
| `price` | `number` | Price of the subscription plan |
| `products` | `Record<string, any>` | Products in the subsription |
| `stripePlanId` | `string` | Stripe's plan Id |
| `title` | `string` | Title of the subscription plan |
| `trial_period_days` | `number` | Number of days the trial subscription plan lasts |

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
| `avg_score_rate` | `number` | Average score (%) |
| `avg_study_time` | `number` | Average study time in seconds |
| `id` | `string` |  |
| `name` | `string` | Name of the learning activity |
| `total_study_time` | `number` | Total study time in seconds |
| `type` | `string` | Type of the learning activity |
| `users_completed` | `number` | Number of users that have completed this learning activity |
| `viewers` | `number` | Number of users that have viewed this learning activity |

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
| `async` | `boolean` | Indication about whether the request will be executed asynchronously; true if it’s an asynchronous task, false if it is not. |
| `job_id` | `string` | Unique identifier of the asynchronous task; empty if the task is not asynchronous.” Ensure that the documentation link is accordingly updated |
| `send_course_complete_email` | `boolean` | Indication about whether the user will receive the completion emails; true if she should receive the emails, false if she should not. |
| `units` | `any[]` | Unique identifiers of the learning activities that should be marked as complete; empty if the progress of the whole course should be marked as complete. |

#### Example: Create

```ts
const update_user_progress = await client.UpdateUserProgress().create({
  course_id: 'example_course_id',
  user_id: 'example_user_id',
  send_course_complete_email: true,
  units: [],
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
| `action` | `string` | The exact action to be performed with the aforementioned tags to the specified user; 'attach' is the indication to add these tags to the user and 'detach' is the indication to remove them from the user. |
| `active` | `boolean` | True or false whether user is active in seat offering |
| `answers` | `any[]` | Related answers data |
| `billing_info` | `Record<string, any> | null` | Values of the billing info fields for this user |
| `course` | `Record<string, any>` |  |
| `created` | `number` | Date the user was created, in UNIX timestamp format |
| `description` | `string | null` | Description of the segment |
| `duration` | `number` | Duration of the product. |
| `duration_type` | `string` | Duration type of the product. |
| `email` | `string` | Email account of the user |
| `eu_customer` | `boolean | null` | Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe. |
| `expires` | `null | number` | Date the enrollment expires, in UNIX timestamp format |
| `fields` | `Record<string, any>` | Default sign up fields for the School. |
| `generalFeedback` | `string | null` | General feedback for a submission |
| `got_seat_on` | `number` | Date user was added to the seat offering, in UNIX timestamp |
| `grade` | `number | null` | The grade that corresponds to the responses provided by the user |
| `id` | `string` | Unique identifier of the user |
| `is_admin` | `boolean` | Indication about whether the user is an administrator of the school; true if she is, or false if she is not. |
| `is_affiliate` | `boolean` | Indication about whether the user is an affiliate of the school; true if she is, or false if she is not. |
| `is_instructor` | `boolean` | Indication about whether the user is an instructor in the school; true if she is, or false if she is not. |
| `is_reporter` | `boolean` | Indication about whether the user is an reporter in the school; true if she is, or false if she is not. |
| `is_suspended` | `boolean` | Indication about whether the user is suspended in the school; true if she is, or false if she is not. |
| `justification` | `string | null` | Any justification/note for the enrollment |
| `last_login` | `null | number` | Date of the last login of the user, in UNIX timestamp format |
| `modified` | `number` | Date the submission was modified for the last time, in UNIX timestamp format |
| `name` | `string` | Name of the segment |
| `nps_comment` | `string | null` | The latest comment submitted by the user on the NPS form. |
| `nps_score` | `number | null` | The latest NPS score submitted by the user. |
| `passed` | `boolean | null` | Indication about whether or not the assessment result was passed or failed |
| `password` | `string` | Password of the user |
| `price` | `number` | Price of the product |
| `productId` | `string` | Unique identifier of the product |
| `productType` | `string` | Type of the product |
| `referrer_id` | `string | null` | Unique user id of the referrer for this user |
| `role` | `Record<string, any>` | Values of the role fields for this user |
| `send_enrollment_email` | `boolean | null` | Indication about whether the user should receive the enrollment email; true if she should receive the email, false if she should not. |
| `send_registration_email` | `boolean | null` | Indication about whether the user will receive the registration emails; true if she should receive the emails, false if she should not. |
| `signup_approval_status` | `string | null` | User status regarding the Signup Approval flow |
| `signup_validation_rules` | `boolean` | Indication about whether validation rules should be applied; default value equals to false, which means that validation rules should not be applied. |
| `submittedTimestamp` | `number` | Date the submission was finished (submitted), in UNIX timestamp format |
| `subscribed_for_marketing_emails` | `boolean | null` | Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not. |
| `success` | `boolean` | Indication about whether the action of the enrollment was successful; true if it was successful, or false if it was not. |
| `tags` | `any[]` | Array of the tags of the user |
| `title` | `string` | Title of the seat offering. |
| `type` | `string` | Type of the product |
| `user_id` | `string` | Unique identifier of the user who submitted the responses |
| `username` | `string` | Username of the user |
| `utms` | `Record<string, any>` | Values of the UTM fields for this user |

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
  id: 'example_id',
  user_group_id: 'example_user_group_id',
  action: 'example_action',
  price: 1,
  productId: 'example_productId',
  productType: 'example_productType',
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
| `assigned_courses` | `any[]` | Courses to be assigned to the instructor; empty if the user is not an instructor or if no courses should be assigned to the user. |
| `assigned_seat_offering_ids` | `any[]` | Unique identifier of the seat offerings to be assigned to the seat manager; empty if the user is not a seat manager or if no offerings should be assigned to the user. |
| `assigned_segment_id` | `string` | Unique identifier of the segment to be assigned to the reporter; empty if the user is not a reporter or if no segment should be assigned to the user. |
| `assigned_user_group_ids` | `any[]` | Unique identifier of the user groups to be assigned to the user group manager; empty if the user is not a group manager or if no groups should be assigned to the user. |
| `created` | `number` | Date the user group was created; displayed in UNIX timestamp format. |
| `description` | `string` | Description of the user group. |
| `enroll_users_on_courses` | `boolean` | Enroll users in all selected courses automatically upon joining the user group. |
| `group_managers` | `any[]` | Unique identifier of each group manager. |
| `id` | `string` | Unique identifier of the user group. |
| `max_number_of_users` | `number` | Max number of users who can be added to a user group; empty if there is no limit to the number of users who can be added. |
| `modified` | `number` | Date the user group was modified for the last time; displayed in UNIX timestamp format. |
| `products` | `Record<string, any>` | Products in the user group |
| `role_id` | `string` | Unique identifier of the new user role |
| `tags` | `any[]` | Tags assigned to the users added to the user group. |
| `title` | `string` | Title of the user group. |

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
| `section_id` | `string` | Unique identifier of the section |
| `units` | `any[]` | User progress data per unit |

#### Example: List

```ts
const user_progresss = await client.UserProgress().list({ course_id: "example", user_id: "example" })
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
| `access_level` | `any` | Access level of the user role |
| `course_id` | `string` | Unique identifier of the course assigned to the instructor. |
| `custom_role` | `boolean` | `true` if role is a custom role created by school owner |
| `description` | `string` | Description of the user role |
| `id` | `string` | Unique identifier of the role |
| `revenue_share_percentage` | `number` | Instructor's revenue share (% ) from the assigned course e.g. |
| `title` | `string` | Title of the role |

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
| `created` | `null | number` | Date the subscription was created, in UNIX timestamp format |
| `email` | `string` | Email of the user |
| `expires_at` | `null | number` | Date the subscription expires, in UNIX timestamp format |
| `plan_id` | `string` | Unique identifier of the subscription plan |
| `provider` | `string` | Provider of the subscription |
| `provider_meta` | `Record<string, any> | null` | Metadata of the subscription provider. |
| `status` | `string` | Status of the subscription |
| `user_id` | `string` | Unique identifier of the user |

#### Example: List

```ts
const user_subscriptions = await client.UserSubscription().list()
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

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
