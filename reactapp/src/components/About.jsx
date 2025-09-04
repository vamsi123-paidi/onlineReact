import React from 'react'

const About = ({user}) => {
  return (
    <div>
        <h1>{user.name} is from about</h1>
        <h2>{user.company} from about</h2>
    </div>
  )
}

export default About