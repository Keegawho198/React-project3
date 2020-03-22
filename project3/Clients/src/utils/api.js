import axios from "axios";

export default {
  // Gets all books
  getUser: function () {
    return axios.get("/api/User");
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/User/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function (id) {
    return axios.delete("/api/User/" + id);
  },
  // Saves a book to the database
  saveUser: function (masterData) {
    return axios.post('/api/User/', masterData);
  },

  getMaster: function () {
    return axios.get("/api/Master");
  },
  // Gets the book with the given id
  getMaster: function (id) {
    return axios.get("/api/Master/" + id);
  },
  // Deletes the book with the given id
  deleteMaster: function (id) {
    return axios.delete("/api/Master/" + id);
  },
  // Saves a book to the database
  saveMaster: function (masterData) {
    return axios.post('/api/Master/', masterData);
  },

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
    return axios.delete("/api/programs/" + id);
  },
};
