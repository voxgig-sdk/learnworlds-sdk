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
(0, node_test_1.describe)('CommunitySpaceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LEARNWORLDS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.CommunitySpace();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'community_space.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "access", "op": { "create": { "req": true, "type": "`$ANY`" } }, "req": false, "short": "Access type of the space", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "collectionId", "req": false, "short": "Unique identifier of the collection under which the space is displayed", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "description", "req": false, "short": "Description of the space", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "hidden_from_community", "req": false, "short": "Indication about whether the space is visible in the community", "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier of the space", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "is_invitation_required", "req": false, "short": "Indication about whether users are sent an invitation to join or are directly added to space", "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "is_members_allowed_to_view_members", "req": false, "short": "Indication about whether users can view other users in space", "type": "`$BOOLEAN`", "index$": 6 }, { "active": true, "name": "owner", "req": false, "short": "Information about the space owner", "type": "`$OBJECT`", "index$": 7 }, { "active": true, "name": "title", "op": { "create": { "req": true, "type": "`$STRING`" } }, "req": false, "short": "Name of the space", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "usages", "req": false, "short": "List of space usages in the platform", "type": "`$ARRAY`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "community_space", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "POST /v2/community/spaces", "json": "{\"operationId\":\"post-v2-community-spaces\",\"parameters\":[{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"Example 1\":{\"value\":{\"access\":\"public\",\"collectionId\":\"61bb42d5e07e202700000002\",\"description\":\"My description\",\"hidden_from_community\":false,\"is_invitation_required\":true,\"is_members_allowed_to_view_members\":true,\"ownerId\":\"admin@learnworlds.com\",\"title\":\"New space\"}}},\"schema\":{\"properties\":{\"access\":{\"description\":\"Access type of the space\",\"enum\":[\"public\",\"private\",\"standalone\"]},\"collectionId\":{\"description\":\"Unique identifier of the collection in which the space will be displayed. In case of `public` or `private` access the field is required, while in case of `standalone` an error will be returned\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the space\",\"type\":\"string\"},\"hidden_from_community\":{\"description\":\"Indication whether the space is hidden from community\",\"type\":\"boolean\"},\"is_invitation_required\":{\"description\":\"Indication whether users are sent an invitation to join or are directly added to space. It is applicable only for spaces with private access.\\n\",\"type\":\"boolean\"},\"is_members_allowed_to_view_members\":{\"description\":\"Indication whether users can view other users in space. It is applicable only for spaces with private access.\\n\",\"type\":\"boolean\"},\"title\":{\"description\":\"Title of the space\",\"type\":\"string\"}},\"required\":[\"title\",\"access\"],\"type\":\"object\"}}}},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"examples\":[{\"access\":\"public\",\"collectionId\":\"61bb42d5e07e202700000002\",\"description\":\"\",\"hidden_from_community\":false,\"id\":\"6515547042ec743dcc078988\",\"is_invitation_required\":true,\"is_members_allowed_to_view_members\":true,\"owner\":{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"},\"title\":\"Space\",\"usages\":[{\"componentId\":\"component_1701798094804_337\",\"courseId\":\"a-course\",\"type\":\"ebook\",\"unitId\":\"656f0d27f9f5416317015124\"}]}],\"properties\":{\"access\":{\"description\":\"Access type of the space\\n\",\"enum\":[\"public\",\"private\",\"standalone\"]},\"collectionId\":{\"description\":\"Unique identifier of the collection under which the space is displayed\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the space\",\"type\":\"string\"},\"hidden_from_community\":{\"description\":\"Indication about whether the space is visible in the community\",\"type\":\"boolean\"},\"id\":{\"description\":\"Unique identifier of the space\",\"type\":\"string\"},\"is_invitation_required\":{\"description\":\"Indication about whether users are sent an invitation to join or are directly added to space\\n\",\"type\":\"boolean\"},\"is_members_allowed_to_view_members\":{\"description\":\"Indication about whether users can view other users in space\",\"type\":\"boolean\"},\"owner\":{\"description\":\"Information about the space owner\",\"properties\":{\"id\":{\"description\":\"The id of the creator of the space\\n\",\"type\":\"string\"},\"username\":{\"description\":\"The username of the creator of the space\\n\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Name of the space\",\"type\":\"string\"},\"usages\":{\"description\":\"List of space usages in the platform\",\"items\":{\"properties\":{\"courseId\":{\"description\":\"Unique identifier of the course the space is used\",\"type\":\"string\"},\"type\":{\"description\":\"Type of usage location\",\"enum\":[\"ebook\"]},\"unitId\":{\"description\":\"Unique identifier of the unit the space is used\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"title\":\"CommunitySpace\",\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/v2/community/spaces", "segments": [{ "lit": "v2" }, { "lit": "community" }, { "lit": "spaces" }], "select": { "exist": ["authorization", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v2/community/spaces/{id}", "json": "{\"operationId\":\"get-v2-community-spaces-id\",\"parameters\":[{\"description\":\"Unique identifier of the community space\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"examples\":[{\"access\":\"public\",\"collectionId\":\"61bb42d5e07e202700000002\",\"description\":\"\",\"hidden_from_community\":false,\"id\":\"6515547042ec743dcc078988\",\"is_invitation_required\":true,\"is_members_allowed_to_view_members\":true,\"owner\":{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"},\"title\":\"Space\",\"usages\":[{\"componentId\":\"component_1701798094804_337\",\"courseId\":\"a-course\",\"type\":\"ebook\",\"unitId\":\"656f0d27f9f5416317015124\"}]}],\"properties\":{\"access\":{\"description\":\"Access type of the space\\n\",\"enum\":[\"public\",\"private\",\"standalone\"]},\"collectionId\":{\"description\":\"Unique identifier of the collection under which the space is displayed\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the space\",\"type\":\"string\"},\"hidden_from_community\":{\"description\":\"Indication about whether the space is visible in the community\",\"type\":\"boolean\"},\"id\":{\"description\":\"Unique identifier of the space\",\"type\":\"string\"},\"is_invitation_required\":{\"description\":\"Indication about whether users are sent an invitation to join or are directly added to space\\n\",\"type\":\"boolean\"},\"is_members_allowed_to_view_members\":{\"description\":\"Indication about whether users can view other users in space\",\"type\":\"boolean\"},\"owner\":{\"description\":\"Information about the space owner\",\"properties\":{\"id\":{\"description\":\"The id of the creator of the space\\n\",\"type\":\"string\"},\"username\":{\"description\":\"The username of the creator of the space\\n\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Name of the space\",\"type\":\"string\"},\"usages\":{\"description\":\"List of space usages in the platform\",\"items\":{\"properties\":{\"courseId\":{\"description\":\"Unique identifier of the course the space is used\",\"type\":\"string\"},\"type\":{\"description\":\"Type of usage location\",\"enum\":[\"ebook\"]},\"unitId\":{\"description\":\"Unique identifier of the unit the space is used\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"title\":\"CommunitySpace\",\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/community/spaces/{id}", "segments": [{ "lit": "v2" }, { "lit": "community" }, { "lit": "spaces" }, { "var": "id" }], "select": { "exist": ["authorization", "id", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "PUT /v2/community/spaces/{id}", "json": "{\"operationId\":\"put-v2-community-spaces-id\",\"parameters\":[{\"description\":\"Unique identifier of the community space\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"Example 1\":{\"value\":{\"description\":\"Description updated\",\"hidden_from_community\":false,\"is_invitation_required\":false,\"is_members_allowed_to_view_members\":true,\"title\":\"Space updated\"}}},\"schema\":{\"properties\":{\"description\":{\"description\":\"Description of the space\",\"type\":\"string\"},\"hidden_from_community\":{\"description\":\"Indication whether the space is hidden from community\",\"type\":\"boolean\"},\"is_invitation_required\":{\"description\":\"Indication whether users are sent an invitation to join or are directly added to space\\n\",\"type\":\"boolean\"},\"is_members_allowed_to_view_members\":{\"description\":\"Indication whether users can view other users in space\\n\",\"type\":\"boolean\"},\"title\":{\"description\":\"Title of the space\",\"type\":\"string\"}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"examples\":[{\"access\":\"public\",\"collectionId\":\"61bb42d5e07e202700000002\",\"description\":\"\",\"hidden_from_community\":false,\"id\":\"6515547042ec743dcc078988\",\"is_invitation_required\":true,\"is_members_allowed_to_view_members\":true,\"owner\":{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"},\"title\":\"Space\",\"usages\":[{\"componentId\":\"component_1701798094804_337\",\"courseId\":\"a-course\",\"type\":\"ebook\",\"unitId\":\"656f0d27f9f5416317015124\"}]}],\"properties\":{\"access\":{\"description\":\"Access type of the space\\n\",\"enum\":[\"public\",\"private\",\"standalone\"]},\"collectionId\":{\"description\":\"Unique identifier of the collection under which the space is displayed\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the space\",\"type\":\"string\"},\"hidden_from_community\":{\"description\":\"Indication about whether the space is visible in the community\",\"type\":\"boolean\"},\"id\":{\"description\":\"Unique identifier of the space\",\"type\":\"string\"},\"is_invitation_required\":{\"description\":\"Indication about whether users are sent an invitation to join or are directly added to space\\n\",\"type\":\"boolean\"},\"is_members_allowed_to_view_members\":{\"description\":\"Indication about whether users can view other users in space\",\"type\":\"boolean\"},\"owner\":{\"description\":\"Information about the space owner\",\"properties\":{\"id\":{\"description\":\"The id of the creator of the space\\n\",\"type\":\"string\"},\"username\":{\"description\":\"The username of the creator of the space\\n\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Name of the space\",\"type\":\"string\"},\"usages\":{\"description\":\"List of space usages in the platform\",\"items\":{\"properties\":{\"courseId\":{\"description\":\"Unique identifier of the course the space is used\",\"type\":\"string\"},\"type\":{\"description\":\"Type of usage location\",\"enum\":[\"ebook\"]},\"unitId\":{\"description\":\"Unique identifier of the unit the space is used\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"title\":\"CommunitySpace\",\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/v2/community/spaces/{id}", "segments": [{ "lit": "v2" }, { "lit": "community" }, { "lit": "spaces" }, { "var": "id" }], "select": { "exist": ["authorization", "id", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "community_space", "name__orig": "community_space", "Name": "CommunitySpace", "name_": "community_space", "name-": "community-space", "NAME": "COMMUNITY_SPACE", "index$": 10 }, { "active": true, "entity": "community_space", "key$": "BasicCommunitySpaceFlow", "kind": "basic", "name": "BasicCommunitySpaceFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "community_space_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [] }, { "active": true, "data": {}, "input": { "ref": "community_space_ref01", "srcdatavar": "community_space_ref01_data", "suffix": "_up0", "textfield": "collectionId" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-community_space_ref01" } }], "valid": [] }, { "active": true, "data": {}, "input": { "ref": "community_space_ref01", "srcdatavar": "community_space_ref01_data", "suffix": "_dt0" }, "match": { "id": "community_space01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-community_space_ref01" } }] }] }, 'CommunitySpace');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const community_space_ref01_ent = client.CommunitySpace();
        let community_space_ref01_data = setup.data.new.community_space['community_space_ref01'];
        community_space_ref01_data = (await community_space_ref01_ent.create(community_space_ref01_data)).data();
        (0, node_assert_1.default)(null != community_space_ref01_data.id);
        // UPDATE
        const community_space_ref01_data_up0 = {};
        community_space_ref01_data_up0.id = community_space_ref01_data.id;
        const community_space_ref01_markdef_up0 = { name: 'collectionId', value: 'Mark01-community_space_ref01_' + setup.now };
        community_space_ref01_data_up0[community_space_ref01_markdef_up0.name] = community_space_ref01_markdef_up0.value;
        const community_space_ref01_resdata_up0 = (await community_space_ref01_ent.update(community_space_ref01_data_up0)).data();
        (0, node_assert_1.default)(community_space_ref01_resdata_up0.id === community_space_ref01_data_up0.id);
        (0, node_assert_1.default)(community_space_ref01_resdata_up0[community_space_ref01_markdef_up0.name] === community_space_ref01_markdef_up0.value);
        // LOAD
        const community_space_ref01_match_dt0 = {};
        community_space_ref01_match_dt0.id = community_space_ref01_data.id;
        const community_space_ref01_data_dt0 = (await community_space_ref01_ent.load(community_space_ref01_match_dt0)).data();
        (0, node_assert_1.default)(community_space_ref01_data_dt0.id === community_space_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/community_space/CommunitySpaceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LearnworldsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['community_space01', 'community_space02', 'community_space03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID': idmap,
        'LEARNWORLDS_TEST_LIVE': 'FALSE',
        'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID'];
    const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID'];
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
//# sourceMappingURL=CommunitySpaceEntity.test.js.map