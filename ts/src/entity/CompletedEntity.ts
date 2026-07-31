
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
  Completed,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class CompletedEntity extends LearnworldsEntityBase<Completed> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'completed'
    this.name_ = 'completed'
    this.Name = 'Completed'
  }


  make(this: CompletedEntity) {
    return new CompletedEntity(this._client, this.entopts())
  }







}


export {
  CompletedEntity
}
