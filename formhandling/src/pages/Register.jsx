import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.username || !form.email || !form.password) {
            setError("All fields are required")
            return
        }

        localStorage.setItem("user", JSON.stringify(form))
        navigate('/login')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label><br />
                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={form.username}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="password">Password:</label><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                    required
                /><br />

                <p style={{ color: "red" }}>{error}</p>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Register
