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
(0, node_test_1.describe)('CalendarEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LEARNWORLDS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.Calendar();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'calendar.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "bookingDetails", "req": false, "short": "Booking details of the event.", "type": ["`$ONE`", ["`$NULL`", "`$OBJECT`"]], "index$": 0 }, { "active": true, "name": "productId", "req": false, "short": "Unique identifier of the product", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "startDate", "req": false, "short": "Start date of the event, in UNIX timestamp format", "type": "`$NUMBER`", "index$": 2 }, { "active": true, "name": "title", "req": false, "short": "Title of the event", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "type", "req": false, "short": "Type of the event", "type": "`$STRING`", "index$": 4 }], "name": "calendar", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "query": [{ "active": true, "kind": "query", "name": "event_type", "orig": "event_type", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v2/school/events", "json": "{\"operationId\":\"get-courses-name-live-sessions\",\"parameters\":[{\"description\":\"Filter by event type\",\"in\":\"query\",\"name\":\"event_type\",\"schema\":{\"enum\":[\"dripFeed\",\"fileAssignment\",\"liveSession\"],\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"bookingDetails\":null,\"productId\":\"learn-how-to-walk\",\"startDate\":1632949200,\"title\":\"Learn how to walk section\",\"type\":\"dripFeed\"}]}},\"Example With Booking Details\":{\"value\":{\"data\":[{\"bookingDetails\":{\"hostUserId\":\"5be0561d43c90b171a8b4567\",\"learnerUserId\":\"6256cff2ef8b8f563e01956e\",\"providerData\":{\"durationInMinutes\":30,\"eventTypeId\":\"8dfd6800-9b06-4d9f-ad3e-052f3792ba57\",\"joinUrl\":null,\"location\":\"my office\",\"locationType\":\"physical\",\"scheduledEventId\":\"f5675834-57e6-4a16-ae57-167f68127dcd\"},\"providerName\":\"calendly\",\"status\":\"scheduled\",\"type\":\"oneOnOne\"},\"productId\":\"coachingCourse\",\"startDate\":1659088800,\"title\":\"Coaching session oneOnOne\",\"type\":\"liveSession\"}]}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"description\":\"\",\"examples\":[{\"bookingDetails\":null,\"productId\":\"learn-how-to-walk\",\"startDate\":1632949200,\"title\":\"Learn how to walk section\",\"type\":\"dripFeed\"}],\"properties\":{\"bookingDetails\":{\"description\":\"Booking details of the event. In case of non oneOnOne or group sessions, the bookingDetails is null\",\"properties\":{\"hostUserId\":{\"description\":\"Unique identifier of the user who hosts the session\",\"type\":\"string\"},\"learnerUserId\":{\"description\":\"Unique identifier of the learner\",\"type\":\"string\"},\"providerData\":{\"description\":\"Provider related data\",\"type\":\"object\"},\"providerName\":{\"example\":\"calendly\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the session\",\"enum\":[\"scheduled\"],\"example\":\"scheduled\",\"type\":\"string\"},\"type\":{\"enum\":[\"oneOnOne\",\"group\"],\"example\":\"oneOnOne\",\"type\":\"string\"}},\"type\":[\"null\",\"object\"]},\"productId\":{\"description\":\"Unique identifier of the product\",\"type\":\"string\"},\"startDate\":{\"description\":\"Start date of the event, in UNIX timestamp format\",\"type\":\"number\"},\"title\":{\"description\":\"Title of the event\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the event\",\"enum\":[\"dripFeed\",\"fileAssignment\",\"liveSession\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/school/events", "segments": [{ "lit": "v2" }, { "lit": "school" }, { "lit": "events" }], "select": { "exist": ["authorization", "event_type", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "calendar", "name__orig": "calendar", "Name": "Calendar", "name_": "calendar", "name-": "calendar", "NAME": "CALENDAR", "index$": 6 }, { "active": true, "entity": "calendar", "key$": "BasicCalendarFlow", "kind": "basic", "name": "BasicCalendarFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "calendar_ref01" } }] }] }, 'Calendar');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let calendar_ref01_data = Object.values(setup.data.existing.calendar)[0];
        // LIST
        const calendar_ref01_ent = client.Calendar();
        const calendar_ref01_match = {};
        const calendar_ref01_list = (await calendar_ref01_ent.list(calendar_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/calendar/CalendarTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LearnworldsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['calendar01', 'calendar02', 'calendar03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LEARNWORLDS_TEST_CALENDAR_ENTID': idmap,
        'LEARNWORLDS_TEST_LIVE': 'FALSE',
        'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['LEARNWORLDS_TEST_CALENDAR_ENTID'];
    const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LEARNWORLDS_TEST_CALENDAR_ENTID'];
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
//# sourceMappingURL=CalendarEntity.test.js.map