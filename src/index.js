const koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

const app = new koa();
const router = new Router();


exports.Kola = ({middleWares = [], port}) => {
  // router.get('/favicon.ico', (ctx) => {
  //   ctx.status = 200;
  // });
  //
  // router.get('/', (ctx, next) => {
  //   ctx.body = fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8');
  //   // next();
  // });

  app
    .use(router.routes())
    .use(router.allowedMethods());

  middleWares.forEach(m => {
    app.use(m);
  });
  app.listen(port, () => {
    console.log(`server create success at ${port}`)
  });
};

exports.router = router;

