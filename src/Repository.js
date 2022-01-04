import { db, auth, storage } from "./firebase";
import firebase from "firebase";

function fetchTweets() {
  let tweets = [];
  db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) =>
      snapshot.docs.map((doc) => tweets.push(doc.data()))
    );

  return tweets;
}

async function sendTweet(tweetMessage, tweetImage) {
  console.log("send tweet called");
  let imageURL;
  if (tweetImage) {
    imageURL = await handleUpload(tweetImage);
  }
  if (!imageURL) {
    imageURL = "";
  }
  await db.collection("posts").add({
    displayName: "Sylvester Stone",
    userName: "stonned",
    verified: true,
    text: tweetMessage,
    image: imageURL,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU",
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

async function signUp(email, username, password, name) {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await createProfile(username, email, name);
  } catch (error) {
    alert(error.message);
  }
}

function signIn(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message));
}

async function handleUpload(image) {
  try {
    const uploadTask = await storage.ref(`images/${image.name}`).put(image);
    let imageUrl = await uploadTask.ref.getDownloadURL();
    console.log(image, imageUrl);
    return imageUrl;
  } catch (e) {
    console.log(e);
  }
}

async function createProfile(username, email, name) {
  try { 
    let self = await db.collection("users").add({  
      name: name,
      userName: username,
      email: email,
      verified: true,
      joinDate: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("user collection", self);
  } catch (error) {
    alert(error.message);
  }
}

async function signOut() {
  await auth.signOut();
}

export { fetchTweets, sendTweet, signUp, signIn, createProfile, signOut };
