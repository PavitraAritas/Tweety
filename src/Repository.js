import { db } from "./firebase";
import firebase from "firebase";

function fetchTweets() {
  let tweets = [];
  db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => snapshot.docs.map((doc) => tweets.push(doc.data())));

  return tweets;
}

function sendTweet(tweetMessage, tweetImage) {
  db.collection("posts").add({
    displayName: "Sylvester Stone",
    userName: "stonned",
    verified: true,
    text: tweetMessage,
    image: tweetImage,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU",
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
export { fetchTweets, sendTweet };
