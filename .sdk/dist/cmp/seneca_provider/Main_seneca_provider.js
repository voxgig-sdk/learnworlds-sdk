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
const Package_seneca_provider_1 = require("./Package_seneca_provider");
const MainEntity_seneca_provider_1 = require("./MainEntity_seneca_provider");
const Main = (0, sdkgen_1.cmp)(async function Main(props) {
    const { target } = props;
    const { model } = props.ctx$;
    const { entity } = model.main.api;
    const { feature } = model.main.kit;
    (0, Package_seneca_provider_1.Package)({ target });
    (0, sdkgen_1.Folder)({ name: 'src' }, () => {
        (0, sdkgen_1.File)({ name: model.const.Name + 'Provider.' + target.ext }, () => {
            (0, sdkgen_1.Line)(`// ${model.const.Name} Seneca Provider\n`);
            (0, sdkgen_1.List)({ item: entity }, ({ item }) => (0, sdkgen_1.Line)(`import { make${item.Name}Actions } from './entity/${item.Name}Entity'`));
            (0, sdkgen_1.Fragment)({
                from: Path.normalize(__dirname + '/../../../src/cmp/seneca_provider/fragment/Main.fragment.ts'),
                replace: {
                    ...props.ctx$.stdrep,
                }
            }, 
            // Entities
            () => {
                (0, sdkgen_1.Slot)({ name: 'entity' }, () => {
                    (0, sdkgen_1.each)(entity, (entity) => {
                        const entprops = { target, entity, entitySDK: model.main.api.entity[entity.name] };
                        (0, MainEntity_seneca_provider_1.MainEntity)(entprops);
                    });
                });
            });
        });
    });
});
exports.Main = Main;
//# sourceMappingURL=Main_seneca_provider.js.map