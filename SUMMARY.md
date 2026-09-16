# API

## HTTP Methods This API uses HTTP verbs (methods) as following: + `GET` - *Read* - used to **read** (or retrieve) a representation of a resource, + `POST` - *Create* - used to **create** new resources. In particular, it&#39;s used to create subordinate resources. + `PUT` - *Update/Replace* - used for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. On successful request, replaces identified resource with the request body. + `DELETE` - *Delete* - used to **delete** a resource identified by a URI. --- ## Required Headers for all requests + Lw-Client: &#123;The school ID&#125; + Authorization : Bearer &#123;token&#125; --- ## Rate Limit A rate limit is the number of API calls an app can make within a given time period. If this limit is exceeded any extra request will fail and the App will respond with a 429 &quot;Too many Requests&quot; error. All API requests are subject to rate limits. **LearnWorlds has a Rate limit of 30 requests / 10 sec** --- ## Status Codes and Errors This API uses HTTP status codes to communicate with the API consumer. + `200 OK` - Response to a successful GET, PUT. + `201 Created` - Response to a POST that the resource is succesfully created. + `204 No Content` - Response to a successful request that won&#39;t be returning a body (like a DELETE request). + `400 Bad Request` - Bad request + `401 Unauthorized` - When no or invalid authentication details are provided. + `403 Forbidden` - When authentication succeeded but authenticated user doesn&#39;t have access to the resource. + `404 Not Found` - When a non-existent resource is requested. + `422 Validation error` - You should check your input again. + `429 Too many requests` - The consumer has sent too many requests in a given amount of time (“rate limiting”). + `500 Server error` - A general server error. ### Examples ##### Bad Request ```json &#123; &quot;errors&quot;: [ &#123; &quot;code&quot;: &quot;400&quot;, &quot;context&quot;: &quot;access_denied&quot;, &quot;message&quot;: &quot;The resource owner or authorization server denied the request.&quot; &#125; ], &quot;success&quot;: false &#125; ``` ##### Too many Requests ```json &#123; &quot;error&quot;: &quot;Too many requests&quot; &#125; ``` ##### Unauthorized ```json &#123; &quot;errors&quot;: [ &#123; &quot;code&quot;: &quot;401&quot;, &quot;context&quot;: null, &quot;message&quot;: &quot;Invalid object ID&quot; &#125; ], &quot;success&quot;: false &#125; ``` ##### Resource not found ```json &#123; &quot;error&quot;: &quot;Sorry the resource your trying to access does not exist.&quot; &#125; ``` ##### Validation Error ```json &#123; &quot;error&quot;: &quot;You need to provide a valid product_type query parameters value: &#39;course&#39;, &#39;bundle&#39;, &#39;subscription&#39;&quot; &#125; ``` ##### Generic Error ```json &#123; &quot;error&quot;: &quot;Server Error&quot; &#125; ``` --- ## Representation of Date and DateTime + All exchange of Date should follow the ISO 8601 standard. + All exchange of DateTime should follow the Unix timestamp format. When you send a Date as input to create a new resource or to filter results, you need to send it as a valid date string with the form &quot;yyyy-mm-dd&quot; (Ex: &quot;2021-05-28&quot;). When you send a DateTime as input to create a new resource or to filter results, you need to send it formatted as a valid Unix timestamp number (Ex: 1626088013, 1587639230.083278). --- ## Representation of Float Numbers Float numbers are represented with **dot** decimal-point character (Ex: 73.45, 1587639230.083278). The dot character is omitted for numbers with zero value(s) after the decimal-point. For instance, the numbers 52.00 or 52.0 will be presented as 52.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 42 entities and 91 HTTP routes. There are 2 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Active](docs/api/active.html)

SDK operations: .

### [Affiliate](docs/api/affiliate.html)

Results: Created; OK.

SDK operations: `create`, `list`.

Key fields to recognise:

- `affiliate`: Related affiliate data
- `affiliateId`: Unique identifier of the affiliate
- `amount`: Amount of the payout
- `billing_info`: Values of the billing info fields for this user
- `clicks`: Number of referral link clicks

