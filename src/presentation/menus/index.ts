import { MenuTemplate, MenuMiddleware } from 'telegraf-inline-menu'
import { TelegrafContext } from 'telegraf/typings/context'
import Telegraf from 'telegraf'

type MyContext = {
  session?: {
    name?: string
    age?: number
  }
} & TelegrafContext

export function install (bot: Telegraf<TelegrafContext>) {
  const mainMenu = new MenuTemplate<MyContext>(ctx => `Hey ${ctx.session?.name || 'you'}!`)

  mainMenu.interact('Set name', 'set-name', {
    do: (ctx: any) => {
      ctx.scene.enter('set-name')
      return ctx.answerCbQuery()
    }
  })

  mainMenu.interact('Set age', 'set-age', {
    do: (ctx: any) => {
      ctx.scene.enter('set-age')
      return ctx.answerCbQuery()
    }
  })

  const menuMiddleware = new MenuMiddleware('/', mainMenu)
  bot.command('settings', ctx => menuMiddleware.replyToContext(ctx))
  bot.use(menuMiddleware)
}

export default { install }
