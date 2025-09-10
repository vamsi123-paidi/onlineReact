import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem("user"));
        console.log(storedData)
        console.log(form)

        if(storedData && storedData.email === form.email && storedData.password===form.password){
            localStorage.setItem("currentUser",JSON.stringify(storedData))
            navigate('/dashboard')
        }else{
            setError("invalid user data")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label><br />
                <input type="email" name='email' placeholder='enter Email' value={form.email} onChange={handleChange} required /><br />
                <label htmlFor="password">password:</label><br />
                <input type="password" name='password' placeholder='enter password' value={form.password} onChange={handleChange} required /><br />
                <p style={{color:"red"}}>{error}</p>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Login