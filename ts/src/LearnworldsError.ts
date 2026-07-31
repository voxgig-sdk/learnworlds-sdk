
import { Context } from './Context'


class LearnworldsError extends Error {

  isLearnworldsError = true

  sdk = 'Learnworlds'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  LearnworldsError
}

