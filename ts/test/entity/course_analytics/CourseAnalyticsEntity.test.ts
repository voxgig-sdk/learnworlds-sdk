

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


describe('CourseAnalyticsEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.CourseAnalytics()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'course_analytics.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"float","name":"avg_score_rate","req":false,"short":"Average score (%)","type":"`$NUMBER`","index$":0},{"active":true,"name":"avg_time_to_finish","req":false,"short":"Average time to finish the course in seconds","type":"`$INTEGER`","index$":1},{"active":true,"name":"certificates_issued","req":false,"short":"Number of issued certifications","type":"`$INTEGER`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"learning_units","req":false,"short":"Number of learning activities","type":"`$INTEGER`","index$":4},{"active":true,"name":"social_interactions","req":false,"short":"Number of social interactions","type":"`$INTEGER`","index$":5},{"active":true,"name":"students","req":false,"short":"Number of students","type":"`$INTEGER`","index$":6},{"active":true,"format":"float","name":"success_rate","req":false,"short":"Success rate (%)","type":"`$NUMBER`","index$":7},{"active":true,"name":"total_study_time","req":false,"short":"Total study time in seconds","type":"`$INTEGER`","index$":8},{"active":true,"name":"video_time","req":false,"short":"Total video duration of the course in seconds","type":"`$INTEGER`","index$":9},{"active":true,"name":"video_viewing_time","req":false,"short":"Total video time viewed","type":"`$INTEGER`","index$":10},{"active":true,"name":"videos","req":false,"short":"Number of videos","type":"`$INTEGER`","index$":11}],"id":{"field":"id","name":"id"},"name":"course_analytics","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v2/courses/{id}/analytics","json":"{\"operationId\":\"get-courses-id-analytics\",\"parameters\":[{\"description\":\"Course Id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"avg_score_rate\":95,\"avg_time_to_finish\":0,\"certificates_issued\":3,\"learning_units\":16,\"social_interactions\":7,\"students\":134,\"success_rate\":0,\"total_study_time\":13953,\"video_time\":0,\"video_viewing_time\":0,\"videos\":5}}},\"schema\":{\"examples\":[{\"avg_score_rate\":95,\"avg_time_to_finish\":0,\"certificates_issued\":3,\"learning_units\":16,\"social_interactions\":7,\"students\":134,\"success_rate\":0,\"total_study_time\":13953,\"video_time\":0,\"video_viewing_time\":0,\"videos\":5}],\"properties\":{\"avg_score_rate\":{\"description\":\"Average score (%)\",\"format\":\"float\",\"type\":\"number\"},\"avg_time_to_finish\":{\"description\":\"Average time to finish the course in seconds\",\"type\":\"integer\"},\"certificates_issued\":{\"description\":\"Number of issued certifications\",\"type\":\"integer\"},\"learning_units\":{\"description\":\"Number of learning activities\",\"type\":\"integer\"},\"social_interactions\":{\"description\":\"Number of social interactions \",\"type\":\"integer\"},\"students\":{\"description\":\"Number of students\",\"type\":\"integer\"},\"success_rate\":{\"description\":\"Success rate (%)\",\"format\":\"float\",\"type\":\"number\"},\"total_study_time\":{\"description\":\"Total study time in seconds\",\"type\":\"integer\"},\"video_time\":{\"description\":\"Total video duration of the course in seconds\",\"type\":\"integer\"},\"video_viewing_time\":{\"description\":\"Total video time viewed\",\"type\":\"integer\"},\"videos\":{\"description\":\"Number of videos\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/courses/{id}/analytics","segments":[{"lit":"v2"},{"lit":"courses"},{"var":"id"},{"lit":"analytics"}],"select":{"exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"course_analytics","name__orig":"course_analytics","Name":"CourseAnalytics","name_":"course_analytics","name-":"course-analytics","NAME":"COURSE_ANALYTICS","index$":15}, {"active":true,"entity":"course_analytics","key$":"BasicCourseAnalyticsFlow","kind":"basic","name":"BasicCourseAnalyticsFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"course_analytics_ref01","srcdatavar":"course_analytics_ref01_data","suffix":"_dt0"},"match":{"id":"course_analytics01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-course_analytics_ref01"}}]}]}, 'CourseAnalytics')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let course_analytics_ref01_data = Object.values(setup.data.existing.course_analytics)[0] as any

    // LOAD
    const course_analytics_ref01_ent = client.CourseAnalytics()
    const course_analytics_ref01_match_dt0: any = {}
    course_analytics_ref01_match_dt0.id = course_analytics_ref01_data.id
    const course_analytics_ref01_data_dt0 = (await course_analytics_ref01_ent.load(course_analytics_ref01_match_dt0)).data()
    assert(course_analytics_ref01_data_dt0.id === course_analytics_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/course_analytics/CourseAnalyticsTestData.json')

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
    ['course_analytics01','course_analytics02','course_analytics03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_COURSE_ANALYTICS_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_COURSE_ANALYTICS_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_COURSE_ANALYTICS_ENTID']
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
  
