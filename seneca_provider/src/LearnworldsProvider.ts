// Learnworlds Seneca Provider


/* Copyright © 2025 Seneca Project Contributors, MIT License. */

import Pkg from '../package.json'

import { LearnworldsSDK } from '@voxgig/learnworlds-sdk'

type LearnworldsProviderOptions = {
  debug: boolean,
  native?: any
}

function LearnworldsProvider(this: any, options: LearnworldsProviderOptions) {
  const seneca: any = this

  const entityBuilder = this.export('provider/entityBuilder')

  seneca.message('sys:provider,provider:learnworlds,get:info', get_info)

  async function get_info(this: any, _msg: any) {
    return {
      ok: true,
      name: 'learnworlds',
      version: Pkg.version,
      sdk: {
        name: 'learnworlds',
        version: (Pkg.dependencies as any)['@voxgig/learnworlds-sdk'],
      },
    }
  }

  const entdef: any = {}







  entityBuilder(this, {
    provider: {
      name: 'learnworlds',
    },
    entity: entdef
  })

  seneca.prepare(async function(this: any) {
    let res = await this.post(
      'sys:provider,get:keymap,provider:Learnworlds'
    )

    if (!res.ok) {
      throw new Error('Learnworlds Error: no keymap')
    }

    this.shared.sdk = new LearnworldsSDK(this.util.deep({}, options.native || {}, {
      base: res.keymap.base.value,
      apikey: res.keymap.apikey.value,
      headers: {
        'Lw-Client': res.keymap.clientid.value,
      }
    }))
  })

  return {
    exports: {
      sdk: () => this.shared.sdk,
    },
  }
}

// Default options.
const defaults: LearnworldsProviderOptions = {
  // TODO: Enable debug logging
  debug: false,
}

Object.assign(LearnworldsProvider, { defaults })

export default LearnworldsProvider

if ('undefined' !== typeof module) {
  module.exports = LearnworldsProvider
}


