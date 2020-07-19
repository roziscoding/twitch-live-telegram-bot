import { config } from './config'
import server from './presentation/server'

server.start(config)
  .then(() => { console.log('Listening') })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
