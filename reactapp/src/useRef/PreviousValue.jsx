import React, { useEffect, useRef, useState } from 'react'

const PreviousValue = () => {
    const [count,setCount] = useState(0)
    const preValue = useRef(null);

    useEffect(()=>{
        preValue.current=count
    },[count])
  return (
    <>
        <p>present count:{count}</p>
        <p>PreviousValue :{preValue.current}</p>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </>
  )
}

export default PreviousValue