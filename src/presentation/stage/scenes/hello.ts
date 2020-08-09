const WizardScene = require('telegraf/scenes/wizard')

export function factory () {
  return new WizardScene(
    'hello',
    async (ctx: any) => {
      if (ctx.session.name && ctx.session.age) {
        await ctx.reply(`Hi there, ${ctx.session.name}! You have ${ctx.session.age} years old!`)
        return ctx.scene.leave()
      }

      await ctx.reply('Hello. Please, tell me your name')
      return ctx.wizard.next()
    },
    async (ctx: any) => {
      ctx.session.name = ctx.message.text
      await ctx.reply(`Hi ${ctx.session.name}. Please, tell me your age`)
      return ctx.wizard.next()
    },
    async (ctx: any) => {
      ctx.session.age = ctx.message.text
      await ctx.reply(`Ok, so now I know you are ${ctx.session.age} years old`)
      return ctx.scene.leave()
    }
  )
}

export default {
  name: 'hello',
  factory
}
