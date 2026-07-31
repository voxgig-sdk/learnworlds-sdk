"use strict";
// Learnworlds Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.LearnworldsSDK = exports.LearnworldsEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActiveEntity_1 = require("./entity/ActiveEntity");
const AffiliateEntity_1 = require("./entity/AffiliateEntity");
const AssessmentEntity_1 = require("./entity/AssessmentEntity");
const BundleEntity_1 = require("./entity/BundleEntity");
const ByProductEntity_1 = require("./entity/ByProductEntity");
const BySegmentEntity_1 = require("./entity/BySegmentEntity");
const CalendarEntity_1 = require("./entity/CalendarEntity");
const CertificateEntity_1 = require("./entity/CertificateEntity");
const CommunityEntity_1 = require("./entity/CommunityEntity");
const CommunityPostEntity_1 = require("./entity/CommunityPostEntity");
const CommunitySpaceEntity_1 = require("./entity/CommunitySpaceEntity");
const CompletedEntity_1 = require("./entity/CompletedEntity");
const CouponEntity_1 = require("./entity/CouponEntity");
const CouponUsageEntity_1 = require("./entity/CouponUsageEntity");
const CourseEntity_1 = require("./entity/CourseEntity");
const CourseAnalyticsEntity_1 = require("./entity/CourseAnalyticsEntity");
const CourseContentEntity_1 = require("./entity/CourseContentEntity");
const DueEntity_1 = require("./entity/DueEntity");
const EventEntity_1 = require("./entity/EventEntity");
const EventLogEntity_1 = require("./entity/EventLogEntity");
const FormEntity_1 = require("./entity/FormEntity");
const InstallmentEntity_1 = require("./entity/InstallmentEntity");
const LeadEntity_1 = require("./entity/LeadEntity");
const MultipleSeatEntity_1 = require("./entity/MultipleSeatEntity");
const PaymentEntity_1 = require("./entity/PaymentEntity");
const PostEntity_1 = require("./entity/PostEntity");
const PromotionEntity_1 = require("./entity/PromotionEntity");
const ReportingEntity_1 = require("./entity/ReportingEntity");
const ScoreEntity_1 = require("./entity/ScoreEntity");
const SeatEntity_1 = require("./entity/SeatEntity");
const SegmentEntity_1 = require("./entity/SegmentEntity");
const SpaceEntity_1 = require("./entity/SpaceEntity");
const SubscriptionPlanEntity_1 = require("./entity/SubscriptionPlanEntity");
const UnitEntity_1 = require("./entity/UnitEntity");
const UnitAnalyticsEntity_1 = require("./entity/UnitAnalyticsEntity");
const UpcomingEntity_1 = require("./entity/UpcomingEntity");
const UpdateUserProgressEntity_1 = require("./entity/UpdateUserProgressEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UserGroupEntity_1 = require("./entity/UserGroupEntity");
const UserProgressEntity_1 = require("./entity/UserProgressEntity");
const UserRoleEntity_1 = require("./entity/UserRoleEntity");
const UserSubscriptionEntity_1 = require("./entity/UserSubscriptionEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const LearnworldsEntityBase_1 = require("./LearnworldsEntityBase");
Object.defineProperty(exports, "LearnworldsEntityBase", { enumerable: true, get: function () { return LearnworldsEntityBase_1.LearnworldsEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class LearnworldsSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        if (null != this._options.extend) {
            for (let f of this._options.extend) {
                featureAdd(this._rootctx, f);
            }
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
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
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    async direct(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Entity access: `client.Active().list()` / `client.Active().load({ id })`.
    Active(data) {
        const self = this;
        return new ActiveEntity_1.ActiveEntity(self, data);
    }
    // Entity access: `client.Affiliate().list()` / `client.Affiliate().load({ id })`.
    Affiliate(data) {
        const self = this;
        return new AffiliateEntity_1.AffiliateEntity(self, data);
    }
    // Entity access: `client.Assessment().list()` / `client.Assessment().load({ id })`.
    Assessment(data) {
        const self = this;
        return new AssessmentEntity_1.AssessmentEntity(self, data);
    }
    // Entity access: `client.Bundle().list()` / `client.Bundle().load({ id })`.
    Bundle(data) {
        const self = this;
        return new BundleEntity_1.BundleEntity(self, data);
    }
    // Entity access: `client.ByProduct().list()` / `client.ByProduct().load({ id })`.
    ByProduct(data) {
        const self = this;
        return new ByProductEntity_1.ByProductEntity(self, data);
    }
    // Entity access: `client.BySegment().list()` / `client.BySegment().load({ id })`.
    BySegment(data) {
        const self = this;
        return new BySegmentEntity_1.BySegmentEntity(self, data);
    }
    // Entity access: `client.Calendar().list()` / `client.Calendar().load({ id })`.
    Calendar(data) {
        const self = this;
        return new CalendarEntity_1.CalendarEntity(self, data);
    }
    // Entity access: `client.Certificate().list()` / `client.Certificate().load({ id })`.
    Certificate(data) {
        const self = this;
        return new CertificateEntity_1.CertificateEntity(self, data);
    }
    // Entity access: `client.Community().list()` / `client.Community().load({ id })`.
    Community(data) {
        const self = this;
        return new CommunityEntity_1.CommunityEntity(self, data);
    }
    // Entity access: `client.CommunityPost().list()` / `client.CommunityPost().load({ id })`.
    CommunityPost(data) {
        const self = this;
        return new CommunityPostEntity_1.CommunityPostEntity(self, data);
    }
    // Entity access: `client.CommunitySpace().list()` / `client.CommunitySpace().load({ id })`.
    CommunitySpace(data) {
        const self = this;
        return new CommunitySpaceEntity_1.CommunitySpaceEntity(self, data);
    }
    // Entity access: `client.Completed().list()` / `client.Completed().load({ id })`.
    Completed(data) {
        const self = this;
        return new CompletedEntity_1.CompletedEntity(self, data);
    }
    // Entity access: `client.Coupon().list()` / `client.Coupon().load({ id })`.
    Coupon(data) {
        const self = this;
        return new CouponEntity_1.CouponEntity(self, data);
    }
    // Entity access: `client.CouponUsage().list()` / `client.CouponUsage().load({ id })`.
    CouponUsage(data) {
        const self = this;
        return new CouponUsageEntity_1.CouponUsageEntity(self, data);
    }
    // Entity access: `client.Course().list()` / `client.Course().load({ id })`.
    Course(data) {
        const self = this;
        return new CourseEntity_1.CourseEntity(self, data);
    }
    // Entity access: `client.CourseAnalytics().list()` / `client.CourseAnalytics().load({ id })`.
    CourseAnalytics(data) {
        const self = this;
        return new CourseAnalyticsEntity_1.CourseAnalyticsEntity(self, data);
    }
    // Entity access: `client.CourseContent().list()` / `client.CourseContent().load({ id })`.
    CourseContent(data) {
        const self = this;
        return new CourseContentEntity_1.CourseContentEntity(self, data);
    }
    // Entity access: `client.Due().list()` / `client.Due().load({ id })`.
    Due(data) {
        const self = this;
        return new DueEntity_1.DueEntity(self, data);
    }
    // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
    Event(data) {
        const self = this;
        return new EventEntity_1.EventEntity(self, data);
    }
    // Entity access: `client.EventLog().list()` / `client.EventLog().load({ id })`.
    EventLog(data) {
        const self = this;
        return new EventLogEntity_1.EventLogEntity(self, data);
    }
    // Entity access: `client.Form().list()` / `client.Form().load({ id })`.
    Form(data) {
        const self = this;
        return new FormEntity_1.FormEntity(self, data);
    }
    // Entity access: `client.Installment().list()` / `client.Installment().load({ id })`.
    Installment(data) {
        const self = this;
        return new InstallmentEntity_1.InstallmentEntity(self, data);
    }
    // Entity access: `client.Lead().list()` / `client.Lead().load({ id })`.
    Lead(data) {
        const self = this;
        return new LeadEntity_1.LeadEntity(self, data);
    }
    // Entity access: `client.MultipleSeat().list()` / `client.MultipleSeat().load({ id })`.
    MultipleSeat(data) {
        const self = this;
        return new MultipleSeatEntity_1.MultipleSeatEntity(self, data);
    }
    // Entity access: `client.Payment().list()` / `client.Payment().load({ id })`.
    Payment(data) {
        const self = this;
        return new PaymentEntity_1.PaymentEntity(self, data);
    }
    // Entity access: `client.Post().list()` / `client.Post().load({ id })`.
    Post(data) {
        const self = this;
        return new PostEntity_1.PostEntity(self, data);
    }
    // Entity access: `client.Promotion().list()` / `client.Promotion().load({ id })`.
    Promotion(data) {
        const self = this;
        return new PromotionEntity_1.PromotionEntity(self, data);
    }
    // Entity access: `client.Reporting().list()` / `client.Reporting().load({ id })`.
    Reporting(data) {
        const self = this;
        return new ReportingEntity_1.ReportingEntity(self, data);
    }
    // Entity access: `client.Score().list()` / `client.Score().load({ id })`.
    Score(data) {
        const self = this;
        return new ScoreEntity_1.ScoreEntity(self, data);
    }
    // Entity access: `client.Seat().list()` / `client.Seat().load({ id })`.
    Seat(data) {
        const self = this;
        return new SeatEntity_1.SeatEntity(self, data);
    }
    // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
    Segment(data) {
        const self = this;
        return new SegmentEntity_1.SegmentEntity(self, data);
    }
    // Entity access: `client.Space().list()` / `client.Space().load({ id })`.
    Space(data) {
        const self = this;
        return new SpaceEntity_1.SpaceEntity(self, data);
    }
    // Entity access: `client.SubscriptionPlan().list()` / `client.SubscriptionPlan().load({ id })`.
    SubscriptionPlan(data) {
        const self = this;
        return new SubscriptionPlanEntity_1.SubscriptionPlanEntity(self, data);
    }
    // Entity access: `client.Unit().list()` / `client.Unit().load({ id })`.
    Unit(data) {
        const self = this;
        return new UnitEntity_1.UnitEntity(self, data);
    }
    // Entity access: `client.UnitAnalytics().list()` / `client.UnitAnalytics().load({ id })`.
    UnitAnalytics(data) {
        const self = this;
        return new UnitAnalyticsEntity_1.UnitAnalyticsEntity(self, data);
    }
    // Entity access: `client.Upcoming().list()` / `client.Upcoming().load({ id })`.
    Upcoming(data) {
        const self = this;
        return new UpcomingEntity_1.UpcomingEntity(self, data);
    }
    // Entity access: `client.UpdateUserProgress().list()` / `client.UpdateUserProgress().load({ id })`.
    UpdateUserProgress(data) {
        const self = this;
        return new UpdateUserProgressEntity_1.UpdateUserProgressEntity(self, data);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    User(data) {
        const self = this;
        return new UserEntity_1.UserEntity(self, data);
    }
    // Entity access: `client.UserGroup().list()` / `client.UserGroup().load({ id })`.
    UserGroup(data) {
        const self = this;
        return new UserGroupEntity_1.UserGroupEntity(self, data);
    }
    // Entity access: `client.UserProgress().list()` / `client.UserProgress().load({ id })`.
    UserProgress(data) {
        const self = this;
        return new UserProgressEntity_1.UserProgressEntity(self, data);
    }
    // Entity access: `client.UserRole().list()` / `client.UserRole().load({ id })`.
    UserRole(data) {
        const self = this;
        return new UserRoleEntity_1.UserRoleEntity(self, data);
    }
    // Entity access: `client.UserSubscription().list()` / `client.UserSubscription().load({ id })`.
    UserSubscription(data) {
        const self = this;
        return new UserSubscriptionEntity_1.UserSubscriptionEntity(self, data);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new LearnworldsSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return LearnworldsSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Learnworlds' };
    }
    toString() {
        return 'Learnworlds ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.LearnworldsSDK = LearnworldsSDK;
const SDK = LearnworldsSDK;
exports.SDK = SDK;
//# sourceMappingURL=LearnworldsSDK.js.map