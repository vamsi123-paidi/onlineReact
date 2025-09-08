import React from 'react'
import { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { Link } from 'react-router-dom'

const Post = () => {
    const { posts, loading } = useContext(PostContext)

    if (loading) return <h1>Loading data.....</h1>
    return (
        <>
            <div>
                <h2>Posts</h2>
                <ul>
                    {posts.map((post)=>(
                        <li>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Post