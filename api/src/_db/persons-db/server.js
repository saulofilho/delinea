require('dotenv/config');
let express = require('express');
let cors = require('cors');
let app = express();
const mongoose = require('mongoose');
let port = process.env.PORT || 400;
const personRoute = require('./person.route');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoURI = process.env.MONGODB_URL

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
  console.log('Servidor rodando na porta: ' + port)
});