import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const auth = localStorage.getItem("authentication")==="true"
  return (
    <>
    {auth?children: <Navigate to="/loginpage" replace/>}
    </>
  )
}

export default ProtectedRoute