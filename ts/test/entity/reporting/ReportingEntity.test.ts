

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


describe('ReportingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Reporting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'reporting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"float","name":"average_score_rate","req":false,"short":"Average score percentage","type":"`$NUMBER`","index$":0},{"active":true,"name":"completed_at","req":false,"short":"Completion date in UNIX timestamp format.","type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":1},{"active":true,"name":"completed_units","req":false,"short":"Total number of completed course learning activities by the user","type":"`$INTEGER`","index$":2},{"active":true,"name":"course_id","req":false,"short":"Unique identifier of the course","type":"`$STRING`","index$":3},{"active":true,"name":"progress_per_section_unit","req":false,"short":"User progress data per section/learning activity","type":"`$ARRAY`","index$":4},{"active":true,"format":"float","name":"progress_rate","req":false,"short":"Progress rate (%)","type":"`$NUMBER`","index$":5},{"active":true,"name":"status","req":false,"short":"Status of user progress","type":"`$STRING`","index$":6},{"active":true,"name":"time_on_course","req":false,"short":"Time spent on the course in seconds","type":"`$INTEGER`","index$":7},{"active":true,"name":"total_units","req":false,"short":"Total number of course learning activities","type":"`$INTEGER`","index$":8}],"name":"reporting","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"user_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"items_per_page","orig":"items_per_page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":"1","kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /v2/users/{id}/progress","json":"{\"operationId\":\"get-v2-users-id-progress\",\"parameters\":[{\"description\":\"User Id or email (encoded string)\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, no results will be returned\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":\"1\",\"type\":\"integer\"}},{\"description\":\"Filter by the items per page number\",\"in\":\"query\",\"name\":\"items_per_page\",\"schema\":{\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"average_score_rate\":80,\"completed_at\":1510243831,\"completed_units\":1,\"course_id\":\"10-secrets-of-sleep-walking\",\"progress_per_section_unit\":[{\"section_id\":\"my-course_first_section\",\"units\":[{\"score_on_unit\":null,\"time_on_unit\":210,\"unit_duration\":773,\"unit_id\":\"5cdaa5856c72ec302c5698c3\",\"unit_name\":\"Von D - Burn Baphomet\",\"unit_progress_rate\":25,\"unit_section_name\":\"first section\",\"unit_status\":\"not_completed\",\"unit_type\":\"youtube\"},{\"score_on_unit\":100,\"time_on_unit\":555,\"unit_duration\":555,\"unit_id\":\"5cdac4bf6c72ec7ea8384e02\",\"unit_name\":\"best practices scorm\",\"unit_progress_rate\":100,\"unit_section_name\":\"first section\",\"unit_status\":\"completed\",\"unit_type\":\"scorm\"},{\"score_on_unit\":null,\"time_on_unit\":0,\"unit_duration\":281,\"unit_id\":\"5cdac50d6c72ec7ea40dce52\",\"unit_name\":\"test\",\"unit_progress_rate\":0,\"unit_section_name\":\"first section\",\"unit_status\":\"not_completed\",\"unit_type\":\"audio\"}]},{\"section_id\":\"my-course_second_section\",\"units\":[{\"score_on_unit\":null,\"time_on_unit\":223,\"unit_duration\":833,\"unit_id\":\"5f9a93b068fd38656d62b404\",\"unit_name\":\"my ebook\",\"unit_progress_rate\":35,\"unit_section_name\":\"second section\",\"unit_status\":\"not_completed\",\"unit_type\":\"ebook\"}]}],\"progress_rate\":100,\"status\":\"completed\",\"time_on_course\":12310,\"total_units\":4}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"average_score_rate\":80,\"completed_at\":1510243831,\"completed_units\":1,\"course_id\":\"10-secrets-of-sleep-walking\",\"progress_per_section_unit\":[{\"section_id\":\"my-course_first_section\",\"units\":[{\"score_on_unit\":null,\"time_on_unit\":210,\"unit_duration\":773,\"unit_id\":\"5cdaa5856c72ec302c5698c3\",\"unit_name\":\"Von D - Burn Baphomet\",\"unit_progress_rate\":25,\"unit_section_name\":\"first section\",\"unit_status\":\"not_completed\",\"unit_type\":\"youtube\"},{\"score_on_unit\":100,\"time_on_unit\":555,\"unit_duration\":555,\"unit_id\":\"5cdac4bf6c72ec7ea8384e02\",\"unit_name\":\"best practices scorm\",\"unit_progress_rate\":100,\"unit_section_name\":\"first section\",\"unit_status\":\"completed\",\"unit_type\":\"scorm\"},{\"score_on_unit\":null,\"time_on_unit\":0,\"unit_duration\":281,\"unit_id\":\"5cdac50d6c72ec7ea40dce52\",\"unit_name\":\"test\",\"unit_progress_rate\":0,\"unit_section_name\":\"first section\",\"unit_status\":\"not_completed\",\"unit_type\":\"audio\"}]},{\"section_id\":\"my-course_second_section\",\"units\":[{\"score_on_unit\":null,\"time_on_unit\":223,\"unit_duration\":833,\"unit_id\":\"5f9a93b068fd38656d62b404\",\"unit_name\":\"my ebook\",\"unit_progress_rate\":35,\"unit_section_name\":\"second section\",\"unit_status\":\"not_completed\",\"unit_type\":\"ebook\"}]}],\"progress_rate\":100,\"status\":\"completed\",\"time_on_course\":12310,\"total_units\":4}],\"properties\":{\"average_score_rate\":{\"description\":\"Average score percentage\",\"format\":\"float\",\"type\":\"number\"},\"completed_at\":{\"description\":\"Completion date in UNIX timestamp format. If status is not_started or not_completed the null value will be returned\",\"example\":1510243831,\"type\":[\"number\",\"null\"]},\"completed_units\":{\"description\":\"Total number of completed course learning activities by the user \",\"type\":\"integer\"},\"course_id\":{\"description\":\"Unique identifier of the course\",\"type\":\"string\"},\"progress_per_section_unit\":{\"description\":\"User progress data per section/learning activity\",\"items\":{\"properties\":{\"section_id\":{\"description\":\"Unique identifier of the section\",\"type\":\"string\"},\"units\":{\"description\":\"User progress data per unit\",\"items\":{\"properties\":{\"score_on_unit\":{\"description\":\"User score on learning activity\",\"maximum\":100,\"minimum\":1,\"type\":[\"null\",\"integer\"]},\"time_on_unit\":{\"description\":\"Time spend by user on learning activity in seconds\",\"type\":\"integer\"},\"unit_duration\":{\"description\":\"Duration of the learning activity in seconds\",\"type\":[\"null\",\"integer\"]},\"unit_id\":{\"description\":\"Unique identifier of the learning activity\",\"type\":\"string\"},\"unit_name\":{\"description\":\"Name of the learning activity\",\"type\":\"string\"},\"unit_progress_rate\":{\"description\":\"Progress rate of user on learning activity\",\"maximum\":100,\"minimum\":0,\"type\":\"integer\"},\"unit_section_name\":{\"description\":\"Name of the section where the learning activity belongs\",\"type\":\"string\"},\"unit_status\":{\"description\":\"Status of the learning activity\",\"enum\":[\"completed\",\"not_completed\"],\"type\":\"string\"},\"unit_type\":{\"description\":\"Type of the learning activity\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"},\"progress_rate\":{\"description\":\"Progress rate (%)\",\"format\":\"float\",\"type\":\"number\"},\"status\":{\"description\":\"Status of user progress\",\"enum\":[\"not_started\",\"completed\",\"not_completed\"],\"type\":\"string\"},\"time_on_course\":{\"description\":\"Time spent on the course in seconds\",\"type\":\"integer\"},\"total_units\":{\"description\":\"Total number of course learning activities \",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/users/{id}/progress","rename":{"param":{"id":"user_id"}},"segments":[{"lit":"v2"},{"lit":"users"},{"var":"user_id"},{"lit":"progress"}],"select":{"exist":["authorization","items_per_page","lw_client","page","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["user"]]},"key$":"reporting","name__orig":"reporting","Name":"Reporting","name_":"reporting","name-":"reporting","NAME":"REPORTING","index$":27}, {"active":true,"entity":"reporting","key$":"BasicReportingFlow","kind":"basic","name":"BasicReportingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"user_id":"user01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"reporting_ref01"}}]}]}, 'Reporting')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let reporting_ref01_data = Object.values(setup.data.existing.reporting)[0] as any

    // LIST
    const reporting_ref01_ent = client.Reporting()
    const reporting_ref01_match: any = {}
    reporting_ref01_match['user_id'] = setup.idmap['user01']

    const reporting_ref01_list = (await reporting_ref01_ent.list(reporting_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/reporting/ReportingTestData.json')

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
    ['reporting01','reporting02','reporting03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_REPORTING_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_REPORTING_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_REPORTING_ENTID']
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
  
