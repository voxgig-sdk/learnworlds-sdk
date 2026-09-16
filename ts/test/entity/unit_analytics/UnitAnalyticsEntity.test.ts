

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


describe('UnitAnalyticsEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.UnitAnalytics()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'unit_analytics.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"float","name":"avg_score_rate","req":false,"short":"Average score (%)","type":"`$NUMBER`","index$":0},{"active":true,"format":"float","name":"avg_study_time","req":false,"short":"Average study time in seconds","type":"`$NUMBER`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"Name of the learning activity","type":"`$STRING`","index$":3},{"active":true,"format":"float","name":"total_study_time","req":false,"short":"Total study time in seconds","type":"`$NUMBER`","index$":4},{"active":true,"name":"type","req":false,"short":"Type of the learning activity","type":"`$STRING`","index$":5},{"active":true,"name":"users_completed","req":false,"short":"Number of users that have completed this learning activity","type":"`$INTEGER`","index$":6},{"active":true,"name":"viewers","req":false,"short":"Number of users that have viewed this learning activity","type":"`$INTEGER`","index$":7}],"id":{"field":"id","name":"id"},"name":"unit_analytics","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"course_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"uid","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v2/courses/{id}/units/{uid}/analytics","json":"{\"operationId\":\"get-courses-cid-unit-uid-analytics\",\"parameters\":[{\"description\":\"Course title Id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Learning activity id\",\"in\":\"path\",\"name\":\"uid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"avg_score_rate\":0,\"avg_study_time\":6502,\"name\":\"youtube video\",\"total_study_time\":9295,\"type\":\"youtube\",\"users_completed\":0,\"viewers\":2}}},\"schema\":{\"description\":\"\",\"examples\":[{\"avg_score_rate\":0,\"avg_study_time\":6502,\"name\":\"youtube video\",\"total_study_time\":9295,\"type\":\"youtube\",\"users_completed\":0,\"viewers\":2}],\"properties\":{\"avg_score_rate\":{\"description\":\"Average score (%)\",\"format\":\"float\",\"type\":\"number\"},\"avg_study_time\":{\"description\":\"Average study time in seconds\",\"format\":\"float\",\"type\":\"number\"},\"name\":{\"description\":\"Name of the learning activity\",\"type\":\"string\"},\"total_study_time\":{\"description\":\"Total study time in seconds\",\"format\":\"float\",\"type\":\"number\"},\"type\":{\"description\":\"Type of the learning activity\",\"type\":\"string\"},\"users_completed\":{\"description\":\"Number of users that have completed this learning activity\",\"type\":\"integer\"},\"viewers\":{\"description\":\"Number of users that have viewed this learning activity\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/courses/{id}/units/{uid}/analytics","rename":{"param":{"id":"course_id","uid":"id"}},"segments":[{"lit":"v2"},{"lit":"courses"},{"var":"course_id"},{"lit":"units"},{"var":"id"},{"lit":"analytics"}],"select":{"exist":["authorization","course_id","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["course"]]},"key$":"unit_analytics","name__orig":"unit_analytics","Name":"UnitAnalytics","name_":"unit_analytics","name-":"unit-analytics","NAME":"UNIT_ANALYTICS","index$":34}, {"active":true,"entity":"unit_analytics","key$":"BasicUnitAnalyticsFlow","kind":"basic","name":"BasicUnitAnalyticsFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"unit_analytics_ref01","srcdatavar":"unit_analytics_ref01_data","suffix":"_dt0"},"match":{"course_id":"course01","id":"unit_analytics01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-unit_analytics_ref01"}}]}]}, 'UnitAnalytics')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let unit_analytics_ref01_data = Object.values(setup.data.existing.unit_analytics)[0] as any

    // LOAD
    const unit_analytics_ref01_ent = client.UnitAnalytics()
    const unit_analytics_ref01_match_dt0: any = {}
    unit_analytics_ref01_match_dt0.id = unit_analytics_ref01_data.id
    const unit_analytics_ref01_data_dt0 = (await unit_analytics_ref01_ent.load(unit_analytics_ref01_match_dt0)).data()
    assert(unit_analytics_ref01_data_dt0.id === unit_analytics_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/unit_analytics/UnitAnalyticsTestData.json')

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
    ['unit_analytics01','unit_analytics02','unit_analytics03','course01','course02','course03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_UNIT_ANALYTICS_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_UNIT_ANALYTICS_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_UNIT_ANALYTICS_ENTID']
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
  
