import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Comments.css";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import GifIcon from "@material-ui/icons/Gif";
import BarChartIcon from "@material-ui/icons/BarChart";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";

function Comments() {
  const [comment, setComment] = useState("");

  return (
    <form>
      <div className="comment__input">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU" />
        <input placeholder="Tweet your reply" type="text" />
      </div>
      <div className="comment__icons">
        <AddPhotoAlternateOutlinedIcon />
        <GifIcon />
        <BarChartIcon />
        <SentimentSatisfiedOutlinedIcon />
        <ScheduleOutlinedIcon />
        <Button className="comment__button">Reply</Button>
      </div>
      
      {/* <div className="post">
        <div className="post__avatar">
          <Avatar />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Pavitra Aritas
                <span className="post__headerSpecial">
                   <VerifiedUserIcon className="post__badge" />
                  @pavi_letmedown . 16h
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Just another Product of Today</p>
            </div>
          </div>
          {image && image.length > 0 && <img
            src={image}
            alt=""
            style={{
              height: "300px",
              width: "500px",
              margin: "10px",
              alignSelf: "center",
              borderRadius: "20px",
              objectFit: 'cover'
            }}
          />}
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" className="post__foot" />
            <PublishRoundedIcon fontSize="small" />
          </div>
        </div>
      </div> */}
    </form>
  );
}

export default Comments;
