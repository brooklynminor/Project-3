import React, {useState, useEffect} from "react";
import API from "../utils/API"

function Profile () {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
      },[])

    function loadUsers() {
        console.log("Loading Users...")
        let user="Levi"
        API.getUsers(user)
          .then(async function(res){
            await setUsers(res.data)
            // console.log("USER LOG",users)
          })
          .catch(err => console.log(err))
      };
      console.log("USER LOG",users)
    return (
        <div>
            <ul>
                <li>
                    First Name : {users.firstName}
                </li>
                <li>
                    Last Name : {users.lastName}
                </li>
                <li>
                    Phone Number : {users.phoneNumber}
                </li>
                <li>
                    Emergency Phone Number : {users.emergencyNo}
                </li>
                <li>
                    Email Address : {users.emailAddress}
                </li>
                <li>
                    User Id : {users._id}
                </li>


            </ul>
        </div>
    )
}
export default Profile