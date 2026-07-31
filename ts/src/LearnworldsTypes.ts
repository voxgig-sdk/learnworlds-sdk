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
  affiliate_id?: string
  amount?: number
  billing_info?: Record<string, any> | null
  click?: number
  code?: string
  commission?: number
  commission_percentage?: number
  completed_by?: Record<string, any>
  coupon?: null | string
  created?: number
  customer?: number
  date?: number
  discount?: number
  due?: number
  email?: string
  eu_customer?: boolean | null
  field?: Record<string, any>
  gateway?: null | string
  id?: string
  instructor?: any[]
  instructors_total_percentage?: null | number
  invoice?: null | string
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  last_login?: null | number
  lead?: number
  nps_comment?: string | null
  nps_score?: number | null
  paid_at?: number | null
  payment?: any[]
  payment_method?: string
  payment_note?: string | null
  payment_plan_current_payment?: number | null
  payment_plan_total_payment?: number | null
  payout?: number
  pending?: number
  period?: null | string
  price?: number
  product?: Record<string, any>
  referrer_id?: string | null
  refund_at?: null | number
  role?: Record<string, any>
  sale?: number
  signup_approval_status?: string | null
  subscribed_for_marketing_email?: boolean | null
  tag?: any[]
  tax_amount?: number
  tax_percentage?: number
  transaction_id?: string
  type?: string
  user_id?: string
  username?: string
  utm?: Record<string, any>
}

export interface AffiliateListMatch {
  affiliate?: Record<string, any>
  affiliate_id?: string
  amount?: number
  billing_info?: Record<string, any> | null
  click?: number
  code?: string
  commission?: number
  commission_percentage?: number
  completed_by?: Record<string, any>
  coupon?: null | string
  created?: number
  customer?: number
  date?: number
  discount?: number
  due?: number
  email?: string
  eu_customer?: boolean | null
  field?: Record<string, any>
  gateway?: null | string
  id?: string
  instructor?: any[]
  instructors_total_percentage?: null | number
  invoice?: null | string
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  last_login?: null | number
  lead?: number
  nps_comment?: string | null
  nps_score?: number | null
  paid_at?: number | null
  payment?: any[]
  payment_method?: string
  payment_note?: string | null
  payment_plan_current_payment?: number | null
  payment_plan_total_payment?: number | null
  payout?: number
  pending?: number
  period?: null | string
  price?: number
  product?: Record<string, any>
  referrer_id?: string | null
  refund_at?: null | number
  role?: Record<string, any>
  sale?: number
  signup_approval_status?: string | null
  subscribed_for_marketing_email?: boolean | null
  tag?: any[]
  tax_amount?: number
  tax_percentage?: number
  transaction_id?: string
  type?: string
  user_id?: string
  username?: string
  utm?: Record<string, any>
}

export interface AffiliateCreateData {
  id: string
}

export interface Assessment {
  answer?: any[]
  created?: number
  email?: string
  general_feedback?: string | null
  grade?: number | null
  id?: string
  modified?: number
  passed?: boolean | null
  submitted_timestamp?: number
  user_id?: string
}

export interface AssessmentListMatch {
  form_id: string
}

export interface Bundle {
  access?: string
  after_purchase?: Record<string, any>
  created?: number
  description?: string | null
  id?: string
  image?: null | string
  modified?: number
  payment_plan?: any[]
  price?: number
  product?: Record<string, any>
  title?: string
}

export interface BundleLoadMatch {
  id: string
}

export interface BundleListMatch {
  access?: string
  after_purchase?: Record<string, any>
  created?: number
  description?: string | null
  id?: string
  image?: null | string
  modified?: number
  payment_plan?: any[]
  price?: number
  product?: Record<string, any>
  title?: string
}

export interface ByProduct {
}

export interface BySegment {
}

export interface Calendar {
  booking_detail?: null | Record<string, any>
  product_id?: string
  start_date?: number
  title?: string
  type?: string
}

