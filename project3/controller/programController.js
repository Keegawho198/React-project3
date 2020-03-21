const db = require("../models");

// Defining methods for the ProgramsController
module.exports = {
  create: function(req, res) {
    console.log(req.body);
    // var data = {
    //   dayNum: parseInt(req.body.dayNum),
    //   exercise: [{
    //     exerciseName: req.body.exerciseName,
    //     sets: parseInt(req.body.sets),
    //     reps: parseInt(req.body.reps),
    //     tempo: req.body.tempo,
    //     rest: parseInt(req.body.rest)
    //   }]
    // }
    db.Program
      .create({
                dayNum: req.body.dayNum,
                exercise: req.body.exercise
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
     // res.send('item saved');

  },
  findAll: function(req, res) {
    db.Program
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Program
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Program
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Program
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};