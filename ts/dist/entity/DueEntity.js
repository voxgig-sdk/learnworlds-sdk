"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DueEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class DueEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'due';
        this.name_ = 'due';
        this.Name = 'Due';
    }
    make() {
        return new DueEntity(this._client, this.entopts());
    }
}
exports.DueEntity = DueEntity;
//# sourceMappingURL=DueEntity.js.map