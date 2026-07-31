// Learnworlds Ts SDK

import { ActiveEntity } from './entity/ActiveEntity'
import { AffiliateEntity } from './entity/AffiliateEntity'
import { AssessmentEntity } from './entity/AssessmentEntity'
import { BundleEntity } from './entity/BundleEntity'
import { ByProductEntity } from './entity/ByProductEntity'
import { BySegmentEntity } from './entity/BySegmentEntity'
import { CalendarEntity } from './entity/CalendarEntity'
import { CertificateEntity } from './entity/CertificateEntity'
import { CommunityEntity } from './entity/CommunityEntity'
import { CommunityPostEntity } from './entity/CommunityPostEntity'
import { CommunitySpaceEntity } from './entity/CommunitySpaceEntity'
import { CompletedEntity } from './entity/CompletedEntity'
import { CouponEntity } from './entity/CouponEntity'
import { CouponUsageEntity } from './entity/CouponUsageEntity'
import { CourseEntity } from './entity/CourseEntity'
import { CourseAnalyticsEntity } from './entity/CourseAnalyticsEntity'
import { CourseContentEntity } from './entity/CourseContentEntity'
import { DueEntity } from './entity/DueEntity'
import { EventEntity } from './entity/EventEntity'
import { EventLogEntity } from './entity/EventLogEntity'
import { FormEntity } from './entity/FormEntity'
import { InstallmentEntity } from './entity/InstallmentEntity'
import { LeadEntity } from './entity/LeadEntity'
import { MultipleSeatEntity } from './entity/MultipleSeatEntity'
import { PaymentEntity } from './entity/PaymentEntity'
import { PostEntity } from './entity/PostEntity'
import { PromotionEntity } from './entity/PromotionEntity'
import { ReportingEntity } from './entity/ReportingEntity'
import { ScoreEntity } from './entity/ScoreEntity'
import { SeatEntity } from './entity/SeatEntity'
import { SegmentEntity } from './entity/SegmentEntity'
import { SpaceEntity } from './entity/SpaceEntity'
import { SubscriptionPlanEntity } from './entity/SubscriptionPlanEntity'
import { UnitEntity } from './entity/UnitEntity'
import { UnitAnalyticsEntity } from './entity/UnitAnalyticsEntity'
import { UpcomingEntity } from './entity/UpcomingEntity'
import { UpdateUserProgressEntity } from './entity/UpdateUserProgressEntity'
import { UserEntity } from './entity/UserEntity'
import { UserGroupEntity } from './entity/UserGroupEntity'
import { UserProgressEntity } from './entity/UserProgressEntity'
import { UserRoleEntity } from './entity/UserRoleEntity'
import { UserSubscriptionEntity } from './entity/UserSubscriptionEntity'

