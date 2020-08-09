import { config } from './config'
import server from './presentation/server'

server.start(config)
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
