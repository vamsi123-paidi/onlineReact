import { useState,useEffect } from "react";
import { createContext } from "react";

export const PostContext = createContext();

export function PostProvider({children}) {
    const [posts, setPosts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts(data.slice(0, 10))
            }
            catch (err) {
                console.log("error in fetching posts", err)
            }
            finally{
                setLoading(false)
            }

        }
        fetchData();
    }, [])
    return (
        <PostContext.Provider value={{posts,loading}}>
            {children}
        </PostContext.Provider>
    )
}

