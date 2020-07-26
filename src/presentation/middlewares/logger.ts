import { TelegrafContext } from 'telegraf/typings/context'

export default (ctx: TelegrafContext, next: () => Promise<void>) => {
  const startTime = Date.now();

  return next().then(() => {
    console.log(
      `New message: ${ctx.message?.text}. Answered in ${
        Date.now() - startTime
      } ms by ${(ctx as any).state?.command || "unknown command"}`
    );
  });
};
