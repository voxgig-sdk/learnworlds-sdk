
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
  Score,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class ScoreEntity extends LearnworldsEntityBase<Score> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'score'
    this.name_ = 'score'
    this.Name = 'Score'
  }


  make(this: ScoreEntity) {
    return new ScoreEntity(this._client, this.entopts())
  }







}


export {
  ScoreEntity
}
