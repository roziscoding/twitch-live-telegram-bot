import ngrok from 'ngrok'
import express from 'express'

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

  const app = express()

  app.get('/', (_, res) => res.redirect('https://t.me/rozbifebot'))

  app.use(bot.webhookCallback(`/${config.telegram.token}`))

  app.listen(config.server.port, () => { console.log(`Listening on port ${config.server.port}`) })
}

export default { start }
