

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LearnworldsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('AssessmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Assessment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assessment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"answers","req":false,"short":"Related answers data","type":"`$ARRAY`","index$":0},{"active":true,"format":"float","name":"created","req":false,"short":"Date the submission was created (started), in UNIX timestamp format","type":"`$NUMBER`","index$":1},{"active":true,"name":"email","req":false,"short":"Email account of the user who submitted the responses","type":"`$STRING`","index$":2},{"active":true,"name":"generalFeedback","req":false,"short":"General feedback for a submission","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":3},{"active":true,"name":"grade","req":false,"short":"The grade that corresponds to the responses provided by the user","type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":4},{"active":true,"name":"id","req":false,"short":"Unique identifier of the submission of responses by the user specified by the user id","type":"`$STRING`","index$":5},{"active":true,"format":"float","name":"modified","req":false,"short":"Date the submission was modified for the last time, in UNIX timestamp format","type":"`$NUMBER`","index$":6},{"active":true,"name":"passed","req":false,"short":"Indication about whether or not the assessment result was passed or failed","type":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"index$":7},{"active":true,"format":"float","name":"submittedTimestamp","req":false,"short":"Date the submission was finished (submitted), in UNIX timestamp format","type":"`$NUMBER`","index$":8},{"active":true,"name":"user_id","req":false,"short":"Unique identifier of the user who submitted the responses","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"assessment","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"form_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"items_per_page","orig":"items_per_page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"user","orig":"user","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /v2/forms/{id}/responses","json":"{\"operationId\":\"get-form-responses\",\"parameters\":[{\"description\":\"Unique identifier of the form\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Filter by user ids. For several id values, a comma separated string can be provided\",\"in\":\"query\",\"name\":\"users\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the items per page number\",\"in\":\"query\",\"name\":\"items_per_page\",\"schema\":{\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example 1\":{\"value\":{\"data\":[{\"answers\":[{\"answer\":\"Paphos\",\"answerData\":null,\"blockId\":\"mc1663256077565_327\",\"blockMaxScore\":1,\"blockType\":\"mc\",\"description\":\"Which of the following is a planet?\",\"feedback\":null,\"points\":0},{\"answer\":\"smallAnswer.avi\",\"answerData\":{\"downloads\":[{\"avStatus\":\"safe\",\"title\":\"smallAnswer.avi\",\"url\":\"https://learnworldsdev.blob.core.windows.net/dev-private/assessmentFileUpload/549d7ee2e4b4c8b511000000/5540eccd65b629a7e9f7157cc8914468.avi?sv=2014-02-14&st=2022-09-15T13%3A30%3A11Z&se=2022-09-16T01%3A31%3A11Z&sr=b&sp=r&rscd=&sig=JKdA4IRXCJ6AQmwx3PXWFMXRedXLDCRNLq7Xh%2BdTwko%3D\"}]},\"blockId\":\"fileUpload1663256473148_342\",\"blockMaxScore\":1,\"blockType\":\"fileUpload\",\"description\":\"Please upload your drawings\",\"feedback\":null,\"points\":1}],\"created\":1663245704.014824,\"email\":\"info@learnworlds.com\",\"generalFeedback\":null,\"grade\":50,\"id\":\"63231d88da4ed9ba7d0198f4\",\"modified\":1663246805.183458,\"passed\":true,\"submittedTimestamp\":1663246805.047033,\"user_id\":\"549d7ee2e4b4c8b511000000\"}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"answers\":[{\"answer\":\"Paphos\",\"answerData\":null,\"blockId\":\"mc1663256077565_327\",\"blockMaxScore\":1,\"blockType\":\"mc\",\"description\":\"Which of the following is a planet?\",\"feedback\":null,\"points\":0},{\"answer\":\"smallAnswer.avi\",\"answerData\":{\"downloads\":[{\"avStatus\":\"safe\",\"title\":\"smallAnswer.avi\",\"url\":\"https://learnworldsdev.blob.core.windows.net/dev-private/assessmentFileUpload/549d7ee2e4b4c8b511000000/5540eccd65b629a7e9f7157cc8914468.avi?sv=2014-02-14&st=2022-09-15T13%3A30%3A11Z&se=2022-09-16T01%3A31%3A11Z&sr=b&sp=r&rscd=&sig=JKdA4IRXCJ6AQmwx3PXWFMXRedXLDCRNLq7Xh%2BdTwko%3D\"}]},\"blockId\":\"fileUpload1663256473148_342\",\"blockMaxScore\":1,\"blockType\":\"fileUpload\",\"description\":\"Please upload your drawings\",\"feedback\":null,\"points\":1}],\"created\":1663245704.014824,\"email\":\"info@learnworlds.com\",\"generalFeedback\":null,\"grade\":50,\"id\":\"63231d88da4ed9ba7d0198f4\",\"modified\":1663246805.183458,\"passed\":true,\"submittedTimestamp\":1663246805.047033,\"user_id\":\"549d7ee2e4b4c8b511000000\"}],\"properties\":{\"answers\":{\"description\":\"Related answers data\",\"items\":{\"properties\":{\"answer\":{\"description\":\"The text content of the user's answer for this question block\",\"type\":\"string\"},\"answerData\":{\"items\":{\"properties\":{\"downloads\":{\"items\":{\"properties\":{\"avStatus\":{\"description\":\"Antivirus status of the download\",\"enum\":[\"safe\",\"unsafe\",\"scan_failed\",\"awating_scan\"],\"example\":\"safe\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the download\",\"type\":\"string\"},\"url\":{\"description\":\"Url of the download\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"blockId\":{\"description\":\"Unique identifier of the question block inside the assessment\",\"type\":\"string\"},\"blockMaxScore\":{\"description\":\"The maximum points an answer can gather for this question block\",\"type\":[\"number\",\"null\"]},\"blockType\":{\"description\":\"The type of the question block inside the assessment\",\"type\":\"string\"},\"description\":{\"description\":\"The text content of the question block\",\"type\":\"string\"},\"feedback\":{\"description\":\"Feedback for an answer\",\"type\":[\"string\",\"null\"]},\"points\":{\"description\":\"The points for the user's answer for this question block\",\"type\":[\"number\",\"null\"]}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":true},\"created\":{\"description\":\"Date the submission was created (started), in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"email\":{\"description\":\"Email account of the user who submitted the responses\",\"type\":\"string\"},\"generalFeedback\":{\"description\":\"General feedback for a submission\",\"type\":[\"string\",\"null\"]},\"grade\":{\"description\":\"The grade that corresponds to the responses provided by the user\",\"maximum\":100,\"minimum\":0,\"type\":[\"number\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the submission of responses by the user specified by the user id\",\"type\":\"string\"},\"modified\":{\"description\":\"Date the submission was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"passed\":{\"description\":\"Indication about whether or not the assessment result was passed or failed\",\"type\":[\"boolean\",\"null\"]},\"submittedTimestamp\":{\"description\":\"Date the submission was finished (submitted), in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"user_id\":{\"description\":\"Unique identifier of the user who submitted the responses\",\"type\":\"string\"}},\"title\":\"UserResponse\",\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/forms/{id}/responses","rename":{"param":{"id":"form_id"}},"segments":[{"lit":"v2"},{"lit":"forms"},{"var":"form_id"},{"lit":"responses"}],"select":{"exist":["authorization","form_id","items_per_page","lw_client","page","user"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"items_per_page","orig":"items_per_page","reqd":false,"type":"`$INTEGER`"},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`"},{"active":true,"kind":"query","name":"user","orig":"user","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /v2/assessments/{id}/responses","json":"{\"operationId\":\"get-questionnaire-unit-responses\",\"parameters\":[{\"description\":\"Unique identifier of the assessment learning activity\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Filter by user ids. For several id values, a comma separated string can be provided\",\"in\":\"query\",\"name\":\"users\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the items per page number\",\"in\":\"query\",\"name\":\"items_per_page\",\"schema\":{\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example 1\":{\"value\":{\"data\":[{\"answers\":[{\"answer\":\"Paphos\",\"answerData\":null,\"blockId\":\"mc1663256077565_327\",\"blockMaxScore\":1,\"blockType\":\"mc\",\"description\":\"Which of the following is a planet?\",\"feedback\":null,\"points\":0},{\"answer\":\"smallAnswer.avi\",\"answerData\":{\"downloads\":[{\"avStatus\":\"safe\",\"title\":\"smallAnswer.avi\",\"url\":\"https://learnworldsdev.blob.core.windows.net/dev-private/assessmentFileUpload/549d7ee2e4b4c8b511000000/5540eccd65b629a7e9f7157cc8914468.avi?sv=2014-02-14&st=2022-09-15T13%3A30%3A11Z&se=2022-09-16T01%3A31%3A11Z&sr=b&sp=r&rscd=&sig=JKdA4IRXCJ6AQmwx3PXWFMXRedXLDCRNLq7Xh%2BdTwko%3D\"}]},\"blockId\":\"fileUpload1663256473148_342\",\"blockMaxScore\":1,\"blockType\":\"fileUpload\",\"description\":\"Please upload your drawings\",\"feedback\":null,\"points\":1}],\"created\":1663245704.014824,\"email\":\"info@learnworlds.com\",\"generalFeedback\":null,\"grade\":50,\"id\":\"63231d88da4ed9ba7d0198f4\",\"modified\":1663246805.183458,\"passed\":true,\"submittedTimestamp\":1663246805.047033,\"user_id\":\"549d7ee2e4b4c8b511000000\"}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"answers\":[{\"answer\":\"Paphos\",\"answerData\":null,\"blockId\":\"mc1663256077565_327\",\"blockMaxScore\":1,\"blockType\":\"mc\",\"description\":\"Which of the following is a planet?\",\"feedback\":null,\"points\":0},{\"answer\":\"smallAnswer.avi\",\"answerData\":{\"downloads\":[{\"avStatus\":\"safe\",\"title\":\"smallAnswer.avi\",\"url\":\"https://learnworldsdev.blob.core.windows.net/dev-private/assessmentFileUpload/549d7ee2e4b4c8b511000000/5540eccd65b629a7e9f7157cc8914468.avi?sv=2014-02-14&st=2022-09-15T13%3A30%3A11Z&se=2022-09-16T01%3A31%3A11Z&sr=b&sp=r&rscd=&sig=JKdA4IRXCJ6AQmwx3PXWFMXRedXLDCRNLq7Xh%2BdTwko%3D\"}]},\"blockId\":\"fileUpload1663256473148_342\",\"blockMaxScore\":1,\"blockType\":\"fileUpload\",\"description\":\"Please upload your drawings\",\"feedback\":null,\"points\":1}],\"created\":1663245704.014824,\"email\":\"info@learnworlds.com\",\"generalFeedback\":null,\"grade\":50,\"id\":\"63231d88da4ed9ba7d0198f4\",\"modified\":1663246805.183458,\"passed\":true,\"submittedTimestamp\":1663246805.047033,\"user_id\":\"549d7ee2e4b4c8b511000000\"}],\"properties\":{\"answers\":{\"description\":\"Related answers data\",\"items\":{\"properties\":{\"answer\":{\"description\":\"The text content of the user's answer for this question block\",\"type\":\"string\"},\"answerData\":{\"items\":{\"properties\":{\"downloads\":{\"items\":{\"properties\":{\"avStatus\":{\"description\":\"Antivirus status of the download\",\"enum\":[\"safe\",\"unsafe\",\"scan_failed\",\"awating_scan\"],\"example\":\"safe\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the download\",\"type\":\"string\"},\"url\":{\"description\":\"Url of the download\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"blockId\":{\"description\":\"Unique identifier of the question block inside the assessment\",\"type\":\"string\"},\"blockMaxScore\":{\"description\":\"The maximum points an answer can gather for this question block\",\"type\":[\"number\",\"null\"]},\"blockType\":{\"description\":\"The type of the question block inside the assessment\",\"type\":\"string\"},\"description\":{\"description\":\"The text content of the question block\",\"type\":\"string\"},\"feedback\":{\"description\":\"Feedback for an answer\",\"type\":[\"string\",\"null\"]},\"points\":{\"description\":\"The points for the user's answer for this question block\",\"type\":[\"number\",\"null\"]}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":true},\"created\":{\"description\":\"Date the submission was created (started), in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"email\":{\"description\":\"Email account of the user who submitted the responses\",\"type\":\"string\"},\"generalFeedback\":{\"description\":\"General feedback for a submission\",\"type\":[\"string\",\"null\"]},\"grade\":{\"description\":\"The grade that corresponds to the responses provided by the user\",\"maximum\":100,\"minimum\":0,\"type\":[\"number\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the submission of responses by the user specified by the user id\",\"type\":\"string\"},\"modified\":{\"description\":\"Date the submission was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"passed\":{\"description\":\"Indication about whether or not the assessment result was passed or failed\",\"type\":[\"boolean\",\"null\"]},\"submittedTimestamp\":{\"description\":\"Date the submission was finished (submitted), in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"user_id\":{\"description\":\"Unique identifier of the user who submitted the responses\",\"type\":\"string\"}},\"title\":\"UserResponse\",\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/assessments/{id}/responses","segments":[{"lit":"v2"},{"lit":"assessments"},{"var":"id"},{"lit":"responses"}],"select":{"$action":"response","exist":["authorization","id","items_per_page","lw_client","page","user"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["form"]]},"key$":"assessment","name__orig":"assessment","Name":"Assessment","name_":"assessment","name-":"assessment","NAME":"ASSESSMENT","index$":2}, {"active":true,"entity":"assessment","key$":"BasicAssessmentFlow","kind":"basic","name":"BasicAssessmentFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"assessment_ref01"}}]}]}, 'Assessment')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assessment_ref01_data = Object.values(setup.data.existing.assessment)[0] as any

    // LIST
    const assessment_ref01_ent = client.Assessment()
    const assessment_ref01_match: any = {}

    const assessment_ref01_list = (await assessment_ref01_ent.list(assessment_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assessment/AssessmentTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LearnworldsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['assessment01','assessment02','assessment03','form01','form02','form03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_ASSESSMENT_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_ASSESSMENT_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_ASSESSMENT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LearnworldsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.LEARNWORLDS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
