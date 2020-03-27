const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .populate("programs")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate("programs")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body, req.body.masterId);

    db.User
      .create(req.body)
      .then(({_id}) => db.Master.findOneAndUpdate({_id: req.body.masterId}, { $push: { users: _id } }, { new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },



  update: function(req, res) {
    console.log(req.body);
   
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body,{new: true})

      .then(dbModel => {console.log(dbModel)
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }




};
