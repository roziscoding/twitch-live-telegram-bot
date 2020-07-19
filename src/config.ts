export const config = {
  telegram: {
    token: process.env.TELEGRAM_TOKEN || ''
  },
  server: {
    url: process.env.SERVER_URL || '',
    port: parseInt(process.env.SERVER_PORT || process.env.PORT || '3000', 10)
  }
}

export type AppConfig = typeof config
