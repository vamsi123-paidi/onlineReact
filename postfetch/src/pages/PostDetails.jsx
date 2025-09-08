import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { PostContext } from '../context/PostContext';

const PostDetails = () => {
    const {id}= useParams();
    const{posts} = useContext(PostContext)

    const post = posts.find((p)=>p.id===parseInt(id))

    if(!post) return <p>Post not found</p>
  return (
    <>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </>
  )
}

export default PostDetails