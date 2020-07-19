import { factory as botFactory } from './bot'
import { AppConfig } from '../config'

export async function start (config: AppConfig) {
  const HOOK_PATH = `${config.server.url}/${config.telegram.token}`
  const bot = await botFactory(config)

  await bot.telegram.setWebhook(HOOK_PATH)

  await bot.startWebhook(`/${config.telegram.token}`, null, config.server.port)
}

export default { start }
