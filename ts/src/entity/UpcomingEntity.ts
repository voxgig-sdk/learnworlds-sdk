
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
  Upcoming,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class UpcomingEntity extends LearnworldsEntityBase<Upcoming> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'upcoming'
    this.name_ = 'upcoming'
    this.Name = 'Upcoming'
  }


  make(this: UpcomingEntity) {
    return new UpcomingEntity(this._client, this.entopts())
  }







}


export {
  UpcomingEntity
}
