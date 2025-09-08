import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeButton = () => {
    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <>
        <p>Current theme : {theme}</p>
        <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>Change Theme</button>
    </>
  )
}

export default ThemeButton