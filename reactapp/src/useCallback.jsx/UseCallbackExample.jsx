import React, { useCallback, useState } from 'react'

const UseCallbackExample = () => {
    const [count,setCount]= useState(0)
    const increment = useCallback(()=>{
        setCount(c =>c+1)
    })
  return (
    <>
        <p>{count}</p>
        <button onClick={increment}>increase</button>
    </>
  )
}

export default UseCallbackExample