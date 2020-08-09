import { IMongoParams } from '@nindoo/mongodb-data-layer'

export type AppConfig = {
  telegram: {
    token: string
  },
  server: {
    url: string,
    port: number
  },
  mongodb: IMongoParams
}

export const config: AppConfig = {
  telegram: {
    token: process.env.TELEGRAM_TOKEN || ''
  },
  server: {
    url: process.env.SERVER_URL || '',
    port: parseInt(process.env.SERVER_PORT || process.env.PORT || '3000', 10)
  },
  mongodb: {
    dbName: process.env.MONGODB_DBNAME || 'twitch-telegram-bot',
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/twitch-telegram-bot'
  }
}
