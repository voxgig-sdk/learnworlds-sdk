
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
  Due,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class DueEntity extends LearnworldsEntityBase<Due> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'due'
    this.name_ = 'due'
    this.Name = 'Due'
  }


  make(this: DueEntity) {
    return new DueEntity(this._client, this.entopts())
  }







}


export {
  DueEntity
}
