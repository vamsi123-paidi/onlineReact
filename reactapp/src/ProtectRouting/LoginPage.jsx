import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navagate = useNavigate()
    const handleLogin = ()=>{
        localStorage.setItem("authentication","true")
        navagate("/dashboardpage")
    }
  return (
    <>
        <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default LoginPage