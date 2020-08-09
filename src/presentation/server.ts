import ngrok from 'ngrok'
import { AppConfig } from '../config'
import { factory as botFactory } from './bot'

async function getHookUrl (config: AppConfig) {
  if (config.server.url) return `${config.server.url}/${config.telegram.token}`

  return ngrok
    .connect({ addr: config.server.port })
    .then((ngrokUrl) => `${ngrokUrl}/${config.telegram.token}`)
}

export async function start (config: AppConfig) {
  const HOOK_PATH = await getHookUrl(config)
  const bot = await botFactory(config)

  await bot.telegram.setWebhook(HOOK_PATH)

  await bot.startWebhook(`/${config.telegram.token}`, null, config.server.port)
}

export default { start }
