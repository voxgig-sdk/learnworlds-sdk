"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormEntity = void 0;
const LearnworldsEntityBase_1 = require("../LearnworldsEntityBase");
// TODO: needs Entity superclass
class FormEntity extends LearnworldsEntityBase_1.LearnworldsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'form';
        this.name_ = 'form';
        this.Name = 'Form';
    }
    make() {
        return new FormEntity(this._client, this.entopts());
    }
}
exports.FormEntity = FormEntity;
//# sourceMappingURL=FormEntity.js.map