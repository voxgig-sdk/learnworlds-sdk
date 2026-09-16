# Tutorial: your first Learnworlds query

This tutorial takes you from an empty folder to a script that
reads Learnworlds data through
Seneca entities. It should take about fifteen minutes.

You will build one script and add to it as you go. Everything runs in
memory: the SDK ships an offline mode backed by a small in-memory
store, and you supply that store's contents yourself. No request leaves
your machine, so nothing here can affect anything outside it.

You need [Node.js](https://nodejs.org) 24 or later. You do not need a
server, a network connection, or credentials.

## Step 1: Create the project

```sh
$ mkdir learnworlds-demo
$ cd learnworlds-demo
$ npm init -y
$ npm install seneca seneca-entity seneca-promisify @seneca/provider @seneca/learnworlds-provider
```

The first four are the Seneca host: the framework itself, the entity
API, the promise wrapper that makes calls awaitable, and the shared
machinery every Seneca provider is built on. The last is this plugin,
which brings the Learnworlds SDK with it.

## Step 2: Connect

Create `demo.js`:

```js
const Seneca = require('seneca')

// The offline store. Each key under an entity name is that record's
// id, and each record is what the API would have answered with.
const SEED = {
  entity: {
    certificate: {
      certificate0: {"id":"certificate0"},
      certificate1: {"id":"certificate1"},
    },
    coupon_usage: {
      coupon_usage0: {"promotion_id":"promotion0","id":"coupon_usage0"},
      coupon_usage1: {"promotion_id":"promotion0","id":"coupon_usage1"},
    },
    promotion: {
      promotion0: {"id":"promotion0"},
      promotion1: {"id":"promotion1"},
    },
  },
}

async function main() {
  const seneca = await Seneca({ legacy: false })
    .use('promisify')
    .use('entity')
    .use('provider', {
      provider: {
        learnworlds: {
          keys: {
            apikey: { value: '' },
          },
        },
      },
    })
    .use('@seneca/learnworlds-provider', {
      test: true,
      testopts: SEED,
    })
    .ready()

  const info = await seneca.post('sys:provider,provider:learnworlds,get:info')
  console.log(info)
}

main()
```

Run it:

```sh
$ node demo.js
```

You should see:

```js
{
  ok: true,
  name: 'learnworlds',
  version: '0.0.1',
  sdk: { name: '@voxgig-sdk/learnworlds', version: '0.0.1' },
}
```

Two details of that configuration are worth a moment. The `apikey` is
declared even though nothing here asks for credentials — an empty
value simply means no `authorization` header is sent. Every Seneca
provider is configured the same way, so an application that later moves
to an authenticated service changes one value rather than its shape.
And `get:info` is answered by the plugin itself, without calling the
API, so a reply tells you the plugin loaded and initialised before any
request goes anywhere.

## Step 3: List the certificate records

Replace the `console.log(info)` line with:

```js
  const certificates = await seneca
    .entity('provider/learnworlds/certificate')
    .list$()

  console.log('Found ' + certificates.length + ' certificate record(s):')
  certificates.forEach((r) => {
    console.log('  ' + r.id)
  })
```

Run it again and you will see the two certificate
records you seeded, under the ids they are filed by.

No URL, no HTTP verb, no JSON parsing. You asked a Seneca entity for
a list, the provider turned that into an SDK call, and the SDK turned
it into a request. These are ordinary Seneca entities, so everything
you already know about the entity API applies to them.

## Step 4: Reach the coupon_usage records

Coupon_usage records live inside promotion records, and the API route
says so:

`/v2/promotions/{pid}/coupons/{cid}/usage`

The parent id in that path is not optional, so every coupon_usage
call needs a `promotion_id` in its query:

```js
  const coupon_usages = await seneca
    .entity('provider/learnworlds/coupon_usage')
    .list$({ promotion_id: 'promotion0' })

  console.log('found ' + coupon_usages.length + ' coupon_usage record(s)')
```

Leave the `promotion_id` out and the call throws at once, naming the key it
needed, rather than letting a half-built URL come back as a puzzling
404:

```js
  // throws: @seneca/learnworlds-provider: coupon_usage list: promotion_id is required
  await seneca
    .entity('provider/learnworlds/coupon_usage')
    .list$()
```

## Talking to a real server

The script you have just written never touched the network. To point it
at a running Learnworlds server instead, replace the `test` and
`testopts` options with that server's base URL:

```js
    .use('@seneca/learnworlds-provider', {
      sdk: { base: 'https://api.example.com' },
    })
```

Nothing else in the script changes — the entity calls are the same
calls. Your seeded ids will not exist there, so read the ids you need
from a `list$` first.

## What you have learned

You built a script that reads
Learnworlds data through Seneca entities,
with no server involved. Along
the way you saw:

- Provider configuration has the same shape even when no credentials
  are needed.
- API resources are Seneca entities under `provider/learnworlds/`,
  reached with the entity API you already know.
- A resource nested under another in the API needs its parent's id in
  every query, and says which key is missing when you forget.
- The offline store makes all of this runnable with nothing installed
  but npm packages, which is also how you test your own code.

## Where to go next

- To do a specific job — point at a real server, reach the raw SDK,
  test your own code — see the [how-to guides](how-to.md).
- To look up an exact pattern, field or option, see the
  [reference](reference.md).
- To understand why the plugin is built this way — why entities rather
  than one message per route, and what it does with the SDK's answers
  — see the [explanation](explanation.md).
- For what each of these documents is for, see the
  [documentation index](README.md).
