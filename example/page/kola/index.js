const { Kola } = require('../../../src/index');
const routers = require('./routers/index');
const staticKoa = require('koa-static');
const path = require('path');

routers();
Kola({
  serverRender: true,
  port: 3000,
  middleWares: [
    staticKoa(
      path.join('./dist')
    )
  ]
});
