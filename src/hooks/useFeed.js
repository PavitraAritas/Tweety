import { useEffect, useState, useContext } from "react";
import FirebaseContext from '../Context/FirebaseContext';


export default function useFeed() {
  const [feedTweets, setFeedTweets] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  

  useEffect(() => {

    firebase.db.collection("tweets")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => setFeedTweets(snapshot.docs.map((doc) => doc.data())));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // function updateFeedTweetLikes(){
  //   feedTweets.map((tweet) => tweet.)
  // }

  return {feedTweets};
}


