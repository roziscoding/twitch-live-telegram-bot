export default (ctx: any, next: () => Promise<void>) => {
  ctx.state = {}
  next()
}
