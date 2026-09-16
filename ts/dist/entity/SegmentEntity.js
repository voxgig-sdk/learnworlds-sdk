"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class SegmentEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'segment';
        this.name_ = 'segment';
        this.Name = 'Segment';
    }
    make() {
        return new SegmentEntity(this._client, this.entopts());
    }
}
exports.SegmentEntity = SegmentEntity;
//# sourceMappingURL=SegmentEntity.js.map