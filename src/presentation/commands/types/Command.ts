import type { ExtendedContext } from './ExtendedContext'

export type Command = {
  run: (ctx: ExtendedContext) => Promise<unknown>,
  name: string
}
