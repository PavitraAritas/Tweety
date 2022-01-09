import { useContext } from "react";

import "./Feed.css";
//import Post from "../../Components/Post/Post";
import TweetBox from "../../Components/TweetBox/TweetBox";
//import FlipMove from "react-flip-move";
import useFeed from "../../hooks/useFeed";
import RepositoryContext from "../../Context/RepositoryContext";
import TweetList from "../../Components/TweetList/TweetList";
import useProfile from "../../hooks/useProfile";

function Feed({ currentUser }) {
  const { feedTweets } = useFeed();
  const { repository } = useContext(RepositoryContext);
  const { user } = useProfile(currentUser.uid);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/*Tweetbox*/}
      <TweetBox
        sendTweetCB={(tweetMessage, image) =>
          repository.sendTweet(
            tweetMessage,
            image,
            user.userName,
            user.name,
            user.userId,
            user.avatar
          )
        }
      />

      {/*AudioBox*/}
      <TweetList feedTweets={feedTweets} user={currentUser} />
    </div>
  );
}

export default Feed;
