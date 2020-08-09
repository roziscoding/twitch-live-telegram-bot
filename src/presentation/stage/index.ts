import scenes from './scenes'
import Telegraf, { Stage } from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context'

export function install (bot: Telegraf<TelegrafContext>) {
  const stage = new Stage([])

  scenes.forEach(scene => {
    stage.register(scene.factory())
  })

  stage.command('cancel', Stage.leave())

  bot.use(stage.middleware() as any)

  scenes
    .filter(({ name }) => Boolean(name))
    .forEach(scene => {
      bot.command(scene.name, (ctx: any) => ctx.scene.enter(scene.name))
    })
}

const sceneNames = scenes.map(({ name }) => name).filter(Boolean)

export default { install, sceneNames }
