import React, { useState } from 'react'

const Input = () => {
    const [text,setText]=useState('');
  return (
    <>
        <form>
            <label htmlFor="username">username:</label><br />
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <h1>{text}</h1>
        </form>
    </>
  )
}

export default Input