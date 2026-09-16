

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


describe('EventLogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.EventLog()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'event_log.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"activity","req":false,"short":"Name of the activity","type":"`$STRING`","index$":0},{"active":true,"name":"additional_info","req":false,"short":"Additional info related to the activity.","type":["`$ONE`",["`$OBJECT`","`$NULL`"]],"index$":1},{"active":true,"format":"float","name":"created","req":false,"short":"Date the event log was created, in UNIX timestamp format","type":"`$NUMBER`","index$":2},{"active":true,"name":"description","req":false,"short":"Description of the activity","type":"`$STRING`","index$":3},{"active":true,"name":"type","req":false,"short":"Type of the activity","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":4},{"active":true,"name":"user","req":false,"short":"User details related to event log","type":"`$OBJECT`","index$":5}],"name":"event_log","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"activity","orig":"activity","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"1626088013","kind":"query","name":"created_after","orig":"created_after","reqd":false,"type":"`$NUMBER`","index$":1},{"active":true,"example":"1626076929","kind":"query","name":"created_before","orig":"created_before","reqd":false,"type":"`$NUMBER`","index$":2},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"example":"desc","kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"user_id","orig":"user_id","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /v2/event-logs","json":"{\"operationId\":\"get-event-logs\",\"parameters\":[{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by user id or email (encoded string)\",\"in\":\"query\",\"name\":\"user_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by activity name. If no activity is selected all will be applied.\",\"in\":\"query\",\"name\":\"activity\",\"schema\":{\"enum\":[\"register\",\"login\",\"logout\",\"purchase\",\"manual_enrollment\",\"drip_feed_section_unlocked\",\"subscription_signup\",\"subscription_trial\",\"subscription_trial_expired\",\"subscription_changed\",\"subscription_renewal\",\"subscription_cancelled\",\"subscription_scheduled_cancellation\",\"subscription_reactivated\",\"failed_purchase\",\"new_affiliate\",\"new_affiliate_manual\",\"affiliate_deactivated\",\"affiliate_payout\",\"follow\",\"post\",\"post_comment\",\"post_like\",\"award_certificate\",\"visit_course\",\"complete_course\",\"installment_paid\",\"payment_plan_completed\",\"payment_plan_canceled\",\"payment_failed\",\"sca_related_events\",\"session_scheduled\",\"session_attended\",\"session_manually_attended\",\"group_session_scheduled\",\"group_session_attended\",\"group_session_manually_attended\"],\"type\":\"string\"}},{\"description\":\"Filter by event log creation after the given datetime (expected in UNIX timestamp format)\",\"in\":\"query\",\"name\":\"created_after\",\"schema\":{\"example\":\"1626088013\",\"type\":\"number\"}},{\"description\":\"Filter by event log creation before the given datetime (expected in UNIX timestamp format)\",\"in\":\"query\",\"name\":\"created_before\",\"schema\":{\"example\":\"1626076929\",\"type\":\"number\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Sort by creation timestamp in ascending or descending order. \",\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"default\":\"desc\",\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"activity\":\"login\",\"additional_info\":{\"agent\":{\"browser\":\"Chrome\",\"city\":\"-\",\"country\":\"-\",\"device\":\"WebKit\",\"ip\":\"10.0.2.2\",\"languages\":\"el, en, en-au\",\"location\":{\"lat\":0,\"lng\":0},\"platform\":\"Ubuntu\",\"referrer\":\"http://client.learnworlds.com/?msg=signup\",\"region\":\"-\",\"robot\":null,\"userAgent\":\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/65.0.3325.181 Chrome/65.0.3325.181 Safari/537.36\"}},\"created\":1509958141.27462,\"description\":\"Logged in\",\"type\":\"user\",\"user\":{\"id\":\"5a706c7143c90b6f298b456c\",\"username\":\"testuser\"}}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"activity\":\"login\",\"additional_info\":{\"agent\":{\"browser\":\"Chrome\",\"city\":\"-\",\"country\":\"-\",\"device\":\"WebKit\",\"ip\":\"10.0.2.2\",\"languages\":\"el, en, en-au\",\"location\":{\"lat\":0,\"lng\":0},\"platform\":\"Ubuntu\",\"referrer\":\"http://client.learnworlds.com/?msg=signup\",\"region\":\"-\",\"robot\":null,\"userAgent\":\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/65.0.3325.181 Chrome/65.0.3325.181 Safari/537.36\"}},\"created\":1509958141.27462,\"description\":\"Logged in\",\"type\":\"user\",\"user\":{\"id\":\"5a706c7143c90b6f298b456c\",\"username\":\"testuser\"}}],\"properties\":{\"activity\":{\"description\":\"Name of the activity\",\"enum\":[\"register\",\"login\",\"logout\",\"purchase\",\"manual_enrollment\",\"drip_feed_section_unlocked\",\"subscription_signup\",\"subscription_trial\",\"subscription_trial_expired\",\"subscription_changed\",\"subscription_renewal\",\"subscription_cancelled\",\"subscription_scheduled_cancellation\",\"subscription_reactivated\",\"failed_purchase\",\"new_affiliate\",\"new_affiliate_manual\",\"affiliate_deactivated\",\"affiliate_payout\",\"follow\",\"post\",\"post_comment\",\"post_like\",\"award_certificate\",\"visit_course\",\"complete_course\",\"installment_paid,\",\"payment_plan_completed,\",\"payment_plan_canceled,\",\"payment_failed\",\"sca_related_events\",\"session_scheduled\",\"session_attended\",\"session_manually_attended\",\"group_session_scheduled\",\"group_session_attended\",\"group_session_manually_attended\"],\"type\":\"string\"},\"additional_info\":{\"description\":\"Additional info related to the activity.\",\"type\":[\"object\",\"null\"]},\"created\":{\"description\":\"Date the event log was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"description\":{\"description\":\"Description of the activity\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the activity\",\"enum\":[\"award\",\"purchase\",\"social\",\"user\"],\"type\":[\"string\",\"null\"]},\"user\":{\"description\":\"User details related to event log\",\"properties\":{\"id\":{\"description\":\"Unique identifier of the user\",\"type\":\"string\"},\"username\":{\"description\":\"Username of the user\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/event-logs","segments":[{"lit":"v2"},{"lit":"event-logs"}],"select":{"exist":["activity","authorization","created_after","created_before","lw_client","page","sort","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"event_log","name__orig":"event_log","Name":"EventLog","name_":"event_log","name-":"event-log","NAME":"EVENT_LOG","index$":19}, {"active":true,"entity":"event_log","key$":"BasicEventLogFlow","kind":"basic","name":"BasicEventLogFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"event_log_ref01"}}]}]}, 'EventLog')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let event_log_ref01_data = Object.values(setup.data.existing.event_log)[0] as any

    // LIST
    const event_log_ref01_ent = client.EventLog()
    const event_log_ref01_match: any = {}

    const event_log_ref01_list = (await event_log_ref01_ent.list(event_log_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/event_log/EventLogTestData.json')

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
    ['event_log01','event_log02','event_log03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_EVENT_LOG_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_EVENT_LOG_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_EVENT_LOG_ENTID']
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
  
