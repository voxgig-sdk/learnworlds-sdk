
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
  Unit,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class UnitEntity extends LearnworldsEntityBase<Unit> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'unit'
    this.name_ = 'unit'
    this.Name = 'Unit'
  }


  make(this: UnitEntity) {
    return new UnitEntity(this._client, this.entopts())
  }







}


export {
  UnitEntity
}
