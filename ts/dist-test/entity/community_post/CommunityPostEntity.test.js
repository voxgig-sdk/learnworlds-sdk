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
(0, node_test_1.describe)('CommunityPostEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LEARNWORLDS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.CommunityPost();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'community_post.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "float", "name": "created", "req": false, "short": "Date the post was made, in UNIX timestamp format", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier of the post", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "items", "req": false, "short": "List of post content items outside of text content", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "likes", "req": false, "short": "List of users who have liked the post", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "mentions", "req": false, "short": "User mentions of the post", "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "posted_in", "req": false, "short": "Information about where the post was made", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "text", "req": false, "short": "Text content of the post", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "upvotes", "req": false, "short": "List of users who have upvoted the post", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "user", "req": false, "short": "Information about the post author", "type": "`$OBJECT`", "index$": 8 }], "id": { "field": "id", "name": "id" }, "name": "community_post", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v2/community/posts/{id}", "json": "{\"operationId\":\"get-v2-community-posts-id\",\"parameters\":[{\"description\":\"Unique identifier of the community post\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"examples\":[{\"id\":\"65ce2ecc9066630b4e0913f4\",\"items\":[{\"data\":{\"options\":[{\"id\":\"ch_1\",\"results\":{\"per\":\"100.00\",\"val\":1},\"text\":\"Blue\"},{\"id\":\"ch_2\",\"results\":{\"per\":\"0.00\",\"val\":0},\"text\":\"Green\"}],\"text\":null,\"totalVotes\":1,\"type\":\"poll\"},\"type\":\"poll\"},{\"location\":\"social/2-the-sea-1198167.jpg\",\"size\":602033,\"title\":\"the-sea-1198167.jpg\",\"type\":\"image\"},{\"avStatus\":\"safe\",\"location\":\"socialAttachments/3-sample.pdf\",\"size\":501341,\"title\":\"sample.pdf\",\"type\":\"file\"},{\"location\":\"socialAttachments/video (240p).mp4\",\"size\":248505,\"title\":\"video (240p).mp4\",\"type\":\"video\"}],\"likes\":[{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"}],\"mentions\":[{\"id\":\"625419b5e593d74a874fb573\",\"username\":\"Andreas\"}],\"posted_in\":{\"id\":\"61bb42d5e07e202700000001\",\"type\":\"space\"},\"text\":\"<p>What color is the sea? <a href=\\\"/profile?id=625419b5e593d74a874fb573\\\" class=\\\"social-mention\\\">@Andreas</a></p>\",\"upvotes\":[{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"}],\"user\":{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"}}],\"properties\":{\"created\":{\"description\":\"Date the post was made, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the post\",\"type\":\"string\"},\"items\":{\"description\":\"List of post content items outside of text content\",\"items\":{\"properties\":{\"data\":{\"description\":\"Content item information\",\"type\":\"object\"},\"type\":{\"description\":\"Type of content item of the post\",\"enum\":[\"poll\",\"image\",\"file\",\"video\"]}},\"type\":\"object\"},\"type\":\"array\"},\"likes\":{\"description\":\"List of users who have liked the post\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"mentions\":{\"description\":\"User mentions of the post\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"posted_in\":{\"description\":\"Information about where the post was made\",\"properties\":{\"id\":{\"description\":\"Unique identifier of where the post was made\",\"type\":\"string\"},\"type\":{\"description\":\"Type of where the post was made, either course or space\",\"enum\":[\"space\",\"course\"]}},\"type\":\"object\"},\"text\":{\"description\":\"Text content of the post\",\"type\":\"string\"},\"upvotes\":{\"description\":\"List of users who have upvoted the post\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"user\":{\"description\":\"Information about the post author\",\"properties\":{\"id\":{\"description\":\"Unique identifier of the post author\",\"type\":\"string\"},\"username\":{\"description\":\"Username of the post author\",\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"CommunityPost\",\"type\":\"object\"}}},\"description\":\"OK\",\"headers\":{}}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/community/posts/{id}", "segments": [{ "lit": "v2" }, { "lit": "community" }, { "lit": "posts" }, { "var": "id" }], "select": { "exist": ["authorization", "id", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "community_post", "name__orig": "community_post", "Name": "CommunityPost", "name_": "community_post", "name-": "community-post", "NAME": "COMMUNITY_POST", "index$": 9 }, { "active": true, "entity": "community_post", "key$": "BasicCommunityPostFlow", "kind": "basic", "name": "BasicCommunityPostFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "community_post_ref01", "srcdatavar": "community_post_ref01_data", "suffix": "_dt0" }, "match": { "id": "community_post01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-community_post_ref01" } }] }] }, 'CommunityPost');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let community_post_ref01_data = Object.values(setup.data.existing.community_post)[0];
        // LOAD
        const community_post_ref01_ent = client.CommunityPost();
        const community_post_ref01_match_dt0 = {};
        community_post_ref01_match_dt0.id = community_post_ref01_data.id;
        const community_post_ref01_data_dt0 = (await community_post_ref01_ent.load(community_post_ref01_match_dt0)).data();
        (0, node_assert_1.default)(community_post_ref01_data_dt0.id === community_post_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/community_post/CommunityPostTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LearnworldsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['community_post01', 'community_post02', 'community_post03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LEARNWORLDS_TEST_COMMUNITY_POST_ENTID': idmap,
        'LEARNWORLDS_TEST_LIVE': 'FALSE',
        'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['LEARNWORLDS_TEST_COMMUNITY_POST_ENTID'];
    const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LEARNWORLDS_TEST_COMMUNITY_POST_ENTID'];
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
//# sourceMappingURL=CommunityPostEntity.test.js.map