"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadmeInstall = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const ReadmeInstall = (0, sdkgen_1.cmp)(function ReadmeInstall(props) {
    const { target, ctx$ } = props;
    const { model } = ctx$;
    if ((0, sdkgen_1.isPublished)(model, target.name)) {
        (0, sdkgen_1.Content)('```bash');
        (0, sdkgen_1.Content)(`
${(0, sdkgen_1.installCommand)(model, target.name)}
`);
        (0, sdkgen_1.Content)('```');
        return;
    }
    // Publish pending: the package is not yet on npm, so install from the
    // git release tag instead of a `npm install` that would 404.
    const { releasesUrl } = (0, sdkgen_1.repoInfo)(model);
    (0, sdkgen_1.Content)(`This package is not yet published to npm. Install it from the GitHub
release tag (\`${target.name}/vX.Y.Z\`):

- Releases: [${releasesUrl}](${releasesUrl})

`);
});
exports.ReadmeInstall = ReadmeInstall;
//# sourceMappingURL=ReadmeInstall_ts.js.map