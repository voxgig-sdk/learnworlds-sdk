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
exports.clean = clean;
exports.formatJSONSrc = formatJSONSrc;
exports.formatJson = formatJson;
exports.projectPath = projectPath;
exports.exampleValue = exampleValue;
const Path = __importStar(require("node:path"));
const sdkgen_1 = require("@voxgig/sdkgen");
const struct_1 = require("@voxgig/struct");
// --- Model-driven example literals -----------------------------------------
// Doc snippets must use example values whose TYPE matches the generated
// TypeScript types, or the snippet does not compile. The id/match params of
// load/remove/update are the common trap: their generated
// `<Name><Op>Match` / `<Name><Op>Data` type is built from the op's params
// (see EntityTypes_ts.ts), so a `number` id shown as a quoted string is a
// TS2322 error. These helpers derive the example literal from the SAME model
// source, so the docs and the generated types can never disagree.
// The declared canon-type sentinel of a named parameter of an op — looked up
// in the op's `points[].args.params[]` exactly as the typed-model generator
// does. Falls back to the entity field of the same name (used when the op
// has no params and the generated match type is `Partial<Entity>`). Returns
// undefined when neither is present.
function paramCanonType(entity, op, paramName) {
    const points = op && op.points ? (0, sdkgen_1.each)(op.points) : [];
    for (const pt of points) {
        const params = pt && pt.args && pt.args.params ? (0, sdkgen_1.each)(pt.args.params) : [];
        const found = params.find((p) => p && p.name === paramName);
        if (found) {
            return found.type;
        }
    }
    const field = (entity && entity.fields ? (0, sdkgen_1.each)(entity.fields) : [])
        .find((f) => f && f.name === paramName);
    return field && field.type;
}
// A type-correct example literal for a named match/data parameter of an op,
// derived entirely from the model. INTEGER/NUMBER render as the bare number
// `1` (a quoted string on a `number` field is a compile error), BOOLEAN as
// `true`, ARRAY as the empty `[]` and OBJECT as the empty `{}` (a quoted
// string is not assignable to `any[]` / `Record<string, any>`), everything
// else (STRING, unknown, missing) as the quoted `placeholder`.
function exampleValue(entity, op, paramName, placeholder) {
    const key = (0, sdkgen_1.canonKey)(paramCanonType(entity, op, paramName));
    if ('INTEGER' === key || 'NUMBER' === key) {
        return '1';
    }
    if ('BOOLEAN' === key) {
        return 'true';
    }
    if ('ARRAY' === key) {
        return '[]';
    }
    if ('OBJECT' === key) {
        return '{}';
    }
    return `'${placeholder}'`;
}
function projectPath(suffix) {
    return Path.normalize(Path.join(__dirname, '../../..', suffix ?? ''));
}
function formatJSONSrc(jsonsrc) {
    return jsonsrc
        .replace(/([{:\[,])/g, '$1 ')
        .replace(/([}\]])/g, ' $1');
}
function formatJson(obj, flags) {
    const marginSize = flags?.margin ?? 0;
    const marginStr = ' '.repeat(marginSize);
    let json;
    if (flags?.line) {
        // One line with spaces for clarity
        json = JSON.stringify(obj)
            .replace(/([{:\[,])/g, '$1 ')
            .replace(/([}\]])/g, ' $1');
    }
    else {
        // Pretty printed with 2-space indentation
        json = JSON.stringify(obj, null, 2);
    }
    // Add margin to the left of every line
    if (marginSize > 0) {
        json = json.split('\n').map(line => marginStr + line).join('\n');
    }
    return json;
}
function clean(o) {
    return (0, struct_1.walk)((0, struct_1.clone)(o), (k, v, p) => {
        if (null != k && k.endsWith('$')) {
            delete p[k];
        }
        return v;
    });
}
//# sourceMappingURL=utility_ts.js.map