import util from 'util'
import { Command } from './types/Command'

const MARKDOWN_TEMPLATE = '`%s`'

const command: Command = {
  name: 'raw',
  run: async (ctx) => {
    const text = util.format(MARKDOWN_TEMPLATE, JSON.stringify(ctx.update, null, 4))
    await ctx.reply(text, { parse_mode: 'MarkdownV2' })
  }
}

export default command
