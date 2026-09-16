// Typed models for the Learnworlds SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Active {
}

export interface Affiliate {
  affiliate?: Record<string, any>
  affiliateId?: string
  amount?: number
  billing_info?: Record<string, any> | null
  clicks?: number
  code?: string
  commission_percentage?: number
  commissions?: number
  completedBy?: Record<string, any>
  coupon?: null | string
  created?: number
  customers?: number
  date?: number
  discount?: number
  due?: number
  email?: string
  eu_customer?: boolean | null
  fields?: Record<string, any>
  gateway?: null | string
  id?: string
  instructors?: any[]
  instructors_total_percentage?: null | number
  invoice?: null | string
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  last_login?: null | number
  leads?: number
  nps_comment?: string | null
  nps_score?: number | null
  paid_at?: number | null
  paymentMethod?: string
  paymentNotes?: string | null
  payment_plan_current_payment?: number | null
  payment_plan_total_payments?: number | null
  payments?: any[]
  payouts?: number
  pending?: number
  period?: null | string
  price?: number
  product?: Record<string, any>
  referrer_id?: string | null
  refund_at?: null | number
  role?: Record<string, any>
  sales?: number
  signup_approval_status?: string | null
  subscribed_for_marketing_emails?: boolean | null
  tags?: any[]
  tax_amount?: number
  tax_percentage?: number
  transaction_id?: string
  type?: string
  user_id?: string
  username?: string
  utms?: Record<string, any>
}

export interface AffiliateListMatch {
  page?: number

  // Selects a custom action instead of the plain list:
  //   'customer' | 'lead' | 'payment' | 'payout_completed' | 'payout_due' | 'payout_upcoming'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AffiliateCreateData {
  id: string
  affiliate?: Record<string, any>
  affiliateId?: string
  amount?: number
  billing_info?: Record<string, any> | null
  clicks?: number
  code?: string
  commission_percentage?: number
  commissions?: number
  completedBy?: Record<string, any>
  coupon?: null | string
  created?: number
  customers?: number
  date?: number
  discount?: number
  due?: number
  email?: string
  eu_customer?: boolean | null
  fields?: Record<string, any>
  gateway?: null | string
  instructors?: any[]
  instructors_total_percentage?: null | number
  invoice?: null | string
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  last_login?: null | number
  leads?: number
  nps_comment?: string | null
  nps_score?: number | null
  paid_at?: number | null
  paymentMethod?: string
  paymentNotes?: string | null
  payment_plan_current_payment?: number | null
  payment_plan_total_payments?: number | null
  payments?: any[]
  payouts?: number
  pending?: number
  period?: null | string
  price?: number
  product?: Record<string, any>
  referrer_id?: string | null
  refund_at?: null | number
  role?: Record<string, any>
  sales?: number
  signup_approval_status?: string | null
  subscribed_for_marketing_emails?: boolean | null
  tags?: any[]
  tax_amount?: number
  tax_percentage?: number
  transaction_id?: string
  type?: string
  user_id?: string
  username?: string
  utms?: Record<string, any>
}

export interface Assessment {
  answers?: any[]
  created?: number
  email?: string
  generalFeedback?: string | null
  grade?: number | null
  id?: string
  modified?: number
  passed?: boolean | null
  submittedTimestamp?: number
  user_id?: string
}

export interface AssessmentListMatch {
  form_id: string
  items_per_page?: number
  page?: number
  user?: string

  // Selects a custom action instead of the plain list:
  //   'response'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Bundle {
  access?: string
  afterPurchase?: Record<string, any>
  created?: number
  description?: string | null
  id?: string
  image?: null | string
  modified?: number
  paymentPlans?: any[]
  price?: number
  products?: Record<string, any>
  title?: string
}

export interface BundleLoadMatch {
  id: string
}

export interface BundleListMatch {
  page?: number
}

export interface ByProduct {
}

export interface BySegment {
}

export interface Calendar {
  bookingDetails?: null | Record<string, any>
  productId?: string
  startDate?: number
  title?: string
  type?: string
}

export interface CalendarListMatch {
  event_type?: string
}

export interface Certificate {
  attempts?: number
  course_id?: string
  external_url?: string | null
  form?: Record<string, any> | null
  id?: string
  issued?: number
  provider?: string
  score?: string
  short_url?: string | null
  status?: string
  title?: string
  type?: string
  user?: Record<string, any>
}

