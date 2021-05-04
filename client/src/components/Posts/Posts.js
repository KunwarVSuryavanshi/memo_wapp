import React, {useContext} from 'react'
import { DataProvider } from '../../context.js'
import Post from './Post/Post.js'
import style from './styles'
function Posts() {
    const classes = style()
    const datas = useContext(DataProvider)
    return (
        <div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts
