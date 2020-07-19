import axios from 'axios'
import { Command } from './types/Command'

const command: Command = {
  name: 'cat',
  run: async (ctx) => {
    await ctx.replyWithChatAction("upload_photo")
    const catImage = await axios.get('https://cataas.com/cat', { responseType: "arraybuffer" })
      .then(({ data }) => data)

    await ctx.replyWithPhoto({ source: catImage }, { caption: `Here's a cat picture to make you happy :)` })
  }
}

export default command
