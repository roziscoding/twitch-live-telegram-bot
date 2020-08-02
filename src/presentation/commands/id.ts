import { Command } from './types/Command'

const command: Command = {
  name: 'id',
  run: async (ctx) => {
    if (!ctx.message?.text) return
    ctx.state.command = '/id'
    return ctx.reply(`Chat Type: ${ctx.message.chat.type}\nYour ID: ${ctx.message.from?.id}\nChat ID: ${ctx.message.chat.id}`)
  }
}

export default command
