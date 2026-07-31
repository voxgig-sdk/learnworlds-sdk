
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
  Event,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class EventEntity extends LearnworldsEntityBase<Event> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'event'
    this.name_ = 'event'
    this.Name = 'Event'
  }


  make(this: EventEntity) {
    return new EventEntity(this._client, this.entopts())
  }







}


export {
  EventEntity
}
