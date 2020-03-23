const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exerciseName:{
    type: String
  },
  instructions:{
    type: String
  },
  img:{
    type: String
  }
    
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;