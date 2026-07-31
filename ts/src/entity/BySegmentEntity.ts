
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
  BySegment,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class BySegmentEntity extends LearnworldsEntityBase<BySegment> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'by_segment'
    this.name_ = 'by_segment'
    this.Name = 'BySegment'
  }


  make(this: BySegmentEntity) {
    return new BySegmentEntity(this._client, this.entopts())
  }







}


export {
  BySegmentEntity
}
