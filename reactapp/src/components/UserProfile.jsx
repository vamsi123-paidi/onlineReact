import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const {userID} = useParams();
    const [user,setUser] = useState(null);
    useEffect(()=>{
              fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
              .then(res=>res.json())
              .then(data =>setUser(data))
              .catch("error is fetching")
        },[userID])

        if(!user){
            return <div>Loading .....</div>
        }
  return (
    <>
        <h1>{user.name}</h1> 
        <p>Email{user.email}</p>
    </>
  )
}

export default UserProfile