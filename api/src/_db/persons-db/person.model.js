const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Person = new Schema({
  person_name: {
    type: String
  },
  person_cpf: {
    type: String
  },
  person_rg: {
    type: String
  },
  person_birthday: {
    type: String
  },
  person_phone: {
    type: String
  },
  person_userName: {
    type: String
  },
  person_email: {
    type: String
  },
  person_password: {
    type: String
  }
},
{
    collection: 'person'
});

module.exports = mongoose.model('Person', Person);