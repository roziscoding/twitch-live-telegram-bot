import Telegraf, { session } from 'telegraf'
import { createConnection } from '@nindoo/mongodb-data-layer'

import stage from './stage'
import menus from './menus'
import { AppConfig } from '../config'
import middlewares from './middlewares'
import commands, { commandNames } from './commands'
import { SessionRepository } from '../data/repositories/SessionRepository'
import SessionService from '../service/SessionService'

export async function factory (config: AppConfig) {
  const bot = new Telegraf(config.telegram.token, {
    telegram: { webhookReply: false }
  })

  const mongodbConnection = await createConnection(config.mongodb)

  console.log('Conectado com o mongodb')

  const sessionRepository = new SessionRepository(mongodbConnection)
  const sessionService = SessionService.factory(sessionRepository)

  bot.use(session({
    getSessionKey: (ctx) => `${ctx.message?.from?.id || ctx.update.callback_query?.from.id || 0}`
  }))

  bot.use(middlewares.session.factory(sessionService) as any)

  await stage.install(bot)
  await menus.install(bot)

  bot.use(middlewares.state)
  bot.use(middlewares.logger)

  for (const command of commands) {
    bot.command(command.name, (ctx) => command.run(ctx as any))
  }

  console.log(`Loaded commands: ${commandNames.concat(stage.sceneNames).join(', ')}`)

  return bot
}

export default { factory }
