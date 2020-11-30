import React, {useState, useEffect} from "react";
import API from "../utils/API"

function Profile () {

    const [users, setUsers] = useState([])
    const [pets, setPets] = useState([])
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        loadUsers()
      },[])


    function loadUsers() {
        console.log("Loading Users...")
        let user="Levi"
        API.getUsers(user)
          .then(async function(res){
            await setUsers(res.data)
            loadPets()
            // console.log("USER LOG",users)
          })
          .catch(err => console.log(err))
      };

      function loadPets(){
        console.log("Loading Pets...", users._id)
        
        API.getPet(users._id)
          .then(async function(res){
            await setPets(res.data)
            // console.log("Pets LOG",pets)
            loadSchedule()
          })
          .catch(err => console.log(err))
      }
      function loadSchedule(){
        console.log("Loading Schedule...")
        let user="Levi"
        API.getSchedule(user)
          .then(async function(res){
            await setSchedule(res.data)
            // console.log("Pets LOG",pets)
          })
          .catch(err => console.log(err))
      }

    //   console.log("Schedule LOG",schedule)

    return (
        <div className='container container-sm-float'>
            <div className='display-4 mb-3'>
                {users.fullName}'s Profile
            </div>
            <ul className="list-group list-group-flush">
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
            <div className='display-4 mb-3 mt-3'>
                Pets
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
                    <div className='float-left'>
                    Pet Name : 
                    </div>
                    <div className='float-right'>
                        {pets.petName}
                    </div>
                </li>

            <li className="list-group-item">
                    <div className='float-left'>
                    Breed : 
                    </div>
                    <div className='float-right'>
                        {pets.breed}
                    </div>
                </li>

                <li className="list-group-item">
                    <div className='float-left'>
                    Size : 
                    </div>
                    <div className='float-right'>
                        {pets.size}
                    </div>
                </li>
                <li className="list-group-item">
                    <div className='float-left'>
                    Date Added : 
                    </div>
                    <div className='float-right'>
                        {pets.date}
                    </div>
                </li>
            
            </ul>
            <div className='display-4 mb-3 mt-3'>
                Upcoming Bookings
                </div >
                    <ul className="list-group list-group-flush mb-5">
                    <li className="list-group-item">
                        <div className='float-left'>
                        Pet : 
                        </div>
                        <div className='float-right'>
                            {schedule.petName}
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className='float-left'>
                        Notes : 
                        </div>
                        <div className='float-right'>
                            {schedule.note}
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className='float-left'>
                        Check-In : 
                        </div>
                        <div className='float-right'>
                            {schedule.checkIn}
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className='float-left'>
                        Check-Out : 
                        </div>
                        <div className='float-right'>
                            {schedule.checkOut}
                        </div>
                    </li>
                </ul>
        </div>
    )
}
export default Profile