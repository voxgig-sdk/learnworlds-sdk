

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


describe('LeadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Lead()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'lead.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"float","name":"created","req":false,"short":"Date the lead was created, in UNIX timestamp format","type":"`$NUMBER`","index$":0},{"active":true,"name":"email","req":false,"short":"Email account of the user","type":"`$STRING`","index$":1},{"active":true,"name":"eu_customer","req":false,"short":"Indication of whether the user is located in Europe; true if she is, or false if she's not located in Europe.","type":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"index$":2},{"active":true,"name":"first_name","req":false,"short":"First Name of the user","type":"`$STRING`","index$":3},{"active":true,"name":"last_name","req":false,"short":"Last name of the user","type":"`$STRING`","index$":4},{"active":true,"name":"page_submitted","req":false,"short":"Page of the academy, in which the lead submitted their email account","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":5},{"active":true,"name":"submissions","req":false,"short":"Array of the all the submissions of this email account in lead capture forms of the academy","type":"`$ARRAY`","index$":6},{"active":true,"name":"subscribed_for_marketing_emails","req":false,"short":"Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not.","type":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"index$":7},{"active":true,"name":"tags","req":false,"short":"Array of the tags of the user","type":"`$ARRAY`","index$":8},{"active":true,"format":"float","name":"user_id","req":false,"short":"The unique identifier of the respective user","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":9},{"active":true,"format":"float","name":"user_registered_at","req":false,"short":"Date the respective lead was also registered as a user, in UNIX timestamp format","type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":10},{"active":true,"name":"utms","req":false,"short":"Values of the UTM fields for this user","type":"`$OBJECT`","index$":11}],"name":"lead","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /v2/leads","json":"{\"operationId\":\"get-leads\",\"parameters\":[{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"created\":1686232079.82586,\"email\":\"doe@example.com\",\"eu_customer\":null,\"first_name\":\"Jane\",\"last_name\":\"Doe\",\"page_submitted\":\"/home\",\"submissions\":[{\"created\":1686232074.35898,\"eu_customer\":null,\"first_name\":\"John\",\"last_name\":\"Doe\",\"page_submitted\":\"/home\",\"subscribed_for_marketing_emails\":false,\"tags\":[\"newsletter\"],\"utms\":{\"fc_country\":null,\"fc_landing\":\"/home\",\"fc_referrer\":null,\"fc_utm_campaign\":null,\"fc_utm_content\":null,\"fc_utm_medium\":null,\"fc_utm_source\":null,\"fc_utm_term\":null,\"lc_country\":null,\"lc_landing\":\"/home\",\"lc_referrer\":null,\"lc_utm_campaign\":null,\"lc_utm_content\":null,\"lc_utm_medium\":null,\"lc_utm_source\":null,\"lc_utm_term\":null}},{\"created\":1686232079.82586,\"eu_customer\":null,\"first_name\":\"Jane\",\"last_name\":\"Doe\",\"page_submitted\":\"/home\",\"subscribed_for_marketing_emails\":false,\"tags\":[\"newsletter\"],\"utms\":{\"fc_country\":null,\"fc_landing\":\"/home\",\"fc_referrer\":null,\"fc_utm_campaign\":null,\"fc_utm_content\":null,\"fc_utm_medium\":null,\"fc_utm_source\":null,\"fc_utm_term\":null,\"lc_country\":null,\"lc_landing\":\"/home\",\"lc_referrer\":null,\"lc_utm_campaign\":null,\"lc_utm_content\":null,\"lc_utm_medium\":null,\"lc_utm_source\":null,\"lc_utm_term\":null}}],\"subscribed_for_marketing_emails\":false,\"tags\":[\"newsletter\"],\"user_id\":\"6481dc2f4c803845450c21d4\",\"user_registered_at\":1686232111.79002,\"utms\":{\"fc_country\":null,\"fc_landing\":\"/home\",\"fc_referrer\":null,\"fc_utm_campaign\":null,\"fc_utm_content\":null,\"fc_utm_medium\":null,\"fc_utm_source\":null,\"fc_utm_term\":null,\"lc_country\":null,\"lc_landing\":\"/home\",\"lc_referrer\":null,\"lc_utm_campaign\":null,\"lc_utm_content\":null,\"lc_utm_medium\":null,\"lc_utm_source\":null,\"lc_utm_term\":null}}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"created\":1686232079.82586,\"email\":\"doe@example.com\",\"eu_customer\":null,\"first_name\":\"Jane\",\"last_name\":\"Doe\",\"page_submitted\":\"/home\",\"submissions\":[{\"created\":1686232074.35898,\"eu_customer\":null,\"first_name\":\"John\",\"last_name\":\"Doe\",\"page_submitted\":\"/home\",\"subscribed_for_marketing_emails\":false,\"tags\":[\"newsletter\"],\"utms\":{\"fc_country\":null,\"fc_landing\":\"/home\",\"fc_referrer\":null,\"fc_utm_campaign\":null,\"fc_utm_content\":null,\"fc_utm_medium\":null,\"fc_utm_source\":null,\"fc_utm_term\":null,\"lc_country\":null,\"lc_landing\":\"/home\",\"lc_referrer\":null,\"lc_utm_campaign\":null,\"lc_utm_content\":null,\"lc_utm_medium\":null,\"lc_utm_source\":null,\"lc_utm_term\":null}},{\"created\":1686232079.82586,\"eu_customer\":null,\"first_name\":\"Jane\",\"last_name\":\"Doe\",\"page_submitted\":\"/home\",\"subscribed_for_marketing_emails\":false,\"tags\":[\"newsletter\"],\"utms\":{\"fc_country\":null,\"fc_landing\":\"/home\",\"fc_referrer\":null,\"fc_utm_campaign\":null,\"fc_utm_content\":null,\"fc_utm_medium\":null,\"fc_utm_source\":null,\"fc_utm_term\":null,\"lc_country\":null,\"lc_landing\":\"/home\",\"lc_referrer\":null,\"lc_utm_campaign\":null,\"lc_utm_content\":null,\"lc_utm_medium\":null,\"lc_utm_source\":null,\"lc_utm_term\":null}}],\"subscribed_for_marketing_emails\":false,\"tags\":[\"newsletter\"],\"user_id\":\"6481dc2f4c803845450c21d4\",\"user_registered_at\":1686232111.79002,\"utms\":{\"fc_country\":null,\"fc_landing\":\"/home\",\"fc_referrer\":null,\"fc_utm_campaign\":null,\"fc_utm_content\":null,\"fc_utm_medium\":null,\"fc_utm_source\":null,\"fc_utm_term\":null,\"lc_country\":null,\"lc_landing\":\"/home\",\"lc_referrer\":null,\"lc_utm_campaign\":null,\"lc_utm_content\":null,\"lc_utm_medium\":null,\"lc_utm_source\":null,\"lc_utm_term\":null}}],\"properties\":{\"created\":{\"description\":\"Date the lead was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"email\":{\"description\":\"Email account of the user\",\"type\":\"string\"},\"eu_customer\":{\"description\":\"Indication of whether the user is located in Europe; true if she is, or false if she's not located in Europe.\",\"type\":[\"boolean\",\"null\"]},\"first_name\":{\"description\":\"First Name of the user\",\"type\":\"string\"},\"last_name\":{\"description\":\"Last name of the user\",\"type\":\"string\"},\"page_submitted \":{\"description\":\"Page of the academy, in which the lead submitted their email account\",\"type\":[\"string\",\"null\"]},\"submissions\":{\"description\":\"Array of the all the submissions of this email account in lead capture forms of the academy\",\"items\":{\"properties\":{\"created\":{\"description\":\"Date the lead was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"eu_customer\":{\"description\":\"Indication of whether the user is located in Europe; true if she is, or false if she's not located in Europe.\",\"type\":\"boolean\"},\"first_name\":{\"description\":\"First Name of the user\",\"type\":\"string\"},\"last_name\":{\"description\":\"Last name of the user\",\"type\":\"string\"},\"page_submitted\":{\"description\":\"Page of the academy, in which the lead submitted their email account\",\"type\":[\"string\",\"null\"]},\"subscribed_for_marketing_emails\":{\"description\":\"Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not.\",\"type\":\"boolean\"},\"tags\":{\"description\":\"Array of the tags of the user\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"utms\":{\"description\":\"Values of the UTM fields for this user\",\"examples\":[],\"properties\":{\"fc_country\":{\"description\":\"First click country\\n\",\"type\":[\"string\",\"null\"]},\"fc_landing\":{\"description\":\"First click landing\\n\",\"type\":[\"string\",\"null\"]},\"fc_referrer\":{\"description\":\"First click referrer\\n\",\"type\":[\"string\",\"null\"]},\"fc_utm_campaign\":{\"description\":\"First click campaign\",\"type\":[\"string\",\"null\"]},\"fc_utm_content\":{\"description\":\"First click content\\n\",\"type\":[\"string\",\"null\"]},\"fc_utm_medium\":{\"description\":\"First click medium\\n\",\"type\":[\"string\",\"null\"]},\"fc_utm_source\":{\"description\":\"First click source\",\"type\":[\"string\",\"null\"]},\"fc_utm_term\":{\"description\":\"First click term\",\"type\":[\"string\",\"null\"]},\"lc_country\":{\"description\":\"Last click country\",\"type\":[\"string\",\"null\"]},\"lc_landing\":{\"description\":\"Last click landing\\n\",\"type\":[\"string\",\"null\"]},\"lc_referrer\":{\"description\":\"Last click referrer\\n\",\"type\":[\"string\",\"null\"]},\"lc_utm_campaign\":{\"description\":\"Last click campaign\",\"type\":[\"string\",\"null\"]},\"lc_utm_content\":{\"description\":\"Last click content\\n\",\"type\":[\"string\",\"null\"]},\"lc_utm_medium\":{\"description\":\"Last click medium\",\"type\":[\"string\",\"null\"]},\"lc_utm_source\":{\"description\":\"Last click source\\n\",\"type\":[\"string\",\"null\"]},\"lc_utm_term\":{\"description\":\"Last click term\",\"type\":[\"string\",\"null\"]}},\"title\":\"utms\",\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"subscribed_for_marketing_emails\":{\"description\":\"Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not.\",\"type\":[\"boolean\",\"null\"]},\"tags\":{\"description\":\"Array of the tags of the user\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"user_id\":{\"description\":\"The unique identifier of the respective user\",\"format\":\"float\",\"type\":[\"string\",\"null\"]},\"user_registered_at\":{\"description\":\"Date the respective lead was also registered as a user, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"number\",\"null\"]},\"utms\":{\"description\":\"Values of the UTM fields for this user\",\"examples\":[],\"properties\":{\"fc_country\":{\"description\":\"First click country\\n\",\"type\":[\"string\",\"null\"]},\"fc_landing\":{\"description\":\"First click landing\\n\",\"type\":[\"string\",\"null\"]},\"fc_referrer\":{\"description\":\"First click referrer\\n\",\"type\":[\"string\",\"null\"]},\"fc_utm_campaign\":{\"description\":\"First click campaign\",\"type\":[\"string\",\"null\"]},\"fc_utm_content\":{\"description\":\"First click content\\n\",\"type\":[\"string\",\"null\"]},\"fc_utm_medium\":{\"description\":\"First click medium\\n\",\"type\":[\"string\",\"null\"]},\"fc_utm_source\":{\"description\":\"First click source\",\"type\":[\"string\",\"null\"]},\"fc_utm_term\":{\"description\":\"First click term\",\"type\":[\"string\",\"null\"]},\"lc_country\":{\"description\":\"Last click country\",\"type\":[\"string\",\"null\"]},\"lc_landing\":{\"description\":\"Last click landing\\n\",\"type\":[\"string\",\"null\"]},\"lc_referrer\":{\"description\":\"Last click referrer\\n\",\"type\":[\"string\",\"null\"]},\"lc_utm_campaign\":{\"description\":\"Last click campaign\",\"type\":[\"string\",\"null\"]},\"lc_utm_content\":{\"description\":\"Last click content\\n\",\"type\":[\"string\",\"null\"]},\"lc_utm_medium\":{\"description\":\"Last click medium\",\"type\":[\"string\",\"null\"]},\"lc_utm_source\":{\"description\":\"Last click source\\n\",\"type\":[\"string\",\"null\"]},\"lc_utm_term\":{\"description\":\"Last click term\",\"type\":[\"string\",\"null\"]}},\"title\":\"utms\",\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/leads","segments":[{"lit":"v2"},{"lit":"leads"}],"select":{"exist":["authorization","lw_client","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"lead","name__orig":"lead","Name":"Lead","name_":"lead","name-":"lead","NAME":"LEAD","index$":22}, {"active":true,"entity":"lead","key$":"BasicLeadFlow","kind":"basic","name":"BasicLeadFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"lead_ref01"}}]}]}, 'Lead')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let lead_ref01_data = Object.values(setup.data.existing.lead)[0] as any

    // LIST
    const lead_ref01_ent = client.Lead()
    const lead_ref01_match: any = {}

    const lead_ref01_list = (await lead_ref01_ent.list(lead_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/lead/LeadTestData.json')

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
    ['lead01','lead02','lead03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_LEAD_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_LEAD_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_LEAD_ENTID']
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
  
