import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!form.name || !form.email || !form.password){
            setError("all fields are required")
        }

        localStorage.setItem("user",JSON.stringify(form));
        
        navigate('/login')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label><br />
                <input type="text" name='username' placeholder='enter username' value={form.username} onChange={handleChange} required /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" name='email' placeholder='enter Email' value={form.email} onChange={handleChange} required /><br />
                <label htmlFor="password">password:</label><br />
                <input type="password" name='password' placeholder='enter password' value={form.password} onChange={handleChange} required /><br />
                <p>{error}</p>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Register