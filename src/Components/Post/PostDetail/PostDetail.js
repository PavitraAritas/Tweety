import { Avatar } from "@material-ui/core";
import React from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import "./PostDetails.css";

const PostDetail = ({
  displayName,
  userName,
  timestamp,
  verified,
  avatar,
  text,
  image, 
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />} @
                {userName} . {timestamp}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Man of Man of my bestfriend</p>
          </div>
        </div>
        {image && image.length > 0 && (
          <img
            src="https://i.pinimg.com/originals/ae/41/e1/ae41e1bd7b07b5a3bd3f81ffbf1d1920.gif"
            alt=""
            style={{
              height: "300px",
              width: "500px",
              margin: "10px",
              alignSelf: "center",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        )}
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" className="post__foot" />
          <PublishRoundedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
