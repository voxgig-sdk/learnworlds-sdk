
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
  Post,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class PostEntity extends LearnworldsEntityBase<Post> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'post'
    this.name_ = 'post'
    this.Name = 'Post'
  }


  make(this: PostEntity) {
    return new PostEntity(this._client, this.entopts())
  }







}


export {
  PostEntity
}
