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
exports.Main = void 0;
const Path = __importStar(require("node:path"));
const sdkgen_1 = require("@voxgig/sdkgen");
const apidef_1 = require("@voxgig/apidef");
const Package_ts_1 = require("./Package_ts");
const Config_ts_1 = require("./Config_ts");
const Gitignore_ts_1 = require("./Gitignore_ts");
const MainEntity_ts_1 = require("./MainEntity_ts");
const EntityBase_ts_1 = require("./EntityBase_ts");
const EntityTypes_ts_1 = require("./EntityTypes_ts");
const SdkError_ts_1 = require("./SdkError_ts");
const Main = (0, sdkgen_1.cmp)(async function Main(props) {
    // Needs type: target object
    const { target } = props;
    const { model } = props.ctx$;
    const entity = (0, apidef_1.getModelPath)(model, `main.${apidef_1.KIT}.entity`);
    const feature = (0, apidef_1.getModelPath)(model, `main.${apidef_1.KIT}.feature`);
    (0, Package_ts_1.Package)({ target });
    (0, Gitignore_ts_1.Gitignore)({});
    (0, sdkgen_1.Copy)({
        from: 'tm/' + target.name,
        replace: {
            ...props.ctx$.stdrep,
        }
    });
    (0, sdkgen_1.Folder)({ name: 'src' }, () => {
        (0, SdkError_ts_1.SdkError)({ target });
        (0, sdkgen_1.File)({ name: model.const.Name + 'SDK.' + target.name }, () => {
            (0, sdkgen_1.Line)(`// ${model.const.Name} ${target.Name} SDK\n`);
            (0, sdkgen_1.List)({ item: entity }, ({ item }) => {
                const cls = (0, sdkgen_1.entityClassName)(item, entity);
                return (0, sdkgen_1.Line)(`import { ${cls} } from './entity/${cls}'`);
            });
            // Re-export the generated typed models so consumers can
            // `import { Advice, AdviceLoadMatch } from '<pkg>'`.
            (0, sdkgen_1.Line)(`export type * from './${model.const.Name}Types'\n`);
            (0, sdkgen_1.Fragment)({
                from: Path.normalize(__dirname + '/../../../src/cmp/ts/fragment/Main.fragment.ts'),
                replace: {
                    ...props.ctx$.stdrep,
                    '#BuildFeatures': ({ indent }) => {
                        (0, sdkgen_1.List)({ item: feature, line: false }, ({ item }) => (0, sdkgen_1.Line)({ indent }, `featureAdd(this._rootctx, new ${item.Name}Feature())`));
                    },
                    '#Feature-Hook': ({ name, indent }) => (0, sdkgen_1.Content)({ indent }, `
fres = featureHook(ctx, '${name}')
if (fres instanceof Promise) { await fres }
`),
                    '#TestOptions': ({ indent }) => {
                        const topts = {
                            feature: (0, sdkgen_1.cmap)(feature, {
                                active: false
                            }),
                        };
                        (0, sdkgen_1.Content)({ indent }, JSON.stringify(topts, null, 2)
                            .replace(/^{\n  /, '').replace(/\n}$/, ',\n').replace(/\n  /g, '\n'));
                    }
                }
            }, 
            // Entities
            () => {
                (0, sdkgen_1.each)(entity, (entity) => {
                    const entitySDK = (0, apidef_1.getModelPath)(model, `main.${apidef_1.KIT}.entity.${entity.name}`);
                    const entprops = { target, entity, entitySDK };
                    (0, MainEntity_ts_1.MainEntity)(entprops);
                });
            });
        });
        (0, Config_ts_1.Config)({ target });
        (0, EntityBase_ts_1.EntityBase)({ target });
        (0, EntityTypes_ts_1.EntityTypes)({ target });
    });
});
exports.Main = Main;
//# sourceMappingURL=Main_ts.js.map