export interface CertificateListMatch {
  course_id?: string
  page?: number
  user_id?: string
}

export interface CertificateUpdateData {
  id: string
  attempts?: number
  course_id?: string
  external_url?: string | null
  form?: Record<string, any> | null
  issued?: number
  provider?: string
  score?: string
  short_url?: string | null
  status?: string
  title?: string
  type?: string
  user?: Record<string, any>
}

export interface CertificateRemoveMatch {
  id: string
}

export interface Community {
  access?: any
  collectionId?: string
  created?: number
  description?: string
  display_order?: number
  hidden_from_community?: boolean
  id?: string
  invitation?: boolean
  is_invitation_required?: boolean
  is_members_allowed_to_view_members?: boolean
  items?: any[]
  likes?: any[]
  mentions?: any[]
  modified?: number
  name?: string
  owner?: Record<string, any>
  posted_in?: Record<string, any>
  space_ids?: any[]
  status?: any
  text?: string
  title?: string
  uids?: any[]
  upvotes?: any[]
  usages?: any[]
  user?: Record<string, any>
  username?: string
  users?: Record<string, any>
}

export interface CommunityListMatch {
  space_id: string
  items_per_page?: number
  page?: number

  // Selects a custom action instead of the plain list:
  //   'collection' | 'post' | 'space'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CommunityCreateData {
  space_id: string
  access?: any
  collectionId?: string
  created?: number
  description?: string
  display_order?: number
  hidden_from_community?: boolean
  id?: string
  invitation?: boolean
  is_invitation_required?: boolean
  is_members_allowed_to_view_members?: boolean
  items?: any[]
  likes?: any[]
  mentions?: any[]
  modified?: number
  name?: string
  owner?: Record<string, any>
  posted_in?: Record<string, any>
  space_ids?: any[]
  status?: any
  text?: string
  title?: string
  uids?: any[]
  upvotes?: any[]
  usages?: any[]
  user?: Record<string, any>
  username?: string
  users?: Record<string, any>
}

export interface CommunityRemoveMatch {
  id: string
}

export interface CommunityPost {
  created?: number
  id?: string
  items?: any[]
  likes?: any[]
  mentions?: any[]
  posted_in?: Record<string, any>
  text?: string
  upvotes?: any[]
  user?: Record<string, any>
}

export interface CommunityPostLoadMatch {
  id: string
}

export interface CommunitySpace {
  access?: any
  collectionId?: string
  description?: string
  hidden_from_community?: boolean
  id?: string
  is_invitation_required?: boolean
  is_members_allowed_to_view_members?: boolean
  owner?: Record<string, any>
  title?: string
  usages?: any[]
}

export interface CommunitySpaceLoadMatch {
  id: string
}

export interface CommunitySpaceCreateData {
  access?: any
  collectionId?: string
  description?: string
  hidden_from_community?: boolean
  id?: string
  is_invitation_required?: boolean
  is_members_allowed_to_view_members?: boolean
  owner?: Record<string, any>
  title?: string
  usages?: any[]
}

export interface CommunitySpaceUpdateData {
  id: string
  access?: any
  collectionId?: string
  description?: string
  hidden_from_community?: boolean
  is_invitation_required?: boolean
  is_members_allowed_to_view_members?: boolean
  owner?: Record<string, any>
  title?: string
  usages?: any[]
}

export interface Completed {
}

export interface Coupon {
  bulk?: boolean
  code?: string
  expires?: null | string
  prefix?: string | null
  quantity?: number | null
  times_used?: number
}

export interface CouponCreateData {
  promotion_id: string
  bulk?: boolean
  code?: string
  expires?: null | string
  prefix?: string | null
  quantity?: number | null
  times_used?: number
}

export interface CouponUsage {
  affiliate?: Record<string, any>
  billing_info?: null | Record<string, any>
  coupon?: null | string
  created?: number
  discount?: number
  gateway?: null | string
  id?: string
  instructors?: any[]
  instructors_total_percentage?: null | number
  invoice?: null | string
  paid_at?: number | null
  payment_plan_current_payment?: number | null
  payment_plan_total_payments?: number | null
  period?: null | string
  price?: number
  product?: Record<string, any>
  refund_at?: null | number
  tax_amount?: number
  tax_percentage?: number
  transaction_id?: string
  type?: string
  user_id?: string
}

