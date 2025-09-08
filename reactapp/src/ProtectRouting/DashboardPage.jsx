import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const navigate = useNavigate()

  const handleLogout = ()=>{
    localStorage.removeItem("authentication")
    navigate('/loginpage')
  }
  return (
    <div>DashboardPage
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DashboardPage