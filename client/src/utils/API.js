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
    getPet: function(name) {
        console.log("getpet: ", name)
        return axios.get("/api/pet/search/" + name);
    },
    addUser: function(body) {
        console.log("ADD USER API: ", body)
        return axios.post("/api/users/register", body);
    },
    addPet: function(body) {
        console.log("ADD PET API: ", body)
    return axios.post("/api/pet", body);
    },
    loginUser: async function(body) {
        console.log("LOGIN USER API: ", body.emailAddress, body.userPassword)
        const result = await axios.get('/api/users/login', {
            params: {
                emailAddress: body.emailAddress,
                userPassword: body.userPassword
            }
        })
        if(result.data.status){

            return result.data
        } else {
            return false
        }
    },
    addSchedule: function(body) {
        console.log("ADD SCHEDULE API: ", body)
    return axios.post("/api/schedule", body);
    },
    updateUser: function(body) {
        const id = body.id
        const ownerId = body.ownerId

        console.log("UPDATE USERS: ", body)
        return axios.put("/api/users/update/:id", {
            params: {
                id: id,
                ownerId: ownerId
            }
        });
    },
    updateUserSchedule: function(body) {
        const id = body.id
        const ownerId = body.ownerId
        console.log("UPDATE USERS SCHEDULE: ", JSON.stringify(id))
        return axios.put("/api/users/updateSchedule/:id", {
            params: {
                id: id,
                ownerId: ownerId
            }
        });
    },



}
export default API