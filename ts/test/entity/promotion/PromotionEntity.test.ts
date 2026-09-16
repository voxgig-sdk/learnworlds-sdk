

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


describe('PromotionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Promotion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'promotion.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"applies_to_all","req":false,"short":"All courses and/or bundles that the promotion coupon will be applied to.","type":"`$ARRAY`","index$":0},{"active":true,"name":"bulk","req":false,"short":"Indication about whether there's a bulk set of codes created for this coupon.","type":"`$BOOLEAN`","index$":1},{"active":true,"name":"code","req":false,"short":"Coupon code","type":"`$STRING`","index$":2},{"active":true,"name":"coupons","req":false,"short":"Promotion coupons","type":"`$ARRAY`","index$":3},{"active":true,"format":"float","name":"created","req":false,"short":"Date the promotion was created, in UNIX timestamp format","type":"`$NUMBER`","index$":4},{"active":true,"format":"date","name":"expires","req":false,"short":"Coupon expiration date, in YYYY-MM-DD format","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":5},{"active":true,"name":"id","req":false,"short":"Unique identifier of the promotion","type":"`$STRING`","index$":6},{"active":true,"format":"float","name":"modified","req":false,"short":"Date the promotion was modified for the last time, in UNIX timestamp format","type":"`$NUMBER`","index$":7},{"active":true,"name":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"Name of the promotion","type":"`$STRING`","index$":8},{"active":true,"name":"prefix","req":false,"short":"Coupon prefix","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":9},{"active":true,"name":"products","req":false,"short":"Specific products that the promotion coupon will be applied to","type":"`$ARRAY`","index$":10},{"active":true,"name":"quantity","req":false,"short":"Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)","type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":11},{"active":true,"name":"times_used","req":false,"short":"Coupon number of times used.","type":"`$INTEGER`","index$":12},{"active":true,"name":"type","req":false,"short":"Type of discount","type":"`$STRING`","index$":13},{"active":true,"format":"float","name":"value","req":false,"short":"Percentage or fixed amount of discount","type":"`$NUMBER`","index$":14}],"id":{"field":"id","name":"id"},"name":"promotion","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /v2/promotions","json":"{\"operationId\":\"post-promotions\",\"parameters\":[{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"applies_to_all\":[\"bundles\"],\"name\":\"my promo\",\"products\":[{\"id\":\"my-first-course\",\"type\":\"course\"},{\"id\":\"my-second-course\",\"type\":\"course\"}],\"type\":\"percentage\",\"value\":20.5}},\"Example [applies_to_all: none]\":{\"value\":{\"applies_to_all\":[\"none\"],\"name\":\"my promo\",\"products\":[{\"id\":\"my-first-course\",\"type\":\"course\"},{\"id\":\"my-first-bundle\",\"type\":\"bundle\"}],\"type\":\"percentage\",\"value\":20.5}}},\"schema\":{\"description\":\"\",\"properties\":{\"applies_to_all\":{\"description\":\"All courses and/or bundles that the promotion coupon will be applied to. None indicates that the coupon will not be applied to any course/bundle\",\"items\":{\"enum\":[\"bundles\",\"courses\",\"courses_bundles\",\"none\"],\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"Promotion name\",\"type\":\"string\"},\"products\":{\"description\":\"Specific products that the promotion coupon will be applied to\",\"items\":{\"properties\":{\"id\":{\"description\":\"Product Id\",\"type\":\"string\"},\"type\":{\"description\":\"Product type\",\"enum\":[\"course\",\"bundle\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"default\":\"percentage\",\"description\":\"Discount type\",\"enum\":[\"percentage\",\"fixed\"],\"type\":\"string\"},\"value\":{\"default\":0,\"description\":\"Percentage or fixed amount of discount.\",\"format\":\"float\",\"type\":\"number\"}},\"required\":[\"name\"],\"type\":\"object\"}}},\"description\":\"\"},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"applies_to_all\":[\"bundles\"],\"coupons\":[],\"created\":1632913376.270253,\"id\":\"615447e090c3ce7a00092772\",\"modified\":1632913376.270253,\"name\":\"my promo\",\"products\":[{\"id\":\"my-first-course\",\"type\":\"course\"},{\"id\":\"my-second-course\",\"type\":\"course\"}],\"type\":\"percentage\",\"value\":20.5}}},\"schema\":{\"description\":\"\",\"properties\":{\"applies_to_all\":{\"description\":\"All courses and/or all bundles that promotion coupon will be applied to. None indicates that the coupon will not be applied to any courses/bundles\",\"items\":{\"enum\":[\"bundles\",\"courses\",\"courses_bundles\",\"none\"],\"type\":\"string\"},\"type\":\"array\"},\"coupons\":{\"description\":\"Promotion coupons. The array is empty for newly created promotion.\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"created\":{\"description\":\"Date the promotion was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Promotion Id\",\"type\":\"string\"},\"modified\":{\"description\":\"Date the promotion was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"name\":{\"description\":\"Promotion name\",\"type\":\"string\"},\"products\":{\"description\":\"Specific products that the promotion coupon will be applied to\",\"items\":{\"properties\":{\"id\":{\"description\":\"Product Id\",\"type\":\"string\"},\"type\":{\"description\":\"Product type\",\"enum\":[\"course\",\"bundle\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"Discount type\",\"enum\":[\"percentage\",\"fixed\"],\"type\":\"string\"},\"value\":{\"description\":\"Percentage or fixed amount of discount.\",\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"}}},\"description\":\"Created\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/promotions","segments":[{"lit":"v2"},{"lit":"promotions"}],"select":{"exist":["authorization","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"pid","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"GET /v2/promotions/{pid}/coupons","json":"{\"operationId\":\"get-promotion-coupons\",\"parameters\":[{\"description\":\"Promotion Id\",\"in\":\"path\",\"name\":\"pid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2023-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12},{\"bulk\":true,\"code\":\"coup-ZFPVOE\",\"expires\":\"2023-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":0}]}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"description\":\"\",\"examples\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"properties\":{\"bulk\":{\"description\":\"Indication about whether there's a bulk set of codes created for this coupon.\",\"type\":\"boolean\"},\"code\":{\"description\":\"Coupon code\",\"type\":\"string\"},\"expires\":{\"description\":\"Coupon expiration date, in YYYY-MM-DD format\",\"example\":\"2021-06-17\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"prefix\":{\"description\":\"Coupon prefix\",\"type\":[\"string\",\"null\"]},\"quantity\":{\"description\":\"Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)\",\"type\":[\"number\",\"null\"]},\"times_used\":{\"description\":\"Coupon number of times used.\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/promotions/{pid}/coupons","rename":{"param":{"pid":"id"}},"segments":[{"lit":"v2"},{"lit":"promotions"},{"var":"id"},{"lit":"coupons"}],"select":{"$action":"coupon","exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /v2/promotions","json":"{\"operationId\":\"get-promotions\",\"parameters\":[{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"applies_to_all\":[\"bundles\"],\"coupons\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"created\":1522913229.399585,\"id\":\"615447e090c3ce7a00092772\",\"modified\":1522913229.399585,\"name\":\"api promo\",\"products\":[{\"id\":\"my-course\",\"type\":\"course\"}],\"type\":\"percentage\",\"value\":20}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"description\":\"\",\"examples\":[{\"applies_to_all\":[\"bundles\"],\"coupons\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"created\":1522913229.399585,\"id\":\"615447e090c3ce7a00092772\",\"modified\":1522913229.399585,\"name\":\"api promo\",\"products\":[{\"id\":\"my-course\",\"type\":\"course\"}],\"type\":\"percentage\",\"value\":20}],\"properties\":{\"applies_to_all\":{\"description\":\"All courses and/or bundles that the promotion coupon will be applied to. None indicates that the coupon will not be applied to any course/bundle\",\"items\":{\"enum\":[\"bundles\",\"courses\",\"courses_bundles\",\"none\"],\"type\":\"string\"},\"type\":\"array\"},\"coupons\":{\"description\":\"Promotion coupons\",\"items\":{\"description\":\"\",\"examples\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"properties\":{\"bulk\":{\"description\":\"Indication about whether there's a bulk set of codes created for this coupon.\",\"type\":\"boolean\"},\"code\":{\"description\":\"Coupon code\",\"type\":\"string\"},\"expires\":{\"description\":\"Coupon expiration date, in YYYY-MM-DD format\",\"example\":\"2021-06-17\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"prefix\":{\"description\":\"Coupon prefix\",\"type\":[\"string\",\"null\"]},\"quantity\":{\"description\":\"Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)\",\"type\":[\"number\",\"null\"]},\"times_used\":{\"description\":\"Coupon number of times used.\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":false},\"created\":{\"description\":\"Date the promotion was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the promotion\",\"type\":\"string\"},\"modified\":{\"description\":\"Date the promotion was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"name\":{\"description\":\"Name of the promotion\",\"type\":\"string\"},\"products\":{\"description\":\"Specific products that the promotion coupon will be applied to\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier of the product\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the product\",\"enum\":[\"course\",\"bundle\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"Type of discount\",\"enum\":[\"percentage\",\"fixed\"],\"type\":\"string\"},\"value\":{\"description\":\"Percentage or fixed amount of discount\",\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/promotions","segments":[{"lit":"v2"},{"lit":"promotions"}],"select":{"exist":["authorization","lw_client","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v2/promotions/{id}","json":"{\"operationId\":\"get-promotions-id\",\"parameters\":[{\"description\":\"Promotion Id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"applies_to_all\":[\"bundles\"],\"coupons\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"created\":1522913229.399585,\"id\":\"615447e090c3ce7a00092772\",\"modified\":1522913229.399585,\"name\":\"api promo\",\"products\":[{\"id\":\"my-course\",\"type\":\"course\"}],\"type\":\"percentage\",\"value\":20}}},\"schema\":{\"description\":\"\",\"examples\":[{\"applies_to_all\":[\"bundles\"],\"coupons\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"created\":1522913229.399585,\"id\":\"615447e090c3ce7a00092772\",\"modified\":1522913229.399585,\"name\":\"api promo\",\"products\":[{\"id\":\"my-course\",\"type\":\"course\"}],\"type\":\"percentage\",\"value\":20}],\"properties\":{\"applies_to_all\":{\"description\":\"All courses and/or bundles that the promotion coupon will be applied to. None indicates that the coupon will not be applied to any course/bundle\",\"items\":{\"enum\":[\"bundles\",\"courses\",\"courses_bundles\",\"none\"],\"type\":\"string\"},\"type\":\"array\"},\"coupons\":{\"description\":\"Promotion coupons\",\"items\":{\"description\":\"\",\"examples\":[{\"bulk\":true,\"code\":\"coup-ZFPVOG\",\"expires\":\"2020-10-28\",\"prefix\":\"coup\",\"quantity\":1,\"times_used\":12}],\"properties\":{\"bulk\":{\"description\":\"Indication about whether there's a bulk set of codes created for this coupon.\",\"type\":\"boolean\"},\"code\":{\"description\":\"Coupon code\",\"type\":\"string\"},\"expires\":{\"description\":\"Coupon expiration date, in YYYY-MM-DD format\",\"example\":\"2021-06-17\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"prefix\":{\"description\":\"Coupon prefix\",\"type\":[\"string\",\"null\"]},\"quantity\":{\"description\":\"Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)\",\"type\":[\"number\",\"null\"]},\"times_used\":{\"description\":\"Coupon number of times used.\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":false},\"created\":{\"description\":\"Date the promotion was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the promotion\",\"type\":\"string\"},\"modified\":{\"description\":\"Date the promotion was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"name\":{\"description\":\"Name of the promotion\",\"type\":\"string\"},\"products\":{\"description\":\"Specific products that the promotion coupon will be applied to\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier of the product\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the product\",\"enum\":[\"course\",\"bundle\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"Type of discount\",\"enum\":[\"percentage\",\"fixed\"],\"type\":\"string\"},\"value\":{\"description\":\"Percentage or fixed amount of discount\",\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/promotions/{id}","segments":[{"lit":"v2"},{"lit":"promotions"},{"var":"id"}],"select":{"exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"promotion","name__orig":"promotion","Name":"Promotion","name_":"promotion","name-":"promotion","NAME":"PROMOTION","index$":26}, {"active":true,"entity":"promotion","key$":"BasicPromotionFlow","kind":"basic","name":"BasicPromotionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"promotion_ref01"},"match":{},"op":"create","spec":[],"valid":[]},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"promotion_ref01"}}]},{"active":true,"data":{},"input":{"ref":"promotion_ref01","srcdatavar":"promotion_ref01_data","suffix":"_dt0"},"match":{"id":"promotion01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-promotion_ref01"}}]}]}, 'Promotion')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const promotion_ref01_ent = client.Promotion()
    let promotion_ref01_data = setup.data.new.promotion['promotion_ref01']

    promotion_ref01_data = (await promotion_ref01_ent.create(promotion_ref01_data)).data()
    assert(null != promotion_ref01_data.id)


    // LIST
    const promotion_ref01_match: any = {}

    const promotion_ref01_list = (await promotion_ref01_ent.list(promotion_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(promotion_ref01_list, { id: promotion_ref01_data.id })))


    // LOAD
    const promotion_ref01_match_dt0: any = {}
    promotion_ref01_match_dt0.id = promotion_ref01_data.id
    const promotion_ref01_data_dt0 = (await promotion_ref01_ent.load(promotion_ref01_match_dt0)).data()
    assert(promotion_ref01_data_dt0.id === promotion_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/promotion/PromotionTestData.json')

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
    ['promotion01','promotion02','promotion03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_PROMOTION_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_PROMOTION_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_PROMOTION_ENTID']
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
  
