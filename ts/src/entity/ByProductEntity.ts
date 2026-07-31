
import { inspect } from 'node:util'

import { LearnworldsEntityBase } from '../LearnworldsEntityBase'

import type {
  LearnworldsSDK,
} from '../LearnworldsSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  ByProduct,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class ByProductEntity extends LearnworldsEntityBase<ByProduct> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'by_product'
    this.name_ = 'by_product'
    this.Name = 'ByProduct'
  }


  make(this: ByProductEntity) {
    return new ByProductEntity(this._client, this.entopts())
  }







}


export {
  ByProductEntity
}
