import React from "react";
import "./Comments.css";
import Post from "../Post/Post";
import useComment from "../../hooks/useComment";

// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import PublishRoundedIcon from "@material-ui/icons/PublishRounded";


function Comments({tweetId}) {
  const { comments } = useComment(tweetId);
  return (
    <div>
    {comments && comments.length > 0 && comments.map((c) => (
      <Post
        key={c.text}
        displayName={c.displayName}
        userName={c.userName}
        verified={c.verified}
        text={c.text}
        avatar={c.avatar}
        image={c.image}
        tweetId={c.tweetId}
        likes={c.likes}
        timestamp={c.timestamp ? c.timestamp.toDate().toISOString() : ""}
      />
    ))}
    </div>
  );
}

export default Comments;
