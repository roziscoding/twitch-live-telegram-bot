const WizardScene = require('telegraf/scenes/wizard')

export function factory () {
  return new WizardScene(
    'set-age',
    async (ctx: any) => {
      await ctx.reply('Hello. Send me your new age')
      return ctx.wizard.next()
    },
    async (ctx: any) => {
      ctx.session.age = ctx.message.text

      await ctx.reply(`OK, now you are ${ctx.session.age} years old`)
      return ctx.scene.leave()
    }
  )
}

export default {
  name: '',
  factory
}
