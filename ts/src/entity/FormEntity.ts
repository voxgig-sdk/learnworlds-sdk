
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
  Form,
} from '../LearnworldsTypes'

// TODO: needs Entity superclass
class FormEntity extends LearnworldsEntityBase<Form> {

  constructor(client: LearnworldsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'form'
    this.name_ = 'form'
    this.Name = 'Form'
  }


  make(this: FormEntity) {
    return new FormEntity(this._client, this.entopts())
  }







}


export {
  FormEntity
}
