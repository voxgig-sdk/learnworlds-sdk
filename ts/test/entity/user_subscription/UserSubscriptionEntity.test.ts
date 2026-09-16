

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


describe('UserSubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.UserSubscription()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_subscription.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"float","name":"created","req":false,"short":"Date the subscription was created, in UNIX timestamp format","type":["`$ONE`",["`$NULL`","`$NUMBER`"]],"index$":0},{"active":true,"name":"email","req":false,"short":"Email of the user","type":"`$STRING`","index$":1},{"active":true,"format":"float","name":"expires_at","req":false,"short":"Date the subscription expires, in UNIX timestamp format","type":["`$ONE`",["`$NULL`","`$NUMBER`"]],"index$":2},{"active":true,"name":"plan_id","req":false,"short":"Unique identifier of the subscription plan","type":"`$STRING`","index$":3},{"active":true,"name":"provider","req":false,"short":"Provider of the subscription","type":"`$STRING`","index$":4},{"active":true,"name":"provider_meta","req":false,"short":"Metadata of the subscription provider.","type":["`$ONE`",["`$OBJECT`","`$NULL`"]],"index$":5},{"active":true,"name":"status","req":false,"short":"Status of the subscription","type":"`$STRING`","index$":6},{"active":true,"name":"user_id","req":false,"short":"Unique identifier of the user","type":"`$STRING`","index$":7}],"name":"user_subscription","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"user_id","orig":"user_id","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /v2/user-subscriptions","json":"{\"operationId\":\"get-user-subscriptions\",\"parameters\":[{\"description\":\"Filter by user id or email (url encoded string)\",\"in\":\"query\",\"name\":\"user_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by subscription status\",\"in\":\"query\",\"name\":\"status\",\"schema\":{\"enum\":[\"active\",\"inactive\",\"trial\"],\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"created\":1592402093,\"email\":\"joe@doe.com\",\"expires_at\":null,\"plan_id\":\"new-free-trial\",\"provider\":\"stripe\",\"provider_meta\":{\"current_period_end\":1593266093,\"current_period_start\":1592402093,\"customer_id\":\"cus_HTziICD9326N47\",\"id\":\"sub_HTziMjgYwcM29J\",\"plan\":\"new-free-trial\",\"trial_end\":1593266093,\"trial_start\":1592402093},\"status\":\"trial\",\"user_id\":\"5eea204cd7bde13ee03059e6\"},{\"created\":1634801485,\"email\":\"joe2@doe.com\",\"expires_at\":1634805895,\"plan_id\":\"lw-subscription\",\"provider\":\"learnworlds\",\"provider_meta\":null,\"status\":\"active\",\"user_id\":\"615569f2581c8d4c870b5723\"}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":2,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"description\":\"\",\"examples\":[{\"created\":1592402093,\"email\":\"joe@doe.com\",\"expires_at\":null,\"plan_id\":\"new-free-trial\",\"provider\":\"stripe\",\"provider_meta\":{\"current_period_end\":1593266093,\"current_period_start\":1592402093,\"customer_id\":\"cus_HTziICD9326N47\",\"id\":\"sub_HTziMjgYwcM29J\",\"plan\":\"new-free-trial\",\"trial_end\":1593266093,\"trial_start\":1592402093},\"status\":\"trial\",\"user_id\":\"5eea204cd7bde13ee03059e6\"}],\"properties\":{\"created\":{\"description\":\"Date the subscription was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"null\",\"number\"]},\"email\":{\"description\":\"Email of the user\",\"type\":\"string\"},\"expires_at\":{\"description\":\"Date the subscription expires, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"null\",\"number\"]},\"plan_id\":{\"description\":\"Unique identifier of the subscription plan\",\"type\":\"string\"},\"provider\":{\"description\":\"Provider of the subscription\",\"enum\":[\"learnworlds\",\"stripe\"],\"type\":\"string\"},\"provider_meta\":{\"description\":\"Metadata of the subscription provider. In case the provider is learnworlds, the provider_meta is null\",\"properties\":{\"current_period_end\":{\"description\":\"End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.\",\"type\":\"integer\"},\"current_period_start\":{\"description\":\"Start of the current period that the subscription has been invoiced for.\",\"type\":\"integer\"},\"customer_id\":{\"description\":\"Unique identifier of the customer as set by the provider\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the subscription as set by the provider\",\"type\":\"string\"},\"plan\":{\"description\":\"Subscription plan as set by the provider\",\"type\":\"string\"},\"trial_end\":{\"description\":\"If the subscription has a trial period, the datetime that the trial ends.\",\"format\":\"float\",\"type\":[\"null\",\"integer\"]},\"trial_start\":{\"description\":\"If the subscription has a trial period, the datetime that the trial begins.\",\"format\":\"float\",\"type\":[\"null\",\"integer\"]}},\"type\":[\"object\",\"null\"]},\"status\":{\"description\":\"Status of the subscription\",\"enum\":[\"active\",\"inactive\",\"trial\"],\"type\":\"string\"},\"user_id\":{\"description\":\"Unique identifier of the user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/user-subscriptions","segments":[{"lit":"v2"},{"lit":"user-subscriptions"}],"select":{"exist":["authorization","lw_client","page","status","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"user_subscription","name__orig":"user_subscription","Name":"UserSubscription","name_":"user_subscription","name-":"user-subscription","NAME":"USER_SUBSCRIPTION","index$":41}, {"active":true,"entity":"user_subscription","key$":"BasicUserSubscriptionFlow","kind":"basic","name":"BasicUserSubscriptionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"user_subscription_ref01"}}]}]}, 'UserSubscription')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_subscription_ref01_data = Object.values(setup.data.existing.user_subscription)[0] as any

    // LIST
    const user_subscription_ref01_ent = client.UserSubscription()
    const user_subscription_ref01_match: any = {}

    const user_subscription_ref01_list = (await user_subscription_ref01_ent.list(user_subscription_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user_subscription/UserSubscriptionTestData.json')

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
    ['user_subscription01','user_subscription02','user_subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_USER_SUBSCRIPTION_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_USER_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_USER_SUBSCRIPTION_ENTID']
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
  
