const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  email: {
    type: String,

  },

  password: {
    type: String,

  },

  name: {
    type: String,
    unique: false,

  },
  age: {
    type: Number,


  },
  gender: {
    type: String,

  },
  height: {
    type: Number,

  },
  energyExpenditure: {
    type: String,

  },

  currentWeight: {
    type: Number
  },

  goalWeight: {
    type: Number,

  },
  image: {
    data: Buffer,
    type: String
  },


  Calories: [
    {
      Protein: Number,
      Fat: Number,
      Carbohydrates: Number
    }
  ],

 




});

const User = mongoose.model("User", UserSchema);

module.exports = User;