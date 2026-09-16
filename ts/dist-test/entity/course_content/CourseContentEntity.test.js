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
(0, node_test_1.describe)('CourseContentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LEARNWORLDS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.CourseContent();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'course_content.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "access", "req": false, "short": "Access type of the section", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "description", "req": false, "short": "Description of the section", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 1 }, { "active": true, "name": "drip", "req": false, "short": "Drip feed details of the content.", "type": ["`$ONE`", ["`$OBJECT`", "`$NULL`"]], "index$": 2 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier of the section", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "learningUnits", "req": false, "short": "Learning activities of section", "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "sections", "req": false, "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "title", "req": false, "short": "Title of the section", "type": "`$STRING`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "course_content", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "example": "a-test", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /v2/courses/{id}/sections", "json": "{\"operationId\":\"post-courses-id-sections\",\"parameters\":[{\"description\":\"Course Id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"a-test\",\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"Example with DripFeed (by date)\":{\"value\":{\"access\":\"draft\",\"description\":\"Intro\",\"drip\":{\"body\":\"Hi there dear user, the course is available.\",\"date\":1518792296,\"notify\":true,\"subject\":\"Your new course is available now\"},\"title\":\"Introduction\"}},\"Example with DripFeed (by days)\":{\"value\":{\"access\":\"draft\",\"description\":\"Intro\",\"drip\":{\"body\":\"Hi there dear user, the course is available.\",\"days\":4,\"notify\":true,\"subject\":\"Your new course is available now\"},\"title\":\"Introduction\"}},\"Example without DripFeed\":{\"value\":{\"access\":\"paid\",\"description\":\"Intro description\",\"title\":\"Introduction\"}}},\"schema\":{\"type\":\"object\"}}}},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"examples\":{\"Example with DripFeed (by date)\":{\"value\":{\"id\":\"testunits\",\"sections\":[{\"access\":\"draft\",\"description\":\"Intro\",\"drip\":{\"body\":\"Hi there dear user, the course is available.\",\"date\":1518792296,\"days\":0,\"notify\":true,\"subject\":\"Your new course is available now\"},\"id\":\"testu_introduction\",\"learningUnits\":[],\"title\":\"Introduction\"}],\"title\":\"testunits\"}},\"Example with DripFeed (by days)\":{\"value\":{\"id\":\"testunits\",\"sections\":[{\"access\":\"draft\",\"description\":\"Intro\",\"drip\":{\"body\":\"Hi there dear user, the course is available.\",\"date\":null,\"days\":4,\"notify\":true,\"subject\":\"Your new course is available now\"},\"id\":\"testu_introduction\",\"learningUnits\":[],\"title\":\"Introduction\"}],\"title\":\"testunits\"}},\"Example without DripFeed\":{\"value\":{\"id\":\"testunits\",\"sections\":[{\"access\":\"paid\",\"description\":\"Intro description\",\"drip\":null,\"id\":\"testu_introduction\",\"learningUnits\":[],\"title\":\"Introduction\"}],\"title\":\"testunits\"}}},\"schema\":{\"description\":\"\",\"examples\":[{\"id\":\"testunits\",\"sections\":[{\"access\":\"private\",\"description\":\"Intro\",\"drip\":{\"body\":\"hi there\",\"date\":null,\"days\":28,\"notify\":true,\"subject\":\"email subject\"},\"id\":\"testu_introduction\",\"learningUnits\":[{\"icon\":\"pdf\",\"id\":\"611f83d9f8794544223ee7e4\",\"subtitle\":\"pdf\",\"title\":\"pdf\",\"type\":\"pdf\"},{\"icon\":\"url\",\"id\":\"611f83ef11ac917cfc05c2b2\",\"subtitle\":\"external page\",\"title\":\"external page\",\"type\":\"url\"},{\"icon\":\"scorm\",\"id\":\"611f83f711ac917cfc05c2b3\",\"subtitle\":\"SCORM/HTML 5 Package\",\"title\":\"SCORM/HTML 5 Package\",\"type\":\"scorm\"},{\"icon\":\"certification\",\"id\":\"611f87aa9ab7f357693baa22\",\"subtitle\":\"certificate\",\"title\":\"certificate\",\"type\":\"certificate\"}],\"title\":\"Introduction\"}],\"title\":\"testunits\"}],\"properties\":{\"id\":{\"description\":\"Unique identifier of the course\",\"type\":\"string\"},\"sections\":{\"description\":\"Sections of the course\",\"items\":{\"properties\":{\"access\":{\"description\":\"Access type of the section\",\"enum\":[\"public\",\"premium\",\"soon\",\"private\"],\"type\":\"string\"},\"description\":{\"description\":\"Description of the section\",\"type\":[\"string\",\"null\"]},\"drip\":{\"description\":\"Drip feed details of the content. Null value indicates that the course has drip feed option as disabled\",\"properties\":{\"body\":{\"description\":\"Body of the notification\",\"type\":[\"string\",\"null\"]},\"date\":{\"description\":\"Drip feed date\",\"type\":[\"null\",\"number\"]},\"days\":{\"description\":\"Drip feed days\",\"type\":\"integer\"},\"notify\":{\"description\":\"Setup an email notification to be sent to students once this section becomes unlocked\",\"type\":\"boolean\"},\"subject\":{\"description\":\"Subject of the notification\",\"type\":[\"string\",\"null\"]}},\"type\":[\"object\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the section\",\"type\":\"string\"},\"learningUnits\":{\"description\":\"Learning activities of section\",\"items\":{\"properties\":{\"icon\":{\"description\":\"Type icon of learning activity\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of learning activity\",\"type\":\"string\"},\"subtitle\":{\"description\":\"Subtitle of learning activity\",\"type\":\"string\"},\"title\":{\"description\":\"Title of learning activity\",\"type\":\"string\"},\"type\":{\"description\":\"Type of learning activity\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":false},\"title\":{\"description\":\"Title of the section\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":false},\"title\":{\"description\":\"Title of the course\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Created\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/v2/courses/{id}/sections", "segments": [{ "lit": "v2" }, { "lit": "courses" }, { "var": "id" }, { "lit": "sections" }], "select": { "$action": "sections", "exist": ["authorization", "id", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v2/courses/{id}/contents", "json": "{\"operationId\":\"get-courses-id-contents\",\"parameters\":[{\"description\":\"Course title Id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"id\":\"testunits\",\"sections\":[{\"access\":\"private\",\"description\":\"Intro\",\"drip\":{\"body\":\"hi there\",\"date\":null,\"days\":28,\"notify\":true,\"subject\":\"email subject\"},\"id\":\"testu_introduction\",\"learningUnits\":[{\"icon\":\"pdf\",\"id\":\"611f83d9f8794544223ee7e4\",\"subtitle\":\"pdf\",\"title\":\"pdf\",\"type\":\"pdf\"},{\"icon\":\"url\",\"id\":\"611f83ef11ac917cfc05c2b2\",\"subtitle\":\"external page\",\"title\":\"external page\",\"type\":\"url\"},{\"icon\":\"scorm\",\"id\":\"611f83f711ac917cfc05c2b3\",\"subtitle\":\"SCORM/HTML 5 Package\",\"title\":\"SCORM/HTML 5 Package\",\"type\":\"scorm\"},{\"icon\":\"certification\",\"id\":\"611f87aa9ab7f357693baa22\",\"subtitle\":\"certificate\",\"title\":\"certificate\",\"type\":\"certificate\"},{\"icon\":\"certification\",\"id\":\"611f87c227652810e3544fe2\",\"subtitle\":\"certificate\",\"title\":\"certificate\",\"type\":\"certificate\"}],\"title\":\"Introduction\"}],\"title\":\"testunits\"}}},\"schema\":{\"description\":\"\",\"examples\":[{\"id\":\"testunits\",\"sections\":[{\"access\":\"private\",\"description\":\"Intro\",\"drip\":{\"body\":\"hi there\",\"date\":null,\"days\":28,\"notify\":true,\"subject\":\"email subject\"},\"id\":\"testu_introduction\",\"learningUnits\":[{\"icon\":\"pdf\",\"id\":\"611f83d9f8794544223ee7e4\",\"subtitle\":\"pdf\",\"title\":\"pdf\",\"type\":\"pdf\"},{\"icon\":\"url\",\"id\":\"611f83ef11ac917cfc05c2b2\",\"subtitle\":\"external page\",\"title\":\"external page\",\"type\":\"url\"},{\"icon\":\"scorm\",\"id\":\"611f83f711ac917cfc05c2b3\",\"subtitle\":\"SCORM/HTML 5 Package\",\"title\":\"SCORM/HTML 5 Package\",\"type\":\"scorm\"},{\"icon\":\"certification\",\"id\":\"611f87aa9ab7f357693baa22\",\"subtitle\":\"certificate\",\"title\":\"certificate\",\"type\":\"certificate\"}],\"title\":\"Introduction\"}],\"title\":\"testunits\"}],\"properties\":{\"id\":{\"description\":\"Unique identifier of the course\",\"type\":\"string\"},\"sections\":{\"description\":\"Sections of the course\",\"items\":{\"properties\":{\"access\":{\"description\":\"Access type of the section\",\"enum\":[\"public\",\"premium\",\"soon\",\"private\"],\"type\":\"string\"},\"description\":{\"description\":\"Description of the section\",\"type\":[\"string\",\"null\"]},\"drip\":{\"description\":\"Drip feed details of the content. Null value indicates that the course has drip feed option as disabled\",\"properties\":{\"body\":{\"description\":\"Body of the notification\",\"type\":[\"string\",\"null\"]},\"date\":{\"description\":\"Drip feed date\",\"type\":[\"null\",\"number\"]},\"days\":{\"description\":\"Drip feed days\",\"type\":\"integer\"},\"notify\":{\"description\":\"Setup an email notification to be sent to students once this section becomes unlocked\",\"type\":\"boolean\"},\"subject\":{\"description\":\"Subject of the notification\",\"type\":[\"string\",\"null\"]}},\"type\":[\"object\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the section\",\"type\":\"string\"},\"learningUnits\":{\"description\":\"Learning activities of section\",\"items\":{\"properties\":{\"icon\":{\"description\":\"Type icon of learning activity\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of learning activity\",\"type\":\"string\"},\"subtitle\":{\"description\":\"Subtitle of learning activity\",\"type\":\"string\"},\"title\":{\"description\":\"Title of learning activity\",\"type\":\"string\"},\"type\":{\"description\":\"Type of learning activity\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":false},\"title\":{\"description\":\"Title of the section\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":false},\"title\":{\"description\":\"Title of the course\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/courses/{id}/contents", "segments": [{ "lit": "v2" }, { "lit": "courses" }, { "var": "id" }, { "lit": "contents" }], "select": { "exist": ["authorization", "id", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body.sections`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "course_content", "name__orig": "course_content", "Name": "CourseContent", "name_": "course_content", "name-": "course-content", "NAME": "COURSE_CONTENT", "index$": 16 }, { "active": true, "entity": "course_content", "key$": "BasicCourseContentFlow", "kind": "basic", "name": "BasicCourseContentFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "course_content_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [] }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "course_content_ref01" } }] }] }, 'CourseContent');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const course_content_ref01_ent = client.CourseContent();
        let course_content_ref01_data = setup.data.new.course_content['course_content_ref01'];
        course_content_ref01_data = (await course_content_ref01_ent.create(course_content_ref01_data)).data();
        (0, node_assert_1.default)(null != course_content_ref01_data.id);
        // LIST
        const course_content_ref01_match = {};
        const course_content_ref01_list = (await course_content_ref01_ent.list(course_content_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(course_content_ref01_list, { id: course_content_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/course_content/CourseContentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LearnworldsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['course_content01', 'course_content02', 'course_content03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LEARNWORLDS_TEST_COURSE_CONTENT_ENTID': idmap,
        'LEARNWORLDS_TEST_LIVE': 'FALSE',
        'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['LEARNWORLDS_TEST_COURSE_CONTENT_ENTID'];
    const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LEARNWORLDS_TEST_COURSE_CONTENT_ENTID'];
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
//# sourceMappingURL=CourseContentEntity.test.js.map