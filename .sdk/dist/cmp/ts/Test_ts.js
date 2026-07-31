"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const apidef_1 = require("@voxgig/apidef");
const sdkgen_1 = require("@voxgig/sdkgen");
// import { Quick } from './Quick_ts'
// import { TestMain } from './TestMain_ts'
const TestDirect_ts_1 = require("./TestDirect_ts");
const TestEntity_ts_1 = require("./TestEntity_ts");
const ReadmeExampleTest_ts_1 = require("./ReadmeExampleTest_ts");
const ReadmeExamplesTest_ts_1 = require("./ReadmeExamplesTest_ts");
const Test = (0, sdkgen_1.cmp)(function Test(props) {
    const { model, stdrep } = props.ctx$;
    const { target } = props;
    (0, sdkgen_1.Folder)({ name: 'test' }, () => {
        // Quick({ target })
        // TestMain({ target })
        (0, ReadmeExampleTest_ts_1.ReadmeExampleTest)({ target });
        (0, ReadmeExamplesTest_ts_1.ReadmeExamplesTest)({ target });
        (0, sdkgen_1.Folder)({ name: 'entity' }, () => {
            (0, sdkgen_1.each)(model.main[apidef_1.KIT].entity, (entity) => {
                (0, TestEntity_ts_1.TestEntity)({ target, entity });
                (0, TestDirect_ts_1.TestDirect)({ target, entity });
            });
        });
    });
});
exports.Test = Test;
//# sourceMappingURL=Test_ts.js.map