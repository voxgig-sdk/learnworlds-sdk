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
(0, node_test_1.describe)('UserRoleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LEARNWORLDS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.UserRole();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user_role.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "access_level", "req": false, "short": "Access level of the user role", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "course_id", "req": false, "short": "Unique identifier of the course assigned to the instructor.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "custom_role", "req": false, "short": "`true` if role is a custom role created by school owner", "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "name": "description", "req": false, "short": "Description of the user role", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier of the role", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "revenue_share_percentage", "req": false, "short": "Instructor's revenue share (% ) from the assigned course e.g.", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "title", "req": false, "short": "Title of the role", "type": "`$STRING`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "user_role", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "query": [{ "active": true, "example": "admin", "kind": "query", "name": "access_level", "orig": "access_level", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "623337c2e7c2d86f9f17a9a3", "kind": "query", "name": "role_id", "orig": "role_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /v2/user-roles", "json": "{\"operationId\":\"get-v2-users-roles\",\"parameters\":[{\"description\":\"Unique identifier of the user role; use this query parameter to return a specific user role.\",\"in\":\"query\",\"name\":\"role_id\",\"schema\":{\"example\":\"623337c2e7c2d86f9f17a9a3\",\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter roles by their access level. Values can be comma seperated to filter one or more access levels\",\"in\":\"query\",\"name\":\"access_level\",\"schema\":{\"enum\":[\"admin\",\"instructor\",\"reporter\",\"seat_manager\",\"user\"],\"example\":\"admin\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example 1\":{\"value\":{\"data\":[{\"access_level\":\"instructor\",\"custom_role\":false,\"description\":\"Upgrade an Instructor to Course Creator and grant them special permissions to create, manage, and publish their courses.\",\"id\":\"61bb42d5e07e202700000008\",\"title\":\"Course creator\"}]}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"access_level\":{\"description\":\"Access level of the user role\",\"enum\":[\"admin\",\"instructor\",\"reporter\",\"seat_manager\",\"user\"]},\"custom_role\":{\"description\":\"`true` if role is a custom role created by school owner\",\"type\":\"boolean\"},\"description\":{\"description\":\"Description of the user role\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the role\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the role\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/user-roles", "segments": [{ "lit": "v2" }, { "lit": "user-roles" }], "select": { "exist": ["access_level", "authorization", "lw_client", "role_id"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v2/users/{id}/user-role", "json": "{\"operationId\":\"get-v2-users-id-user-role\",\"parameters\":[{\"description\":\"User Id or email\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The response may vary depending on role.\",\"properties\":{\"assigned_courses\":{\"description\":\"Courses to be assigned to the instructor; empty if the user is not an instructor or if no courses should be assigned to the user.\\n\\n**Note**: If left empty, all previously assigned courses will be removed from the instructor.\",\"items\":{\"properties\":{\"course_id\":{\"description\":\"Unique identifier of the course assigned to the instructor.\",\"type\":\"string\"},\"revenue_share_percentage\":{\"description\":\"Instructor's revenue share (% ) from the assigned course e.g. \\\"45\\\".\",\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"},\"assigned_seat_offering_ids\":{\"description\":\"Unique identifier of the seat offerings to be assigned to the seat manager; empty if the user is not a seat manager or if no offerings should be assigned to the user.\\n\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"assigned_segment_id\":{\"description\":\"Unique identifier of the segment to be assigned to the reporter; empty if the user is not a reporter or if no segment should be assigned to the user.\",\"type\":\"string\"},\"assigned_user_group_ids\":{\"description\":\"Unique identifier of the user groups to be assigned to the user group manager; empty if the user is not a group manager or if no groups should be assigned to the user.\\n\\nNote: If left empty, all previously assigned user groups will be removed from the group manager.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"email\":{\"description\":\"Email account of the user\",\"type\":\"string\"},\"id\":{\"description\":\"User Id or email (encoded string)\",\"type\":\"string\"},\"role_id\":{\"description\":\"User Id or email\",\"type\":\"string\"},\"user_role\":{\"description\":\"Values of the role fields for this user\",\"properties\":{\"access_level\":{\"description\":\"Access level of the role\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the user role\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the role\",\"type\":\"string\"}},\"type\":\"object\"},\"username\":{\"description\":\"Username of the user\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/users/{id}/user-role", "segments": [{ "lit": "v2" }, { "lit": "users" }, { "var": "id" }, { "lit": "user-role" }], "select": { "exist": ["authorization", "id", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body.user_role`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "user_role", "name__orig": "user_role", "Name": "UserRole", "name_": "user_role", "name-": "user-role", "NAME": "USER_ROLE", "index$": 40 }, { "active": true, "entity": "user_role", "key$": "BasicUserRoleFlow", "kind": "basic", "name": "BasicUserRoleFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "user_role_ref01" } }] }] }, 'UserRole');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let user_role_ref01_data = Object.values(setup.data.existing.user_role)[0];
        // LIST
        const user_role_ref01_ent = client.UserRole();
        const user_role_ref01_match = {};
        const user_role_ref01_list = (await user_role_ref01_ent.list(user_role_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user_role/UserRoleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LearnworldsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user_role01', 'user_role02', 'user_role03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LEARNWORLDS_TEST_USER_ROLE_ENTID': idmap,
        'LEARNWORLDS_TEST_LIVE': 'FALSE',
        'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['LEARNWORLDS_TEST_USER_ROLE_ENTID'];
    const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LEARNWORLDS_TEST_USER_ROLE_ENTID'];
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
//# sourceMappingURL=UserRoleEntity.test.js.map