import React from 'react'
import About from './About'

const Home = ({user}) => {
  return (
    <div>
        <About user={user}/>
        <h1>{user.name} is from home</h1>
        <div>Home data</div>
    </div>
  )
}

export default Home