

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


describe('SubscriptionPlanEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.SubscriptionPlan()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription_plan.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"access","req":false,"short":"Access type of the subscription","type":"`$STRING`","index$":0},{"active":true,"name":"afterPurchase","req":false,"short":"After purchase navigation settings for this subscription plan","type":"`$OBJECT`","index$":1},{"active":true,"format":"float","name":"created","req":false,"short":"Date the subscription plan was created, in UNIX timestamp format","type":"`$NUMBER`","index$":2},{"active":true,"name":"description","req":false,"short":"Description of the subscription","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":3},{"active":true,"name":"id","req":false,"short":"Unique identifier of the subscription plan","type":"`$STRING`","index$":4},{"active":true,"name":"image","req":false,"short":"Subscription plan image (full URL)","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":5},{"active":true,"name":"interval","req":false,"short":"Billing interval value","type":"`$INTEGER`","index$":6},{"active":true,"name":"interval_type","req":false,"short":"Billing interval type","type":"`$STRING`","index$":7},{"active":true,"format":"float","name":"modified","req":false,"short":"Date the subscription plan was modified for the last time, in UNIX timestamp format","type":"`$NUMBER`","index$":8},{"active":true,"format":"float","name":"price","req":false,"short":"Price of the subscription plan","type":"`$NUMBER`","index$":9},{"active":true,"name":"products","req":false,"short":"Products in the subsription","type":"`$OBJECT`","index$":10},{"active":true,"name":"stripePlanId","req":false,"short":"Stripe's plan Id","type":"`$STRING`","index$":11},{"active":true,"name":"title","req":false,"short":"Title of the subscription plan","type":"`$STRING`","index$":12},{"active":true,"name":"trial_period_days","req":false,"short":"Number of days the trial subscription plan lasts","type":"`$INTEGER`","index$":13}],"id":{"field":"id","name":"id"},"name":"subscription_plan","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /v2/subscription-plans","json":"{\"operationId\":\"get-subscription-plans\",\"parameters\":[{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"access\":\"private\",\"afterPurchase\":{\"settings\":{\"page\":\"about\",\"url\":null},\"type\":\"afterlogin\"},\"created\":1602244399.894355,\"description\":\"This is my api keys plan description\",\"id\":\"this-is-my-api-keys-plan\",\"image\":\"https://lwfilesdev.mycourse.app/dev-public/ce4c32bf2a60638146e18cecf8f9749d.jpeg\",\"interval\":1,\"interval_type\":\"month\",\"modified\":1620636583.900941,\"price\":100,\"products\":{\"courses\":[\"10-secrets-of-sleep-walking\"]},\"stripePlanId\":\"this-is-my-api-keys-plan\",\"title\":\"This is my api keys plan\",\"trial_period_days\":0}],\"meta\":{\"itemsPerPage\":50,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"description\":\"\",\"examples\":[{\"access\":\"private\",\"afterPurchase\":{\"settings\":{\"page\":\"about\",\"url\":null},\"type\":\"afterlogin\"},\"created\":1602244399.894355,\"description\":\"This is my api keys plan description\",\"id\":\"this-is-my-api-keys-plan\",\"image\":\"https://lwfilesdev.mycourse.app/dev-public/ce4c32bf2a60638146e18cecf8f9749d.jpeg\",\"interval\":1,\"interval_type\":\"month\",\"modified\":1620636583.900941,\"price\":100,\"products\":{\"courses\":[\"10-secrets-of-sleep-walking\"]},\"stripePlanId\":\"this-is-my-api-keys-plan\",\"title\":\"This is my api keys plan\",\"trial_period_days\":0}],\"properties\":{\"access\":{\"description\":\"Access type of the subscription\",\"enum\":[\"private\",\"public\",\"soon\",\"view-locked\"],\"type\":\"string\"},\"afterPurchase\":{\"description\":\"After purchase navigation settings for this subscription plan\",\"properties\":{\"settings\":{\"description\":\"After purchase navigation URL for this subscription: leading to a school page or a given URL\",\"properties\":{\"page\":{\"description\":\"Navigation to a specific school page\",\"type\":[\"string\",\"null\"]},\"url\":{\"description\":\"Navigation to a specific URL\",\"type\":[\"string\",\"null\"]}},\"type\":\"object\"},\"type\":{\"description\":\"Type of the after purchase navigation\",\"type\":\"string\"}},\"type\":\"object\"},\"created\":{\"description\":\"Date the subscription plan was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"description\":{\"description\":\"Description of the subscription\",\"type\":[\"string\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the subscription plan\",\"type\":\"string\"},\"image\":{\"description\":\"Subscription plan image (full URL)\",\"type\":[\"string\",\"null\"]},\"interval\":{\"description\":\"Billing interval value\",\"type\":\"integer\"},\"interval_type\":{\"description\":\"Billing interval type\",\"enum\":[\"day\",\"week\",\"month\"],\"type\":\"string\"},\"modified\":{\"description\":\"Date the subscription plan was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"price\":{\"description\":\"Price of the subscription plan\",\"format\":\"float\",\"type\":\"number\"},\"products\":{\"description\":\"Products in the subsription\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"stripePlanId\":{\"description\":\"Stripe's plan Id\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the subscription plan\",\"type\":\"string\"},\"trial_period_days\":{\"description\":\"Number of days the trial subscription plan lasts\",\"type\":\"integer\"}},\"title\":\"\",\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/subscription-plans","segments":[{"lit":"v2"},{"lit":"subscription-plans"}],"select":{"exist":["authorization","lw_client","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v2/subscription-plans/{id}","json":"{\"operationId\":\"get-subscription-plans-id\",\"parameters\":[{\"description\":\"Subscription plan Id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"access\":\"private\",\"afterPurchase\":{\"settings\":{\"page\":\"about\",\"url\":null},\"type\":\"afterlogin\"},\"created\":1602244399.894355,\"description\":\"This is my api keys plan description\",\"id\":\"this-is-my-api-keys-plan\",\"image\":\"https://lwfilesdev.mycourse.app/dev-public/ce4c32bf2a60638146e18cecf8f9749d.jpeg\",\"interval\":1,\"interval_type\":\"month\",\"modified\":1620636583.900941,\"price\":100,\"products\":{\"courses\":[\"10-secrets-of-sleep-walking\"]},\"stripePlanId\":\"this-is-my-api-keys-plan\",\"title\":\"This is my api keys plan\",\"trial_period_days\":0}}},\"schema\":{\"description\":\"\",\"examples\":[{\"access\":\"private\",\"afterPurchase\":{\"settings\":{\"page\":\"about\",\"url\":null},\"type\":\"afterlogin\"},\"created\":1602244399.894355,\"description\":\"This is my api keys plan description\",\"id\":\"this-is-my-api-keys-plan\",\"image\":\"https://lwfilesdev.mycourse.app/dev-public/ce4c32bf2a60638146e18cecf8f9749d.jpeg\",\"interval\":1,\"interval_type\":\"month\",\"modified\":1620636583.900941,\"price\":100,\"products\":{\"courses\":[\"10-secrets-of-sleep-walking\"]},\"stripePlanId\":\"this-is-my-api-keys-plan\",\"title\":\"This is my api keys plan\",\"trial_period_days\":0}],\"properties\":{\"access\":{\"description\":\"Access type of the subscription\",\"enum\":[\"private\",\"public\",\"soon\",\"view-locked\"],\"type\":\"string\"},\"afterPurchase\":{\"description\":\"After purchase navigation settings for this subscription plan\",\"properties\":{\"settings\":{\"description\":\"After purchase navigation URL for this subscription: leading to a school page or a given URL\",\"properties\":{\"page\":{\"description\":\"Navigation to a specific school page\",\"type\":[\"string\",\"null\"]},\"url\":{\"description\":\"Navigation to a specific URL\",\"type\":[\"string\",\"null\"]}},\"type\":\"object\"},\"type\":{\"description\":\"Type of the after purchase navigation\",\"type\":\"string\"}},\"type\":\"object\"},\"created\":{\"description\":\"Date the subscription plan was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"description\":{\"description\":\"Description of the subscription\",\"type\":[\"string\",\"null\"]},\"id\":{\"description\":\"Unique identifier of the subscription plan\",\"type\":\"string\"},\"image\":{\"description\":\"Subscription plan image (full URL)\",\"type\":[\"string\",\"null\"]},\"interval\":{\"description\":\"Billing interval value\",\"type\":\"integer\"},\"interval_type\":{\"description\":\"Billing interval type\",\"enum\":[\"day\",\"week\",\"month\"],\"type\":\"string\"},\"modified\":{\"description\":\"Date the subscription plan was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"price\":{\"description\":\"Price of the subscription plan\",\"format\":\"float\",\"type\":\"number\"},\"products\":{\"description\":\"Products in the subsription\",\"properties\":{\"courses\":{\"description\":\"Unique identifier of each course\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"stripePlanId\":{\"description\":\"Stripe's plan Id\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the subscription plan\",\"type\":\"string\"},\"trial_period_days\":{\"description\":\"Number of days the trial subscription plan lasts\",\"type\":\"integer\"}},\"title\":\"\",\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/subscription-plans/{id}","segments":[{"lit":"v2"},{"lit":"subscription-plans"},{"var":"id"}],"select":{"exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"subscription_plan","name__orig":"subscription_plan","Name":"SubscriptionPlan","name_":"subscription_plan","name-":"subscription-plan","NAME":"SUBSCRIPTION_PLAN","index$":32}, {"active":true,"entity":"subscription_plan","key$":"BasicSubscriptionPlanFlow","kind":"basic","name":"BasicSubscriptionPlanFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"subscription_plan_ref01"}}]},{"active":true,"data":{},"input":{"ref":"subscription_plan_ref01","srcdatavar":"subscription_plan_ref01_data","suffix":"_dt0"},"match":{"id":"subscription_plan01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-subscription_plan_ref01"}}]}]}, 'SubscriptionPlan')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let subscription_plan_ref01_data = Object.values(setup.data.existing.subscription_plan)[0] as any

    // LIST
    const subscription_plan_ref01_ent = client.SubscriptionPlan()
    const subscription_plan_ref01_match: any = {}

    const subscription_plan_ref01_list = (await subscription_plan_ref01_ent.list(subscription_plan_ref01_match)).map((e: any) => e.data())


    // LOAD
    const subscription_plan_ref01_match_dt0: any = {}
    subscription_plan_ref01_match_dt0.id = subscription_plan_ref01_data.id
    const subscription_plan_ref01_data_dt0 = (await subscription_plan_ref01_ent.load(subscription_plan_ref01_match_dt0)).data()
    assert(subscription_plan_ref01_data_dt0.id === subscription_plan_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription_plan/SubscriptionPlanTestData.json')

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
    ['subscription_plan01','subscription_plan02','subscription_plan03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_SUBSCRIPTION_PLAN_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_SUBSCRIPTION_PLAN_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_SUBSCRIPTION_PLAN_ENTID']
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
  
