import React from 'react'
import Post from './Post/Post.js'
import style from './styles'
function Posts() {
    const classes = style()
    return (
        <div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts
