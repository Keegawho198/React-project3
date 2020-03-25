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
    type: Number,

  },

  currentWeight: {    //1 1, 2 2
    type: Number
  },

  week:{   //[1], [1,2],
    type:[String]

  },

  weights:{   //[1], [1,2],
    type:[Number]

  },

  goalWeight: {
    type: Number,

  },
  image: {
    data: Buffer,
    type: String
  },
}, {
  toJSON: {
    virtuals: true
  }
})


UserSchema.virtual('calories').get(function() {  
  if(this.gender==="Female"){
    return (((10*this.currentWeight) + (6.25*this.height)- (5*this.age)-161)*this.energyExpenditure) + " Cals"
  }
  return (Math.round((10*this.currentWeight) + (6.25*this.height)- (5*this.age)+5)*this.energyExpenditure) + " Cals"
});

const User = mongoose.model("User", UserSchema);

module.exports = User;