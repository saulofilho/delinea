// koa server, create user login
// sqlite database
const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const Router = require('koa-router');
const fs = require('fs');
const route = require('koa-route');
const applyRoutes = require('./_config/routes');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const port = process.env.PORTuser || 8080;

const app = new Koa();
const router = new Router();

module.exports = () => {
  console.log('Servidor rodando na porta:', port);

  applyRoutes(router);

  app.use(cors()).use(bodyParser()).use(router.routes()).use(router.allowedMethods());

  app.listen(port);

  app.use(static(path.resolve('build')));
  function* index() {
    this.body = fs.readFileSync(path.resolve(path.join('build', 'index.html')), 'utf8')
  };

  app.use(route.get('*', index))
};