import Koa from "koa"

console.log('db user:', process.env.POSTGRES_USER)
console.log('db password:', process.env.POSTGRES_PASSWORD)
console.log('db names:', process.env.POSTGRES_DB)

new Koa().use(async ctx => {
  ctx.body = 'Hello World';
}).listen(process.env.APP_PORT, () => {
  console.log('app listening on port:', process.env.APP_PORT)
});
