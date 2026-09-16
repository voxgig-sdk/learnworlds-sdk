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
(0, node_test_1.describe)('CertificateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LEARNWORLDS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.Certificate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'certificate.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "float", "name": "attempts", "req": false, "short": "Number of attempts", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "course_id", "req": false, "short": "Unique identifier of the course", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "external_url", "req": false, "short": "External URL of the certificate; null if provider is LearnWorlds", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 2 }, { "active": true, "name": "form", "op": { "update": { "req": true, "type": "`$OBJECT`" } }, "req": false, "short": "Form data of the certificate", "type": ["`$ONE`", ["`$OBJECT`", "`$NULL`"]], "index$": 3 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier of the certificate", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "float", "name": "issued", "op": { "update": { "req": true, "type": "`$NUMBER`" } }, "req": false, "short": "Date the certification was issued, in Unix timestamp format", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "provider", "req": false, "short": "Provider of the certificate", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "score", "req": false, "short": "Score of the certificate", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "short_url", "req": false, "short": "Short URL of the certificate", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 8 }, { "active": true, "name": "status", "req": false, "short": "Status of the certificate", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "title", "req": false, "short": "Title of the certificate", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "type", "req": false, "short": "Type of the certificate", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "user", "req": false, "short": "User related data", "type": "`$OBJECT`", "index$": 12 }], "id": { "field": "id", "name": "id" }, "name": "certificate", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "query": [{ "active": true, "kind": "query", "name": "course_id", "orig": "course_id", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "user_id", "orig": "user_id", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /v2/certificates", "json": "{\"operationId\":\"get-certificates\",\"parameters\":[{\"description\":\"Filter by course title id\",\"in\":\"query\",\"name\":\"course_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by user id or email\",\"in\":\"query\",\"name\":\"user_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"attempts\":2,\"course_id\":\"the-complete-nightmare-guide\",\"external_url\":null,\"form\":{\"firstname\":\"Joe\",\"lastname\":\"Doe\",\"ptin\":\"3456\"},\"id\":\"5a74574343c90be4158b456a\",\"issued\":1517573955.484916,\"provider\":\"LearnWorlds\",\"score\":\"OK\",\"short_url\":\"https://goo.gl/cFJZhw\",\"status\":\"active\",\"title\":\"Certificate of completion\",\"type\":\"completion\",\"user\":{\"email\":\"gatuso@learnworlds.com\",\"id\":\"5a65a41e43c90b93098b4590\"}}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"description\":\"\",\"properties\":{\"data\":{\"items\":{\"examples\":[{\"attempts\":2,\"course_id\":\"the-complete-nightmare-guide\",\"external_url\":null,\"form\":{\"firstname\":\"Jon\",\"lastname\":\"Doe\",\"ptin\":\"3456\"},\"id\":\"5a74574343c90be4158b456a\",\"issued\":1517573955.484916,\"provider\":\"LearnWorlds\",\"score\":\"OK\",\"short_url\":\"https://goo.gl/cFJZhw\",\"status\":\"active\",\"title\":\"Certificate of completion\",\"type\":\"completion\",\"user\":{\"email\":\"gatuso@learnworlds.com\",\"id\":\"5a65a41e43c90b93098b4590\"}}],\"properties\":{\"attempts\":{\"description\":\"Number of attempts\",\"format\":\"float\",\"type\":\"integer\"},\"course_id\":{\"description\":\"Unique identifier of the course\",\"type\":\"string\"},\"external_url\":{\"description\":\"External URL of the certificate; null if provider is LearnWorlds\",\"type\":[\"string\",\"null\"]},\"form\":{\"description\":\"Form data of the certificate\",\"properties\":{\"firstname\":{\"description\":\"First name that appears in certificate pdf\",\"type\":\"string\"},\"lastname\":{\"description\":\"Last name that appears in certificate pdf\",\"type\":\"string\"},\"ptin\":{\"description\":\"ptin that appears in certificate pdf. A special field that can be used for showing user input, like a professional registration number, etc (available in Learning Center plans or higher)\",\"type\":\"string\"}},\"type\":[\"object\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the certificate\",\"type\":\"string\"},\"issued\":{\"description\":\"Date the certification was issued, in Unix timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"provider\":{\"description\":\"Provider of the certificate\",\"enum\":[\"LearnWorlds\",\"Accredible\",\"Credly\"],\"type\":\"string\"},\"score\":{\"description\":\"Score of the certificate\",\"type\":\"string\"},\"short_url\":{\"description\":\"Short URL of the certificate\",\"type\":[\"string\",\"null\"]},\"status\":{\"description\":\"Status of the certificate\",\"enum\":[\"active\",\"deleted\"],\"type\":\"string\"},\"title\":{\"description\":\"Title of the certificate\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the certificate\",\"enum\":[\"completion\",\"certificate\"],\"type\":\"string\"},\"user\":{\"description\":\"User related data\",\"properties\":{\"email\":{\"description\":\"Email of the user\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the user\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/certificates", "segments": [{ "lit": "v2" }, { "lit": "certificates" }], "select": { "exist": ["authorization", "course_id", "lw_client", "page", "user_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "DELETE /v2/certificates/{id}", "json": "{\"operationId\":\"delete-certificates-id\",\"parameters\":[{\"description\":\"Certificate Id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"No Content\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/v2/certificates/{id}", "segments": [{ "lit": "v2" }, { "lit": "certificates" }, { "var": "id" }], "select": { "exist": ["authorization", "id", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "lw_client", "orig": "lw_client", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "PUT /v2/certificates/{id}", "json": "{\"operationId\":\"put-certificates-id\",\"parameters\":[{\"description\":\"Certificate Id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"Example 2\":{\"value\":{\"issued\":1518790977.20607}},\"Example 3\":{\"value\":{\"form\":{\"firstname\":\"John\",\"lastname\":\"Doe\",\"ptin\":\"9090\"}}}},\"schema\":{\"description\":\"\",\"examples\":[{\"form\":{\"firstname\":\"JonForm\",\"lastname\":\"JonForm\",\"ptin\":\"9090\"},\"issued\":1518790977.20607}],\"properties\":{\"form\":{\"properties\":{\"firstname\":{\"description\":\"First name that appears in certificate pdf\",\"type\":\"string\"},\"lastname\":{\"description\":\"Last name that appears in certificate pdf\",\"type\":\"string\"},\"ptin\":{\"description\":\"ptin that appears in certificate pdf. A special field that can be used for showing user input, like a professional registration number, etc (available in Learning Center plans or higher)\",\"type\":\"string\"}},\"required\":[\"firstname\",\"lastname\",\"ptin\"],\"type\":\"object\"},\"issued\":{\"description\":\"Date the certificate was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"}},\"required\":[\"issued\",\"form\"],\"type\":\"object\"}}},\"description\":\"Request input should include \\\"issued\\\" or \\\"form\\\" keys\"},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{},\"schema\":{\"examples\":[{\"attempts\":2,\"course_id\":\"the-complete-nightmare-guide\",\"external_url\":null,\"form\":{\"firstname\":\"Jon\",\"lastname\":\"Doe\",\"ptin\":\"3456\"},\"id\":\"5a74574343c90be4158b456a\",\"issued\":1517573955.484916,\"provider\":\"LearnWorlds\",\"score\":\"OK\",\"short_url\":\"https://goo.gl/cFJZhw\",\"status\":\"active\",\"title\":\"Certificate of completion\",\"type\":\"completion\",\"user\":{\"email\":\"gatuso@learnworlds.com\",\"id\":\"5a65a41e43c90b93098b4590\"}}],\"properties\":{\"attempts\":{\"description\":\"Number of attempts\",\"format\":\"float\",\"type\":\"integer\"},\"course_id\":{\"description\":\"Unique identifier of the course\",\"type\":\"string\"},\"external_url\":{\"description\":\"External URL of the certificate; null if provider is LearnWorlds\",\"type\":[\"string\",\"null\"]},\"form\":{\"description\":\"Form data of the certificate\",\"properties\":{\"firstname\":{\"description\":\"First name that appears in certificate pdf\",\"type\":\"string\"},\"lastname\":{\"description\":\"Last name that appears in certificate pdf\",\"type\":\"string\"},\"ptin\":{\"description\":\"ptin that appears in certificate pdf. A special field that can be used for showing user input, like a professional registration number, etc (available in Learning Center plans or higher)\",\"type\":\"string\"}},\"type\":[\"object\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the certificate\",\"type\":\"string\"},\"issued\":{\"description\":\"Date the certification was issued, in Unix timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"provider\":{\"description\":\"Provider of the certificate\",\"enum\":[\"LearnWorlds\",\"Accredible\",\"Credly\"],\"type\":\"string\"},\"score\":{\"description\":\"Score of the certificate\",\"type\":\"string\"},\"short_url\":{\"description\":\"Short URL of the certificate\",\"type\":[\"string\",\"null\"]},\"status\":{\"description\":\"Status of the certificate\",\"enum\":[\"active\",\"deleted\"],\"type\":\"string\"},\"title\":{\"description\":\"Title of the certificate\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the certificate\",\"enum\":[\"completion\",\"certificate\"],\"type\":\"string\"},\"user\":{\"description\":\"User related data\",\"properties\":{\"email\":{\"description\":\"Email of the user\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the user\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/v2/certificates/{id}", "segments": [{ "lit": "v2" }, { "lit": "certificates" }, { "var": "id" }], "select": { "exist": ["authorization", "id", "lw_client"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "certificate", "name__orig": "certificate", "Name": "Certificate", "name_": "certificate", "name-": "certificate", "NAME": "CERTIFICATE", "index$": 7 }, { "active": true, "entity": "certificate", "key$": "BasicCertificateFlow", "kind": "basic", "name": "BasicCertificateFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "certificate_ref01" } }] }, { "active": true, "data": {}, "input": { "ref": "certificate_ref01", "srcdatavar": "certificate_ref01_data", "suffix": "_up0", "textfield": "course_id" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-certificate_ref01" } }], "valid": [] }] }, 'Certificate');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let certificate_ref01_data = Object.values(setup.data.existing.certificate)[0];
        // LIST
        const certificate_ref01_ent = client.Certificate();
        const certificate_ref01_match = {};
        const certificate_ref01_list = (await certificate_ref01_ent.list(certificate_ref01_match)).map((e) => e.data());
        // UPDATE
        const certificate_ref01_data_up0 = {};
        certificate_ref01_data_up0.id = certificate_ref01_data.id;
        const certificate_ref01_markdef_up0 = { name: 'course_id', value: 'Mark01-certificate_ref01_' + setup.now };
        certificate_ref01_data_up0[certificate_ref01_markdef_up0.name] = certificate_ref01_markdef_up0.value;
        const certificate_ref01_resdata_up0 = (await certificate_ref01_ent.update(certificate_ref01_data_up0)).data();
        (0, node_assert_1.default)(certificate_ref01_resdata_up0.id === certificate_ref01_data_up0.id);
        (0, node_assert_1.default)(certificate_ref01_resdata_up0[certificate_ref01_markdef_up0.name] === certificate_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/certificate/CertificateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LearnworldsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['certificate01', 'certificate02', 'certificate03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LEARNWORLDS_TEST_CERTIFICATE_ENTID': idmap,
        'LEARNWORLDS_TEST_LIVE': 'FALSE',
        'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['LEARNWORLDS_TEST_CERTIFICATE_ENTID'];
    const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LEARNWORLDS_TEST_CERTIFICATE_ENTID'];
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
//# sourceMappingURL=CertificateEntity.test.js.map