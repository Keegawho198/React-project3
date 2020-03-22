const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
    dayNum: Number,
    focus: String,
    exercise: [{
      exerciseName: String,
      sets: Number,
      reps: Number,
      tempo: String,
      rest: Number
    }]
});

const Program = mongoose.model("Program", ProgramSchema);

module.exports = Program;