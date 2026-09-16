

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


describe('UpdateUserProgressEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.UpdateUserProgress()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_user_progress.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"async","req":false,"short":"Indication about whether the request will be executed asynchronously; true if it’s an asynchronous task, false if it is not.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"job_id","req":false,"short":"Unique identifier of the asynchronous task; empty if the task is not asynchronous.” Ensure that the documentation link is accordingly updated","type":"`$STRING`","index$":1},{"active":true,"name":"send_course_complete_email","req":true,"short":"Indication about whether the user will receive the completion emails; true if she should receive the emails, false if she should not.","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"units","req":true,"short":"Unique identifiers of the learning activities that should be marked as complete; empty if the progress of the whole course should be marked as complete.","type":"`$ARRAY`","index$":3}],"name":"update_user_progress","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"course_id","orig":"cid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"user_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /v2/users/{id}/courses/{cid}/complete","json":"{\"operationId\":\"post-v2-users-id-courses-cid-complete\",\"parameters\":[{\"description\":\"User Id or email (encoded string)\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Course title Id\",\"in\":\"path\",\"name\":\"cid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"send_course_complete_email\":false,\"units\":[]}}},\"schema\":{\"properties\":{\"send_course_complete_email\":{\"description\":\"\\t\\nIndication about whether the user will receive the completion emails; true if she should receive the emails, false if she should not.\",\"type\":\"boolean\"},\"units\":{\"description\":\"Unique identifiers of the learning activities that should be marked as complete; empty if the progress of the whole course should be marked as complete.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"send_course_complete_email\",\"units\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"async\":true,\"job_id\":\"63f337a50e27fef8cf00ff34\"}}},\"schema\":{\"properties\":{\"async\":{\"description\":\"Indication about whether the request will be executed asynchronously; true if it’s an asynchronous task, false if it is not.\",\"type\":\"boolean\"},\"job_id\":{\"description\":\"Unique identifier of the asynchronous task; empty if the task is not asynchronous.”\\n\\nEnsure that the documentation link is accordingly updated\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/users/{id}/courses/{cid}/complete","rename":{"param":{"cid":"course_id","id":"user_id"}},"segments":[{"lit":"v2"},{"lit":"users"},{"var":"user_id"},{"lit":"courses"},{"var":"course_id"},{"lit":"complete"}],"select":{"exist":["authorization","course_id","lw_client","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"course_id","orig":"cid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"user_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /v2/users/{id}/courses/{cid}/reset","json":"{\"operationId\":\"post-v2-users-id-courses-cid-reset\",\"parameters\":[{\"description\":\"User Id or email (encoded string)\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Course title Id\",\"in\":\"path\",\"name\":\"cid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"units\":{\"description\":\"Unique identifiers of the learning activities the progress of which needs to be reset; empty if the progress of the whole course should be reset.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"units\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"async\":{\"description\":\"Indication about whether the request will be executed asynchronously; true if it’s an asynchronous task, false if it is not.\",\"type\":\"boolean\"},\"job_id\":{\"description\":\"Unique identifier of the asynchronous task; empty if the task is not asynchronous.\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/users/{id}/courses/{cid}/reset","rename":{"param":{"cid":"course_id","id":"user_id"}},"segments":[{"lit":"v2"},{"lit":"users"},{"var":"user_id"},{"lit":"courses"},{"var":"course_id"},{"lit":"reset"}],"select":{"exist":["authorization","course_id","lw_client","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["user","course"]]},"key$":"update_user_progress","name__orig":"update_user_progress","Name":"UpdateUserProgress","name_":"update_user_progress","name-":"update-user-progress","NAME":"UPDATE_USER_PROGRESS","index$":36}, {"active":true,"entity":"update_user_progress","key$":"BasicUpdateUserProgressFlow","kind":"basic","name":"BasicUpdateUserProgressFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"update_user_progress_ref01"},"match":{"course_id":"course01","user_id":"user01"},"op":"create","spec":[],"valid":[]}]}, 'UpdateUserProgress')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const update_user_progress_ref01_ent = client.UpdateUserProgress()
    let update_user_progress_ref01_data = setup.data.new.update_user_progress['update_user_progress_ref01']
    update_user_progress_ref01_data['course_id'] = setup.idmap['course01']
    update_user_progress_ref01_data['user_id'] = setup.idmap['user01']

    update_user_progress_ref01_data = (await update_user_progress_ref01_ent.create(update_user_progress_ref01_data)).data()
    assert(null != update_user_progress_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_user_progress/UpdateUserProgressTestData.json')

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
    ['update_user_progress01','update_user_progress02','update_user_progress03','user01','user02','user03','course01','course02','course03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_UPDATE_USER_PROGRESS_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_UPDATE_USER_PROGRESS_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_UPDATE_USER_PROGRESS_ENTID']
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
  
