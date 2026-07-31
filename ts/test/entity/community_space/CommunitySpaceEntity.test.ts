
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { LearnworldsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('CommunitySpaceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.CommunitySpace()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'community_space.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const community_space_ref01_ent = client.CommunitySpace()
    let community_space_ref01_data = setup.data.new.community_space['community_space_ref01']

    community_space_ref01_data = await community_space_ref01_ent.create(community_space_ref01_data)
    assert(null != community_space_ref01_data.id)


    // UPDATE
    const community_space_ref01_data_up0: any = {}
    community_space_ref01_data_up0.id = community_space_ref01_data.id

    const community_space_ref01_markdef_up0 = { name: 'collection_id', value: 'Mark01-community_space_ref01_' + setup.now }
    ;(community_space_ref01_data_up0 as any)[community_space_ref01_markdef_up0.name] = community_space_ref01_markdef_up0.value

    const community_space_ref01_resdata_up0 = await community_space_ref01_ent.update(community_space_ref01_data_up0)
    assert(community_space_ref01_resdata_up0.id === community_space_ref01_data_up0.id)

    assert((community_space_ref01_resdata_up0 as any)[community_space_ref01_markdef_up0.name] === community_space_ref01_markdef_up0.value)


    // LOAD
    const community_space_ref01_match_dt0: any = {}
    community_space_ref01_match_dt0.id = community_space_ref01_data.id
    const community_space_ref01_data_dt0 = await community_space_ref01_ent.load(community_space_ref01_match_dt0)
    assert(community_space_ref01_data_dt0.id === community_space_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/community_space/CommunitySpaceTestData.json')

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
    ['community_space01','community_space02','community_space03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  if (live) {
    client = new LearnworldsSDK(merge([
      {
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
