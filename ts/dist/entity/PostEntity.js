"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class PostEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'post';
        this.name_ = 'post';
        this.Name = 'Post';
    }
    make() {
        return new PostEntity(this._client, this.entopts());
    }
}
exports.PostEntity = PostEntity;
//# sourceMappingURL=PostEntity.js.map