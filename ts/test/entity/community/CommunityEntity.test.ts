

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


describe('CommunityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Community()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'community.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"access","req":false,"short":"Access type of the space","type":"`$ANY`","index$":0},{"active":true,"name":"collectionId","req":false,"short":"Unique identifier of the collection under which the space is displayed","type":"`$STRING`","index$":1},{"active":true,"format":"float","name":"created","req":false,"short":"Date the post was made, in UNIX timestamp format","type":"`$NUMBER`","index$":2},{"active":true,"name":"description","req":false,"short":"Description of the space","type":"`$STRING`","index$":3},{"active":true,"name":"display_order","req":false,"short":"Display order of the collection as it appears in the community sidebar","type":"`$INTEGER`","index$":4},{"active":true,"name":"hidden_from_community","req":false,"short":"Indication about whether the space is visible in the community","type":"`$BOOLEAN`","index$":5},{"active":true,"name":"id","req":false,"short":"Unique identifier of the post","type":"`$STRING`","index$":6},{"active":true,"name":"invitation","req":false,"short":"Indication whether the user was sent an invitation.","type":"`$BOOLEAN`","index$":7},{"active":true,"name":"is_invitation_required","req":false,"short":"Indication about whether users are sent an invitation to join or are directly added to space","type":"`$BOOLEAN`","index$":8},{"active":true,"name":"is_members_allowed_to_view_members","req":false,"short":"Indication about whether users can view other users in space","type":"`$BOOLEAN`","index$":9},{"active":true,"name":"items","req":false,"short":"List of post content items outside of text content","type":"`$ARRAY`","index$":10},{"active":true,"name":"likes","req":false,"short":"List of users who have liked the post","type":"`$ARRAY`","index$":11},{"active":true,"name":"mentions","req":false,"short":"User mentions of the post","type":"`$ARRAY`","index$":12},{"active":true,"format":"float","name":"modified","req":false,"short":"Date the collection was modified for the last time, in UNIX timestamp format","type":"`$NUMBER`","index$":13},{"active":true,"name":"name","req":false,"short":"Name of the collection","type":"`$STRING`","index$":14},{"active":true,"name":"owner","req":false,"short":"Information about the space owner","type":"`$OBJECT`","index$":15},{"active":true,"name":"posted_in","req":false,"short":"Information about where the post was made","type":"`$OBJECT`","index$":16},{"active":true,"name":"space_ids","req":false,"short":"List of spaces in this collection","type":"`$ARRAY`","index$":17},{"active":true,"name":"status","req":false,"short":"The status of the user - `joined`, the user has joined the space - `invited`, the user has been sent an invitation to gain access to the space - `deleted`, the user has been removed from the space - `left`, the user has left the space","type":"`$ANY`","index$":18},{"active":true,"name":"text","req":false,"short":"Text content of the post","type":"`$STRING`","index$":19},{"active":true,"name":"title","req":false,"short":"Name of the space","type":"`$STRING`","index$":20},{"active":true,"name":"uids","req":false,"short":"Unique identifiers or emails of the users to be invited/added","type":"`$ARRAY`","index$":21},{"active":true,"name":"upvotes","req":false,"short":"List of users who have upvoted the post","type":"`$ARRAY`","index$":22},{"active":true,"name":"usages","req":false,"short":"List of space usages in the platform","type":"`$ARRAY`","index$":23},{"active":true,"name":"user","req":false,"short":"Information about the post author","type":"`$OBJECT`","index$":24},{"active":true,"name":"username","req":false,"short":"The username of the user","type":"`$STRING`","index$":25},{"active":true,"name":"users","req":false,"short":"List of users that were added or invited to space","type":"`$OBJECT`","index$":26}],"id":{"field":"id","name":"id"},"name":"community","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"space_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /v2/community/spaces/{id}/users","json":"{\"operationId\":\"post-v2-community-spaces-id-users-userId\",\"parameters\":[{\"description\":\"Unique identifier of the community space\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"Example 1\":{\"value\":{\"uids\":[\"what@learnworlds.com\",\"65cb880ba18654f0740d5bd4\"]}}},\"schema\":{\"properties\":{\"uids\":{\"description\":\"Unique identifiers or emails of the users to be invited/added\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example 1\":{\"value\":{\"data\":{\"invitation\":false,\"user\":[{\"id\":\"65cb880ba18654f0740d5bd4\",\"status\":\"normal\",\"username\":\"user\"}]}}}},\"schema\":{\"properties\":{\"data\":{\"properties\":{\"invitation\":{\"description\":\"Indication whether the user was sent an invitation.\",\"type\":\"boolean\"},\"users\":{\"description\":\"List of users that were added or invited to space\",\"properties\":{\"id\":{\"description\":\"Unique identifier of the user\",\"type\":\"string\"},\"status\":{\"description\":\"Status of the user\\n- `joined`, the user has joined the space\\n- `invited`, the user has been sent an invitation to gain access to the space\",\"enum\":[\"joined\",\"invited\"]},\"username\":{\"description\":\"Username of the user\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/community/spaces/{id}/users","rename":{"param":{"id":"space_id"}},"segments":[{"lit":"v2"},{"lit":"community"},{"lit":"spaces"},{"var":"space_id"},{"lit":"users"}],"select":{"exist":["authorization","lw_client","space_id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"course_id","orig":"course_id","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"query","name":"items_per_page","orig":"items_per_page","reqd":false,"type":"`$INTEGER`"},{"active":true,"kind":"query","name":"mention","orig":"mention","reqd":false,"type":"`$STRING`"},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`"},{"active":true,"kind":"query","name":"space_id","orig":"space_id","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"query","name":"user_id","orig":"user_id","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /v2/community/posts","json":"{\"operationId\":\"get-v2-community-posts\",\"parameters\":[{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the post author. Can be a unique identifier or email\",\"in\":\"query\",\"name\":\"user_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the unique identifier of the space in which the post was made\",\"in\":\"query\",\"name\":\"space_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the unique identifier of the course discussion the post was made\",\"in\":\"query\",\"name\":\"course_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the unique identifier of the user a post mentions\",\"in\":\"query\",\"name\":\"mentions\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Filter by the items per page number\",\"in\":\"query\",\"name\":\"items_per_page\",\"schema\":{\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"id\":\"65ce2ecc9066630b4e0913f4\",\"items\":[{\"data\":{\"options\":[{\"id\":\"ch_1\",\"results\":{\"per\":\"100.00\",\"val\":1},\"text\":\"Blue\"},{\"id\":\"ch_2\",\"results\":{\"per\":\"0.00\",\"val\":0},\"text\":\"Green\"}],\"text\":null,\"totalVotes\":1,\"type\":\"poll\"},\"type\":\"poll\"},{\"location\":\"social/2-the-sea-1198167.jpg\",\"size\":602033,\"title\":\"the-sea-1198167.jpg\",\"type\":\"image\"},{\"avStatus\":\"safe\",\"location\":\"socialAttachments/3-sample.pdf\",\"size\":501341,\"title\":\"sample.pdf\",\"type\":\"file\"},{\"location\":\"socialAttachments/video (240p).mp4\",\"size\":248505,\"title\":\"video (240p).mp4\",\"type\":\"video\"}],\"likes\":[{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"}],\"mentions\":[{\"id\":\"625419b5e593d74a874fb573\",\"username\":\"Andreas\"}],\"posted_in\":{\"id\":\"61bb42d5e07e202700000001\",\"type\":\"space\"},\"text\":\"<p>What color is the sea? <a href=\\\"/profile?id=625419b5e593d74a874fb573\\\" class=\\\"social-mention\\\">@Andreas</a></p>\",\"upvotes\":[{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"}],\"user\":{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"}}],\"properties\":{\"created\":{\"description\":\"Date the post was made, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the post\",\"type\":\"string\"},\"items\":{\"description\":\"List of post content items outside of text content\",\"items\":{\"properties\":{\"data\":{\"description\":\"Content item information\",\"type\":\"object\"},\"type\":{\"description\":\"Type of content item of the post\",\"enum\":[\"poll\",\"image\",\"file\",\"video\"]}},\"type\":\"object\"},\"type\":\"array\"},\"likes\":{\"description\":\"List of users who have liked the post\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"mentions\":{\"description\":\"User mentions of the post\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"posted_in\":{\"description\":\"Information about where the post was made\",\"properties\":{\"id\":{\"description\":\"Unique identifier of where the post was made\",\"type\":\"string\"},\"type\":{\"description\":\"Type of where the post was made, either course or space\",\"enum\":[\"space\",\"course\"]}},\"type\":\"object\"},\"text\":{\"description\":\"Text content of the post\",\"type\":\"string\"},\"upvotes\":{\"description\":\"List of users who have upvoted the post\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"user\":{\"description\":\"Information about the post author\",\"properties\":{\"id\":{\"description\":\"Unique identifier of the post author\",\"type\":\"string\"},\"username\":{\"description\":\"Username of the post author\",\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"CommunityPost\",\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/community/posts","segments":[{"lit":"v2"},{"lit":"community"},{"lit":"posts"}],"select":{"$action":"post","exist":["authorization","course_id","items_per_page","lw_client","mention","page","space_id","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"access","orig":"access","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"query","name":"collection_id","orig":"collection_id","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"query","name":"items_per_page","orig":"items_per_page","reqd":false,"type":"`$INTEGER`"},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`"},{"active":true,"kind":"query","name":"usage","orig":"usage","reqd":false,"type":"`$ARRAY`"}]},"contract":{"id":"GET /v2/community/spaces","json":"{\"operationId\":\"get-v2-community-spaces\",\"parameters\":[{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by space access. This can be public, private or standalone.\",\"in\":\"query\",\"name\":\"access\",\"schema\":{\"enum\":[\"public\",\"private\",\"standalone\"],\"type\":\"string\"}},{\"description\":\"Filter by the unique identifier of the collection the spaces are displayed\",\"in\":\"query\",\"name\":\"collectionId\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the course usage of the space. Should be an array of courseTitleIds\",\"in\":\"query\",\"name\":\"usages\",\"schema\":{\"type\":\"array\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Filter by the items per page number\",\"in\":\"query\",\"name\":\"items_per_page\",\"schema\":{\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{},\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"access\":\"public\",\"collectionId\":\"61bb42d5e07e202700000002\",\"description\":\"\",\"hidden_from_community\":false,\"id\":\"6515547042ec743dcc078988\",\"is_invitation_required\":true,\"is_members_allowed_to_view_members\":true,\"owner\":{\"id\":\"5be0561d43c90b171a8b4567\",\"username\":\"admin\"},\"title\":\"Space\",\"usages\":[{\"componentId\":\"component_1701798094804_337\",\"courseId\":\"a-course\",\"type\":\"ebook\",\"unitId\":\"656f0d27f9f5416317015124\"}]}],\"properties\":{\"access\":{\"description\":\"Access type of the space\\n\",\"enum\":[\"public\",\"private\",\"standalone\"]},\"collectionId\":{\"description\":\"Unique identifier of the collection under which the space is displayed\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the space\",\"type\":\"string\"},\"hidden_from_community\":{\"description\":\"Indication about whether the space is visible in the community\",\"type\":\"boolean\"},\"id\":{\"description\":\"Unique identifier of the space\",\"type\":\"string\"},\"is_invitation_required\":{\"description\":\"Indication about whether users are sent an invitation to join or are directly added to space\\n\",\"type\":\"boolean\"},\"is_members_allowed_to_view_members\":{\"description\":\"Indication about whether users can view other users in space\",\"type\":\"boolean\"},\"owner\":{\"description\":\"Information about the space owner\",\"properties\":{\"id\":{\"description\":\"The id of the creator of the space\\n\",\"type\":\"string\"},\"username\":{\"description\":\"The username of the creator of the space\\n\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Name of the space\",\"type\":\"string\"},\"usages\":{\"description\":\"List of space usages in the platform\",\"items\":{\"properties\":{\"courseId\":{\"description\":\"Unique identifier of the course the space is used\",\"type\":\"string\"},\"type\":{\"description\":\"Type of usage location\",\"enum\":[\"ebook\"]},\"unitId\":{\"description\":\"Unique identifier of the unit the space is used\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"title\":\"CommunitySpace\",\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/community/spaces","segments":[{"lit":"v2"},{"lit":"community"},{"lit":"spaces"}],"select":{"$action":"space","exist":["access","authorization","collection_id","items_per_page","lw_client","page","usage"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"space_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"items_per_page","orig":"items_per_page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /v2/community/spaces/{id}/users","json":"{\"operationId\":\"get-v2-community-spaces-id-users\",\"parameters\":[{\"description\":\"Unique identifier of the community space\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Filter by the items per page number\",\"in\":\"query\",\"name\":\"items_per_page\",\"schema\":{\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example 1\":{\"value\":{\"data\":[{\"id\":\"61a8eb584bb22f3d4870c1e3\",\"status\":\"joined\",\"username\":\"teacher\"}],\"meta\":{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"id\":{\"description\":\"The unique identifier of the user\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the user\\n- `joined`, the user has joined the space\\n- `invited`, the user has been sent an invitation to gain access to the space\\n- `deleted`, the user has been removed from the space\\n- `left`, the user has left the space\",\"enum\":[\"joined\",\"invited\",\"deleted\",\"left\"]},\"username\":{\"description\":\"The username of the user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/community/spaces/{id}/users","rename":{"param":{"id":"space_id"}},"segments":[{"lit":"v2"},{"lit":"community"},{"lit":"spaces"},{"var":"space_id"},{"lit":"users"}],"select":{"exist":["authorization","items_per_page","lw_client","page","space_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"GET /v2/community/collections","json":"{\"operationId\":\"get-v2-community-collections\",\"parameters\":[{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{},\"schema\":{\"properties\":{\"data\":{\"items\":{\"examples\":[{\"created\":1708002143.052642,\"description\":\"The collection\",\"display_order\":1,\"id\":\"65ce0b5fa5bdd651810d9a74\",\"modified\":1708002178.387277,\"name\":\"Collection 1\",\"space_ids\":[\"65ce0b7e5a68506c2e069ca4\",\"65a001089df6912dcc0f3464\"]}],\"properties\":{\"created\":{\"description\":\"Date the collection was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"description\":{\"description\":\"Description of the collection\",\"type\":\"string\"},\"display_order\":{\"description\":\"Display order of the collection as it\\nappears in the community sidebar\",\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier of the collection\",\"type\":\"string\"},\"modified\":{\"description\":\"Date the collection was modified for the last time, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"name\":{\"description\":\"Name of the collection\",\"type\":\"string\"},\"space_ids\":{\"description\":\"List of spaces in this collection\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"title\":\"CommunityCollection\",\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/community/collections","segments":[{"lit":"v2"},{"lit":"community"},{"lit":"collections"}],"select":{"$action":"collection","exist":["authorization","lw_client"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":3}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"space_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"uid","orig":"uid","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /v2/community/spaces/{id}/users/{uid}","json":"{\"operationId\":\"delete-v2-community-spaces-id-users-userId\",\"parameters\":[{\"description\":\"Unique identifier of the community space\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Uniquer identifier of the user\",\"in\":\"path\",\"name\":\"uid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v2/community/spaces/{id}/users/{uid}","rename":{"param":{"id":"space_id"}},"segments":[{"lit":"v2"},{"lit":"community"},{"lit":"spaces"},{"var":"space_id"},{"lit":"users"},{"var":"uid"}],"select":{"exist":["authorization","lw_client","space_id","uid"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /v2/community/spaces/{id}","json":"{\"operationId\":\"delete-v2-community-spaces-id\",\"parameters\":[{\"description\":\"Unique identifier of the community space\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"content\":{},\"description\":\"No content\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v2/community/spaces/{id}","segments":[{"lit":"v2"},{"lit":"community"},{"lit":"spaces"},{"var":"id"}],"select":{"exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["space"],["space","user"]]},"key$":"community","name__orig":"community","Name":"Community","name_":"community","name-":"community","NAME":"COMMUNITY","index$":8}, {"active":true,"entity":"community","key$":"BasicCommunityFlow","kind":"basic","name":"BasicCommunityFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"community_ref01"},"match":{"space_id":"space01"},"op":"create","spec":[],"valid":[]},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"community_ref01"}}]},{"active":true,"data":{},"input":{"ref":"community_ref01","suffix":"_rm0"},"match":{"id":"community01"},"op":"remove","spec":[],"valid":[]},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"community_ref01"}}]}]}, 'Community')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const community_ref01_ent = client.Community()
    let community_ref01_data = setup.data.new.community['community_ref01']
    community_ref01_data['space_id'] = setup.idmap['space01']

    community_ref01_data = (await community_ref01_ent.create(community_ref01_data)).data()
    assert(null != community_ref01_data.id)


    // LIST
    const community_ref01_match: any = {}

    const community_ref01_list = (await community_ref01_ent.list(community_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(community_ref01_list, { id: community_ref01_data.id })))


    // REMOVE
    const community_ref01_match_rm0: any = { id: community_ref01_data.id }
    await community_ref01_ent.remove(community_ref01_match_rm0)
  

    // LIST
    const community_ref01_match_rt0: any = {}

    const community_ref01_list_rt0 = (await community_ref01_ent.list(community_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(community_ref01_list_rt0, { id: community_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/community/CommunityTestData.json')

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
    ['community01','community02','community03','space01','space02','space03','space01','space02','space03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_COMMUNITY_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_COMMUNITY_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_COMMUNITY_ENTID']
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
  
