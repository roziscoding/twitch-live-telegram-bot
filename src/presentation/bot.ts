import Telegraf from 'telegraf'

import commands, { commandNames } from './commands'
import { AppConfig } from '../config'

export async function factory (config: AppConfig) {
  const bot = new Telegraf(config.telegram.token)

  for (const command of commands) {
    bot.command(command.name, command.run)
  }

  console.log(`Loaded commands: ${commandNames.join(', ')}`)

  return bot
}

export default { factory }
