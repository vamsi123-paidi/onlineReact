import React, { useRef } from 'react'

const FocusElement = () => {
    const inputRef = useRef(null)
    const focusInput = ()=>{
        inputRef.current.focus();
    }
  return (
    <>
        <input type="text" ref={inputRef} placeholder='type here...'/>
        <button onClick={focusInput}>focus Input</button>
    </>
  )
}

export default FocusElement