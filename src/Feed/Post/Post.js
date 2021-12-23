import { Avatar } from '@material-ui/core'
import React from 'react'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import './Post.css';

function Post({
    displayName,
    userName,
    timestamp,
    verified,
    avatar,
    text,
    image
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                           {displayName}{" "} 
                               <span className="post__headerSpecial">
                               {verified && <VerifiedUserIcon className="post__badge" />} @{userName}
                               </span> 
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishRoundedIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
