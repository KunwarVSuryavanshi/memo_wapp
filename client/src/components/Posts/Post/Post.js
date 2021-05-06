import React from 'react'
import style from './styles'
import {Card, CardAction, Typography, Button, CardContent, CardMedia, ListItemAvatar} from '@material-ui/core'
// import {ThumbUpAltIcon} from '@material-ui/icons'
// import {DeleteIcon} from '@material-ui/icons'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function Post({post}) {
    const classes = style()
    return (
        <Card>
            <CardMedia image={ListItemAvatar.selectedFile} title={post.title}/>
            <div>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2"></Typography>
            </div>
            <div>
                <Button style={{color:'white'}} size="small" onClick={()=>{}}>
                    <MoreHorizIcon/>
                </Button>
            </div>
            <div>
                <Typography>{post.tags.map((tag)=>`#${ tag } `)}</Typography>
            </div>
        </Card>
    )
}

export default Post