import React, { useState } from 'react'

const ControlledForm = () => {
    const [name,setName] = useState("");
    const handleForm = (e)=>{
        e.preventDefault();
        alert(`hello ${name}`)
    }
  return (
    <>
        <form onSubmit={handleForm}>
            <label htmlFor="username">UserName :</label><br />
            <input type="text" placeholder='enter username'  value={name} onChange={(e)=>setName(e.target.value)}/><br />
            <button>Submit</button>
        </form>
    </>
  )
}

export default ControlledForm