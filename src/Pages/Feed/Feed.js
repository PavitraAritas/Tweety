import { useContext } from "react";

import "./Feed.css";
import Post from "../../Components/Post/Post";
import TweetBox from "../../Components/TweetBox/TweetBox";
import FlipMove from "react-flip-move";
import useFeed from "../../hooks/useFeed";
import RepositoryContext from "../../Context/RepositoryContext";

function Feed() {
  const { feedTweets } = useFeed();
  const { repository } = useContext(RepositoryContext);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/*Tweetbox*/}
      <TweetBox
        sendTweetCB={(tweetMessage, tweetImage) =>
          repository.sendTweet(tweetMessage, tweetImage)
        }
      />

      {/*AudioBox*/}
      <FlipMove>
        {feedTweets.map((post) => {
          return (
            <Post
              key={post.text}
              displayName={post.displayName}
              userName={post.userName}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
              timestamp={
                post.timestamp ? post.timestamp.toDate().toISOString() : ""
              }
            />
          );
        })}
      </FlipMove>
      {/* <Post />
            <Post />
            <Post />
            <Post /> */}
    </div>
  );
}

export default Feed;
