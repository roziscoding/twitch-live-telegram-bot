const WizardScene = require('telegraf/scenes/wizard')

export function factory() {
  return new WizardScene(
    'set-name',
    async (ctx: any) => {
      await ctx.reply('Hello. Send me your new name')
      return ctx.wizard.next()
    },
    async (ctx: any) => {
      ctx.session.name = ctx.message.text

      await ctx.reply(`OK, I'll call you ${ctx.session.name} from now on`)
      return ctx.scene.leave()
    }
  )
}

export default {
  name: '',
  factory,
}
