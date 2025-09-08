import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import { PostProvider } from './context/PostContext'
import Home from './pages/Home'
import Post from './pages/Post'
import PostDetails from './pages/PostDetails'

const App = () => {
  return (
    <>
      <PostProvider>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to='/posts'>Posts</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Post/>}/>
            <Route path='/posts/:id' element={<PostDetails/>}/>
        </Routes>
      </PostProvider>
    </>
  )
}

export default App