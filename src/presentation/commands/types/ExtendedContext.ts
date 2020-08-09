import type { TelegrafContext } from 'telegraf/typings/context'
import { NewOrExistingSession } from '../../../service/SessionService'

export type ExtendedContext = TelegrafContext & {
  state: Record<string, string>
  session: NewOrExistingSession
}
