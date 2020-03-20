const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
  name: {
    type: String,
    trim: true,
    // required: "Name is Required"
  },
  day: {
    dayNum: Number,
    exercise: [{
      exerciseName: String,
      sets: Number,
      reps: Number,
      tempo: String,
      rest: Number
    }]
  },
  program: [dayNum]

  });

const Program = mongoose.model("Program", ProgramSchema);

module.exports = Program;