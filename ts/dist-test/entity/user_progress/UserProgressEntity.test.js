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
(0, node_test_1.describe)('UserProgressEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LEARNWORLDS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.UserProgress();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user_progress.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "section_id", "req": false, "short": "Unique identifier of the section", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "units", "req": false, "short": "User progress data per unit", "type": "`$ARRAY`", "index$": 1 }], "name": "user_progress", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "course_id", "orig": "cid", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "user_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /v2/users/{id}/courses/{cid}/progress", "json": "{\"operationId\":\"get-users-id-courses-cid-progress\",\"parameters\":[{\"description\":\"User Id or email (encoded string)\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Course title Id\",\"in\":\"path\",\"name\":\"cid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{},\"schema\":{\"examples\":[{\"average_score_rate\":80,\"completed_at\":1510243831,\"completed_units\":1,\"progress_per_section_unit\":[{\"section_id\":\"my-course_first_section\",\"units\":[{\"score_on_unit\":null,\"time_on_unit\":210,\"unit_duration\":773,\"unit_id\":\"5cdaa5856c72ec302c5698c3\",\"unit_name\":\"Von D - Burn Baphomet\",\"unit_progress_rate\":25,\"unit_section_name\":\"first section\",\"unit_status\":\"not_completed\",\"unit_type\":\"youtube\"},{\"score_on_unit\":100,\"time_on_unit\":555,\"unit_duration\":555,\"unit_id\":\"5cdac4bf6c72ec7ea8384e02\",\"unit_name\":\"best practices scorm\",\"unit_progress_rate\":100,\"unit_section_name\":\"first section\",\"unit_status\":\"completed\",\"unit_type\":\"scorm\"},{\"score_on_unit\":null,\"time_on_unit\":0,\"unit_duration\":281,\"unit_id\":\"5cdac50d6c72ec7ea40dce52\",\"unit_name\":\"test\",\"unit_progress_rate\":0,\"unit_section_name\":\"first section\",\"unit_status\":\"not_completed\",\"unit_type\":\"audio\"}]},{\"section_id\":\"my-course_second_section\",\"units\":[{\"score_on_unit\":null,\"time_on_unit\":223,\"unit_duration\":833,\"unit_id\":\"5f9a93b068fd38656d62b404\",\"unit_name\":\"my ebook\",\"unit_progress_rate\":35,\"unit_section_name\":\"second section\",\"unit_status\":\"not_completed\",\"unit_type\":\"ebook\"}]}],\"progress_rate\":100,\"status\":\"completed\",\"time_on_course\":12310,\"total_units\":4}],\"properties\":{\"average_score_rate\":{\"description\":\"Average score percentage\",\"format\":\"float\",\"type\":\"number\"},\"completed_at\":{\"description\":\"Completion date in UNIX timestamp format. If status is not_started or not_completed the null value will be returned\",\"example\":1510243831,\"type\":[\"number\",\"null\"]},\"completed_units\":{\"description\":\"Total number of completed course learning activities by the user \",\"type\":\"integer\"},\"progress_per_section_unit\":{\"description\":\"User progress data per section/learning activity\",\"items\":{\"properties\":{\"section_id\":{\"description\":\"Unique identifier of the section\",\"type\":\"string\"},\"units\":{\"description\":\"User progress data per unit\",\"items\":{\"properties\":{\"score_on_unit\":{\"description\":\"User score on learning activity\",\"maximum\":100,\"minimum\":1,\"type\":[\"null\",\"integer\"]},\"time_on_unit\":{\"description\":\"Time spend by user on learning activity in seconds\",\"type\":\"integer\"},\"unit_duration\":{\"description\":\"Duration of the learning activity in seconds\",\"type\":[\"null\",\"integer\"]},\"unit_id\":{\"description\":\"Unique identifier of the learning activity\",\"type\":\"string\"},\"unit_name\":{\"description\":\"Name of the learning activity\",\"type\":\"string\"},\"unit_progress_rate\":{\"description\":\"Progress rate of user on learning activity\",\"maximum\":100,\"minimum\":0,\"type\":\"integer\"},\"unit_section_name\":{\"description\":\"Name of the section where the learning activity belongs\",\"type\":\"string\"},\"unit_status\":{\"description\":\"Status of the learning activity\",\"enum\":[\"completed\",\"not_completed\"],\"type\":\"string\"},\"unit_type\":{\"description\":\"Type of the learning activity\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"},\"progress_rate\":{\"description\":\"Progress rate (%)\",\"format\":\"float\",\"type\":\"number\"},\"status\":{\"description\":\"Status of user progress\",\"enum\":[\"not_started\",\"completed\",\"not_completed\"],\"type\":\"string\"},\"time_on_course\":{\"description\":\"Time spent on the course in seconds\",\"type\":\"integer\"},\"total_units\":{\"description\":\"Total number of course learning activities \",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/users/{id}/courses/{cid}/progress", "rename": { "param": { "cid": "course_id", "id": "user_id" } }, "segments": [{ "lit": "v2" }, { "lit": "users" }, { "var": "user_id" }, { "lit": "courses" }, { "var": "course_id" }, { "lit": "progress" }], "select": { "exist": ["authorization", "course_id", "lw_client", "user_id"] }, "transform": { "req": "`reqdata`", "res": "`body.progress_per_section_unit`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["user", "course"]] }, "key$": "user_progress", "name__orig": "user_progress", "Name": "UserProgress", "name_": "user_progress", "name-": "user-progress", "NAME": "USER_PROGRESS", "index$": 39 }, { "active": true, "entity": "user_progress", "key$": "BasicUserProgressFlow", "kind": "basic", "name": "BasicUserProgressFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "course_id": "course01", "user_id": "user01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "user_progress_ref01" } }] }] }, 'UserProgress');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let user_progress_ref01_data = Object.values(setup.data.existing.user_progress)[0];
        // LIST
        const user_progress_ref01_ent = client.UserProgress();
        const user_progress_ref01_match = {};
        user_progress_ref01_match['course_id'] = setup.idmap['course01'];
        user_progress_ref01_match['user_id'] = setup.idmap['user01'];
        const user_progress_ref01_list = (await user_progress_ref01_ent.list(user_progress_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user_progress/UserProgressTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LearnworldsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user_progress01', 'user_progress02', 'user_progress03', 'user01', 'user02', 'user03', 'course01', 'course02', 'course03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LEARNWORLDS_TEST_USER_PROGRESS_ENTID': idmap,
        'LEARNWORLDS_TEST_LIVE': 'FALSE',
        'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['LEARNWORLDS_TEST_USER_PROGRESS_ENTID'];
    const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LEARNWORLDS_TEST_USER_PROGRESS_ENTID'];
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
//# sourceMappingURL=UserProgressEntity.test.js.map