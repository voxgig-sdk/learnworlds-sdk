"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const apidef_1 = require("@voxgig/apidef");
const Package = (0, sdkgen_1.cmp)(async function Package(props) {
    const ctx$ = props.ctx$;
    const target = props.target;
    const model = ctx$.model;
    const feature = (0, apidef_1.getModelPath)(model, `main.${apidef_1.KIT}.feature`);
    const only = (kind, deps) => (0, sdkgen_1.omap)(deps, ([k, v]) => [v.active && kind === v.kind ? k : undefined, v.version]);
    // merge target and feature deps, by kind
    const deps = (0, sdkgen_1.each)(feature, (feature) => (0, sdkgen_1.omap)(feature.deps?.[target.name], ([k, v]) => [v.active ? k : undefined, v]))
        // TODO: sort by version; rules for version choice?
        // TODO: non-node dep kinds
        .reduce((a, deps) => ((0, sdkgen_1.each)(deps, (dep) => a[dep.kind][dep.key$] = dep.version), a), {
        prod: only('prod', target.deps),
        peer: only('peer', target.deps),
        dev: only('dev', target.deps),
    });
    const SdkName = (0, apidef_1.nom)(model, 'Name');
    const { repoUrl, issuesUrl } = (0, sdkgen_1.repoInfo)(model);
    const pkg = {
        name: (0, sdkgen_1.packageName)(model, 'npm'),
        version: `0.0.1`,
        description: (0, sdkgen_1.pkgDescription)(model, target.name),
        keywords: (0, sdkgen_1.keywords)(model),
        homepage: `${repoUrl}#readme`,
        repository: { type: 'git', url: `git+${repoUrl}.git` },
        bugs: { url: issuesUrl },
        main: `dist/${SdkName}SDK.js`,
        type: 'commonjs',
        types: `dist/${SdkName}SDK.d.ts`,
        scripts: {
            'test': 'node --enable-source-maps --test-concurrency=1 --test \'dist-test/**/*.test.js\'',
            'test-some': 'node --enable-source-maps --experimental-test-isolation=none ' +
                '--test-name-pattern=\"$TEST_PATTERN\" --test \'dist-test/**/*.test.js\'',
            'test-utility': 'node --enable-source-maps --test test/utility/*.test.ts',
            // Coverage gate. Runs the same suite with V8 coverage (no source-maps,
            // so figures reflect true executed statements) over the SDK source
            // only (test files excluded) and fails when coverage drops below the
            // floor — protecting the runtime, utilities and features from silent
            // regressions. Thresholds are a conservative floor (well under a
            // healthy SDK's ~92% lines) so they hold across API shapes; raise them
            // for a stricter local policy.
            'test-coverage': 'node --test-concurrency=1 --experimental-test-coverage ' +
                '--test-coverage-exclude=\'**/dist-test/**\' ' +
                '--test-coverage-lines=85 --test-coverage-branches=68 --test-coverage-functions=88 ' +
                '--test \'dist-test/**/*.test.js\'',
            "watch": "tsc --build src test -w",
            // Prune compiled output before building: `tsc --build` is incremental and
            // never deletes .js for a removed source, so entity tests that the model
            // folds away would otherwise keep running from stale dist-test/ and fail.
            "build": "rm -rf dist dist-test && tsc --build src test",
            "clean": "rm -rf node_modules yarn.lock package-lock.json dist dist-test",
            "reset": "npm run clean && npm i && npm run build && npm test",
        },
        author: { name: sdkgen_1.PUBLISHER, url: sdkgen_1.PUBLISHER_URL },
        // TODO: needs to be config
        license: 'MIT',
        dependencies: deps.prod,
        peerDependencies: deps.peer,
        devDependencies: deps.dev,
    };
    (0, sdkgen_1.File)({ name: 'package.json' }, () => {
        (0, sdkgen_1.Content)(JSON.stringify(pkg, null, 2));
    });
});
exports.Package = Package;
//# sourceMappingURL=Package_ts.js.map