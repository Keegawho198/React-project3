import axios from "axios";

const BASEURL = "https://api.edamam.com/api/food-database/parser?ingr=";
const APIKEY = "&app_id=a6ef16ee&app_key=9e54b4ed8b64bc332e2ee0f583850cf6";

export default {
  // Gets all books

  getUsers: function() {
    return axios.get("/api/User");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get(" /api/User/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete(" /api/User/" + id);
  },
  // Saves a book to the database
  saveUser: function(masterData) {
    console.log(masterData);
    return axios.post(`/api/User`, masterData);
  },

  updateUser:function(userData){
    console.log(userData)
    return axios.put(`/api/User/${userData._id}`,userData)
  },

  getMasters: function() {
    return axios.get("/api/master");
  },
  // Gets the book with the given id
  getMaster: function(id) {
    return axios.get(" /api/Master/" + id);
  },
  // Deletes the book with the given id
  deleteMaster: function(id) {
    return axios.delete(" /api/Master/" + id);
  },
  // Saves a book to the database
  saveMaster: function(masterData) {
    return axios.post(' /api/Master/', masterData);
  },


  getNutrition: function(query){
    return axios.get(BASEURL + query + APIKEY);
  }






  // Gets all Programs
  getPrograms: function () {
    return axios.get("/api/programs");
  },

  //Saves a Program to the database
  saveProgram: function (programData) {
    console.log("posting")
    return axios.post("/api/programs", programData);

  },

  deleteProgram: function(id) {
    return axios.delete("/api/programs/" + id );
    // return axios.delete("/api/programs/:" + _id + "exercise/:" + _id );
  },

    // Gets all Exercises
    getExercise: function () {
      return axios.get("/api/ExerciseList");
    },

      //Saves a Program to the database
  saveExercise: function (exerciseData) {
    console.log("posting")
    return axios.post("/api/ExerciseList", exerciseData);

  },

  deleteExercise: function(id) {
    return axios.delete("/api/ExerciseList/" + id);
  },

};
