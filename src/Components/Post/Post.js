import { Avatar } from "@material-ui/core";
import React, { forwardRef, useContext } from "react";
import moment from "moment-timezone";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import "./Post.css";
import { Link } from "react-router-dom";
import RepositoryContext from "../../Context/RepositoryContext";

const Post = forwardRef((props, ref) => {
  let displayTime = moment(props.timestamp).format("DD MMM YY");

  const {repository} = useContext(RepositoryContext)
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

  return (
    <div className="post_outline">
      <Link
        to={{
          pathname: "/comments",
          state: props,
        }}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "5px",
            marginTop: "10px",
            alignItems: "start",
            justifyContent: "start",
          }}
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
                  {props.verified && (
                    <VerifiedUserIcon className="post__badge" />
                  )}{" "}
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
      </Link>
      <div className="post__footer">
        <ChatBubbleOutlineIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon
          fontSize="small"
          className="post__foot"
          onClick={likePost}
        />
        <PublishRoundedIcon fontSize="small" />
      </div>
    </div>
  );
});

export default Post;
