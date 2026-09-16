

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


describe('SeatEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Seat()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'seat.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"deprecated":true,"name":"access","req":false,"short":"Access status of the seat offering.","type":"`$STRING`","index$":0},{"active":true,"name":"available_seats","req":false,"short":"Number of available seats in the offering.","type":"`$INTEGER`","index$":1},{"active":true,"name":"created","req":false,"short":"Date the seat offering was created; displayed in UNIX timestamp format.","type":"`$NUMBER`","index$":2},{"active":true,"name":"description","req":false,"short":"Description of the seat offering.","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"short":"Unique identifier of the seat offering.","type":"`$STRING`","index$":4},{"active":true,"name":"max_number_of_users","req":false,"short":"Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added.","type":"`$INTEGER`","index$":5},{"active":true,"name":"modified","req":false,"short":"Date the seat offering was modified for the last time; displayed in UNIX timestamp format.","type":"`$NUMBER`","index$":6},{"active":true,"name":"number_of_seats","op":{"create":{"req":true,"type":"`$INTEGER`"},"update":{"req":true,"type":"`$INTEGER`"}},"req":false,"short":"Number of the seats in the offering.","type":"`$INTEGER`","index$":7},{"active":true,"name":"products","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"req":false,"short":"Products in the seat offering","type":"`$OBJECT`","index$":8},{"active":true,"name":"seat_managers","req":false,"short":"Unique identifier of each seat manager.","type":"`$ARRAY`","index$":9},{"active":true,"name":"tags","req":false,"short":"Tags assigned to the users added to the seat offering.","type":"`$ARRAY`","index$":10},{"active":true,"name":"title","op":{"create":{"req":true,"type":"`$STRING`"},"update":{"req":true,"type":"`$STRING`"}},"req":false,"short":"Title of the seat offering.","type":"`$STRING`","index$":11},{"active":true,"name":"total_enrollments","req":false,"short":"Total enrollements of the seat offering.","type":"`$INTEGER`","index$":12}],"id":{"field":"id","name":"id"},"name":"seat","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /v2/seats","json":"{\"operationId\":\"post-v2-seats\",\"parameters\":[{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"examples\":[{\"description\":\"lorem ipsum dolor sit amet\",\"id\":\"646f3a8010b76ba4270c87b4\",\"max_number_of_users\":100,\"number_of_seats\":10,\"products\":{\"courses\":[\"1st-paid\"]},\"seat_managers\":[\"64623b0113687181610046c0\"],\"tags\":[\"tag1\",\"tag2\"],\"title\":\"test suspend\"}],\"properties\":{\"access\":{\"deprecated\":true,\"description\":\"Access type of the seat offering.\",\"enum\":[\"active\",\"inactive\"],\"type\":\"string\"},\"description\":{\"description\":\"Description of the seat offering.\",\"type\":\"string\"},\"max_number_of_users\":{\"description\":\"Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added. Specific limits may apply depending on the pricing plan.\",\"type\":\"integer\"},\"number_of_seats\":{\"description\":\"Number of the seats in the offering.\",\"type\":\"integer\"},\"products\":{\"description\":\"Products in the seat offering\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"courses\"],\"type\":\"object\"},\"seat_managers\":{\"description\":\"Unique identifier of each seat manager.\",\"items\":{\"example\":\"6450fc106f4d5668470da734\",\"type\":\"string\"},\"type\":\"array\"},\"tags\":{\"description\":\"Tags assigned to the users added to the seat offering.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the seat offering.\",\"type\":\"string\"}},\"required\":[\"title\",\"products\",\"number_of_seats\"],\"type\":\"object\"}}}},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"examples\":[{\"access\":\"active\",\"created\":1685011072.247868,\"description\":\"lorem ipsum dolor sit amet\",\"id\":\"646f3a8010b76ba4270c87b4\",\"max_number_of_users\":100,\"modified\":1685011166.656884,\"number_of_seats\":10,\"products\":{\"courses\":[\"1st-paid\"]},\"seat_managers\":[{\"email\":\"seatmanager@learnworlds.com\",\"id\":\"64623b0113687181610046c0\",\"role_id\":\"61bb42d5e07e202700000014\",\"username\":\"Seat manager username\"}],\"tags\":[\"tag1\",\"tag2\"],\"title\":\"test suspend\",\"total_enrollments\":2}],\"properties\":{\"access\":{\"deprecated\":true,\"description\":\"Access status of the seat offering.\",\"enum\":[\"active\",\"inactive\"],\"type\":\"string\"},\"available_seats\":{\"description\":\"Number of available seats in the offering.\",\"type\":\"integer\"},\"created\":{\"description\":\"Date the seat offering was created; displayed in UNIX timestamp format.\",\"type\":\"number\"},\"description\":{\"description\":\"Description of the seat offering.\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the seat offering.\",\"type\":\"string\"},\"max_number_of_users\":{\"description\":\"Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added.\",\"type\":\"integer\"},\"modified\":{\"description\":\"Date the seat offering was modified for the last time; displayed in UNIX timestamp format.\",\"type\":\"number\"},\"number_of_seats\":{\"description\":\"Number of the seats in the offering.\",\"type\":\"integer\"},\"products\":{\"description\":\"Products in the seat offering\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"seat_managers\":{\"description\":\"Unique identifier of each seat manager.\",\"items\":{\"properties\":{\"email\":{\"description\":\"Email account of the user\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the seat manager.\",\"type\":\"string\"},\"role_id\":{\"description\":\"Unique identifier of the user role.\",\"type\":\"string\"},\"username\":{\"description\":\"Username account of the user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"tags\":{\"description\":\"Tags assigned to the users added to the seat offering.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the seat offering.\",\"type\":\"string\"},\"total_enrollments\":{\"description\":\"Total enrollements of the seat offering.\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Created\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/seats","segments":[{"lit":"v2"},{"lit":"seats"}],"select":{"exist":["authorization","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v2/seats/{id}","json":"{\"operationId\":\"get-v2-seats-id\",\"parameters\":[{\"description\":\"The unique identifier of the seat offering\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{},\"schema\":{\"examples\":[{\"access\":\"active\",\"created\":1685011072.247868,\"description\":\"lorem ipsum dolor sit amet\",\"id\":\"646f3a8010b76ba4270c87b4\",\"max_number_of_users\":100,\"modified\":1685011166.656884,\"number_of_seats\":10,\"products\":{\"courses\":[\"1st-paid\"]},\"seat_managers\":[{\"email\":\"seatmanager@learnworlds.com\",\"id\":\"64623b0113687181610046c0\",\"role_id\":\"61bb42d5e07e202700000014\",\"username\":\"Seat manager username\"}],\"tags\":[\"tag1\",\"tag2\"],\"title\":\"test suspend\",\"total_enrollments\":2}],\"properties\":{\"access\":{\"deprecated\":true,\"description\":\"Access status of the seat offering.\",\"enum\":[\"active\",\"inactive\"],\"type\":\"string\"},\"available_seats\":{\"description\":\"Number of available seats in the offering.\",\"type\":\"integer\"},\"created\":{\"description\":\"Date the seat offering was created; displayed in UNIX timestamp format.\",\"type\":\"number\"},\"description\":{\"description\":\"Description of the seat offering.\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the seat offering.\",\"type\":\"string\"},\"max_number_of_users\":{\"description\":\"Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added.\",\"type\":\"integer\"},\"modified\":{\"description\":\"Date the seat offering was modified for the last time; displayed in UNIX timestamp format.\",\"type\":\"number\"},\"number_of_seats\":{\"description\":\"Number of the seats in the offering.\",\"type\":\"integer\"},\"products\":{\"description\":\"Products in the seat offering\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"seat_managers\":{\"description\":\"Unique identifier of each seat manager.\",\"items\":{\"properties\":{\"email\":{\"description\":\"Email account of the user\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the seat manager.\",\"type\":\"string\"},\"role_id\":{\"description\":\"Unique identifier of the user role.\",\"type\":\"string\"},\"username\":{\"description\":\"Username account of the user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"tags\":{\"description\":\"Tags assigned to the users added to the seat offering.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the seat offering.\",\"type\":\"string\"},\"total_enrollments\":{\"description\":\"Total enrollements of the seat offering.\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/seats/{id}","segments":[{"lit":"v2"},{"lit":"seats"},{"var":"id"}],"select":{"exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /v2/seats/{id}","json":"{\"operationId\":\"put-v2-seats-id\",\"parameters\":[{\"description\":\"The unique identifier of the seat offering\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"examples\":[{\"description\":\"lorem ipsum dolor sit amet\",\"id\":\"646f3a8010b76ba4270c87b4\",\"max_number_of_users\":100,\"number_of_seats\":10,\"products\":{\"courses\":[\"1st-paid\"]},\"seat_managers\":[\"64623b0113687181610046c0\"],\"tags\":[\"tag1\",\"tag2\"],\"title\":\"test suspend\"}],\"properties\":{\"access\":{\"deprecated\":true,\"description\":\"Access type of the seat offering.\",\"enum\":[\"active\",\"inactive\"],\"type\":\"string\"},\"description\":{\"description\":\"Description of the seat offering.\",\"type\":\"string\"},\"max_number_of_users\":{\"description\":\"Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added. Specific limits may apply depending on the pricing plan.\",\"type\":\"integer\"},\"number_of_seats\":{\"description\":\"Number of the seats in the offering.\",\"type\":\"integer\"},\"products\":{\"description\":\"Products in the seat offering\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"courses\"],\"type\":\"object\"},\"seat_managers\":{\"description\":\"Unique identifier of each seat manager.\",\"items\":{\"example\":\"6450fc106f4d5668470da734\",\"type\":\"string\"},\"type\":\"array\"},\"tags\":{\"description\":\"Tags assigned to the users added to the seat offering.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the seat offering.\",\"type\":\"string\"}},\"required\":[\"title\",\"products\",\"number_of_seats\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"examples\":[{\"access\":\"active\",\"created\":1685011072.247868,\"description\":\"lorem ipsum dolor sit amet\",\"id\":\"646f3a8010b76ba4270c87b4\",\"max_number_of_users\":100,\"modified\":1685011166.656884,\"number_of_seats\":10,\"products\":{\"courses\":[\"1st-paid\"]},\"seat_managers\":[{\"email\":\"seatmanager@learnworlds.com\",\"id\":\"64623b0113687181610046c0\",\"role_id\":\"61bb42d5e07e202700000014\",\"username\":\"Seat manager username\"}],\"tags\":[\"tag1\",\"tag2\"],\"title\":\"test suspend\",\"total_enrollments\":2}],\"properties\":{\"access\":{\"deprecated\":true,\"description\":\"Access status of the seat offering.\",\"enum\":[\"active\",\"inactive\"],\"type\":\"string\"},\"available_seats\":{\"description\":\"Number of available seats in the offering.\",\"type\":\"integer\"},\"created\":{\"description\":\"Date the seat offering was created; displayed in UNIX timestamp format.\",\"type\":\"number\"},\"description\":{\"description\":\"Description of the seat offering.\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the seat offering.\",\"type\":\"string\"},\"max_number_of_users\":{\"description\":\"Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added.\",\"type\":\"integer\"},\"modified\":{\"description\":\"Date the seat offering was modified for the last time; displayed in UNIX timestamp format.\",\"type\":\"number\"},\"number_of_seats\":{\"description\":\"Number of the seats in the offering.\",\"type\":\"integer\"},\"products\":{\"description\":\"Products in the seat offering\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"seat_managers\":{\"description\":\"Unique identifier of each seat manager.\",\"items\":{\"properties\":{\"email\":{\"description\":\"Email account of the user\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the seat manager.\",\"type\":\"string\"},\"role_id\":{\"description\":\"Unique identifier of the user role.\",\"type\":\"string\"},\"username\":{\"description\":\"Username account of the user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"tags\":{\"description\":\"Tags assigned to the users added to the seat offering.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the seat offering.\",\"type\":\"string\"},\"total_enrollments\":{\"description\":\"Total enrollements of the seat offering.\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/v2/seats/{id}","segments":[{"lit":"v2"},{"lit":"seats"},{"var":"id"}],"select":{"exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"seat","name__orig":"seat","Name":"Seat","name_":"seat","name-":"seat","NAME":"SEAT","index$":29}, {"active":true,"entity":"seat","key$":"BasicSeatFlow","kind":"basic","name":"BasicSeatFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"seat_ref01"},"match":{},"op":"create","spec":[],"valid":[]},{"active":true,"data":{},"input":{"ref":"seat_ref01","srcdatavar":"seat_ref01_data","suffix":"_up0","textfield":"access"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-seat_ref01"}}],"valid":[]},{"active":true,"data":{},"input":{"ref":"seat_ref01","srcdatavar":"seat_ref01_data","suffix":"_dt0"},"match":{"id":"seat01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-seat_ref01"}}]}]}, 'Seat')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const seat_ref01_ent = client.Seat()
    let seat_ref01_data = setup.data.new.seat['seat_ref01']

    seat_ref01_data = (await seat_ref01_ent.create(seat_ref01_data)).data()
    assert(null != seat_ref01_data.id)


    // UPDATE
    const seat_ref01_data_up0: any = {}
    seat_ref01_data_up0.id = seat_ref01_data.id

    const seat_ref01_markdef_up0 = { name: 'access', value: 'Mark01-seat_ref01_' + setup.now }
    ;(seat_ref01_data_up0 as any)[seat_ref01_markdef_up0.name] = seat_ref01_markdef_up0.value

    const seat_ref01_resdata_up0 = (await seat_ref01_ent.update(seat_ref01_data_up0)).data()
    assert(seat_ref01_resdata_up0.id === seat_ref01_data_up0.id)

    assert((seat_ref01_resdata_up0 as any)[seat_ref01_markdef_up0.name] === seat_ref01_markdef_up0.value)


    // LOAD
    const seat_ref01_match_dt0: any = {}
    seat_ref01_match_dt0.id = seat_ref01_data.id
    const seat_ref01_data_dt0 = (await seat_ref01_ent.load(seat_ref01_match_dt0)).data()
    assert(seat_ref01_data_dt0.id === seat_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/seat/SeatTestData.json')

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
    ['seat01','seat02','seat03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_SEAT_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_SEAT_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_SEAT_ENTID']
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
  
