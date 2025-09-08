import React, { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import ThemeButton from './components/ThemeButton'

const App = () => {
  const [theme,setTheme]= useState("light")
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
          <h2>Theme App</h2>
          <ThemeButton/>
      </ThemeContext.Provider>
    </>
  )
}

export default App