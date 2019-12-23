// express server, crud react app
// mongodb
require('dotenv/config');
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const personRoute = require('./_db/persons-db/person.route');
const path = require('path');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.use('/person', personRoute);

app.listen(port, function () {
  console.log('Servidor rodando na porta: ' + port);

  app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
});