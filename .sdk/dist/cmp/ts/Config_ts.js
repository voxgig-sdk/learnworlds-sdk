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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const Path = __importStar(require("node:path"));
const sdkgen_1 = require("@voxgig/sdkgen");
const apidef_1 = require("@voxgig/apidef");
const utility_ts_1 = require("./utility_ts");
const Config = (0, sdkgen_1.cmp)(async function Config(props) {
    const ctx$ = props.ctx$;
    const target = props.target;
    const model = ctx$.model;
    const entity = (0, apidef_1.getModelPath)(model, `main.${apidef_1.KIT}.entity`);
    const feature = (0, apidef_1.getModelPath)(model, `main.${apidef_1.KIT}.feature`);
    const ff = Path.normalize(__dirname + '/../../../src/cmp/ts/fragment/');
    const headers = (0, apidef_1.getModelPath)(model, `main.${apidef_1.KIT}.config.headers`) || {};
    const authActive = (0, sdkgen_1.isAuthActive)(model);
    // config.auth.prefix override -> spec-derived info.security.prefix -> 'Bearer'
    const authPrefix = (0, sdkgen_1.resolveAuthPrefix)(model);
    const authBlock = authActive
        ? `auth: {
      prefix: '${authPrefix}',
    },

    `
        : '';
    (0, sdkgen_1.File)({ name: 'Config.' + target.ext }, () => {
        (0, sdkgen_1.Fragment)({
            from: ff + 'Config.fragment.ts',
            replace: {
                "'AUTHBLOCK'": authBlock,
                "'HEADERS'": (0, sdkgen_1.indent)(JSON.stringify(headers, null, 2), 4).trim(),
                '// #ImportFeatures': () => (0, sdkgen_1.each)(feature, (f) => {
                    (0, sdkgen_1.Line)(`import { ${(0, apidef_1.nom)(f, 'Name')}Feature } from ` +
                        `'./feature/${f.name}/${(0, apidef_1.nom)(f, 'Name')}Feature'`);
                }),
                '// #FeatureClasses': () => (0, sdkgen_1.each)(feature, (f) => {
                    // Trailing comma: the map has one entry per feature, so entries
                    // must be comma-separated (a single feature hid this until now).
                    (0, sdkgen_1.Line)(` ${f.name}: ${(0, apidef_1.nom)(f, 'Name')}Feature,`);
                }),
                '// #FeatureConfigs': () => (0, sdkgen_1.each)(feature, (f) => {
                    (0, sdkgen_1.Line)(` ${f.name}: ${(0, utility_ts_1.formatJson)(f.config, { margin: 4 })},`);
                }),
                '// #EntityConfigs': () => (0, sdkgen_1.each)(entity, (entity) => {
                    (0, sdkgen_1.Content)(`
      ${entity.name}: {
      },
`);
                }),
                "'ENTITYMAP'": (0, utility_ts_1.formatJson)(Object.values(entity)
                    .reduce((a, n) => (a[n.name] = (0, utility_ts_1.clean)({
                    fields: n.fields,
                    name: n.name,
                    op: n.op,
                    relations: n.relations,
                }), a), {}), { margin: 2 }).trim(),
            }
        });
    });
});
exports.Config = Config;
//# sourceMappingURL=Config_ts.js.map