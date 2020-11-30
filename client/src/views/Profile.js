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
        <div className='container container-sm-float'>
            <div className='display-4 mb-3'>
                {users.firstName} {users.lastName}'s Profile
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className='float-left'>
                    First Name : 
                    </div>
                    <div className='float-right'>
                        {users.firstName}
                    </div>
                </li>
                <li className="list-group-item">
                    <div className='float-left'>
                    Last Name : 
                    </div>
                    <div className='float-right'>
                        {users.lastName}
                    </div>
                </li>
                <li className="list-group-item">
                    <div className='float-left'>
                    Phone Number : 
                    </div>
                    <div className='float-right'>
                        {users.phoneNumber}
                    </div>
                </li>
                <li className="list-group-item">
                    <div className='float-left'>
                    Email : 
                    </div>
                    <div className='float-right'>
                        {users.emailAddress}
                    </div>
                </li>
                <li className="list-group-item">
                    <div className='float-left'>
                    User Id : 
                    </div>
                    <div className='float-right'>
                        {users._id}
                    </div>
                </li>


            </ul>
        </div>
    )
}
export default Profile