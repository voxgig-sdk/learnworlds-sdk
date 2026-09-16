

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


describe('BundleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Bundle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bundle.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"access","req":false,"short":"Access type of the bundle","type":"`$STRING`","index$":0},{"active":true,"name":"afterPurchase","req":false,"short":"After purchase navigation settings for this bundle","type":"`$OBJECT`","index$":1},{"active":true,"format":"float","name":"created","req":false,"short":"Date the bundle was created, in UNIX timestamp format","type":"`$NUMBER`","index$":2},{"active":true,"name":"description","req":false,"short":"Bundle description","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":3},{"active":true,"name":"id","req":false,"short":"Unique identifier of the bundle","type":"`$STRING`","index$":4},{"active":true,"name":"image","req":false,"short":"Bundle image (full URL)","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":5},{"active":true,"format":"float","name":"modified","req":false,"short":"Date the bundle was modified for the last time, in UNIX timestamp format","type":"`$NUMBER`","index$":6},{"active":true,"name":"paymentPlans","req":false,"short":"Payment plans associated with the bundle.","type":"`$ARRAY`","index$":7},{"active":true,"format":"float","name":"price","req":false,"short":"Price of the bundle","type":"`$NUMBER`","index$":8},{"active":true,"name":"products","req":false,"short":"Products in the bundle","type":"`$OBJECT`","index$":9},{"active":true,"name":"title","req":false,"short":"Title of the bundle","type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"bundle","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /v2/bundles","json":"{\"operationId\":\"get-bundles\",\"parameters\":[{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"access\":\"private\",\"afterPurchase\":{\"settings\":{\"page\":null,\"url\":null},\"type\":\"afterlogin\"},\"created\":1623061666.590018,\"description\":null,\"id\":\"a-bundle\",\"image\":null,\"modified\":1623061666.590018,\"paymentPlans\":[{\"amount\":37,\"description\":null,\"firstAmount\":37,\"id\":\"a-bundle-60ba022a8e162\",\"isCancelable\":false,\"name\":\"2 payments of $37/month\",\"nameOverride\":false,\"order\":1,\"paymentPlanNameOverride\":null,\"paymentsCount\":2,\"status\":\"public\",\"subscriptionIntervalType\":\"1-month\",\"subscriptionTrialDate\":null,\"subscriptionTrialDays\":null,\"subscriptionTrialType\":\"default\",\"type\":\"without_upfront\",\"validFrom\":null,\"validTo\":null}],\"price\":0,\"products\":{\"courses\":[\"learn-to-drive\"]},\"title\":\"a bundle\"}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"access\":\"private\",\"afterPurchase\":{\"settings\":{\"page\":null,\"url\":null},\"type\":\"afterlogin\"},\"created\":1623061666.590018,\"description\":null,\"id\":\"a-bundle\",\"image\":null,\"modified\":1623061666.590018,\"paymentPlans\":[{\"amount\":37,\"description\":null,\"firstAmount\":37,\"id\":\"a-bundle-60ba022a8e162\",\"isCancelable\":false,\"name\":\"2 payments of $37/month\",\"nameOverride\":false,\"order\":1,\"paymentPlanNameOverride\":null,\"paymentsCount\":2,\"status\":\"public\",\"subscriptionIntervalType\":\"1-month\",\"subscriptionTrialDate\":null,\"subscriptionTrialDays\":null,\"subscriptionTrialType\":\"default\",\"type\":\"without_upfront\",\"validFrom\":null,\"validTo\":null}],\"price\":0,\"products\":{\"courses\":[\"learn-to-drive\"]},\"title\":\"a bundle\"}],\"properties\":{\"access\":{\"description\":\"Access type of the bundle\",\"enum\":[\"draft\",\"public\"],\"type\":\"string\"},\"afterPurchase\":{\"description\":\"After purchase navigation settings for this bundle\",\"properties\":{\"settings\":{\"description\":\"After purchase navigation URL for this bundle: leading to a school page or a given URL\",\"properties\":{\"page\":{\"description\":\"Navigation to a specific school page\",\"type\":[\"null\",\"string\"]},\"url\":{\"description\":\"Navigation to a specific URL\",\"type\":[\"null\",\"string\"]}},\"type\":\"object\"},\"type\":{\"default\":\"afterlogin\",\"description\":\"Type of the after purchase navigation\",\"example\":\"thankyou\",\"type\":\"string\"}},\"type\":\"object\"},\"created\":{\"description\":\"Date the bundle was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"description\":{\"description\":\"Bundle description\",\"type\":[\"string\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the bundle\",\"type\":\"string\"},\"image\":{\"description\":\"Bundle image (full URL)\",\"type\":[\"null\",\"string\"]},\"modified\":{\"description\":\"Date the bundle was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"paymentPlans\":{\"description\":\"Payment plans associated with the bundle. Customers can pay in two or more installments (and an optional upfront payment).\",\"items\":{\"properties\":{\"amount\":{\"type\":\"number\"},\"description\":{\"type\":[\"string\",\"null\"]},\"firstAmount\":{\"type\":\"number\"},\"id\":{\"type\":\"string\"},\"isCancelable\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"nameOverride\":{\"type\":\"boolean\"},\"order\":{\"type\":\"integer\"},\"paymentPlanNameOverride\":{\"type\":[\"string\",\"null\"]},\"paymentsCount\":{\"type\":\"integer\"},\"status\":{\"enum\":[\"private\",\"public\",\"hidden\",\"archived\",\"deleted\"]},\"subscriptionIntervalType\":{\"enum\":[\"7-day\",\"14-day\",\"15-day\",\"42-day\",\"1-month\",\"2-month\",\"3-month\",\"6-month\"]},\"subscriptionTrialDate\":{\"type\":[\"number\",\"null\"]},\"subscriptionTrialDays\":{\"type\":[\"number\",\"null\"]},\"subscriptionTrialType\":{\"enum\":[\"default\",\"days\",\"date\"]},\"type\":{\"enum\":[\"with_upfront\",\"without_upfront\"]},\"validFrom\":{\"type\":[\"number\",\"null\"]},\"validTo\":{\"type\":[\"number\",\"null\"]}},\"title\":\"PaymentPlan\",\"type\":\"object\"},\"type\":\"array\"},\"price\":{\"description\":\"Price of the bundle\",\"format\":\"float\",\"type\":\"number\"},\"products\":{\"description\":\"Products in the bundle\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course\",\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"title\":{\"description\":\"Title of the bundle\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/bundles","segments":[{"lit":"v2"},{"lit":"bundles"}],"select":{"exist":["authorization","lw_client","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v2/bundles/{id}","json":"{\"operationId\":\"get-bundles-id\",\"parameters\":[{\"description\":\"Unique identifier of the bundle\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"access\":\"private\",\"afterPurchase\":{\"settings\":{\"page\":null,\"url\":null},\"type\":\"afterlogin\"},\"created\":1623061666.590018,\"description\":null,\"id\":\"a-bundle\",\"image\":null,\"modified\":1623061666.590018,\"paymentPlans\":[{\"amount\":37,\"description\":null,\"firstAmount\":37,\"id\":\"a-bundle-60ba022a8e162\",\"isCancelable\":false,\"name\":\"2 payments of $37/month\",\"nameOverride\":false,\"order\":1,\"paymentPlanNameOverride\":null,\"paymentsCount\":2,\"status\":\"public\",\"subscriptionIntervalType\":\"1-month\",\"subscriptionTrialDate\":null,\"subscriptionTrialDays\":null,\"subscriptionTrialType\":\"default\",\"type\":\"without_upfront\",\"validFrom\":null,\"validTo\":null}],\"price\":0,\"products\":{\"courses\":[\"learn-to-drive\"]},\"title\":\"a bundle\"}}},\"schema\":{\"examples\":[{\"access\":\"private\",\"afterPurchase\":{\"settings\":{\"page\":null,\"url\":null},\"type\":\"afterlogin\"},\"created\":1623061666.590018,\"description\":null,\"id\":\"a-bundle\",\"image\":null,\"modified\":1623061666.590018,\"paymentPlans\":[{\"amount\":37,\"description\":null,\"firstAmount\":37,\"id\":\"a-bundle-60ba022a8e162\",\"isCancelable\":false,\"name\":\"2 payments of $37/month\",\"nameOverride\":false,\"order\":1,\"paymentPlanNameOverride\":null,\"paymentsCount\":2,\"status\":\"public\",\"subscriptionIntervalType\":\"1-month\",\"subscriptionTrialDate\":null,\"subscriptionTrialDays\":null,\"subscriptionTrialType\":\"default\",\"type\":\"without_upfront\",\"validFrom\":null,\"validTo\":null}],\"price\":0,\"products\":{\"courses\":[\"learn-to-drive\"]},\"title\":\"a bundle\"}],\"properties\":{\"access\":{\"description\":\"Access type of the bundle\",\"enum\":[\"draft\",\"public\"],\"type\":\"string\"},\"afterPurchase\":{\"description\":\"After purchase navigation settings for this bundle\",\"properties\":{\"settings\":{\"description\":\"After purchase navigation URL for this bundle: leading to a school page or a given URL\",\"properties\":{\"page\":{\"description\":\"Navigation to a specific school page\",\"type\":[\"null\",\"string\"]},\"url\":{\"description\":\"Navigation to a specific URL\",\"type\":[\"null\",\"string\"]}},\"type\":\"object\"},\"type\":{\"default\":\"afterlogin\",\"description\":\"Type of the after purchase navigation\",\"example\":\"thankyou\",\"type\":\"string\"}},\"type\":\"object\"},\"created\":{\"description\":\"Date the bundle was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"description\":{\"description\":\"Bundle description\",\"type\":[\"string\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the bundle\",\"type\":\"string\"},\"image\":{\"description\":\"Bundle image (full URL)\",\"type\":[\"null\",\"string\"]},\"modified\":{\"description\":\"Date the bundle was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"paymentPlans\":{\"description\":\"Payment plans associated with the bundle. Customers can pay in two or more installments (and an optional upfront payment).\",\"items\":{\"properties\":{\"amount\":{\"type\":\"number\"},\"description\":{\"type\":[\"string\",\"null\"]},\"firstAmount\":{\"type\":\"number\"},\"id\":{\"type\":\"string\"},\"isCancelable\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"nameOverride\":{\"type\":\"boolean\"},\"order\":{\"type\":\"integer\"},\"paymentPlanNameOverride\":{\"type\":[\"string\",\"null\"]},\"paymentsCount\":{\"type\":\"integer\"},\"status\":{\"enum\":[\"private\",\"public\",\"hidden\",\"archived\",\"deleted\"]},\"subscriptionIntervalType\":{\"enum\":[\"7-day\",\"14-day\",\"15-day\",\"42-day\",\"1-month\",\"2-month\",\"3-month\",\"6-month\"]},\"subscriptionTrialDate\":{\"type\":[\"number\",\"null\"]},\"subscriptionTrialDays\":{\"type\":[\"number\",\"null\"]},\"subscriptionTrialType\":{\"enum\":[\"default\",\"days\",\"date\"]},\"type\":{\"enum\":[\"with_upfront\",\"without_upfront\"]},\"validFrom\":{\"type\":[\"number\",\"null\"]},\"validTo\":{\"type\":[\"number\",\"null\"]}},\"title\":\"PaymentPlan\",\"type\":\"object\"},\"type\":\"array\"},\"price\":{\"description\":\"Price of the bundle\",\"format\":\"float\",\"type\":\"number\"},\"products\":{\"description\":\"Products in the bundle\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course\",\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"title\":{\"description\":\"Title of the bundle\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/bundles/{id}","segments":[{"lit":"v2"},{"lit":"bundles"},{"var":"id"}],"select":{"exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"bundle","name__orig":"bundle","Name":"Bundle","name_":"bundle","name-":"bundle","NAME":"BUNDLE","index$":3}, {"active":true,"entity":"bundle","key$":"BasicBundleFlow","kind":"basic","name":"BasicBundleFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"bundle_ref01"}}]},{"active":true,"data":{},"input":{"ref":"bundle_ref01","srcdatavar":"bundle_ref01_data","suffix":"_dt0"},"match":{"id":"bundle01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bundle_ref01"}}]}]}, 'Bundle')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bundle_ref01_data = Object.values(setup.data.existing.bundle)[0] as any

    // LIST
    const bundle_ref01_ent = client.Bundle()
    const bundle_ref01_match: any = {}

    const bundle_ref01_list = (await bundle_ref01_ent.list(bundle_ref01_match)).map((e: any) => e.data())


    // LOAD
    const bundle_ref01_match_dt0: any = {}
    bundle_ref01_match_dt0.id = bundle_ref01_data.id
    const bundle_ref01_data_dt0 = (await bundle_ref01_ent.load(bundle_ref01_match_dt0)).data()
    assert(bundle_ref01_data_dt0.id === bundle_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bundle/BundleTestData.json')

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
    ['bundle01','bundle02','bundle03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_BUNDLE_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_BUNDLE_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_BUNDLE_ENTID']
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
  
