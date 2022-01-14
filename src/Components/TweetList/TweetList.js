import React from "react";
import Post from "../Post/Post";
import FlipMove from "react-flip-move";



function TweetList({ feedTweets, user }) {

  return (
    <FlipMove>
      {feedTweets.map((post) => {
        return (
          <Post
            key={post.tweetId}
            likes={post.likes}
            user={user}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            tweetId={post.tweetId}
            timestamp={
              post.timestamp ? post.timestamp.toDate().toISOString() : ""
            }
          />
        );
      })}
    </FlipMove>
  );
}

export default TweetList;