export type * from './LearnworldsTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { LearnworldsEntityBase } from './LearnworldsEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class LearnworldsSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Entity access: `client.Active().list()` / `client.Active().load({ id })`.
  Active(data?: any) {
    const self = this
    return new ActiveEntity(self,data)
  }


  // Entity access: `client.Affiliate().list()` / `client.Affiliate().load({ id })`.
  Affiliate(data?: any) {
    const self = this
    return new AffiliateEntity(self,data)
  }


  // Entity access: `client.Assessment().list()` / `client.Assessment().load({ id })`.
  Assessment(data?: any) {
    const self = this
    return new AssessmentEntity(self,data)
  }


  // Entity access: `client.Bundle().list()` / `client.Bundle().load({ id })`.
  Bundle(data?: any) {
    const self = this
    return new BundleEntity(self,data)
  }


  // Entity access: `client.ByProduct().list()` / `client.ByProduct().load({ id })`.
  ByProduct(data?: any) {
    const self = this
    return new ByProductEntity(self,data)
  }


  // Entity access: `client.BySegment().list()` / `client.BySegment().load({ id })`.
  BySegment(data?: any) {
    const self = this
    return new BySegmentEntity(self,data)
  }


  // Entity access: `client.Calendar().list()` / `client.Calendar().load({ id })`.
  Calendar(data?: any) {
    const self = this
    return new CalendarEntity(self,data)
  }


  // Entity access: `client.Certificate().list()` / `client.Certificate().load({ id })`.
  Certificate(data?: any) {
    const self = this
    return new CertificateEntity(self,data)
  }


  // Entity access: `client.Community().list()` / `client.Community().load({ id })`.
  Community(data?: any) {
    const self = this
    return new CommunityEntity(self,data)
  }


  // Entity access: `client.CommunityPost().list()` / `client.CommunityPost().load({ id })`.
  CommunityPost(data?: any) {
    const self = this
    return new CommunityPostEntity(self,data)
  }


  // Entity access: `client.CommunitySpace().list()` / `client.CommunitySpace().load({ id })`.
  CommunitySpace(data?: any) {
    const self = this
    return new CommunitySpaceEntity(self,data)
  }


  // Entity access: `client.Completed().list()` / `client.Completed().load({ id })`.
  Completed(data?: any) {
    const self = this
    return new CompletedEntity(self,data)
  }


  // Entity access: `client.Coupon().list()` / `client.Coupon().load({ id })`.
  Coupon(data?: any) {
    const self = this
    return new CouponEntity(self,data)
  }


  // Entity access: `client.CouponUsage().list()` / `client.CouponUsage().load({ id })`.
  CouponUsage(data?: any) {
    const self = this
    return new CouponUsageEntity(self,data)
  }


  // Entity access: `client.Course().list()` / `client.Course().load({ id })`.
  Course(data?: any) {
    const self = this
    return new CourseEntity(self,data)
  }


  // Entity access: `client.CourseAnalytics().list()` / `client.CourseAnalytics().load({ id })`.
  CourseAnalytics(data?: any) {
    const self = this
    return new CourseAnalyticsEntity(self,data)
  }


  // Entity access: `client.CourseContent().list()` / `client.CourseContent().load({ id })`.
  CourseContent(data?: any) {
    const self = this
    return new CourseContentEntity(self,data)
  }


  // Entity access: `client.Due().list()` / `client.Due().load({ id })`.
  Due(data?: any) {
    const self = this
    return new DueEntity(self,data)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  Event(data?: any) {
    const self = this
    return new EventEntity(self,data)
  }


  // Entity access: `client.EventLog().list()` / `client.EventLog().load({ id })`.
  EventLog(data?: any) {
    const self = this
    return new EventLogEntity(self,data)
  }


  // Entity access: `client.Form().list()` / `client.Form().load({ id })`.
  Form(data?: any) {
    const self = this
    return new FormEntity(self,data)
  }


  // Entity access: `client.Installment().list()` / `client.Installment().load({ id })`.
  Installment(data?: any) {
    const self = this
    return new InstallmentEntity(self,data)
  }


  // Entity access: `client.Lead().list()` / `client.Lead().load({ id })`.
  Lead(data?: any) {
    const self = this
    return new LeadEntity(self,data)
  }


  // Entity access: `client.MultipleSeat().list()` / `client.MultipleSeat().load({ id })`.
  MultipleSeat(data?: any) {
    const self = this
    return new MultipleSeatEntity(self,data)
  }


  // Entity access: `client.Payment().list()` / `client.Payment().load({ id })`.
  Payment(data?: any) {
    const self = this
    return new PaymentEntity(self,data)
  }


  // Entity access: `client.Post().list()` / `client.Post().load({ id })`.
  Post(data?: any) {
    const self = this
    return new PostEntity(self,data)
  }


  // Entity access: `client.Promotion().list()` / `client.Promotion().load({ id })`.
  Promotion(data?: any) {
    const self = this
    return new PromotionEntity(self,data)
  }


  // Entity access: `client.Reporting().list()` / `client.Reporting().load({ id })`.
  Reporting(data?: any) {
    const self = this
    return new ReportingEntity(self,data)
  }


  // Entity access: `client.Score().list()` / `client.Score().load({ id })`.
  Score(data?: any) {
    const self = this
    return new ScoreEntity(self,data)
  }


  // Entity access: `client.Seat().list()` / `client.Seat().load({ id })`.
  Seat(data?: any) {
    const self = this
    return new SeatEntity(self,data)
  }


  // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
  Segment(data?: any) {
    const self = this
    return new SegmentEntity(self,data)
  }


  // Entity access: `client.Space().list()` / `client.Space().load({ id })`.
  Space(data?: any) {
    const self = this
    return new SpaceEntity(self,data)
  }


  // Entity access: `client.SubscriptionPlan().list()` / `client.SubscriptionPlan().load({ id })`.
  SubscriptionPlan(data?: any) {
    const self = this
    return new SubscriptionPlanEntity(self,data)
  }


  // Entity access: `client.Unit().list()` / `client.Unit().load({ id })`.
  Unit(data?: any) {
    const self = this
    return new UnitEntity(self,data)
  }


  // Entity access: `client.UnitAnalytics().list()` / `client.UnitAnalytics().load({ id })`.
  UnitAnalytics(data?: any) {
    const self = this
    return new UnitAnalyticsEntity(self,data)
  }


  // Entity access: `client.Upcoming().list()` / `client.Upcoming().load({ id })`.
  Upcoming(data?: any) {
    const self = this
    return new UpcomingEntity(self,data)
  }


  // Entity access: `client.UpdateUserProgress().list()` / `client.UpdateUserProgress().load({ id })`.
  UpdateUserProgress(data?: any) {
    const self = this
    return new UpdateUserProgressEntity(self,data)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  User(data?: any) {
    const self = this
    return new UserEntity(self,data)
  }


  // Entity access: `client.UserGroup().list()` / `client.UserGroup().load({ id })`.
  UserGroup(data?: any) {
    const self = this
    return new UserGroupEntity(self,data)
  }


  // Entity access: `client.UserProgress().list()` / `client.UserProgress().load({ id })`.
  UserProgress(data?: any) {
    const self = this
    return new UserProgressEntity(self,data)
  }


  // Entity access: `client.UserRole().list()` / `client.UserRole().load({ id })`.
  UserRole(data?: any) {
    const self = this
    return new UserRoleEntity(self,data)
  }


  // Entity access: `client.UserSubscription().list()` / `client.UserSubscription().load({ id })`.
  UserSubscription(data?: any) {
    const self = this
    return new UserSubscriptionEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new LearnworldsSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return LearnworldsSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Learnworlds' }
  }

  toString() {
    return 'Learnworlds ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = LearnworldsSDK


export {
  stdutil,
  config,

  BaseFeature,
  LearnworldsEntityBase,

  LearnworldsSDK,
  SDK,
}


