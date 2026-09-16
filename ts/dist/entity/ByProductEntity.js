"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByProductEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class ByProductEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'by_product';
        this.name_ = 'by_product';
        this.Name = 'ByProduct';
    }
    make() {
        return new ByProductEntity(this._client, this.entopts());
    }
}
exports.ByProductEntity = ByProductEntity;
//# sourceMappingURL=ByProductEntity.js.map