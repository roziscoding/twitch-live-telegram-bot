import { TelegrafContext } from 'telegraf/typings/context'

export type Command = {
  run: (ctx: TelegrafContext) => Promise<unknown>,
  name: string
}