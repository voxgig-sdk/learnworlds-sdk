

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


describe('PaymentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LEARNWORLDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LEARNWORLDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Payment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LEARNWORLDS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'payment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"affiliate","req":false,"short":"Related affiliate data","type":"`$OBJECT`","index$":0},{"active":true,"name":"billing_info","req":false,"short":"Billing info of the payment","type":["`$ONE`",["`$NULL`","`$OBJECT`"]],"index$":1},{"active":true,"name":"coupon","req":false,"short":"Coupon code","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":2},{"active":true,"format":"float","name":"created","req":false,"short":"Datetime of the payment was created, in UNIX timestamp format","type":"`$NUMBER`","index$":3},{"active":true,"format":"float","name":"discount","req":false,"short":"Discount of the payment","type":"`$NUMBER`","index$":4},{"active":true,"format":"float","name":"expires_at","req":false,"short":"Date the invoice expires, in UNIX timestamp format","type":"`$NUMBER`","index$":5},{"active":true,"name":"gateway","req":false,"short":"Payment gateway name","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":6},{"active":true,"name":"id","req":false,"short":"Unique identifier of the payment","type":"`$STRING`","index$":7},{"active":true,"name":"instructors","req":false,"short":"Related instructor data","type":"`$ARRAY`","index$":8},{"active":true,"format":"float","name":"instructors_total_percentage","req":false,"short":"Total percentage of the revenue for the instructor","type":["`$ONE`",["`$NULL`","`$NUMBER`"]],"index$":9},{"active":true,"name":"invoice","req":false,"short":"Invoice identifier","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":10},{"active":true,"format":"float","name":"paid_at","req":false,"short":"Payment date, in UNIX timestamp format","type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":11},{"active":true,"name":"payment_plan_current_payment","req":false,"short":"Current payment number of payment plan","type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":12},{"active":true,"name":"payment_plan_total_payments","req":false,"short":"Total payments number of payment plan","type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":13},{"active":true,"name":"period","req":false,"short":"Payment plan period","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":14},{"active":true,"format":"float","name":"price","req":false,"short":"Price of the payment","type":"`$NUMBER`","index$":15},{"active":true,"name":"product","req":false,"short":"Related product data","type":"`$OBJECT`","index$":16},{"active":true,"format":"float","name":"refund_at","req":false,"short":"Refund date, in UNIX timestamp format","type":["`$ONE`",["`$NULL`","`$NUMBER`"]],"index$":17},{"active":true,"format":"float","name":"tax_amount","req":false,"short":"Tax amount of the payment","type":"`$NUMBER`","index$":18},{"active":true,"format":"float","name":"tax_percentage","req":false,"short":"Tax percentage of the payment","type":"`$NUMBER`","index$":19},{"active":true,"name":"transaction_id","req":false,"short":"Transaction id of the payment","type":"`$STRING`","index$":20},{"active":true,"name":"type","req":false,"short":"Type of the payment","type":"`$STRING`","index$":21},{"active":true,"name":"url","req":false,"short":"Url of invoice","type":"`$STRING`","index$":22},{"active":true,"name":"user_id","req":false,"short":"Unique identifier of the user","type":"`$STRING`","index$":23}],"id":{"field":"id","name":"id"},"name":"payment","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"affiliate_id","orig":"affiliate_id","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1626854780,"kind":"query","name":"created_after","orig":"created_after","reqd":false,"type":"`$NUMBER`","index$":1},{"active":true,"example":1626852950,"kind":"query","name":"created_before","orig":"created_before","reqd":false,"type":"`$NUMBER`","index$":2},{"active":true,"kind":"query","name":"items_per_page","orig":"items_per_page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"query","name":"product_id","orig":"product_id","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"product_type","orig":"product_type","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"user_id","orig":"user_id","reqd":false,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /v2/payments","json":"{\"operationId\":\"get-transactions\",\"parameters\":[{\"description\":\"Filter by product type\",\"in\":\"query\",\"name\":\"product_type\",\"schema\":{\"enum\":[\"course\",\"bundle\",\"subscription\"],\"type\":\"string\"}},{\"description\":\"Filter by user id or email (encoded string)\",\"in\":\"query\",\"name\":\"user_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by affiliate id or email (encoded string)\",\"in\":\"query\",\"name\":\"affiliate_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by product id\",\"in\":\"query\",\"name\":\"product_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by the page number. In case page number is higher than the maximum one, the results of last page will be returned\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Filter by the items per page number\",\"in\":\"query\",\"name\":\"items_per_page\",\"schema\":{\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by payment creation before the given datetime (expected in UNIX timestamp format)\",\"in\":\"query\",\"name\":\"created_before\",\"schema\":{\"example\":1626852950,\"type\":\"number\"}},{\"description\":\"Filter by payment creation after the given datetime (expected in UNIX timestamp format)\",\"in\":\"query\",\"name\":\"created_after\",\"schema\":{\"example\":1626854780,\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"data\":[{\"affiliate\":{\"code\":\"BOwVnd\",\"commission_amount\":10,\"commission_percentage\":10,\"id\":\"5a6f1e5a43c90b15208b4571\",\"payment_status\":\"paid\",\"username\":\"jondoe\"},\"billing_info\":{\"bf_address\":\"Baker Street 221B\",\"bf_city\":\"London\",\"bf_country\":\"UK\",\"bf_name\":\"Sherlock Holmes\",\"bf_postalcode\":\"NW1\",\"bf_taxid\":null},\"coupon\":null,\"created\":1626852950,\"discount\":0,\"gateway\":\"stripe\",\"id\":\"60fa9afd0436534ae177b072\",\"instructors\":[{\"id\":\"5a323b4f43c90b78098b456b\",\"percentage\":0.2},{\"id\":\"5acc9b3743c90b1b098b4568\",\"percentage\":0.1}],\"instructors_total_percentage\":0.3,\"invoice\":null,\"paid_at\":1626852950,\"payment_plan_current_payment\":null,\"payment_plan_total_payments\":null,\"period\":null,\"price\":100,\"product\":{\"description\":\"A Great Guide to master your nightmares\",\"discount_price\":0,\"final_price\":32,\"id\":\"the-complete-nightmare-guide\",\"image\":\"https://lwfilesdev.mycourse.app/dev-public/insert/014d143dca751d1e3c661675924a266e.jpeg\",\"name\":\"The complete nightmare Guide\",\"original_price\":32,\"trial_days\":0,\"type\":\"course\"},\"refund_at\":null,\"tax_amount\":0,\"tax_percentage\":0,\"transaction_id\":\"Added by admin\",\"type\":\"one-off\",\"user_id\":\"5ea18eee1d2c27438d61abe2\"}],\"meta\":{\"itemsPerPage\":50,\"page\":1,\"totalItems\":1,\"totalPages\":1}}}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"description\":\"\",\"examples\":[{\"affiliate\":{\"code\":\"BOwVnd\",\"commission_amount\":10,\"commission_percentage\":10,\"id\":\"5a6f1e5a43c90b15208b4571\",\"payment_status\":\"paid\",\"username\":\"jondoe\"},\"billing_info\":{\"bf_address\":\"Baker Street 221B\",\"bf_city\":\"London\",\"bf_country\":\"UK\",\"bf_name\":\"Sherlock Holmes\",\"bf_postalcode\":\"NW1\",\"bf_taxid\":null},\"coupon\":null,\"created\":1626852950,\"discount\":0,\"gateway\":\"stripe\",\"id\":\"60fa9afd0436534ae177b072\",\"instructors\":[{\"id\":\"5a323b4f43c90b78098b456b\",\"percentage\":0.2},{\"id\":\"5acc9b3743c90b1b098b4568\",\"percentage\":0.1}],\"instructors_total_percentage\":0.3,\"invoice\":null,\"paid_at\":1626852950,\"payment_plan_current_payment\":null,\"payment_plan_total_payments\":null,\"period\":null,\"price\":100,\"product\":{\"description\":\"A Great Guide to master your nightmares\",\"discount_price\":0,\"final_price\":32,\"id\":\"the-complete-nightmare-guide\",\"image\":\"https://lwfilesdev.mycourse.app/dev-public/insert/014d143dca751d1e3c661675924a266e.jpeg\",\"name\":\"The complete nightmare Guide\",\"original_price\":32,\"trial_days\":0,\"type\":\"course\"},\"refund_at\":null,\"tax_amount\":0,\"tax_percentage\":0,\"transaction_id\":\"Added by admin\",\"type\":\"one-off\",\"user_id\":\"5ea18eee1d2c27438d61abe2\"}],\"properties\":{\"affiliate\":{\"description\":\"Related affiliate data\",\"properties\":{\"code\":{\"description\":\"Affiliate code\",\"type\":\"string\"},\"commission_amount\":{\"description\":\"Αffiliate commission amount\",\"format\":\"float\",\"type\":\"number\"},\"commission_percentage\":{\"description\":\"Affiliate commission (%)\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the affiliate\",\"type\":\"string\"},\"payment_status\":{\"description\":\"Status of the affiliation pay\",\"enum\":[\"new\",\"approved\",\"mature\",\"paid\",\"rejected\"],\"type\":\"string\"},\"username\":{\"description\":\"Affiliate username\",\"type\":\"string\"}},\"type\":\"object\"},\"billing_info\":{\"description\":\"Billing info of the payment\",\"type\":[\"null\",\"object\"]},\"coupon\":{\"description\":\"Coupon code\",\"type\":[\"null\",\"string\"]},\"created\":{\"description\":\"Datetime of the payment was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"discount\":{\"description\":\"Discount of the payment\",\"format\":\"float\",\"type\":\"number\"},\"gateway\":{\"description\":\"Payment gateway name\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier of the payment\",\"type\":\"string\"},\"instructors\":{\"description\":\"Related instructor data\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifiers of the instructor\",\"type\":\"string\"},\"percentage\":{\"description\":\"Percentage of the revenue for the instructor\",\"format\":\"float\",\"type\":[\"null\",\"number\"]}},\"type\":\"object\"},\"type\":\"array\"},\"instructors_total_percentage\":{\"description\":\"Total percentage of the revenue for the instructor\",\"format\":\"float\",\"type\":[\"null\",\"number\"]},\"invoice\":{\"description\":\"Invoice identifier\",\"type\":[\"null\",\"string\"]},\"paid_at\":{\"description\":\"Payment date, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"number\",\"null\"]},\"payment_plan_current_payment\":{\"description\":\"Current payment number of payment plan\",\"type\":[\"integer\",\"null\"]},\"payment_plan_total_payments\":{\"description\":\"Total payments number of payment plan\",\"type\":[\"integer\",\"null\"]},\"period\":{\"description\":\"Payment plan period\",\"type\":[\"null\",\"string\"]},\"price\":{\"description\":\"Price of the payment\",\"format\":\"float\",\"type\":\"number\"},\"product\":{\"description\":\"Related product data\",\"properties\":{\"description\":{\"description\":\"Description of the product\",\"type\":[\"string\",\"null\"]},\"discount_price\":{\"description\":\"Discount price of the product\",\"format\":\"float\",\"type\":\"number\"},\"final_price\":{\"description\":\"Final price of the product\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the product\",\"type\":\"string\"},\"image\":{\"description\":\"Image url of the product\",\"type\":[\"string\",\"null\"]},\"name\":{\"description\":\"Name of the product\",\"type\":\"string\"},\"original_price\":{\"description\":\"Original price of the product\",\"format\":\"float\",\"type\":\"number\"},\"trial_days\":{\"description\":\"Specified trial days of the product\",\"type\":\"integer\"},\"type\":{\"description\":\"Type of the product\",\"enum\":[\"course\",\"bundle\",\"subscription\"],\"type\":\"string\"}},\"type\":\"object\"},\"refund_at\":{\"description\":\"Refund date, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"null\",\"number\"]},\"tax_amount\":{\"description\":\"Tax amount of the payment\",\"format\":\"float\",\"type\":\"number\"},\"tax_percentage\":{\"description\":\"Tax percentage of the payment\",\"format\":\"float\",\"type\":\"number\"},\"transaction_id\":{\"description\":\"Transaction id of the payment\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the payment\",\"enum\":[\"subscription\",\"installment\",\"one-off\"],\"type\":\"string\"},\"user_id\":{\"description\":\"Unique identifier of the user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"\",\"examples\":[{\"itemsPerPage\":20,\"page\":1,\"totalItems\":1,\"totalPages\":1}],\"properties\":{\"itemsPerPage\":{\"description\":\"Limit in the number of items per page\",\"type\":\"number\"},\"page\":{\"description\":\"Current page number\",\"type\":\"number\"},\"totalItems\":{\"description\":\"Total number of items in this page\",\"type\":\"number\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/payments","segments":[{"lit":"v2"},{"lit":"payments"}],"select":{"exist":["affiliate_id","authorization","created_after","created_before","items_per_page","lw_client","page","product_id","product_type","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v2/payments/{id}","json":"{\"operationId\":\"get-transactions-id\",\"parameters\":[{\"description\":\"Payment Id or Transaction id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"affiliate\":{\"code\":\"BOwVnd\",\"commission_amount\":10,\"commission_percentage\":10,\"id\":\"5a6f1e5a43c90b15208b4571\",\"payment_status\":\"paid\",\"username\":\"jondoe\"},\"coupon\":null,\"created\":1626852950,\"discount\":0,\"gateway\":\"stripe\",\"id\":\"60fa9afd0436534ae177b072\",\"instructors\":[\"5a323b4f43c90b78098b456b\",\"5acc9b3743c90b1b098b4568\"],\"instructors_total_percentage\":0.3,\"invoice\":null,\"paid_at\":1626852950,\"payment_plan_current_payment\":null,\"payment_plan_total_payments\":null,\"period\":null,\"price\":100,\"product\":{\"description\":\"A Great Guide to master your nightmares\",\"discount_price\":0,\"final_price\":32,\"id\":\"the-complete-nightmare-guide\",\"image\":\"https://lwfilesdev.mycourse.app/dev-public/insert/014d143dca751d1e3c661675924a266e.jpeg\",\"name\":\"The complete nightmare Guide\",\"original_price\":32,\"trial_days\":0,\"type\":\"course\"},\"refund_at\":null,\"tax_amount\":0,\"tax_percentage\":0,\"transaction_id\":\"Added by admin\",\"type\":\"one-off\",\"user_id\":\"5ea18eee1d2c27438d61abe2\"}}},\"schema\":{\"description\":\"\",\"examples\":[{\"affiliate\":{\"code\":\"BOwVnd\",\"commission_amount\":10,\"commission_percentage\":10,\"id\":\"5a6f1e5a43c90b15208b4571\",\"payment_status\":\"paid\",\"username\":\"jondoe\"},\"billing_info\":{\"bf_address\":\"Baker Street 221B\",\"bf_city\":\"London\",\"bf_country\":\"UK\",\"bf_name\":\"Sherlock Holmes\",\"bf_postalcode\":\"NW1\",\"bf_taxid\":null},\"coupon\":null,\"created\":1626852950,\"discount\":0,\"gateway\":\"stripe\",\"id\":\"60fa9afd0436534ae177b072\",\"instructors\":[{\"id\":\"5a323b4f43c90b78098b456b\",\"percentage\":0.2},{\"id\":\"5acc9b3743c90b1b098b4568\",\"percentage\":0.1}],\"instructors_total_percentage\":0.3,\"invoice\":null,\"paid_at\":1626852950,\"payment_plan_current_payment\":null,\"payment_plan_total_payments\":null,\"period\":null,\"price\":100,\"product\":{\"description\":\"A Great Guide to master your nightmares\",\"discount_price\":0,\"final_price\":32,\"id\":\"the-complete-nightmare-guide\",\"image\":\"https://lwfilesdev.mycourse.app/dev-public/insert/014d143dca751d1e3c661675924a266e.jpeg\",\"name\":\"The complete nightmare Guide\",\"original_price\":32,\"trial_days\":0,\"type\":\"course\"},\"refund_at\":null,\"tax_amount\":0,\"tax_percentage\":0,\"transaction_id\":\"Added by admin\",\"type\":\"one-off\",\"user_id\":\"5ea18eee1d2c27438d61abe2\"}],\"properties\":{\"affiliate\":{\"description\":\"Related affiliate data\",\"properties\":{\"code\":{\"description\":\"Affiliate code\",\"type\":\"string\"},\"commission_amount\":{\"description\":\"Αffiliate commission amount\",\"format\":\"float\",\"type\":\"number\"},\"commission_percentage\":{\"description\":\"Affiliate commission (%)\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the affiliate\",\"type\":\"string\"},\"payment_status\":{\"description\":\"Status of the affiliation pay\",\"enum\":[\"new\",\"approved\",\"mature\",\"paid\",\"rejected\"],\"type\":\"string\"},\"username\":{\"description\":\"Affiliate username\",\"type\":\"string\"}},\"type\":\"object\"},\"billing_info\":{\"description\":\"Billing info of the payment\",\"type\":[\"null\",\"object\"]},\"coupon\":{\"description\":\"Coupon code\",\"type\":[\"null\",\"string\"]},\"created\":{\"description\":\"Datetime of the payment was created, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"discount\":{\"description\":\"Discount of the payment\",\"format\":\"float\",\"type\":\"number\"},\"gateway\":{\"description\":\"Payment gateway name\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier of the payment\",\"type\":\"string\"},\"instructors\":{\"description\":\"Related instructor data\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifiers of the instructor\",\"type\":\"string\"},\"percentage\":{\"description\":\"Percentage of the revenue for the instructor\",\"format\":\"float\",\"type\":[\"null\",\"number\"]}},\"type\":\"object\"},\"type\":\"array\"},\"instructors_total_percentage\":{\"description\":\"Total percentage of the revenue for the instructor\",\"format\":\"float\",\"type\":[\"null\",\"number\"]},\"invoice\":{\"description\":\"Invoice identifier\",\"type\":[\"null\",\"string\"]},\"paid_at\":{\"description\":\"Payment date, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"number\",\"null\"]},\"payment_plan_current_payment\":{\"description\":\"Current payment number of payment plan\",\"type\":[\"integer\",\"null\"]},\"payment_plan_total_payments\":{\"description\":\"Total payments number of payment plan\",\"type\":[\"integer\",\"null\"]},\"period\":{\"description\":\"Payment plan period\",\"type\":[\"null\",\"string\"]},\"price\":{\"description\":\"Price of the payment\",\"format\":\"float\",\"type\":\"number\"},\"product\":{\"description\":\"Related product data\",\"properties\":{\"description\":{\"description\":\"Description of the product\",\"type\":[\"string\",\"null\"]},\"discount_price\":{\"description\":\"Discount price of the product\",\"format\":\"float\",\"type\":\"number\"},\"final_price\":{\"description\":\"Final price of the product\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier of the product\",\"type\":\"string\"},\"image\":{\"description\":\"Image url of the product\",\"type\":[\"string\",\"null\"]},\"name\":{\"description\":\"Name of the product\",\"type\":\"string\"},\"original_price\":{\"description\":\"Original price of the product\",\"format\":\"float\",\"type\":\"number\"},\"trial_days\":{\"description\":\"Specified trial days of the product\",\"type\":\"integer\"},\"type\":{\"description\":\"Type of the product\",\"enum\":[\"course\",\"bundle\",\"subscription\"],\"type\":\"string\"}},\"type\":\"object\"},\"refund_at\":{\"description\":\"Refund date, in UNIX timestamp format\",\"format\":\"float\",\"type\":[\"null\",\"number\"]},\"tax_amount\":{\"description\":\"Tax amount of the payment\",\"format\":\"float\",\"type\":\"number\"},\"tax_percentage\":{\"description\":\"Tax percentage of the payment\",\"format\":\"float\",\"type\":\"number\"},\"transaction_id\":{\"description\":\"Transaction id of the payment\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the payment\",\"enum\":[\"subscription\",\"installment\",\"one-off\"],\"type\":\"string\"},\"user_id\":{\"description\":\"Unique identifier of the user\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"security\":[],\"securitySchemes\":{},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/payments/{id}","segments":[{"lit":"v2"},{"lit":"payments"},{"var":"id"}],"select":{"exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"authorization","orig":"authorization","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"header","name":"lw_client","orig":"lw_client","reqd":true,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"GET /v2/payments/{id}/invoice-link","json":"{\"operationId\":\"get-payments-id-invoice_link\",\"parameters\":[{\"description\":\"Payment Id or Transaction id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Bearer token\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The school Client ID\",\"in\":\"header\",\"name\":\"Lw-Client\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Example\":{\"value\":{\"expires_at\":1631104180,\"invoice\":\"00001\",\"url\":\"https://learnworldsdev.blob.core.windows.net/dev-private/invoices/invoice-00001-10-secrets-of-sleep-walking-5a006b8043c90b75078b4567.pdf?sv=2014-02-14&st=2021-09-08T12%3A28%3A40Z&se=2021-09-08T12%3A29%3A40Z&sr=b&sp=r&rscd=&sig=t6mq58yaMAcKRApYRiiBVMzppHOt5AObuMEFbvKxeKI%3D\"}}},\"schema\":{\"description\":\"\",\"properties\":{\"expires_at\":{\"description\":\"Date the invoice expires, in UNIX timestamp format\",\"format\":\"float\",\"type\":\"number\"},\"invoice\":{\"description\":\"Invoice identifier\",\"type\":\"string\"},\"url\":{\"description\":\"Url of invoice\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/payments/{id}/invoice-link","segments":[{"lit":"v2"},{"lit":"payments"},{"var":"id"},{"lit":"invoice-link"}],"select":{"$action":"invoice_link","exist":["authorization","id","lw_client"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"payment","name__orig":"payment","Name":"Payment","name_":"payment","name-":"payment","NAME":"PAYMENT","index$":24}, {"active":true,"entity":"payment","key$":"BasicPaymentFlow","kind":"basic","name":"BasicPaymentFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"payment_ref01"}}]},{"active":true,"data":{},"input":{"ref":"payment_ref01","srcdatavar":"payment_ref01_data","suffix":"_dt0"},"match":{"id":"payment01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payment_ref01"}}]}]}, 'Payment')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payment_ref01_data = Object.values(setup.data.existing.payment)[0] as any

    // LIST
    const payment_ref01_ent = client.Payment()
    const payment_ref01_match: any = {}

    const payment_ref01_list = (await payment_ref01_ent.list(payment_ref01_match)).map((e: any) => e.data())


    // LOAD
    const payment_ref01_match_dt0: any = {}
    payment_ref01_match_dt0.id = payment_ref01_data.id
    const payment_ref01_data_dt0 = (await payment_ref01_ent.load(payment_ref01_match_dt0)).data()
    assert(payment_ref01_data_dt0.id === payment_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/payment/PaymentTestData.json')

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
    ['payment01','payment02','payment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LEARNWORLDS_TEST_PAYMENT_ENTID': idmap,
    'LEARNWORLDS_TEST_LIVE': 'FALSE',
    'LEARNWORLDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LEARNWORLDS_TEST_PAYMENT_ENTID']

  const live = 'TRUE' === env.LEARNWORLDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LEARNWORLDS_TEST_PAYMENT_ENTID']
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
  
