"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class SpaceEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'space';
        this.name_ = 'space';
        this.Name = 'Space';
    }
    make() {
        return new SpaceEntity(this._client, this.entopts());
    }
}
exports.SpaceEntity = SpaceEntity;
//# sourceMappingURL=SpaceEntity.js.map