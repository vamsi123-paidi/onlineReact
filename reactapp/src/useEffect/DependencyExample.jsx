import React, { useEffect, useState } from 'react'

const DependencyExample = () => {
    const [name,setName]= useState("shiva")
    useEffect(()=>{
        console.log("name changed" ,name)
    },[name])
  return (
    <>
       <p>{name}</p> 
       <button onClick={()=>setName("abhi")}>Change name</button>
    </>
  )
}

export default DependencyExample