"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class ScoreEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'score';
        this.name_ = 'score';
        this.Name = 'Score';
    }
    make() {
        return new ScoreEntity(this._client, this.entopts());
    }
}
exports.ScoreEntity = ScoreEntity;
//# sourceMappingURL=ScoreEntity.js.map