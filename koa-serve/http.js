/* eslint-disable import/no-extraneous-dependencies */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const { log } = console;
const app = new Koa();
app.use(bodyParser());
app.use(async (ctx) => {
  const postParam = ctx.request.body; // 获取post提交的数据
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Content-Type', 'application/json');
  if (postParam) {
    ctx.status = 200;
    ctx.body = {
      token: 'token_demo_11xx22xx33xx44xx',
      message: '登陆成功',
    };
  }
});

app.on('error', (err) => {
  log('server error', err);
});

app.listen(3000);
