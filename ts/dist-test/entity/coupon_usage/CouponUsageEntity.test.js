"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CouponUsageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LEARNWORLDS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.CouponUsage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'coupon_usage.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "affiliate", "req": false, "short": "Related affiliate data", "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "billing_info", "req": false, "short": "Billing info of the payment", "type": ["`$ONE`", ["`$NULL`", "`$OBJECT`"]], "index$": 1 }, { "active": true, "name": "coupon", "req": false, "short": "Coupon code", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 2 }, { "active": true, "format": "float", "name": "created", "req": false, "short": "Datetime of the payment was created, in UNIX timestamp format", "type": "`$NUMBER`", "index$": 3 }, { "active": true, "format": "float", "name": "discount", "req": false, "short": "Discount of the payment", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "gateway", "req": false, "short": "Payment gateway name", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 5 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier of the payment", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "instructors", "req": false, "short": "Related instructor data", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "format": "float", "name": "instructors_total_percentage", "req": false, "short": "Total percentage of the revenue for the instructor", "type": ["`$ONE`", ["`$NULL`", "`$NUMBER`"]], "index$": 8 }, { "active": true, "name": "invoice", "req": false, "short": "Invoice identifier", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 9 }, { "active": true, "format": "float", "name": "paid_at", "req": false, "short": "Payment date, in UNIX timestamp format", "type": ["`$ONE`", ["`$NUMBER`", "`$NULL`"]], "index$": 10 }, { "active": true, "name": "payment_plan_current_payment", "req": false, "short": "Current payment number of payment plan", "type": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 11 }, { "active": true, "name": "payment_plan_total_payments", "req": false, "short": "Total payments number of payment plan", "type": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 12 }, { "active": true, "name": "period", "req": false, "short": "Payment plan period", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 13 }, { "active": true, "format": "float", "name": "price", "req": false, "short": "Price of the payment", "type": "`$NUMBER`", "index$": 14 }, { "active": true, "name": "product", "req": false, "short": "Related product data", "type": "`$OBJECT`", "index$": 15 }, { "active": true, "format": "float", "name": "refund_at", "req": false, "short": "Refund date, in UNIX timestamp format", "type": ["`$ONE`", ["`$NULL`", "`$NUMBER`"]], "index$": 16 }, { "active": true, "format": "float", "name": "tax_amount", "req": false, "short": "Tax amount of the payment", "type": "`$NUMBER`", "index$": 17 }, { "active": true, "format": "float", "name": "tax_percentage", "req": false, "short": "Tax percentage of the payment", "type": "`$NUMBER`", "index$": 18 }, { "active": true, "name": "transaction_id", "req": false, "short": "Transaction id of the payment", "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "type", "req": false, "short": "Type of the payment", "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "user_id", "req": false, "short": "Unique identifier of the user", "type": "`$STRING`", "index$": 21 }], "id": { "field": "id", "name": "id" }, "name": "coupon_usage", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "cid", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "promotion_id", "orig": "pid", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /v2/promotions/{pid}/coupons/{cid}/usage", "json": "{\"operationId\":\"get-coupon-redemptions\",\"parameters\":[{\"description\":\"Promotion Id\",\"in\":\"path\",\"name\":\"pid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Coupon code\",\"in\":\"path\",\"name\":\"cid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"meta\":{\"itemsPerPage\":50,\"page\":1,\"totalItems\":1,\"totalPages\":1},\"payments\":[{\"affiliate\":null,\"coupon\":\"FREEE\",\"created_at\":1598441571.507159,\"currency_code\":\"BRL\",\"discount\":300,\"gateway\":null,\"id\":\"5f464863e690ab37812cc0b2\",\"instructors\":[\"5a323b4f43c90b78098b456b\"],\"instructors_total_percentage\":0.2,\"invoice\":\"00324\",\"paid_at\":1598441571.532139,\"payment_plan_current_payment\":null,\"payment_plan_total_payments\":null,\"period\":null,\"price\":0,\"product\":{\"currency_code\":\"BRL\",\"description\":\"this is the description\",\"discount_price\":280,\"final_price\":280,\"id\":\"10-secrets-of-sleep-walking\",\"image\":null,\"name\":\"10 secrets of sleep walking\",\"original_price\":300,\"trial_days\":0,\"type\":\"course\"},\"refund_at\":null,\"tax_amount\":null,\"tax_percentage\":0,\"transaction_id\":\"---\",\"type\":\"one-off\",\"user_id\":\"5f46283b391b871ee128b232\"}],\"usage\":{\"bulk\":false,\"code\":\"FREEE\",\"expires\":\"24 Sep 2020\",\"prefix\":null,\"quantity\":120,\"times_used\":1}}}},\"schema\":{\"description\":\"\",\"examples\":[{\"meta\":{\"itemsPerPage\":50,\"page\":1,\"totalItems\":1,\"totalPages\":1},\"payments\":[{\"affiliate\":null,\"coupon\":\"FREEE\",\"created_at\":1598441571.507159,\"currency_code\":\"BRL\",\"discount\":300,\"gateway\":null,\"id\":\"5f464863e690ab37812cc0b2\",\"instructors\":[\"5a323b4f43c90b78098b456b\"],\"instructors_total_percentage\":0.2,\"invoice\":\"00324\",\"paid_at\":1598441571.532139,\"payment_plan_current_payment\":null,\"payment_plan_total_payments\":null,\"period\":null,\"price\":0,\"product\":{\"currency_code\":\"BRL\",\"description\":\"this is the description\",\"discount_price\":280,\"final_price\":280,\"id\":\"10-secrets-of-sleep-walking\",\"image\":null,\"name\":\"10 secrets of sleep walking\",\"original_price\":300,\"trial_days\":0,\"type\":\"course\"},\"refund_at\":null,\"tax_amount\":null,\"tax_percentage\":0,\"transaction_id\":\"---\",\"type\":\"one-off\",\"user_id\":\"5f46283b391b871ee128b232\"}],\"usage\":{\"bulk\":false,\"code\":\"FREEE\",\"expires\":\"24 Sep 2020\",\"prefix\":null,\"quantity\":120,\"times_used\":1}}],\"properties\":{\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"},\"payments\":{\"items\":{\"description\":\"\",\"examples\":[{\"affiliate\":{\"code\":\"BOwVnd\",\"commission_amount\":10,\"commission_percentage\":10,\"id\":\"5a6f1e5a43c90b15208b4571\",\"payment_status\":\"paid\",\"username\":\"jondoe\"},\"billing_info\":{\"bf_address\":\"Baker Street 221B\",\"bf_city\":\"London\",\"bf_country\":\"UK\",\"bf_name\":\"Sherlock Holmes\",\"bf_postalcode\":\"NW1\",\"bf_taxid\":null},\"coupon\":null,\"created\":1626852950,\"discount\":0,\"gateway\":\"stripe\",\"id\":\"60fa9afd0436534ae177b072\",\"instructors\":[{\"id\":\"5a323b4f43c90b78098b456b\",\"percentage\":0.2},{\"id\":\"5acc9b3743c90b1b098b4568\",\"percentage\":0.1}],\"instructors_total_percentage\":0.3,\"invoice\":null,\"paid_at\":1626852950,\"payment_plan_current_payment\":null,\"payment_plan_total_payments\":null,\"period\":null,\"price\":100,\"product\":{\"description\":\"A Great Guide to master your nightmares\",\"discount_price\":0,\"final_price\":32,\"id\":\"the-complete-nightmare-guide\",\"image\":\"https://lwfilesdev.mycourse.app/dev-public/insert/014d143dca751d1e3c661675924a266e.jpeg\",\"name\":\"The complete nightmare Guide\",\"original_price\":32,\"trial_days\":0,\"type\":\"course\"},\"refund_at\":null,\"tax_amount\":0,\"tax_percentage\":0,\"transaction_id\":\"Added by admin\",\"type\":\"one-off\",\"user_id\":\"5ea18eee1d2c27438d61abe2\"}],\"properties\":{\"affiliate\":{\"description\":\"Related affiliate data\",\"properties\":{\"code\":{\"description\":\"Affiliate code\",\"type\":\"string\"},\"commission_amount\":{\"description\":\"Αffiliate commission amount\",\"format\":\"float\",\"type\":\"number\"},\"commission_percentage\":{\"description\":\"Affiliate commission (%)\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the affiliate\",\"type\":\"string\"},\"payment_status\":{\"description\":\"Status of the affiliation pay\",\"enum\":[\"new\",\"approved\",\"mature\",\"paid\",\"rejected\"],\"type\":\"string\"},\"username\":{\"description\":\"Affiliate username\",\"type\":\"string\"}},\"type\":\"object\"},\"billing_info\":{\"description\":\"Billing info of the payment\",\"type\":[\"null\",\"object\"]},\"coupon\":{\"description\":\"Coupon code\",\"type\":[\"null\",\"string\"]},\"created\":{\"description\":\"Datetime of the payment was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"discount\":{\"description\":\"Discount of the payment\",\"format\":\"float\",\"type\":\"number\"},\"gateway\":{\"description\":\"Payment gateway name\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier of the payment\",\"type\":\"string\"},\"instructors\":{\"description\":\"Related instructor data\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifiers of the instructor\",\"type\":\"string\"},\"percentage\":{\"description\":\"Percentage of the revenue for the instructor\",\"format\":\"float\",\"type\":[\"null\",\"number\"]}},\"type\":\"object\"},\"type\":\"array\"},\"instructors_total_percentage\":{\"description\":\"Total percentage of the revenue for the instructor\",\"format\":\"float\",\"type\":[\"null\",\"number\"]},\"invoice\":{\"description\":\"Invoice identifier\",\"type\":[\"null\",\"string\"]},\"paid_at\":{\"description\":\"Payment date, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"number\",\"null\"]},\"payment_plan_current_payment\":{\"description\":\"Current payment number of payment plan\",\"type\":[\"integer\",\"null\"]},\"payment_plan_total_payments\":{\"description\":\"Total payments number of payment plan\",\"type\":[\"integer\",\"null\"]},\"period\":{\"description\":\"Payment plan period\",\"type\":[\"null\",\"string\"]},\"price\":{\"description\":\"Price of the payment\",\"format\":\"float\",\"type\":\"number\"},\"product\":{\"description\":\"Related product data\",\"properties\":{\"description\":{\"description\":\"Description of the product\",\"type\":[\"string\",\"null\"]},\"discount_price\":{\"description\":\"Discount price of the product\",\"format\":\"float\",\"type\":\"number\"},\"final_price\":{\"description\":\"Final price of the product\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the product\",\"type\":\"string\"},\"image\":{\"description\":\"Image url of the product\",\"type\":[\"string\",\"null\"]},\"name\":{\"description\":\"Name of the product\",\"type\":\"string\"},\"original_price\":{\"description\":\"Original price of the product\",\"format\":\"float\",\"type\":\"number\"},\"trial_days\":{\"description\":\"Specified trial days of the product\",\"type\":\"integer\"},\"type\":{\"description\":\"Type of the product\",\"enum\":[\"course\",\"bundle\",\"subscription\"],\"type\":\"string\"}},\"type\":\"object\"},\"refund_at\":{\"description\":\"Refund date, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"null\",\"number\"]},\"tax_amount\":{\"description\":\"Tax amount of the payment\",\"format\":\"float\",\"type\":\"number\"},\"tax_percentage\":{\"description\":\"Tax percentage of the payment\",\"format\":\"float\",\"type\":\"number\"},\"transaction_id\":{\"description\":\"Transaction id of the payment\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the payment\",\"enum\":[\"subscription\",\"installment\",\"one-off\"],\"type\":\"string\"},\"user_id\":{\"description\":\"Unique identifier of the user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":false},\"usage\":{\"description\":\"\",\"examples\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"properties\":{\"bulk\":{\"description\":\"Indication about whether there's a bulk set of codes created for this coupon.\",\"type\":\"boolean\"},\"code\":{\"description\":\"Coupon code\",\"type\":\"string\"},\"expires\":{\"description\":\"Coupon expiration date, in YYYY-MM-DD format\",\"example\":\"2021-06-17\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"prefix\":{\"description\":\"Coupon prefix\",\"type\":[\"string\",\"null\"]},\"quantity\":{\"description\":\"Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)\",\"type\":[\"number\",\"null\"]},\"times_used\":{\"description\":\"Coupon number of times used.\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/promotions/{pid}/coupons/{cid}/usage", "rename": { "param": { "cid": "id", "pid": "promotion_id" } }, "segments": [{ "lit": "v2" }, { "lit": "promotions" }, { "var": "promotion_id" }, { "lit": "coupons" }, { "var": "id" }, { "lit": "usage" }], "select": { "exist": ["authorization", "id", "lw_client", "page", "promotion_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["promotion"]] }, "key$": "coupon_usage", "name__orig": "coupon_usage", "Name": "CouponUsage", "name_": "coupon_usage", "name-": "coupon-usage", "NAME": "COUPON_USAGE", "index$": 13 }, { "active": true, "entity": "coupon_usage", "key$": "BasicCouponUsageFlow", "kind": "basic", "name": "BasicCouponUsageFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "cid": "cid01", "promotion_id": "promotion01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "coupon_usage_ref01" } }] }] }, 'CouponUsage');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let coupon_usage_ref01_data = Object.values(setup.data.existing.coupon_usage)[0];
        // LIST
        const coupon_usage_ref01_ent = client.CouponUsage();
        const coupon_usage_ref01_match = {};
        coupon_usage_ref01_match['cid'] = setup.idmap['cid01'];
        coupon_usage_ref01_match['promotion_id'] = setup.idmap['promotion01'];
        const coupon_usage_ref01_list = (await coupon_usage_ref01_ent.list(coupon_usage_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/coupon_usage/CouponUsageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LearnworldsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['coupon_usage01', 'coupon_usage02', 'coupon_usage03', 'promotion01', 'promotion02', 'promotion03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LEARNWORLDS_TEST_COUPON_USAGE_ENTID': idmap,
        'LEARNWORLDS_TEST_LIVE': 'FALSE',
        'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['LEARNWORLDS_TEST_COUPON_USAGE_ENTID'];
    const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LEARNWORLDS_TEST_COUPON_USAGE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.LearnworldsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.LEARNWORLDS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CouponUsageEntity.test.js.map