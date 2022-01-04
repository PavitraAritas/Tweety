import { useContext } from "react";

import "./Feed.css";
//import Post from "../../Components/Post/Post";
import TweetBox from "../../Components/TweetBox/TweetBox";
//import FlipMove from "react-flip-move";
import useFeed from "../../hooks/useFeed";
import RepositoryContext from "../../Context/RepositoryContext";
import TweetList from "../../Components/TweetList/TweetList";

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
        sendTweetCB={(tweetMessage, image) =>
          repository.sendTweet(tweetMessage, image)
        }
      />

      {/*AudioBox*/}
      <TweetList
       feedTweets={feedTweets}/>
      {/* <Post />
            <Post />
            <Post />
            <Post /> */}
    </div>
  );
}

export default Feed;