export interface CouponUsageListMatch {
  id: string
  promotion_id: string
  page?: number
}

export interface Course {
  access?: string
  afterPurchase?: Record<string, any>
  author?: Record<string, any> | null
  billing_info?: Record<string, any> | null
  categories?: any[]
  courseImage?: string | null
  created?: number
  description?: string | null
  discount_price?: number
  dripFeed?: string
  email?: string
  eu_customer?: boolean | null
  expires?: null | number
  expiresType?: string
  fields?: Record<string, any>
  final_price?: number
  grade?: number
  id?: string
  identifiers?: Record<string, any>
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  label?: null | string
  last_login?: null | number
  learningUnit?: Record<string, any>
  modified?: number
  nps_comment?: string | null
  nps_score?: number | null
  original_price?: number
  price?: number
  referrer_id?: string | null
  role?: Record<string, any>
  signup_approval_status?: string | null
  submittedTimestamp?: number
  subscribed_for_marketing_emails?: boolean | null
  tags?: any[]
  title?: string
  titleId: string
  user_id?: string
  username?: string
  utms?: Record<string, any>
}

export interface CourseLoadMatch {
  id: string
}

export interface CourseListMatch {
  access?: any[]
  category?: string
  page?: number

  // Selects a custom action instead of the plain list:
  //   'grade' | 'user'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CourseCreateData {
  access?: string
  afterPurchase?: Record<string, any>
  author?: Record<string, any> | null
  billing_info?: Record<string, any> | null
  categories?: any[]
  courseImage?: string | null
  created?: number
  description?: string | null
  discount_price?: number
  dripFeed?: string
  email?: string
  eu_customer?: boolean | null
  expires?: null | number
  expiresType?: string
  fields?: Record<string, any>
  final_price?: number
  grade?: number
  id?: string
  identifiers?: Record<string, any>
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  label?: null | string
  last_login?: null | number
  learningUnit?: Record<string, any>
  modified?: number
  nps_comment?: string | null
  nps_score?: number | null
  original_price?: number
  price?: number
  referrer_id?: string | null
  role?: Record<string, any>
  signup_approval_status?: string | null
  submittedTimestamp?: number
  subscribed_for_marketing_emails?: boolean | null
  tags?: any[]
  title?: string
  titleId: string
  user_id?: string
  username?: string
  utms?: Record<string, any>
}

export interface CourseUpdateData {
  id: string
  access?: string
  afterPurchase?: Record<string, any>
  author?: Record<string, any> | null
  billing_info?: Record<string, any> | null
  categories?: any[]
  courseImage?: string | null
  created?: number
  description?: string | null
  discount_price?: number
  dripFeed?: string
  email?: string
  eu_customer?: boolean | null
  expires?: null | number
  expiresType?: string
  fields?: Record<string, any>
  final_price?: number
  grade?: number
  identifiers?: Record<string, any>
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  label?: null | string
  last_login?: null | number
  learningUnit?: Record<string, any>
  modified?: number
  nps_comment?: string | null
  nps_score?: number | null
  original_price?: number
  price?: number
  referrer_id?: string | null
  role?: Record<string, any>
  signup_approval_status?: string | null
  submittedTimestamp?: number
  subscribed_for_marketing_emails?: boolean | null
  tags?: any[]
  title?: string
  titleId?: string
  user_id?: string
  username?: string
  utms?: Record<string, any>
}

export interface CourseAnalytics {
  avg_score_rate?: number
  avg_time_to_finish?: number
  certificates_issued?: number
  id?: string
  learning_units?: number
  social_interactions?: number
  students?: number
  success_rate?: number
  total_study_time?: number
  video_time?: number
  video_viewing_time?: number
  videos?: number
}

export interface CourseAnalyticsLoadMatch {
  id: string
}

export interface CourseContent {
  access?: string
  description?: string | null
  drip?: Record<string, any> | null
  id?: string
  learningUnits?: any[]
  sections?: any[]
  title?: string
}

export interface CourseContentListMatch {
  id: string
}

export interface CourseContentCreateData {
  id: string
  access?: string
  description?: string | null
  drip?: Record<string, any> | null
  learningUnits?: any[]
  sections?: any[]
  title?: string

  // Selects a custom action instead of the plain create:
  //   'sections'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Due {
}

