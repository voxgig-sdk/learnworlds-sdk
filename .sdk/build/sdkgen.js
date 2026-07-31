
const { SdkGen } = require('@voxgig/sdkgen')

const config = {
  root: __dirname+'/../dist/Root.js',
  folder: __dirname+'/../..',
  meta: {
    name: 'learnworlds'
  },
  model: {
    folder: __dirname+'/../model',
  },
  existing: { txt: { write: true, merge: false } },
}

module.exports = SdkGen.makeBuild(config)
