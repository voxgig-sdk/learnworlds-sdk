"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEntity = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const apidef_1 = require("@voxgig/apidef");
const MainEntity = (0, sdkgen_1.cmp)(async function MainEntity(props) {
    const { entity } = props;
    const { model } = props.ctx$;
    // Return the collision-free class TYPE (entityClassName); the accessor METHOD
    // name (entity.Name) is unchanged so callers still write client.<Name>().
    const cls = (0, sdkgen_1.entityClassName)(entity, (0, apidef_1.getModelPath)(model, `main.${apidef_1.KIT}.entity`));
    (0, sdkgen_1.Content)(`
  // Entity access: \`client.${entity.Name}().list()\` / \`client.${entity.Name}().load({ id })\`.
  ${entity.Name}(data?: any) {
    const self = this
    return new ${cls}(self,data)
  }

`);
});
exports.MainEntity = MainEntity;
//# sourceMappingURL=MainEntity_ts.js.map