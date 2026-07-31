
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
  Space,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class SpaceEntity extends LearnworldsEntityBase<Space> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'space'
    this.name_ = 'space'
    this.Name = 'Space'
  }


  make(this: SpaceEntity) {
    return new SpaceEntity(this._client, this.entopts())
  }







}


export {
  SpaceEntity
}
