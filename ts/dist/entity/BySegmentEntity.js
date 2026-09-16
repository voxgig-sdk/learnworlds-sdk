"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BySegmentEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class BySegmentEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'by_segment';
        this.name_ = 'by_segment';
        this.Name = 'BySegment';
    }
    make() {
        return new BySegmentEntity(this._client, this.entopts());
    }
}
exports.BySegmentEntity = BySegmentEntity;
//# sourceMappingURL=BySegmentEntity.js.map