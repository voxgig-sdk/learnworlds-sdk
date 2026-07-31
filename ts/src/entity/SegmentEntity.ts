
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
  Segment,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class SegmentEntity extends LearnworldsEntityBase<Segment> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'segment'
    this.name_ = 'segment'
    this.Name = 'Segment'
  }


  make(this: SegmentEntity) {
    return new SegmentEntity(this._client, this.entopts())
  }







}


export {
  SegmentEntity
}
