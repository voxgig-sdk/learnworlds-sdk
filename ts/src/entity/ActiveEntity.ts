
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
  Active,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class ActiveEntity extends LearnworldsEntityBase<Active> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'active'
    this.name_ = 'active'
    this.Name = 'Active'
  }


  make(this: ActiveEntity) {
    return new ActiveEntity(this._client, this.entopts())
  }







}


export {
  ActiveEntity
}
