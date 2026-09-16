

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


describe('MultipleSeatEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.MultipleSeat()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'multiple_seat.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"deprecated":true,"name":"access","req":false,"short":"Access status of the seat offering.","type":"`$STRING`","index$":0},{"active":true,"name":"add_to_active_seat","req":false,"short":"Indication about whether the user is assigned a seat in the seat offering; true if she is, or false if she is not.","type":"`$BOOLEAN`","index$":1},{"active":true,"name":"available_seats","req":false,"short":"Number of available seats in the offering.","type":"`$INTEGER`","index$":2},{"active":true,"name":"created","req":false,"short":"Date the seat offering was created; displayed in UNIX timestamp format.","type":"`$NUMBER`","index$":3},{"active":true,"name":"description","req":false,"short":"Description of the seat offering.","type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"short":"Unique identifier of the seat offering.","type":"`$STRING`","index$":5},{"active":true,"name":"max_number_of_users","req":false,"short":"Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added.","type":"`$INTEGER`","index$":6},{"active":true,"name":"modified","req":false,"short":"Date the seat offering was modified for the last time; displayed in UNIX timestamp format.","type":"`$NUMBER`","index$":7},{"active":true,"name":"number_of_seats","req":false,"short":"Number of the seats in the offering.","type":"`$INTEGER`","index$":8},{"active":true,"name":"products","req":false,"short":"Products in the seat offering","type":"`$OBJECT`","index$":9},{"active":true,"name":"seat_managers","req":false,"short":"Unique identifier of each seat manager.","type":"`$ARRAY`","index$":10},{"active":true,"name":"success","req":false,"type":"`$BOOLEAN`","index$":11},{"active":true,"name":"tags","req":false,"short":"Tags assigned to the users added to the seat offering.","type":"`$ARRAY`","index$":12},{"active":true,"name":"title","req":false,"short":"Title of the seat offering.","type":"`$STRING`","index$":13},{"active":true,"name":"total_enrollments","req":false,"short":"Total enrollements of the seat offering.","type":"`$INTEGER`","index$":14}],"id":{"field":"id","name":"id"},"name":"multiple_seat","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"seat_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"uid","orig":"uid","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /v2/seats/{id}/users/{uid}","json":"{\"operationId\":\"post-v2-seats-id-users-uid\",\"parameters\":[{\"description\":\"Unique identifier of the seat offering.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"User Id or email (encoded string)\",\"in\":\"path\",\"name\":\"uid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"add_to_active_seat\":{\"description\":\"Indication about whether the user is assigned a seat in the seat offering; true if she is, or false if she is not. Default false.\",\"type\":\"boolean\"}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"success\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/seats/{id}/users/{uid}","rename":{"param":{"id":"seat_id"}},"segments":[{"lit":"v2"},{"lit":"seats"},{"var":"seat_id"},{"lit":"users"},{"var":"uid"}],"select":{"exist":["authorization","lw_client","seat_id","uid"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /v2/seats","json":"{\"operationId\":\"get-v2-seats\",\"parameters\":[{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{},\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"access\":\"active\",\"created\":1685011072.247868,\"description\":\"lorem ipsum dolor sit amet\",\"id\":\"646f3a8010b76ba4270c87b4\",\"max_number_of_users\":100,\"modified\":1685011166.656884,\"number_of_seats\":10,\"products\":{\"courses\":[\"1st-paid\"]},\"seat_managers\":[{\"email\":\"seatmanager@learnworlds.com\",\"id\":\"64623b0113687181610046c0\",\"role_id\":\"61bb42d5e07e202700000014\",\"username\":\"Seat manager username\"}],\"tags\":[\"tag1\",\"tag2\"],\"title\":\"test suspend\",\"total_enrollments\":2}],\"properties\":{\"access\":{\"deprecated\":true,\"description\":\"Access status of the seat offering.\",\"enum\":[\"active\",\"inactive\"],\"type\":\"string\"},\"available_seats\":{\"description\":\"Number of available seats in the offering.\",\"type\":\"integer\"},\"created\":{\"description\":\"Date the seat offering was created; displayed in UNIX timestamp format.\",\"type\":\"number\"},\"description\":{\"description\":\"Description of the seat offering.\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the seat offering.\",\"type\":\"string\"},\"max_number_of_users\":{\"description\":\"Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added.\",\"type\":\"integer\"},\"modified\":{\"description\":\"Date the seat offering was modified for the last time; displayed in UNIX timestamp format.\",\"type\":\"number\"},\"number_of_seats\":{\"description\":\"Number of the seats in the offering.\",\"type\":\"integer\"},\"products\":{\"description\":\"Products in the seat offering\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"seat_managers\":{\"description\":\"Unique identifier of each seat manager.\",\"items\":{\"properties\":{\"email\":{\"description\":\"Email account of the user\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the seat manager.\",\"type\":\"string\"},\"role_id\":{\"description\":\"Unique identifier of the user role.\",\"type\":\"string\"},\"username\":{\"description\":\"Username account of the user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"tags\":{\"description\":\"Tags assigned to the users added to the seat offering.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the seat offering.\",\"type\":\"string\"},\"total_enrollments\":{\"description\":\"Total enrollements of the seat offering.\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/seats","segments":[{"lit":"v2"},{"lit":"seats"}],"select":{"exist":["authorization","lw_client","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"seat_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"uid","orig":"uid","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /v2/seats/{id}/users/{uid}","json":"{\"operationId\":\"delete-v2-seats-id-users-uid\",\"parameters\":[{\"description\":\"Unique identifier of the seat offering.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"User Id or email (encoded string)\",\"in\":\"path\",\"name\":\"uid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"remove_from_seat_offering\":{\"description\":\"Indication about whether the user should be also removed from the seat offering; true if she should be removed, and false if she should not.\",\"type\":\"boolean\"}},\"type\":\"object\"}}}},\"responses\":{\"204\":{\"description\":\"No Content\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v2/seats/{id}/users/{uid}","rename":{"param":{"id":"seat_id"}},"segments":[{"lit":"v2"},{"lit":"seats"},{"var":"seat_id"},{"lit":"users"},{"var":"uid"}],"select":{"exist":["authorization","lw_client","seat_id","uid"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["seat","user"]]},"key$":"multiple_seat","name__orig":"multiple_seat","Name":"MultipleSeat","name_":"multiple_seat","name-":"multiple-seat","NAME":"MULTIPLE_SEAT","index$":23}, {"active":true,"entity":"multiple_seat","key$":"BasicMultipleSeatFlow","kind":"basic","name":"BasicMultipleSeatFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"multiple_seat_ref01"},"match":{"seat_id":"seat01","uid":"uid01"},"op":"create","spec":[],"valid":[]},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"multiple_seat_ref01"}}]},{"active":true,"data":{},"input":{"ref":"multiple_seat_ref01","suffix":"_rm0"},"match":{"id":"multiple_seat01","seat_id":"seat01"},"op":"remove","spec":[],"valid":[]},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"multiple_seat_ref01"}}]}]}, 'MultipleSeat')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const multiple_seat_ref01_ent = client.MultipleSeat()
    let multiple_seat_ref01_data = setup.data.new.multiple_seat['multiple_seat_ref01']
    multiple_seat_ref01_data['seat_id'] = setup.idmap['seat01']
    multiple_seat_ref01_data['uid'] = setup.idmap['uid01']

    multiple_seat_ref01_data = (await multiple_seat_ref01_ent.create(multiple_seat_ref01_data)).data()
    assert(null != multiple_seat_ref01_data.id)


    // LIST
    const multiple_seat_ref01_match: any = {}

    const multiple_seat_ref01_list = (await multiple_seat_ref01_ent.list(multiple_seat_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(multiple_seat_ref01_list, { id: multiple_seat_ref01_data.id })))


    // REMOVE
    const multiple_seat_ref01_match_rm0: any = { id: multiple_seat_ref01_data.id }
    await multiple_seat_ref01_ent.remove(multiple_seat_ref01_match_rm0)
  

    // LIST
    const multiple_seat_ref01_match_rt0: any = {}

    const multiple_seat_ref01_list_rt0 = (await multiple_seat_ref01_ent.list(multiple_seat_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(multiple_seat_ref01_list_rt0, { id: multiple_seat_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/multiple_seat/MultipleSeatTestData.json')

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
    ['multiple_seat01','multiple_seat02','multiple_seat03','seat01','seat02','seat03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_MULTIPLE_SEAT_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_MULTIPLE_SEAT_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_MULTIPLE_SEAT_ENTID']
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
  
