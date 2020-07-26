import Telegraf, { session } from "telegraf"

import stage from './stage'
import { AppConfig } from "../config"
import middlewares from "./middlewares"
import commands, { commandNames } from "./commands"

export async function factory(config: AppConfig) {
  const bot = new Telegraf(config.telegram.token, {
    telegram: { webhookReply: false },
  })

  bot.use(session())
  await stage.install(bot)

  bot.use(middlewares.state)
  bot.use(middlewares.logger)

  for (const command of commands) {
    bot.command(command.name, (ctx) => command.run(ctx as any))
  }

  console.log(`Loaded commands: ${commandNames.concat(stage.sceneNames).join(", ")}`)

  return bot
}

export default { factory }