export interface Event {
}

export interface EventLog {
  activity?: string
  additional_info?: Record<string, any> | null
  created?: number
  description?: string
  type?: string | null
  user?: Record<string, any>
}

export interface EventLogListMatch {
  activity?: string
  created_after?: number
  created_before?: number
  page?: number
  sort?: string
  user_id?: string
}

export interface Form {
}

export interface Installment {
  amount?: number
  current_period_end?: number
  current_period_start?: number
  email?: string
  ends_at?: number | null
  firstAmount?: number
  firstInstallmentDate?: number | null
  firstInstallmentType?: string
  firstInstallmentlDays?: number
  id?: string
  installmentIntervalType?: string
  isCancelable?: boolean
  name?: string
  paymentsCount?: number
  paymentsPayed?: number
  plan_id?: string
  productId?: string
  productType?: string
  status?: string
  type?: string
  user_id?: string
}

export interface InstallmentListMatch {
  page?: number
  product_id?: string
  product_type?: string
  user_id?: string

  // Selects a custom action instead of the plain list:
  //   'active'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Lead {
  created?: number
  email?: string
  eu_customer?: boolean | null
  first_name?: string
  last_name?: string
  page_submitted?: string | null
  submissions?: any[]
  subscribed_for_marketing_emails?: boolean | null
  tags?: any[]
  user_id?: string | null
  user_registered_at?: number | null
  utms?: Record<string, any>
}

export interface LeadListMatch {
  page?: number
}

export interface MultipleSeat {
  access?: string
  add_to_active_seat?: boolean
  available_seats?: number
  created?: number
  description?: string
  id?: string
  max_number_of_users?: number
  modified?: number
  number_of_seats?: number
  products?: Record<string, any>
  seat_managers?: any[]
  success?: boolean
  tags?: any[]
  title?: string
  total_enrollments?: number
}

export interface MultipleSeatListMatch {
  page?: number
}

export interface MultipleSeatCreateData {
  seat_id: string
  uid: string
  access?: string
  add_to_active_seat?: boolean
  available_seats?: number
  created?: number
  description?: string
  id?: string
  max_number_of_users?: number
  modified?: number
  number_of_seats?: number
  products?: Record<string, any>
  seat_managers?: any[]
  success?: boolean
  tags?: any[]
  title?: string
  total_enrollments?: number
}

export interface MultipleSeatRemoveMatch {
  seat_id: string
  uid: string
}

export interface Payment {
  affiliate?: Record<string, any>
  billing_info?: null | Record<string, any>
  coupon?: null | string
  created?: number
  discount?: number
  expires_at?: number
  gateway?: null | string
  id?: string
  instructors?: any[]
  instructors_total_percentage?: null | number
  invoice?: null | string
  paid_at?: number | null
  payment_plan_current_payment?: number | null
  payment_plan_total_payments?: number | null
  period?: null | string
  price?: number
  product?: Record<string, any>
  refund_at?: null | number
  tax_amount?: number
  tax_percentage?: number
  transaction_id?: string
  type?: string
  url?: string
  user_id?: string
}

export interface PaymentLoadMatch {
  id: string

  // Selects a custom action instead of the plain load:
  //   'invoice_link'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PaymentListMatch {
  affiliate_id?: string
  created_after?: number
  created_before?: number
  items_per_page?: number
  page?: number
  product_id?: string
  product_type?: string
  user_id?: string
}

export interface Post {
}

export interface Promotion {
  applies_to_all?: any[]
  bulk?: boolean
  code?: string
  coupons?: any[]
  created?: number
  expires?: null | string
  id?: string
  modified?: number
  name?: string
  prefix?: string | null
  products?: any[]
  quantity?: number | null
  times_used?: number
  type?: string
  value?: number
}

export interface PromotionLoadMatch {
  id: string
}

export interface PromotionListMatch {
  page?: number

  // Selects a custom action instead of the plain list:
  //   'coupon'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PromotionCreateData {
  applies_to_all?: any[]
  bulk?: boolean
  code?: string
  coupons?: any[]
  created?: number
  expires?: null | string
  id?: string
  modified?: number
  name?: string
  prefix?: string | null
  products?: any[]
  quantity?: number | null
  times_used?: number
  type?: string
  value?: number
}