export interface CalendarListMatch {
  booking_detail?: null | Record<string, any>
  product_id?: string
  start_date?: number
  title?: string
  type?: string
}

export interface Certificate {
  attempt?: number
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
  attempt?: number
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

export interface CertificateUpdateData {
  id: string
}

export interface CertificateRemoveMatch {
  id: string
}

export interface Community {
  access?: any
  collection_id?: string
  created?: number
  data?: Record<string, any>
  description?: string
  display_order?: number
  hidden_from_community?: boolean
  id?: string
  is_invitation_required?: boolean
  is_members_allowed_to_view_member?: boolean
  item?: any[]
  like?: any[]
  mention?: any[]
  modified?: number
  name?: string
  owner?: Record<string, any>
  posted_in?: Record<string, any>
  space_id?: any[]
  status?: any
  text?: string
  title?: string
  uid?: any[]
  upvote?: any[]
  usage?: any[]
  user?: Record<string, any>
  username?: string
}

export interface CommunityListMatch {
  space_id: string
}

export interface CommunityCreateData {
  space_id: string
}

export interface CommunityRemoveMatch {
  space_id?: string
  uid?: string
  id?: string
}

export interface CommunityPost {
  created?: number
  id?: string
  item?: any[]
  like?: any[]
  mention?: any[]
  posted_in?: Record<string, any>
  text?: string
  upvote?: any[]
  user?: Record<string, any>
}

export interface CommunityPostLoadMatch {
  id: string
}

export interface CommunitySpace {
  access?: any
  collection_id?: string
  description?: string
  hidden_from_community?: boolean
  id?: string
  is_invitation_required?: boolean
  is_members_allowed_to_view_member?: boolean
  owner?: Record<string, any>
  title?: string
  usage?: any[]
}

export interface CommunitySpaceLoadMatch {
  id: string
}

export interface CommunitySpaceCreateData {
  access?: any
  collection_id?: string
  description?: string
  hidden_from_community?: boolean
  id?: string
  is_invitation_required?: boolean
  is_members_allowed_to_view_member?: boolean
  owner?: Record<string, any>
  title?: string
  usage?: any[]
}

export interface CommunitySpaceUpdateData {
  id: string
}

export interface Completed {
}

export interface Coupon {
  bulk?: boolean
  code?: string
  expire?: null | string
  prefix?: string | null
  quantity?: number | null
  times_used?: number
}

export interface CouponCreateData {
  promotion_id: string
}

export interface CouponUsage {
  affiliate?: Record<string, any>
  billing_info?: null | Record<string, any>
  coupon?: null | string
  created?: number
  discount?: number
  gateway?: null | string
  id?: string
  instructor?: any[]
  instructors_total_percentage?: null | number
  invoice?: null | string
  paid_at?: number | null
  payment_plan_current_payment?: number | null
  payment_plan_total_payment?: number | null
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
}

export interface Course {
  access?: string
  after_purchase?: Record<string, any>
  author?: Record<string, any> | null
  billing_info?: Record<string, any> | null
  category?: any[]
  course_image?: string | null
  created?: number
  description?: string | null
  discount_price?: number
  drip_feed?: string
  email?: string
  eu_customer?: boolean | null
  expire?: null | number
  expires_type?: string
  field?: Record<string, any>
  final_price?: number
  grade?: number
  id?: string
  identifier?: Record<string, any>
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  label?: null | string
  last_login?: null | number
  learning_unit?: Record<string, any>
  modified?: number
  nps_comment?: string | null
  nps_score?: number | null
  original_price?: number
  price?: number
  referrer_id?: string | null
  role?: Record<string, any>
  signup_approval_status?: string | null
  submitted_timestamp?: number
  subscribed_for_marketing_email?: boolean | null
  tag?: any[]
  title?: string
  title_id: string
  user_id?: string
  username?: string
  utm?: Record<string, any>
}

export interface CourseLoadMatch {
  id: string
}

export interface CourseListMatch {
  access?: string
  after_purchase?: Record<string, any>
  author?: Record<string, any> | null
  billing_info?: Record<string, any> | null
  category?: any[]
  course_image?: string | null
  created?: number
  description?: string | null
  discount_price?: number
  drip_feed?: string
  email?: string
  eu_customer?: boolean | null
  expire?: null | number
  expires_type?: string
  field?: Record<string, any>
  final_price?: number
  grade?: number
  id?: string
  identifier?: Record<string, any>
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  label?: null | string
  last_login?: null | number
  learning_unit?: Record<string, any>
  modified?: number
  nps_comment?: string | null
  nps_score?: number | null
  original_price?: number
  price?: number
  referrer_id?: string | null
  role?: Record<string, any>
  signup_approval_status?: string | null
  submitted_timestamp?: number
  subscribed_for_marketing_email?: boolean | null
  tag?: any[]
  title?: string
  title_id?: string
  user_id?: string
  username?: string
  utm?: Record<string, any>
}

export interface CourseCreateData {
  access?: string
  after_purchase?: Record<string, any>
  author?: Record<string, any> | null
  billing_info?: Record<string, any> | null
  category?: any[]
  course_image?: string | null
  created?: number
  description?: string | null
  discount_price?: number
  drip_feed?: string
  email?: string
  eu_customer?: boolean | null
  expire?: null | number
  expires_type?: string
  field?: Record<string, any>
  final_price?: number
  grade?: number
  id?: string
  identifier?: Record<string, any>
  is_admin?: boolean
  is_affiliate?: boolean
  is_instructor?: boolean
  is_reporter?: boolean
  is_suspended?: boolean
  label?: null | string
  last_login?: null | number
  learning_unit?: Record<string, any>
  modified?: number
  nps_comment?: string | null
  nps_score?: number | null
  original_price?: number
  price?: number
  referrer_id?: string | null
  role?: Record<string, any>
  signup_approval_status?: string | null
  submitted_timestamp?: number
  subscribed_for_marketing_email?: boolean | null
  tag?: any[]
  title?: string
  title_id: string
  user_id?: string
  username?: string
  utm?: Record<string, any>
}

export interface CourseUpdateData {
  id: string
}

export interface CourseAnalytics {
  avg_score_rate?: number
  avg_time_to_finish?: number
  certificates_issued?: number
  learning_unit?: number
  social_interaction?: number
  student?: number
  success_rate?: number
  total_study_time?: number
  video?: number
  video_time?: number
  video_viewing_time?: number
}

export interface CourseAnalyticsLoadMatch {
  id: string
}

export interface CourseContent {
  access?: string
  description?: string | null
  drip?: Record<string, any> | null
  id?: string
  learning_unit?: any[]
  section?: any[]
  title?: string
}

export interface CourseContentListMatch {
  id: string
}

export interface CourseContentCreateData {
  id: string
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
  additional_info?: Record<string, any> | null
  created?: number
  description?: string
  type?: string | null
  user?: Record<string, any>
}

export interface Form {
}

export interface Installment {
  amount?: number
  current_period_end?: number
  current_period_start?: number
  email?: string
  ends_at?: number | null
  first_amount?: number
  first_installment_date?: number | null
  first_installment_type?: string
  first_installmentl_day?: number
  id?: string
  installment_interval_type?: string
  is_cancelable?: boolean
  name?: string
  payments_count?: number
  payments_payed?: number
  plan_id?: string
  product_id?: string
  product_type?: string
  status?: string
  type?: string
  user_id?: string
}

export interface InstallmentListMatch {
  amount?: number
  current_period_end?: number
  current_period_start?: number
  email?: string
  ends_at?: number | null
  first_amount?: number
  first_installment_date?: number | null
  first_installment_type?: string
  first_installmentl_day?: number
  id?: string
  installment_interval_type?: string
  is_cancelable?: boolean
  name?: string
  payments_count?: number
  payments_payed?: number
  plan_id?: string
  product_id?: string
  product_type?: string
  status?: string
  type?: string
  user_id?: string
}

export interface Lead {
  created?: number
  email?: string
  eu_customer?: boolean | null
  first_name?: string
  last_name?: string
  page_submitted?: string | null
  submission?: any[]
  subscribed_for_marketing_email?: boolean | null
  tag?: any[]
  user_id?: string | null
  user_registered_at?: number | null
  utm?: Record<string, any>
}

export interface LeadListMatch {
  created?: number
  email?: string
  eu_customer?: boolean | null
  first_name?: string
  last_name?: string
  page_submitted?: string | null
  submission?: any[]
  subscribed_for_marketing_email?: boolean | null
  tag?: any[]
  user_id?: string | null
  user_registered_at?: number | null
  utm?: Record<string, any>
}

export interface MultipleSeat {
  access?: string
  add_to_active_seat?: boolean
  available_seat?: number
  created?: number
  description?: string
  id?: string
  max_number_of_user?: number
  modified?: number
  number_of_seat?: number
  product?: Record<string, any>
  seat_manager?: any[]
  success?: boolean
  tag?: any[]
  title?: string
  total_enrollment?: number
}

export interface MultipleSeatListMatch {
  access?: string
  add_to_active_seat?: boolean
  available_seat?: number
  created?: number
  description?: string
  id?: string
  max_number_of_user?: number
  modified?: number
  number_of_seat?: number
  product?: Record<string, any>
  seat_manager?: any[]
  success?: boolean
  tag?: any[]
  title?: string
  total_enrollment?: number
}

export interface MultipleSeatCreateData {
  seat_id: string
  uid: string
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
  instructor?: any[]
  instructors_total_percentage?: null | number
  invoice?: null | string
  paid_at?: number | null
  payment_plan_current_payment?: number | null
  payment_plan_total_payment?: number | null
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
}

export interface PaymentListMatch {
  affiliate?: Record<string, any>
  billing_info?: null | Record<string, any>
  coupon?: null | string
  created?: number
  discount?: number
  expires_at?: number
  gateway?: null | string
  id?: string
  instructor?: any[]
  instructors_total_percentage?: null | number
  invoice?: null | string
  paid_at?: number | null
  payment_plan_current_payment?: number | null
  payment_plan_total_payment?: number | null
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

export interface Post {
}

export interface Promotion {
  applies_to_all?: any[]
  bulk?: boolean
  code?: string
  coupon?: any[]
  created?: number
  expire?: null | string
  id?: string
  modified?: number
  name?: string
  prefix?: string | null
  product?: any[]
  quantity?: number | null
  times_used?: number
  type?: string
  value?: number
}

export interface PromotionLoadMatch {
  id: string
}

export interface PromotionListMatch {
  applies_to_all?: any[]
  bulk?: boolean
  code?: string
  coupon?: any[]
  created?: number
  expire?: null | string
  id?: string
  modified?: number
  name?: string
  prefix?: string | null
  product?: any[]
  quantity?: number | null
  times_used?: number
  type?: string
  value?: number
}

export interface PromotionCreateData {
  applies_to_all?: any[]
  bulk?: boolean
  code?: string
  coupon?: any[]
  created?: number
  expire?: null | string
  id?: string
  modified?: number
  name?: string
  prefix?: string | null
  product?: any[]
  quantity?: number | null
  times_used?: number
  type?: string
  value?: number
}

export interface Reporting {
  average_score_rate?: number
  completed_at?: number | null
  completed_unit?: number
  course_id?: string
  progress_per_section_unit?: any[]
  progress_rate?: number
  status?: string
  time_on_course?: number
  total_unit?: number
}

export interface ReportingListMatch {
  user_id: string
}

export interface Score {
}

export interface Seat {
  access?: string
  available_seat?: number
  created?: number
  description?: string
  id?: string
  max_number_of_user?: number
  modified?: number
  number_of_seat?: number
  product?: Record<string, any>
  seat_manager?: any[]
  tag?: any[]
  title?: string
  total_enrollment?: number
}

export interface SeatLoadMatch {
  id: string
}

export interface SeatCreateData {
  access?: string
  available_seat?: number
  created?: number
  description?: string
  id?: string
  max_number_of_user?: number
  modified?: number
  number_of_seat?: number
  product?: Record<string, any>
  seat_manager?: any[]
  tag?: any[]
  title?: string
  total_enrollment?: number
}

export interface SeatUpdateData {
  id: string
}

export interface Segment {
}

export interface Space {
}

export interface SubscriptionPlan {
  access?: string
  after_purchase?: Record<string, any>
  created?: number
  description?: string | null
  id?: string
  image?: string | null
  interval?: number
  interval_type?: string
  modified?: number
  price?: number
  product?: Record<string, any>
  stripe_plan_id?: string
  title?: string
  trial_period_day?: number
}

export interface SubscriptionPlanLoadMatch {
  id: string
}

export interface SubscriptionPlanListMatch {
  access?: string
  after_purchase?: Record<string, any>
  created?: number
  description?: string | null
  id?: string
  image?: string | null
  interval?: number
  interval_type?: string
  modified?: number
  price?: number
  product?: Record<string, any>
  stripe_plan_id?: string
  title?: string
  trial_period_day?: number
}

export interface Unit {
}

export interface UnitAnalytics {
  avg_score_rate?: number
  avg_study_time?: number
  name?: string
  total_study_time?: number
  type?: string
  users_completed?: number
  viewer?: number
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
  unit: any[]
}

export interface UpdateUserProgressCreateData {
  course_id: string
  user_id: string
}

export interface User {
  action: string
  active?: boolean
  answer?: any[]
  billing_info?: Record<string, any> | null
  course?: Record<string, any>
  created?: number
  description?: string | null
  duration?: number
  duration_type?: string
  email?: string
  eu_customer?: boolean | null
  expire?: null | number
  field?: Record<string, any>
  general_feedback?: string | null
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
  product_id: string
  product_type: string
  referrer_id?: string | null
  role?: Record<string, any>
  send_enrollment_email?: boolean | null
  send_registration_email?: boolean | null
  signup_approval_status?: string | null
  signup_validation_rule?: boolean
  submitted_timestamp?: number
  subscribed_for_marketing_email?: boolean | null
  success?: boolean
  tag?: any[]
  title?: string
  type?: string
  user_id?: string
  username?: string
  utm?: Record<string, any>
}

export interface UserLoadMatch {
  id: string
}

export interface UserListMatch {
  seat_id?: string
  user_group_id?: string
}

export interface UserCreateData {
  score_id?: string
  id?: string
  user_group_id?: string
}

export interface UserUpdateData {
  id: string
}

export interface UserRemoveMatch {
  id: string
  user_group_id: string
}

export interface UserGroup {
  assigned_course?: any[]
  assigned_seat_offering_id?: any[]
  assigned_segment_id?: string
  assigned_user_group_id?: any[]
  created?: number
  description?: string
  enroll_users_on_course?: boolean
  group_manager?: any[]
  id?: string
  max_number_of_user?: number
  modified?: number
  product?: Record<string, any>
  role_id: string
  tag?: any[]
  title?: string
}

export interface UserGroupLoadMatch {
  id: string
}

export interface UserGroupListMatch {
  id?: string
}

export interface UserGroupCreateData {
  assigned_course?: any[]
  assigned_seat_offering_id?: any[]
  assigned_segment_id?: string
  assigned_user_group_id?: any[]
  created?: number
  description?: string
  enroll_users_on_course?: boolean
  group_manager?: any[]
  id?: string
  max_number_of_user?: number
  modified?: number
  product?: Record<string, any>
  role_id: string
  tag?: any[]
  title?: string
}

export interface UserGroupUpdateData {
  id: string
}

export interface UserProgress {
  section_id?: string
  unit?: any[]
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
  id?: string
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
  created?: null | number
  email?: string
  expires_at?: null | number
  plan_id?: string
  provider?: string
  provider_meta?: Record<string, any> | null
  status?: string
  user_id?: string
}

