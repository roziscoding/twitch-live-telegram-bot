import { Command } from './types/Command'

const command: Command = {
  name: 'echo',
  run: async (ctx) => {
    if (!ctx.message?.text) return

    const { message: { text } } = ctx

    await ctx.reply(text.replace('/echo ', ''))
  }
}

export default command
