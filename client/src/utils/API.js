import axios from "axios";

const API = {
  // Gets all books
  getUsers: function(id) {
    return axios.get("/api/users/search/" + id);
  },
  // Gets the book with the given id
  getSchedule: function(id) {
    return axios.get("/api/schedule/" + id);
  },
  // Deletes the book with the given id
  getPet: function(id) {
    return axios.delete("/api/pet/" + id);
  },
};

export default API