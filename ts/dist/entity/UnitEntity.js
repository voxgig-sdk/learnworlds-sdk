"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class UnitEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'unit';
        this.name_ = 'unit';
        this.Name = 'Unit';
    }
    make() {
        return new UnitEntity(this._client, this.entopts());
    }
}
exports.UnitEntity = UnitEntity;
//# sourceMappingURL=UnitEntity.js.map