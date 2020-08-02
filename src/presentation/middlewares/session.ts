import { SessionService } from "../../service/SessionService"
import { ExtendedContext } from "../commands/types/ExtendedContext"

export const factory = (service: SessionService) =>
  async (ctx: ExtendedContext, next: any) => {
    const userId = ctx.message?.from?.id

    if (!userId) return next()

    const userSession = await service.findByTelegramId(userId)


    ctx.session = userSession || { telegramId: userId, name: '', age: 0, catCount: 0 }

    await next()

    await service.save(ctx.session)
  }

export default { factory }
