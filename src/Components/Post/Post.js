import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import moment from "moment-timezone";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import "./Post.css";
import { Link, useHistory } from "react-router-dom";
import { NoEncryption } from "@material-ui/icons";

const Post = forwardRef((props, ref) => {
  let displayTime = moment(props.timestamp).format("DD MMM YY");

  return (
    <Link
      to={{
        pathname: "/comments",
        state: props,
      }}
      style={{
      textDecoration: 'none',
      color: 'inherit'

      }}
    >
      <div className="post_outline">
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
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" className="post__foot" />
          <PublishRoundedIcon fontSize="small" />
        </div>
      </div>
    </Link>
  );
});

export default Post;

{
  /* <div className="post" ref={ref}>
<div className="post__body">
  <div className="post__header">
    <div className="post__avatar">
      <Avatar src={avatar} />
    </div>
    <div className="post__headerText">
      <h3>
        {displayName}
        <span className="post__headerSpecial">
          {verified && <VerifiedUserIcon className="post__badge" />} @
          {userName}
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
  </div>
  <div className="post__headerDescription">
    <p>{text}</p>
  </div>
  {image && image.length > 0 && (
    <img
      src={image}
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
    <FavoriteBorderIcon fontSize="small" className="post__foot"/>
    <PublishRoundedIcon fontSize="small" />
  </div>
</div>
</div> */
}
