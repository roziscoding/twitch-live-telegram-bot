export default (ctx: any, next: () => Promise<void>) => {
  ctx.state = {}
  ctx.session = ctx.session || {}
  next()
}