### [Assessment](docs/api/assessment.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `answers`: Related answers data
- `created`: Date the submission was created (started), in UNIX timestamp format
- `email`: Email account of the user who submitted the responses
- `generalFeedback`: General feedback for a submission
- `grade`: The grade that corresponds to the responses provided by the user

### [Bundle](docs/api/bundle.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `access`: Access type of the bundle
- `afterPurchase`: After purchase navigation settings for this bundle
- `created`: Date the bundle was created, in UNIX timestamp format
- `description`: Bundle description
- `id`: Unique identifier of the bundle

### [ByProduct](docs/api/by_product.html)

SDK operations: .

### [BySegment](docs/api/by_segment.html)

SDK operations: .

### [Calendar](docs/api/calendar.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `bookingDetails`: Booking details of the event. In case of non oneOnOne or group sessions, the bookingDetails is null
- `productId`: Unique identifier of the product
- `startDate`: Start date of the event, in UNIX timestamp format
- `title`: Title of the event
- `type`: Type of the event

### [Certificate](docs/api/certificate.html)

Results: OK; No Content.

SDK operations: `list`, `remove`, `update`.

Key fields to recognise:

- `attempts`: Number of attempts
- `course_id`: Unique identifier of the course
- `external_url`: External URL of the certificate; null if provider is LearnWorlds
- `form`: Form data of the certificate
- `id`: Unique identifier of the certificate

### [Community](docs/api/community.html)

Results: OK; No content.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `access`: Access type of the space
- `collectionId`: Unique identifier of the collection under which the space is displayed
- `created`: Date the post was made, in UNIX timestamp format
- `description`: Description of the space
- `display_order`: Display order of the collection as it appears in the community sidebar

### [CommunityPost](docs/api/community_post.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `created`: Date the post was made, in UNIX timestamp format
- `id`: Unique identifier of the post
- `items`: List of post content items outside of text content
- `likes`: List of users who have liked the post
- `mentions`: User mentions of the post

### [CommunitySpace](docs/api/community_space.html)

Results: OK.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `access`: Access type of the space
- `collectionId`: Unique identifier of the collection under which the space is displayed
- `description`: Description of the space
- `hidden_from_community`: Indication about whether the space is visible in the community
- `id`: Unique identifier of the space

### [Completed](docs/api/completed.html)

SDK operations: .

### [Coupon](docs/api/coupon.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `bulk`: Indication about whether there&#39;s a bulk set of codes created for this coupon.
- `code`: Coupon code
- `expires`: Coupon expiration date, in YYYY-MM-DD format
- `prefix`: Coupon prefix
- `quantity`: Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)

### [CouponUsage](docs/api/coupon_usage.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `affiliate`: Related affiliate data
- `billing_info`: Billing info of the payment
- `coupon`: Coupon code
- `created`: Datetime of the payment was created, in UNIX timestamp format
- `discount`: Discount of the payment

### [Course](docs/api/course.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `access`: Access type of course
- `afterPurchase`: After purchase navigation settings for this course
- `author`: Information about the course author
- `billing_info`: Values of the billing info fields for this user
- `categories`: Categories this course belongs in

### [CourseAnalytics](docs/api/course_analytics.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `avg_score_rate`: Average score (%)
- `avg_time_to_finish`: Average time to finish the course in seconds
- `certificates_issued`: Number of issued certifications
- `learning_units`: Number of learning activities
- `social_interactions`: Number of social interactions

### [CourseContent](docs/api/course_content.html)

Results: Created; OK.

SDK operations: `create`, `list`.

Key fields to recognise:

- `access`: Access type of the section
- `description`: Description of the section
- `drip`: Drip feed details of the content. Null value indicates that the course has drip feed option as disabled
- `id`: Unique identifier of the course
- `learningUnits`: Learning activities of section

### [Due](docs/api/due.html)

SDK operations: .

### [Event](docs/api/event.html)

SDK operations: .

### [EventLog](docs/api/event_log.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `activity`: Name of the activity
- `additional_info`: Additional info related to the activity.
- `created`: Date the event log was created, in UNIX timestamp format
- `description`: Description of the activity
- `type`: Type of the activity

