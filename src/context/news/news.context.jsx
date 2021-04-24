import React, {createContext, useContext, useState } from 'react'

export const NewsContext = createContext({
    posts: null,
    getPosts: () => {},
    getPost: () => {},
    createPost: () => {},
    updatePost: () => {},
    deletePost: () => {}
})

export const useNewsContext = () => useContext(NewsContext)

export default function NewsProvider ({children}) {
    const [posts, setPosts] = useState(null)

    const getPosts = (posts) => {
        setPosts(posts)
    }

    const getPost = () => {}

    const createPost = () => {}

    const updatePost = () => {}

    const deletePost = () => {}

    // console.log(process.env.REACT_APP_BACKEND_ENDPOINT)
    // console.log(process.env.BACKEND_ENDPOINT)

    return (
        <NewsContext.Provider
            value={{
                posts,
                getPosts,
                getPost,
                createPost,
                updatePost,
                deletePost,
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}