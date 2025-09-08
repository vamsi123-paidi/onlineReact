import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navagate = useNavigate()

    const handleDashboard = ()=>{
        navagate('/dashboard')
    }
  return (
    <div>
        login
        <button onClick={handleDashboard}>Go to dashboard</button>
    </div>
  )
}

export default Login