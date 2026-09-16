"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class ActiveEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'active';
        this.name_ = 'active';
        this.Name = 'Active';
    }
    make() {
        return new ActiveEntity(this._client, this.entopts());
    }
}
exports.ActiveEntity = ActiveEntity;
//# sourceMappingURL=ActiveEntity.js.map