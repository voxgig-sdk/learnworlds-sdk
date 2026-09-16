

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


describe('CouponEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Coupon()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'coupon.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"bulk","req":false,"short":"Indication about whether there's a bulk set of codes created for this coupon.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"code","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"Coupon code","type":"`$STRING`","index$":1},{"active":true,"format":"date","name":"expires","req":false,"short":"Coupon expiration date, in YYYY-MM-DD format","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":2},{"active":true,"name":"prefix","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"Coupon prefix","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":3},{"active":true,"name":"quantity","op":{"create":{"req":true,"type":"`$NUMBER`"}},"req":false,"short":"Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)","type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":4},{"active":true,"name":"times_used","req":false,"short":"Coupon number of times used.","type":"`$INTEGER`","index$":5}],"name":"coupon","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"example":"application/json","kind":"header","name":"content_type","orig":"content_type","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"promotion_id","orig":"pid","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /v2/promotions/{pid}/coupons","json":"{\"operationId\":\"post-promotions-pid-coupons\",\"parameters\":[{\"description\":\"Promotion Id\",\"in\":\"path\",\"name\":\"pid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"application/json\",\"in\":\"header\",\"name\":\"Content-Type\",\"required\":true,\"schema\":{\"example\":\"application/json\",\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"quantity\":4}}},\"schema\":{\"description\":\"\",\"properties\":{\"code\":{\"description\":\"Coupon code\",\"type\":\"string\"},\"expires\":{\"description\":\"Coupon expiration date in yyyy-mm-dd format\",\"format\":\"date\",\"type\":\"string\"},\"quantity\":{\"description\":\"Coupon quantity greater than 0\",\"type\":\"integer\"}},\"required\":[\"code\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"bulk\":false,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":null,\"quantity\":4,\"times_used\":0}}},\"schema\":{\"description\":\"\",\"examples\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"properties\":{\"bulk\":{\"description\":\"Indication about whether there's a bulk set of codes created for this coupon.\",\"type\":\"boolean\"},\"code\":{\"description\":\"Coupon code\",\"type\":\"string\"},\"expires\":{\"description\":\"Coupon expiration date, in YYYY-MM-DD format\",\"example\":\"2021-06-17\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"prefix\":{\"description\":\"Coupon prefix\",\"type\":[\"string\",\"null\"]},\"quantity\":{\"description\":\"Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)\",\"type\":[\"number\",\"null\"]},\"times_used\":{\"description\":\"Coupon number of times used.\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/promotions/{pid}/coupons","rename":{"param":{"pid":"promotion_id"}},"segments":[{"lit":"v2"},{"lit":"promotions"},{"var":"promotion_id"},{"lit":"coupons"}],"select":{"exist":["authorization","content_type","lw_client","promotion_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"promotion_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /v2/promotions/{id}/coupons-bulk","json":"{\"operationId\":\"post-promotions-:id-coupons-bulk\",\"parameters\":[{\"description\":\"Promotion id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"expires\":\"2023-09-08\",\"prefix\":\"bulk_prono\",\"quantity\":3}}},\"schema\":{\"description\":\"\",\"properties\":{\"expires\":{\"description\":\"Coupon expiration date, in YYYY-MM-DD format\",\"type\":[\"string\",\"null\"]},\"prefix\":{\"description\":\"Coupon prefix\",\"type\":\"string\"},\"quantity\":{\"description\":\"Coupon quantity greater than 0\",\"type\":\"number\"}},\"required\":[\"prefix\",\"quantity\"],\"type\":\"object\"}}},\"description\":\"\"},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":[{\"bulk\":true,\"code\":\"bulk_prono-DOALLL\",\"expires\":\"2023-09-08\",\"prefix\":\"bulk_prono\",\"quantity\":1,\"times_used\":0},{\"bulk\":true,\"code\":\"bulk_prono-AYQOFJ\",\"expires\":\"2023-09-08\",\"prefix\":\"bulk_prono\",\"quantity\":1,\"times_used\":0},{\"bulk\":true,\"code\":\"bulk_prono-YSBKSU\",\"expires\":\"2023-09-08\",\"prefix\":\"bulk_prono\",\"quantity\":1,\"times_used\":0}]}},\"schema\":{\"items\":{\"description\":\"\",\"examples\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"properties\":{\"bulk\":{\"description\":\"Indication about whether there's a bulk set of codes created for this coupon.\",\"type\":\"boolean\"},\"code\":{\"description\":\"Coupon code\",\"type\":\"string\"},\"expires\":{\"description\":\"Coupon expiration date, in YYYY-MM-DD format\",\"example\":\"2021-06-17\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"prefix\":{\"description\":\"Coupon prefix\",\"type\":[\"string\",\"null\"]},\"quantity\":{\"description\":\"Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)\",\"type\":[\"number\",\"null\"]},\"times_used\":{\"description\":\"Coupon number of times used.\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/promotions/{id}/coupons-bulk","rename":{"param":{"id":"promotion_id"}},"segments":[{"lit":"v2"},{"lit":"promotions"},{"var":"promotion_id"},{"lit":"coupons-bulk"}],"select":{"exist":["authorization","lw_client","promotion_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["promotion"]]},"key$":"coupon","name__orig":"coupon","Name":"Coupon","name_":"coupon","name-":"coupon","NAME":"COUPON","index$":12}, {"active":true,"entity":"coupon","key$":"BasicCouponFlow","kind":"basic","name":"BasicCouponFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"coupon_ref01"},"match":{"promotion_id":"promotion01"},"op":"create","spec":[],"valid":[]}]}, 'Coupon')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const coupon_ref01_ent = client.Coupon()
    let coupon_ref01_data = setup.data.new.coupon['coupon_ref01']
    coupon_ref01_data['promotion_id'] = setup.idmap['promotion01']

    coupon_ref01_data = (await coupon_ref01_ent.create(coupon_ref01_data)).data()
    assert(null != coupon_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/coupon/CouponTestData.json')

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
    ['coupon01','coupon02','coupon03','promotion01','promotion02','promotion03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_COUPON_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_COUPON_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_COUPON_ENTID']
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
  