export interface Reporting {
  average_score_rate?: number
  completed_at?: number | null
  completed_units?: number
  course_id?: string
  progress_per_section_unit?: any[]
  progress_rate?: number
  status?: string
  time_on_course?: number
  total_units?: number
}

export interface ReportingListMatch {
  user_id: string
  items_per_page?: number
  page?: number
}

export interface Score {
}

export interface Seat {
  access?: string
  available_seats?: number
  created?: number
  description?: string
  id?: string
  max_number_of_users?: number
  modified?: number
  number_of_seats?: number
  products?: Record<string, any>
  seat_managers?: any[]
  tags?: any[]
  title?: string
  total_enrollments?: number
}

export interface SeatLoadMatch {
  id: string
}

export interface SeatCreateData {
  access?: string
  available_seats?: number
  created?: number
  description?: string
  id?: string
  max_number_of_users?: number
  modified?: number
  number_of_seats?: number
  products?: Record<string, any>
  seat_managers?: any[]
  tags?: any[]
  title?: string
  total_enrollments?: number
}

export interface SeatUpdateData {
  id: string
  access?: string
  available_seats?: number
  created?: number
  description?: string
  max_number_of_users?: number
  modified?: number
  number_of_seats?: number
  products?: Record<string, any>
  seat_managers?: any[]
  tags?: any[]
  title?: string
  total_enrollments?: number
}

export interface Segment {
}

export interface Space {
}

export interface SubscriptionPlan {
  access?: string
  afterPurchase?: Record<string, any>
  created?: number
  description?: string | null
  id?: string
  image?: string | null
  interval?: number
  interval_type?: string
  modified?: number
  price?: number
  products?: Record<string, any>
  stripePlanId?: string
  title?: string
  trial_period_days?: number
}

export interface SubscriptionPlanLoadMatch {
  id: string
}

export interface SubscriptionPlanListMatch {
  page?: number
}

export interface Unit {
}

export interface UnitAnalytics {
  avg_score_rate?: number
  avg_study_time?: number
  id?: string
  name?: string
  total_study_time?: number
  type?: string
  users_completed?: number
  viewers?: number
}

export interface UnitAnalyticsLoadMatch {
  course_id: string
  id: string
}

export interface Upcoming {
}

export interface UpdateUserProgress {
  async?: boolean
  job_id?: string
  send_course_complete_email: boolean
  units: any[]
}

export interface UpdateUserProgressCreateData {
  course_id: string
  user_id: string
  async?: boolean
  job_id?: string
  send_course_complete_email: boolean
  units: any[]
}

export interface User {
  action: string
  active?: boolean
  answers?: any[]
  billing_info?: Record<string, any> | null
  course?: Record<string, any>
  created?: number
  description?: string | null
  duration?: number
  duration_type?: string
  email?: string
  eu_customer?: boolean | null
  expires?: null | number
  fields?: Record<string, any>
  generalFeedback?: string | null
  got_seat_on?: number
  grade?: number | null
  id?: string
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  justification?: string | null
  last_login?: null | number
  modified?: number
  name?: string
  nps_comment?: string | null
  nps_score?: number | null
  passed?: boolean | null
  password?: string
  price: number
  productId: string
  productType: string
  referrer_id?: string | null
  role?: Record<string, any>
  send_enrollment_email?: boolean | null
  send_registration_email?: boolean | null
  signup_approval_status?: string | null
  signup_validation_rules?: boolean
  submittedTimestamp?: number
  subscribed_for_marketing_emails?: boolean | null
  success?: boolean
  tags?: any[]
  title?: string
  type?: string
  user_id?: string
  username?: string
  utms?: Record<string, any>
}

export interface UserLoadMatch {
  id: string
  include_suspended?: string

  // Selects a custom action instead of the plain load:
  //   'seat'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserListMatch {
  cf_$field_name?: string
  include_suspended?: string
  items_per_page?: number
  page?: number
  registration_after?: number
  registration_before?: number
  role?: string
  status?: string
  tag?: string

