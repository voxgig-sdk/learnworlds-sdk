"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class EventEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'event';
        this.name_ = 'event';
        this.Name = 'Event';
    }
    make() {
        return new EventEntity(this._client, this.entopts());
    }
}
exports.EventEntity = EventEntity;
//# sourceMappingURL=EventEntity.js.map