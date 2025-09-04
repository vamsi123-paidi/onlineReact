import React, { useState } from 'react'

const Obj = () => {
    const [user,setUser]=useState({name:"shiva",age:25})
    const handleAge = ()=>{
        setUser({...user,age:user.age+1})
    }
  return (
    <>
       <p>{user.name}</p> 
       <p>{user.age}</p>
       <button onClick={handleAge}>Increment the age by 1</button>
    </>
  )
}

export default Obj