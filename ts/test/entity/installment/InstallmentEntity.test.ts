

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


describe('InstallmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Installment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'installment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"float","name":"amount","req":false,"short":"Amount per installment","type":"`$NUMBER`","index$":0},{"active":true,"name":"current_period_end","req":false,"short":"End of the current period that the installment has been invoiced for, in UNIX timestamp format","type":"`$NUMBER`","index$":1},{"active":true,"name":"current_period_start","req":false,"short":"Start of the current period that the installment has been invoiced for, in UNIX timestamp format","type":"`$NUMBER`","index$":2},{"active":true,"name":"email","req":false,"short":"Email of the user","type":"`$STRING`","index$":3},{"active":true,"format":"float","name":"ends_at","req":false,"short":"Datetime the installment ends, in UNIX timestamp format","type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":4},{"active":true,"format":"float","name":"firstAmount","req":false,"short":"Ιnitial amount of money the customers have to pay up front.","type":"`$NUMBER`","index$":5},{"active":true,"format":"date","name":"firstInstallmentDate","req":false,"short":"Date of the first installment, in UNIX timestamp format","type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":6},{"active":true,"name":"firstInstallmentType","req":false,"short":"Type of the first installment","type":"`$STRING`","index$":7},{"active":true,"name":"firstInstallmentlDays","req":false,"short":"Number of days since the first installment","type":"`$INTEGER`","index$":8},{"active":true,"name":"id","req":false,"short":"Unique identifier of the installment","type":"`$STRING`","index$":9},{"active":true,"name":"installmentIntervalType","req":false,"short":"How much time between each installment","type":"`$STRING`","index$":10},{"active":true,"name":"isCancelable","req":false,"short":"Indication about whether the installment can be canceled; true if it is cancelable, or false if it is not.","type":"`$BOOLEAN`","index$":11},{"active":true,"name":"name","req":false,"short":"Name of the installment","type":"`$STRING`","index$":12},{"active":true,"name":"paymentsCount","req":false,"short":"Number of payments of the installment","type":"`$NUMBER`","index$":13},{"active":true,"name":"paymentsPayed","req":false,"short":"Number of completed payments of the installment","type":"`$NUMBER`","index$":14},{"active":true,"name":"plan_id","req":false,"short":"Unique identifier of the subscription plan","type":"`$STRING`","index$":15},{"active":true,"name":"productId","req":false,"short":"Unique identifier of the product","type":"`$STRING`","index$":16},{"active":true,"name":"productType","req":false,"short":"Type of the product","type":"`$STRING`","index$":17},{"active":true,"name":"status","req":false,"short":"Status of the installment","type":"`$STRING`","index$":18},{"active":true,"name":"type","req":false,"short":"Type of the installment","type":"`$STRING`","index$":19},{"active":true,"name":"user_id","req":false,"short":"Unique identifier of the user","type":"`$STRING`","index$":20}],"id":{"field":"id","name":"id"},"name":"installment","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"product_id","orig":"product_id","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"product_type","orig":"product_type","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"user_id","orig":"user_id","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /v2/installments/active","json":"{\"operationId\":\"get-installments\",\"parameters\":[{\"description\":\"Filter by product Id\",\"in\":\"query\",\"name\":\"product_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by a user id or email (url encoded string)\",\"in\":\"query\",\"name\":\"user_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by product type\",\"in\":\"query\",\"name\":\"product_type\",\"schema\":{\"enum\":[\"course\",\"bundle\"],\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, no results will be returned\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"amount\":282.5,\"current_period_end\":1588680063,\"current_period_start\":1587470463,\"email\":\"jon@doe.com\",\"ends_at\":null,\"firstAmount\":282.5,\"firstInstallmentDate\":null,\"firstInstallmentType\":\"default\",\"firstInstallmentlDays\":0,\"id\":\"sub_H8c0rR6pQO6o1o\",\"installmentIntervalType\":\"14-day\",\"isCancelable\":false,\"name\":\"2 payments of $282.5/2weeks\",\"paymentsCount\":2,\"paymentsPayed\":1,\"plan_id\":\"test-drip-feed-installments-5e9eddce8f21a\",\"productId\":\"test-drip-feed-installments\",\"productType\":\"course\",\"status\":\"active\",\"type\":\"without_upfront\",\"user_id\":\"5a6f111843c90b78238b4568\"}],\"meta\":{\"itemsPerPage\":50,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"description\":\"\",\"examples\":[{\"amount\":282.5,\"current_period_end\":1588680063,\"current_period_start\":1587470463,\"email\":\"jon@doe.com\",\"ends_at\":null,\"firstAmount\":282.5,\"firstInstallmentDate\":null,\"firstInstallmentType\":\"default\",\"firstInstallmentlDays\":0,\"id\":\"sub_H8c0rR6pQO6o1o\",\"installmentIntervalType\":\"14-day\",\"isCancelable\":false,\"name\":\"2 payments of $282.5/2weeks\",\"paymentsCount\":2,\"paymentsPayed\":1,\"plan_id\":\"test-drip-feed-installments-5e9eddce8f21a\",\"productId\":\"test-drip-feed-installments\",\"productType\":\"course\",\"status\":\"active\",\"type\":\"without_upfront\",\"user_id\":\"5a6f111843c90b78238b4568\"}],\"properties\":{\"amount\":{\"description\":\"Amount per installment\",\"format\":\"float\",\"type\":\"number\"},\"current_period_end\":{\"description\":\"End of the current period that the installment has been invoiced for, in UNIX timestamp format\",\"type\":\"number\"},\"current_period_start\":{\"description\":\"Start of the current period that the installment has been invoiced for, in UNIX timestamp format\",\"type\":\"number\"},\"email\":{\"description\":\"Email of the user\",\"type\":\"string\"},\"ends_at\":{\"description\":\"Datetime the installment ends, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"number\",\"null\"]},\"firstAmount\":{\"description\":\"Ιnitial amount of money the customers have to pay up front.\",\"format\":\"float\",\"type\":\"number\"},\"firstInstallmentDate\":{\"description\":\"Date of the first installment, in UNIX timestamp format\",\"format\":\"date\",\"type\":[\"number\",\"null\"]},\"firstInstallmentType\":{\"description\":\"Type of the first installment\",\"enum\":[\"default\",\"days\",\"date\"],\"type\":\"string\"},\"firstInstallmentlDays\":{\"description\":\"Number of days since the first installment\",\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier of the installment\",\"type\":\"string\"},\"installmentIntervalType\":{\"description\":\"How much time between each installment\",\"enum\":[\"1-month\",\"2-month\",\"3-month\",\"6-month\",\"7-day\",\"14-day\",\"15-day\",\"42-day\"],\"type\":\"string\"},\"isCancelable\":{\"description\":\"Indication about whether the installment can be canceled; true if it is cancelable, or false if it is not.\",\"type\":\"boolean\"},\"name\":{\"description\":\"Name of the installment\",\"type\":\"string\"},\"paymentsCount\":{\"description\":\"Number of payments of the installment\",\"type\":\"number\"},\"paymentsPayed\":{\"description\":\"Number of completed payments of the installment\",\"type\":\"number\"},\"plan_id\":{\"description\":\"Unique identifier of the subscription plan\",\"type\":\"string\"},\"productId\":{\"description\":\"Unique identifier of the product\",\"type\":\"string\"},\"productType\":{\"description\":\"Type of the product\",\"enum\":[\"course\",\"bundle\"],\"type\":\"string\"},\"status\":{\"description\":\"Status of the installment\",\"enum\":[\"active\"],\"type\":\"string\"},\"type\":{\"description\":\"Type of the installment\",\"enum\":[\"with_upfront\",\"without_upfront\"],\"type\":\"string\"},\"user_id\":{\"description\":\"Unique identifier of the user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/installments/active","segments":[{"lit":"v2"},{"lit":"installments"},{"lit":"active"}],"select":{"$action":"active","exist":["authorization","lw_client","page","product_id","product_type","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"installment","name__orig":"installment","Name":"Installment","name_":"installment","name-":"installment","NAME":"INSTALLMENT","index$":21}, {"active":true,"entity":"installment","key$":"BasicInstallmentFlow","kind":"basic","name":"BasicInstallmentFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"installment_ref01"}}]}]}, 'Installment')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let installment_ref01_data = Object.values(setup.data.existing.installment)[0] as any

    // LIST
    const installment_ref01_ent = client.Installment()
    const installment_ref01_match: any = {}

    const installment_ref01_list = (await installment_ref01_ent.list(installment_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/installment/InstallmentTestData.json')

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
    ['installment01','installment02','installment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_INSTALLMENT_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_INSTALLMENT_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_INSTALLMENT_ENTID']
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
  
