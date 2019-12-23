const express = require('express');
const personRoutes = express.Router();

let Person = require('./person.model');

personRoutes.route('/add').post(function (req, res) {
  let person = new Person(req.body);
  person.save()
    .then(person => {
      res.status(200).json({'Usuário': 'Usuário foi cadastrado com sucesso.'});
    })
    .catch(err => {
    res.status(400).send("Não foi possível salvar na Database.");
    });
});

personRoutes.route('/').get(function (req, res) {
    let personFind = Person.find(function (err, person){
    if(err){
      console.log(err);
    }
    else {
      res.json(person);
    }
    return personFind;
  });
});

personRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Person.findById(id, function (err, person){
      res.json(person);
  });
});

personRoutes.route('/update/:id').post(function (req, res) {
    Person.findById(req.params.id, function(err, person) {
    if (!person)
      res.status(404).send("Não encontrado");
    else {
        person.person_name = req.body.person_name;
        person.person_cpf = req.body.person_cpf;
        person.person_rg = req.body.person_rg;
        person.person_birthday = req.body.person_birthday;
        person.person_phone = req.body.person_phone;
        person.person_userName = req.body.person_userName;
        person.person_email = req.body.person_email;
        person.person_password = req.body.person_password;

        person.save().then(person => {
          res.json('Atualizado com sucesso.');
      })
      .catch(err => {
            res.status(400).send("Tente novamente mais tarde.");
      });
    }
  });
});

personRoutes.route('/delete/:id').get(function (req, res) {
    Person.findByIdAndRemove({_id: req.params.id}, function(err, person){
        if(err) res.json(err);
        else res.json('Removido com sucesso.');
    });
});

module.exports = personRoutes;