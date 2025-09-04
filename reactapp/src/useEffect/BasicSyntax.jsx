import React, { useEffect, useState } from 'react'

const BasicSyntax = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("component is rendered")
    },[count])
  return (
    <>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>increse</button>
    </>
  )
}

export default BasicSyntax