  // Selects a custom action instead of the plain list:
  //   'by_product' | 'by_segment' | 'course' | 'product' | 'segment'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserCreateData {
  id: string
  user_group_id: string
  action: string
  active?: boolean
  answers?: any[]
  billing_info?: Record<string, any> | null
  course?: Record<string, any>
  created?: number
  description?: string | null
  duration?: number
  duration_type?: string
  email?: string
  eu_customer?: boolean | null
  expires?: null | number
  fields?: Record<string, any>
  generalFeedback?: string | null
  got_seat_on?: number
  grade?: number | null
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  justification?: string | null
  last_login?: null | number
  modified?: number
  name?: string
  nps_comment?: string | null
  nps_score?: number | null
  passed?: boolean | null
  password?: string
  price: number
  productId: string
  productType: string
  referrer_id?: string | null
  role?: Record<string, any>
  send_enrollment_email?: boolean | null
  send_registration_email?: boolean | null
  signup_approval_status?: string | null
  signup_validation_rules?: boolean
  submittedTimestamp?: number
  subscribed_for_marketing_emails?: boolean | null
  success?: boolean
  tags?: any[]
  title?: string
  type?: string
  user_id?: string
  username?: string
  utms?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'enrollment'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserUpdateData {
  id: string
  action?: string
  active?: boolean
  answers?: any[]
  billing_info?: Record<string, any> | null
  course?: Record<string, any>
  created?: number
  description?: string | null
  duration?: number
  duration_type?: string
  email?: string
  eu_customer?: boolean | null
  expires?: null | number
  fields?: Record<string, any>
  generalFeedback?: string | null
  got_seat_on?: number
  grade?: number | null
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  justification?: string | null
  last_login?: null | number
  modified?: number
  name?: string
  nps_comment?: string | null
  nps_score?: number | null
  passed?: boolean | null
  password?: string
  price?: number
  productId?: string
  productType?: string
  referrer_id?: string | null
  role?: Record<string, any>
  send_enrollment_email?: boolean | null
  send_registration_email?: boolean | null
  signup_approval_status?: string | null
  signup_validation_rules?: boolean
  submittedTimestamp?: number
  subscribed_for_marketing_emails?: boolean | null
  success?: boolean
  tags?: any[]
  title?: string
  type?: string
  user_id?: string
  username?: string
  utms?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'suspend' | 'tag' | 'unsuspend'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserRemoveMatch {
  id: string
  user_group_id: string

  // Selects a custom action instead of the plain remove:
  //   'enrollment'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserGroup {
  assigned_courses?: any[]
  assigned_seat_offering_ids?: any[]
  assigned_segment_id?: string
  assigned_user_group_ids?: any[]
  created?: number
  description?: string
  enroll_users_on_courses?: boolean
  group_managers?: any[]
  id?: string
  max_number_of_users?: number
  modified?: number
  products?: Record<string, any>
  role_id: string
  tags?: any[]
  title?: string
}

export interface UserGroupLoadMatch {
  id: string
}

export interface UserGroupListMatch {
  page?: number
}

export interface UserGroupCreateData {
  assigned_courses?: any[]
  assigned_seat_offering_ids?: any[]
  assigned_segment_id?: string
  assigned_user_group_ids?: any[]
  created?: number
  description?: string
  enroll_users_on_courses?: boolean
  group_managers?: any[]
  id?: string
  max_number_of_users?: number
  modified?: number
  products?: Record<string, any>
  role_id: string
  tags?: any[]
  title?: string
}

export interface UserGroupUpdateData {
  id: string
  assigned_courses?: any[]
  assigned_seat_offering_ids?: any[]
  assigned_segment_id?: string
  assigned_user_group_ids?: any[]
  created?: number
  description?: string
  enroll_users_on_courses?: boolean
  group_managers?: any[]
  max_number_of_users?: number
  modified?: number
  products?: Record<string, any>
  role_id?: string
  tags?: any[]
  title?: string

  // Selects a custom action instead of the plain update:
  //   'user-role'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserProgress {
  section_id?: string
  units?: any[]
}

export interface UserProgressListMatch {
  course_id: string
  user_id: string
}

export interface UserRole {
  access_level?: any
  course_id?: string
  custom_role?: boolean
  description?: string
  id?: string
  revenue_share_percentage?: number
  title?: string
}

export interface UserRoleListMatch {
  access_level?: string
  role_id?: string
}

export interface UserSubscription {
  created?: null | number
  email?: string
  expires_at?: null | number
  plan_id?: string
  provider?: string
  provider_meta?: Record<string, any> | null
  status?: string
  user_id?: string
}

export interface UserSubscriptionListMatch {
  page?: number
  status?: string
  user_id?: string
}

