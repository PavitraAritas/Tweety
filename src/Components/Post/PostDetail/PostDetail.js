import { Avatar, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import "./PostDetails.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useLocation } from "react-router-dom";
import moment from "moment-timezone";
import useProfile from "../../../hooks/useProfile";
import RepositoryContext from "../../../Context/RepositoryContext";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import GifIcon from "@material-ui/icons/Gif";
import BarChartIcon from "@material-ui/icons/BarChart";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import "../../Comments/Comments.css";
import Comments from "../../Comments/Comments"

const PostDetail = ({ currentUser }) => {
  const [comment, setComment] = useState("");
  const { user } = useProfile(currentUser.uid);
  const { repository } = useContext(RepositoryContext);
  const data = useLocation();
  const tweet = data.state;
  let date = moment(tweet.timeStamp).format("hh a. MMM D, YYYY");

  function sendComment() {
    if (comment.length > 0) {
      repository.tweetComment(
        comment,
        user.userName,
        tweet.tweetId,
        user.avatar,
        user.name,
        user.userId,
        tweet.verified
      );
    }
    setComment("");
  }

  return (
    <div>
    <div className="postDetails">
      <div>
        <div className="postDetails__stickyHeader">
          <ArrowBackIcon />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              paddingBottom: "2px",
              paddingLeft: "10px",
            }}
          >
            Tweet
          </div>
        </div>
        <div className="postDetails__body">
          <div className="postDetails__header">
            <div className="postDetails__avatar">
              <Avatar src={tweet.avatar} />
            </div>
            <div className="postDetails__headerText">
              <h3>
                {tweet.displayName}{" "}
                {tweet.verified && (
                  <VerifiedUserIcon className="postDetails__badge" />
                )}
                <div className="postDetails__headerSpecial">
                  @{tweet.userName}
                </div>
              </h3>
            </div>
          </div>
          <div className="postDetails__headerDescription">
            <p>{tweet.text}</p>
          </div>
          {tweet.image && tweet.image.length > 0 && (
            <img
              src={tweet.image} // {image && image.length > 0 && (
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
          )}
          <div
            className="postDetails__headerSpecial"
            style={{ padding: "10px" }}
          >
            {tweet.verified && (
              <VerifiedUserIcon className="postDetails__badge" />
            )}
            {date}
          </div>
          <div className="postDetails__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon
              fontSize="small"
              className="postDetails__foot"
            />
            <PublishRoundedIcon fontSize="small" />
          </div>
        </div>
      </div>
      <form>
        <div className="comment__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU" />
          <input
            placeholder="Tweet your reply"
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </div>
        <div className="comment__icons">
          <AddPhotoAlternateOutlinedIcon />
          <GifIcon />
          <BarChartIcon />
          <SentimentSatisfiedOutlinedIcon />
          <ScheduleOutlinedIcon />
          <Button className="comment__button" onClick={sendComment}>
            Reply
          </Button>
        </div>
      </form>
    </div>
    <Comments tweetId={tweet.tweetId}/>
    </div>
  );
};

export default PostDetail;
