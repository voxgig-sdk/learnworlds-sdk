"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletedEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class CompletedEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'completed';
        this.name_ = 'completed';
        this.Name = 'Completed';
    }
    make() {
        return new CompletedEntity(this._client, this.entopts());
    }
}
exports.CompletedEntity = CompletedEntity;
//# sourceMappingURL=CompletedEntity.js.map