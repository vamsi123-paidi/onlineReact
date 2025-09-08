import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navagate = useNavigate()
    const handleLogin=()=>{
        navagate('/login')
    }
  return (
    <div>Dashboard
        <button onClick={handleLogin}>Go to login</button>
        <nav>
            <Link to="profile">Profile</Link>
            <Link to="settings">settings</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Dashboard