### [Form](docs/api/form.html)

SDK operations: .

### [Installment](docs/api/installment.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `amount`: Amount per installment
- `current_period_end`: End of the current period that the installment has been invoiced for, in UNIX timestamp format
- `current_period_start`: Start of the current period that the installment has been invoiced for, in UNIX timestamp format
- `email`: Email of the user
- `ends_at`: Datetime the installment ends, in UNIX timestamp format

### [Lead](docs/api/lead.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `created`: Date the lead was created, in UNIX timestamp format
- `email`: Email account of the user
- `eu_customer`: Indication of whether the user is located in Europe; true if she is, or false if she&#39;s not located in Europe.
- `first_name`: First Name of the user
- `last_name`: Last name of the user

### [MultipleSeat](docs/api/multiple_seat.html)

Results: OK; No Content.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `access`: Access status of the seat offering.
- `add_to_active_seat`: Indication about whether the user is assigned a seat in the seat offering; true if she is, or false if she is not.
- `available_seats`: Number of available seats in the offering.
- `created`: Date the seat offering was created; displayed in UNIX timestamp format.
- `description`: Description of the seat offering.

### [Payment](docs/api/payment.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `affiliate`: Related affiliate data
- `billing_info`: Billing info of the payment
- `coupon`: Coupon code
- `created`: Datetime of the payment was created, in UNIX timestamp format
- `discount`: Discount of the payment

### [Post](docs/api/post.html)

SDK operations: .

### [Promotion](docs/api/promotion.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `applies_to_all`: All courses and/or all bundles that promotion coupon will be applied to. None indicates that the coupon will not be applied to any courses/bundles
- `bulk`: Indication about whether there&#39;s a bulk set of codes created for this coupon.
- `code`: Coupon code
- `coupons`: Promotion coupons. The array is empty for newly created promotion.
- `created`: Date the promotion was created, in UNIX timestamp format

### [Reporting](docs/api/reporting.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `average_score_rate`: Average score percentage
- `completed_at`: Completion date in UNIX timestamp format. If status is not_started or not_completed the null value will be returned
- `completed_units`: Total number of completed course learning activities by the user
- `course_id`: Unique identifier of the course
- `progress_per_section_unit`: User progress data per section/learning activity

### [Score](docs/api/score.html)

SDK operations: .

### [Seat](docs/api/seat.html)

Results: Created; OK.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `access`: Access status of the seat offering.
- `available_seats`: Number of available seats in the offering.
- `created`: Date the seat offering was created; displayed in UNIX timestamp format.
- `description`: Description of the seat offering.
- `id`: Unique identifier of the seat offering.

### [Segment](docs/api/segment.html)

SDK operations: .

### [Space](docs/api/space.html)

SDK operations: .

### [SubscriptionPlan](docs/api/subscription_plan.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `access`: Access type of the subscription
- `afterPurchase`: After purchase navigation settings for this subscription plan
- `created`: Date the subscription plan was created, in UNIX timestamp format
- `description`: Description of the subscription
- `id`: Unique identifier of the subscription plan

### [Unit](docs/api/unit.html)

SDK operations: .

### [UnitAnalytics](docs/api/unit_analytics.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `avg_score_rate`: Average score (%)
- `avg_study_time`: Average study time in seconds
- `name`: Name of the learning activity
- `total_study_time`: Total study time in seconds
- `type`: Type of the learning activity

### [Upcoming](docs/api/upcoming.html)

SDK operations: .

### [UpdateUserProgress](docs/api/update_user_progress.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `async`: Indication about whether the request will be executed asynchronously; true if it’s an asynchronous task, false if it is not.
- `job_id`: Unique identifier of the asynchronous task; empty if the task is not asynchronous.” Ensure that the documentation link is accordingly updated
- `send_course_complete_email`: Indication about whether the user will receive the completion emails; true if she should receive the emails, false if she should not.
- `units`: Unique identifiers of the learning activities that should be marked as complete; empty if the progress of the whole course should be marked as complete.

### [User](docs/api/user.html)

