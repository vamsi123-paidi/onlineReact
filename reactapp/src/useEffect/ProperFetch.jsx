import React, { useEffect, useState } from 'react'

const ProperFetch = () => {
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true)

    const fetchData =async ()=>{
        try{
            const response =await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            setUsers(data)
            console.log(data)
        }
        catch(error){
            console.log("error fething users:",error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
        {loading?(<p>Loding users data...</p>):(
            users.map((user)=>(
                <li>{user.name}</li>
            ))
        )}
    </>
  )
}

export default ProperFetch