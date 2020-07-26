import type { TelegrafContext } from 'telegraf/typings/context'

export type ExtendedContext = TelegrafContext & {
  state: Record<string, string>
  session: Record<string, any>
}