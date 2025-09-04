import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(res=>res.json())
          .then(data =>setUsers(data))
          .catch("error is fetching")
    },[])
  return (
    <>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
    </>
  )
}

export default FetchData