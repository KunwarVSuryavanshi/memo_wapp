import React, {useContext} from 'react'
import {Grid} from '@material-ui/core'
import { DataProvider, UserContext } from '../../context.js'
import Post from './Post/Post.js'
import style from './styles'
function Posts() {
    const classes = style()
    const datas = useContext(UserContext)
    console.log("++++++++++")
    console.log(datas.data)
    const arr = datas.data
    return (
        <div>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    arr.map((item)=>{
                        return(
                            <Grid key={item._id}>
                                <Post post={item}/>
                            </Grid>
                        )
                       
                    })
                }
            </Grid>
        </div>
    )
}

export default Posts