Results: OK; Created; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `action`: The exact action to be performed with the aforementioned tags to the specified user; &#39;attach&#39; is the indication to add these tags to the user and &#39;detach&#39; is the indication to remove them from the user.
- `active`: True or false whether user is active in seat offering
- `answers`: Related answers data
- `billing_info`: Values of the billing info fields for this user
- `created`: Date the submission was created (started), in UNIX timestamp format

### [UserGroup](docs/api/user_group.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `assigned_courses`: Courses to be assigned to the instructor; empty if the user is not an instructor or if no courses should be assigned to the user.
- `assigned_seat_offering_ids`: Unique identifier of the seat offerings to be assigned to the seat manager; empty if the user is not a seat manager or if no offerings should be assigned to the user.
- `assigned_segment_id`: Unique identifier of the segment to be assigned to the reporter; empty if the user is not a reporter or if no segment should be assigned to the user.
- `assigned_user_group_ids`: Unique identifier of the user groups to be assigned to the user group manager; empty if the user is not a group manager or if no groups should be assigned to the user.
- `created`: Date the user group was created; displayed in UNIX timestamp format.

### [UserProgress](docs/api/user_progress.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `section_id`: Unique identifier of the section
- `units`: User progress data per unit

### [UserRole](docs/api/user_role.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `access_level`: Access level of the user role
- `course_id`: Unique identifier of the course assigned to the instructor.
- `custom_role`: `true` if role is a custom role created by school owner
- `description`: Description of the user role
- `id`: Unique identifier of the role

### [UserSubscription](docs/api/user_subscription.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `created`: Date the subscription was created, in UNIX timestamp format
- `email`: Email of the user
- `expires_at`: Date the subscription expires, in UNIX timestamp format
- `plan_id`: Unique identifier of the subscription plan
- `provider`: Provider of the subscription

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Affiliate](docs/api/affiliate.html) | `create` | `POST /v2/affiliates/{id}` | See reference |
| [Affiliate](docs/api/affiliate.html) | `list` | `GET /v2/affiliates/{id}/customers` | See reference |
| [Affiliate](docs/api/affiliate.html) | `list` | `GET /v2/affiliates/{id}/leads` | See reference |
| [Affiliate](docs/api/affiliate.html) | `list` | `GET /v2/affiliates/{id}/payments` | See reference |
| [Affiliate](docs/api/affiliate.html) | `list` | `GET /v2/affiliates/{id}/payouts/completed` | See reference |
| [Affiliate](docs/api/affiliate.html) | `list` | `GET /v2/affiliates/{id}/payouts/due` | See reference |
| [Affiliate](docs/api/affiliate.html) | `list` | `GET /v2/affiliates/{id}/payouts/upcoming` | See reference |
| [Affiliate](docs/api/affiliate.html) | `list` | `GET /v2/affiliates` | See reference |
| [Assessment](docs/api/assessment.html) | `list` | `GET /v2/forms/{id}/responses` | See reference |
| [Assessment](docs/api/assessment.html) | `list` | `GET /v2/assessments/{id}/responses` | See reference |
| [Bundle](docs/api/bundle.html) | `list` | `GET /v2/bundles` | See reference |
| [Bundle](docs/api/bundle.html) | `load` | `GET /v2/bundles/{id}` | See reference |
| [Calendar](docs/api/calendar.html) | `list` | `GET /v2/school/events` | See reference |
| [Certificate](docs/api/certificate.html) | `list` | `GET /v2/certificates` | See reference |
| [Certificate](docs/api/certificate.html) | `remove` | `DELETE /v2/certificates/{id}` | See reference |
| [Certificate](docs/api/certificate.html) | `update` | `PUT /v2/certificates/{id}` | See reference |
| [Community](docs/api/community.html) | `create` | `POST /v2/community/spaces/{id}/users` | See reference |
| [Community](docs/api/community.html) | `list` | `GET /v2/community/posts` | See reference |
| [Community](docs/api/community.html) | `list` | `GET /v2/community/spaces` | See reference |
| [Community](docs/api/community.html) | `list` | `GET /v2/community/spaces/{id}/users` | See reference |
| [Community](docs/api/community.html) | `list` | `GET /v2/community/collections` | See reference |
| [Community](docs/api/community.html) | `remove` | `DELETE /v2/community/spaces/{id}/users/{uid}` | See reference |
| [Community](docs/api/community.html) | `remove` | `DELETE /v2/community/spaces/{id}` | See reference |
| [CommunityPost](docs/api/community_post.html) | `load` | `GET /v2/community/posts/{id}` | See reference |
| [CommunitySpace](docs/api/community_space.html) | `create` | `POST /v2/community/spaces` | See reference |
| [CommunitySpace](docs/api/community_space.html) | `load` | `GET /v2/community/spaces/{id}` | See reference |
| [CommunitySpace](docs/api/community_space.html) | `update` | `PUT /v2/community/spaces/{id}` | See reference |
| [Coupon](docs/api/coupon.html) | `create` | `POST /v2/promotions/{pid}/coupons` | See reference |
| [Coupon](docs/api/coupon.html) | `create` | `POST /v2/promotions/{id}/coupons-bulk` | See reference |
| [CouponUsage](docs/api/coupon_usage.html) | `list` | `GET /v2/promotions/{pid}/coupons/{cid}/usage` | See reference |
| [Course](docs/api/course.html) | `create` | `POST /v2/courses` | See reference |
| [Course](docs/api/course.html) | `list` | `GET /v2/courses/{id}/grades` | See reference |
| [Course](docs/api/course.html) | `list` | `GET /v2/courses` | See reference |
| [Course](docs/api/course.html) | `list` | `GET /v2/courses/{id}/users` | See reference |
| [Course](docs/api/course.html) | `load` | `GET /v2/courses/{id}` | See reference |
| [Course](docs/api/course.html) | `update` | `PUT /v2/courses/{id}` | See reference |
| [CourseAnalytics](docs/api/course_analytics.html) | `load` | `GET /v2/courses/{id}/analytics` | See reference |
| [CourseContent](docs/api/course_content.html) | `create` | `POST /v2/courses/{id}/sections` | See reference |
| [CourseContent](docs/api/course_content.html) | `list` | `GET /v2/courses/{id}/contents` | See reference |
| [EventLog](docs/api/event_log.html) | `list` | `GET /v2/event-logs` | See reference |
| [Installment](docs/api/installment.html) | `list` | `GET /v2/installments/active` | See reference |
| [Lead](docs/api/lead.html) | `list` | `GET /v2/leads` | See reference |
| [MultipleSeat](docs/api/multiple_seat.html) | `create` | `POST /v2/seats/{id}/users/{uid}` | See reference |
| [MultipleSeat](docs/api/multiple_seat.html) | `list` | `GET /v2/seats` | See reference |
| [MultipleSeat](docs/api/multiple_seat.html) | `remove` | `DELETE /v2/seats/{id}/users/{uid}` | See reference |
| [Payment](docs/api/payment.html) | `list` | `GET /v2/payments` | See reference |
| [Payment](docs/api/payment.html) | `load` | `GET /v2/payments/{id}` | Not required |
| [Payment](docs/api/payment.html) | `load` | `GET /v2/payments/{id}/invoice-link` | See reference |
| [Promotion](docs/api/promotion.html) | `create` | `POST /v2/promotions` | See reference |
| [Promotion](docs/api/promotion.html) | `list` | `GET /v2/promotions/{pid}/coupons` | See reference |
| [Promotion](docs/api/promotion.html) | `list` | `GET /v2/promotions` | See reference |
| [Promotion](docs/api/promotion.html) | `load` | `GET /v2/promotions/{id}` | See reference |
| [Reporting](docs/api/reporting.html) | `list` | `GET /v2/users/{id}/progress` | See reference |
| [Seat](docs/api/seat.html) | `create` | `POST /v2/seats` | See reference |
| [Seat](docs/api/seat.html) | `load` | `GET /v2/seats/{id}` | See reference |
| [Seat](docs/api/seat.html) | `update` | `PUT /v2/seats/{id}` | See reference |
| [SubscriptionPlan](docs/api/subscription_plan.html) | `list` | `GET /v2/subscription-plans` | See reference |
| [SubscriptionPlan](docs/api/subscription_plan.html) | `load` | `GET /v2/subscription-plans/{id}` | See reference |
| [UnitAnalytics](docs/api/unit_analytics.html) | `load` | `GET /v2/courses/{id}/units/{uid}/analytics` | See reference |
| [UpdateUserProgress](docs/api/update_user_progress.html) | `create` | `POST /v2/users/{id}/courses/{cid}/complete` | See reference |
| [UpdateUserProgress](docs/api/update_user_progress.html) | `create` | `POST /v2/users/{id}/courses/{cid}/reset` | See reference |
| [User](docs/api/user.html) | `create` | `POST /v2/user_groups/{id}/users/{uid}` | See reference |
| [User](docs/api/user.html) | `create` | `POST /v2/users/{id}/enrollment` | See reference |
| [User](docs/api/user.html) | `create` | `POST /v2/assessments/scores/{id}/review` | See reference |
| [User](docs/api/user.html) | `create` | `POST /v2/users` | See reference |
| [User](docs/api/user.html) | `list` | `GET /v2/users` | See reference |
| [User](docs/api/user.html) | `list` | `GET /v2/users/by-product` | See reference |
| [User](docs/api/user.html) | `list` | `GET /v2/seats/{id}/users` | See reference |
| [User](docs/api/user.html) | `list` | `GET /v2/users/by-segment` | See reference |
| [User](docs/api/user.html) | `list` | `GET /v2/users/{id}/courses` | See reference |
| [User](docs/api/user.html) | `list` | `GET /v2/user_groups/{id}/users` | See reference |
| [User](docs/api/user.html) | `list` | `GET /v2/users/{id}/products` | See reference |
| [User](docs/api/user.html) | `list` | `GET /v2/users/segments` | See reference |
| [User](docs/api/user.html) | `load` | `GET /v2/users/{id}` | See reference |
| [User](docs/api/user.html) | `load` | `GET /v2/users/{id}/seats` | See reference |
| [User](docs/api/user.html) | `remove` | `DELETE /v2/user_groups/{id}/users/{uid}` | See reference |
| [User](docs/api/user.html) | `remove` | `DELETE /v2/users/{id}/enrollment` | See reference |
| [User](docs/api/user.html) | `update` | `PUT /v2/users/{id}` | See reference |
| [User](docs/api/user.html) | `update` | `PUT /v2/users/{id}/suspend` | See reference |
| [User](docs/api/user.html) | `update` | `PUT /v2/users/{id}/tags` | See reference |
| [User](docs/api/user.html) | `update` | `PUT /v2/users/{id}/unsuspend` | See reference |
| [UserGroup](docs/api/user_group.html) | `create` | `POST /v2/user_groups` | See reference |
| [UserGroup](docs/api/user_group.html) | `list` | `GET /v2/users/{id}/user-groups` | See reference |
| [UserGroup](docs/api/user_group.html) | `list` | `GET /v2/user_groups` | See reference |
| [UserGroup](docs/api/user_group.html) | `load` | `GET /v2/user_groups/{id}` | See reference |
| [UserGroup](docs/api/user_group.html) | `update` | `PUT /v2/user_groups/{id}` | See reference |
| [UserGroup](docs/api/user_group.html) | `update` | `PUT /v2/users/{id}/user-role` | See reference |
| [UserProgress](docs/api/user_progress.html) | `list` | `GET /v2/users/{id}/courses/{cid}/progress` | See reference |
| [UserRole](docs/api/user_role.html) | `list` | `GET /v2/user-roles` | See reference |
| [UserRole](docs/api/user_role.html) | `list` | `GET /v2/users/{id}/user-role` | See reference |
| [UserSubscription](docs/api/user_subscription.html) | `list` | `GET /v2/user-subscriptions` | See reference |

## Connect to the API

- Mock: `https://stoplight.io/mocks/learnworlds/api:main/2951998`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Seneca Provider](docs/sdks/seneca-provider.html) | `seneca-provider/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

