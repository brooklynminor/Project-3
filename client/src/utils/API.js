import axios from "axios";

const API = {
  // Gets all books
  getUsers: function(name) {
    return axios.get("/api/users/search/" + name);
  },
  // Gets the book with the given id
  getSchedule: function(id) {
    return axios.get("/api/schedule/" + id);
  },
  // Deletes the book with the given id
  getPet: function(name) {
    return axios.get("/api/pet/" + name);
  },
  addUser: function(body) {
      console.log("ADD USER API: ", body)
    return axios.post("/api/users/register", body);
  },
  


};

export default API