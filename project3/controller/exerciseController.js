const db = require("../models");

// Defining methods for the ProgramsController
module.exports = {
  create: function (req, res) {
    console.log(req.body);

    db.Exercise
      .create({
        exerciseName: req.body.exerciseName,
        instructions: req.body.instructions,
        img: req.body.img
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    // res.send('item saved');

  },
  findAll: function (req, res) {
    db.Exercise
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Exercise
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Exercise
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Exercise
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};