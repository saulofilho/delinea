require('dotenv/config');

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

app.listen(port, function () {
  console.log('Servidor USER rodando na porta:', port);

  applyRoutes(router);

  app.use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

  app.use(static(path.resolve(__dirname, './src/build')));
  function* index() {
    this.body = fs.readFileSync(path.resolve(path.join(__dirname, './src/build', 'index.html')), 'utf8')
  };

  app.use(route.get('*', index))
});

// express server, crud react app
// mongodb
const express = require('express');
const corsE = require('cors');
const appE = express();
const mongoose = require('mongoose');
const portE = process.env.PORT || 4000;
const personRoute = require('./_db/persons-db/person.route');
const pathE = require('path');

appE.use(corsE());
appE.use(express.urlencoded({ extended: true }));
appE.use(express.json());

const mongoURI = process.env.MONGODB_URL;

mongoose
  .connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

appE.use('/person', personRoute);

appE.listen(portE, function () {
  console.log('Servidor PERSON rodando na porta: ' + portE);

  appE.use(express.static(path.join(__dirname, './src/build')));


  appE.get('*', (req, res) => {
    res.sendFile(pathE.join(__dirname, './src/build', 'index.html'));
  });
});
