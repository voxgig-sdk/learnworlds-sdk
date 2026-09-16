"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpcomingEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class UpcomingEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'upcoming';
        this.name_ = 'upcoming';
        this.Name = 'Upcoming';
    }
    make() {
        return new UpcomingEntity(this._client, this.entopts());
    }
}
exports.UpcomingEntity = UpcomingEntity;
//# sourceMappingURL=UpcomingEntity.js.map