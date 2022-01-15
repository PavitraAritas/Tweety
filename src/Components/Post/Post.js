import { Avatar } from "@material-ui/core";
import React, { forwardRef, useContext } from "react";
import moment from "moment-timezone";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import "./Post.css";
import { Link, useHistory } from "react-router-dom";
import RepositoryContext from "../../Context/RepositoryContext";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Post = forwardRef((props, ref) => {
  let displayTime = moment(props.timestamp).format("DD MMM YY");

  const { repository } = useContext(RepositoryContext);
  function likePost() {
    const likes = props.likes;
    if (likes[props.user.uid] && likes[props.user.uid] === true) {
      likes[props.user.uid] = false;
    } else if (likes[props.user.uid] && likes[props.user.uid] === false) {
      likes[props.user.uid] = true;
    } else {
      likes[props.user.uid] = true;
    }
    repository.updateLikes(props.tweetId, likes);
  }

  function NoOfLikes() {
    let likeCount = 0;
    Object.keys(props.likes).map(function (key, index) {
      if (props.likes[key] === true) {
        return likeCount++;
      }
      return likeCount;
    });
    return likeCount;
  }

  const history = useHistory();

  const goToNextPage = () => {
    const {
      displayName,
      verified,
      text,
      image,
      timestamp,
      userName,
      tweetId,
      name,
      userId,
      avatar,
      comments
    } = props;
    history.push({
      pathname: "/comments",
      state: {
        displayName,
        verified,
        text,
        image,
        tweetId,
        timestamp,
        userName,
        name,
        userId,
        avatar,
        comments
      },
    });
  };

  return (
    <div className="post_outline">
      {/* <Link
        to={{

        }}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      > */}
      <div
        style={{
          display: "flex",
          padding: "5px",
          marginTop: "10px",
          alignItems: "start",
          justifyContent: "start",
        }}
        onClick={goToNextPage}
      >
        <Avatar src={props.avatar} />
        <div className="post">
          <div className="post__header">
            <h3
              style={{
                fontSize: "15px",

                paddingLeft: "5px",
              }}
            >
              {props.displayName}
              <span
                style={{ fontWeight: 600, fontSize: "14px", color: "gray" }}
              >
                {props.verified && <VerifiedUserIcon className="post__badge" />}{" "}
                @{props.userName}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "grey",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                .
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                {displayTime}
              </span>
            </h3>
          </div>
          <div className="post__body">
            <p style={{ padding: "10px", fontSize: "15px" }}>{props.text}</p>
            {props.image && props.image.length > 0 && (
              <img
                src={props.image}
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
          </div>
        </div>
      </div>
      {/* </Link> */}
      <div className="post__footer">
        <div style={{ display: "flex" }}>
          <ChatBubbleOutlineIcon
            fontSize="small"
            style={{ paddingRight: "5px" }}
          />
          <span>{props.comments}</span>
        </div>

        <div style={{ display: "flex" }}>
          <RepeatIcon fontSize="small" style={{ paddingRight: "5px" }} />
          <span>7</span>
        </div>
        <div style={{ display: "flex" }}>
          {!props.isLiked && (
            <FavoriteBorderIcon
              fontSize="small"
              className="post__favoriteIcon"
              onClick={likePost}
            />
          )}
          {props.isLiked && (
            <FavoriteIcon
              fontSize="small"
              className="post__favoriteIcon"
              onClick={likePost}
              style={{ color: "rgb(248, 37, 167)" }}
            />
          )}
          <span>{NoOfLikes() !== 0 ? NoOfLikes() : ""}</span>
        </div>
        <PublishRoundedIcon fontSize="small" />
      </div>
    </div>
  );
});

export default Post;
