import { Avatar } from "@material-ui/core";
import React from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import "./PostDetails.css";
import Comments from "../../../Pages/Comments/Comments";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
    <div className="postDetails">
      <div>
      <div className="postDetails__body">
      <div className="postDetails__stickyHeader">
        <ArrowBackIcon/>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            paddingBottom: "2px",
            paddingLeft: "10px",
          }}
        >
          Crazy
        </div>
      </div>
        <div className="postDetails__header">
          <div className="postDetails__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="postDetails__headerText">
            <h3>
              Pavitra Aritas
              <div className="postDetails__headerSpecial">
                {verified && <VerifiedUserIcon className="postDetails__badge" />} @
                pavi_aritas
              </div>
            </h3>
          </div>
        </div>
        <div className="postDetails__headerDescription">
          <p>Man oh Man of my bestfriend</p>
        </div>
        <img
          src="https://i.pinimg.com/originals/ae/41/e1/ae41e1bd7b07b5a3bd3f81ffbf1d1920.gif" // {image && image.length > 0 && (
          alt=""
          style={{
            height: "400px",
            width: "600px",
            margin: "0px",
            alignSelf: "center",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
         <div className="postDetails__headerSpecial" style={{padding: "10px"}}>
                {verified && <VerifiedUserIcon className="postDetails__badge" />} 9pm . 17 July 2021 . Buffer
              </div>
        <div className="postDetails__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" className="postDetails__foot" />
          <PublishRoundedIcon fontSize="small" />
        </div>
      </div>
      </div>
      <Comments />
    </div>
  );
};

export default PostDetail;
