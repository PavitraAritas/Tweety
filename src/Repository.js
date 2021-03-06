import { db, auth, storage } from "./firebase";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";

async function fetchProfileTweets(userId) {
  try {
    let tweets = await db
      .collection("tweets")
      .where("userId", "==", userId)
      .orderBy("timestamp", "desc")
      .get();

    
    return tweets;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function sendTweet(
  tweetMessage,
  tweetImage,
  userName,
  name,
  userId,
  avatar,
  likes
) {
  let tweetId = uuidv4();
  let imageURL;
  if (tweetImage) {
    imageURL = await handleUpload(tweetImage);
  }
  if (!imageURL) {
    imageURL = "";
  }
  await db
    .collection("tweets")
    .doc(tweetId)
    .set({
      tweetId: tweetId,
      displayName: name,
      userName: userName,
      verified: true,
      text: tweetMessage,
      image: imageURL,
      avatar: avatar ?? "",
      userId: userId,
      comments: 0,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      likes: likes
    });
}

async function signUp(email, username, password, name) {
  try {
    const authUser = await auth.createUserWithEmailAndPassword(email, password);
    await createProfile(username, email, name, authUser.user.uid);
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
    return imageUrl;
  } catch (e) {
    console.log(e);
  }
}

async function createProfile(username, email, name, userId) {
  try {
   await db.collection("users").doc(userId).set({
      userId: userId,
      name: name,
      userName: username,
      email: email,
      verified: true,
      joinDate: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    alert(error.message);
  }
}

async function signOut() {
  await auth.signOut();
}

async function getUser(userId) {
  try {
    let user = await db.collection("users").doc(userId).get();
    return user.data();
  } catch (error) {
    alert(error.message); //catch is used to catch exceptions
  }
}

async function tweetComment(
  comment,
  username,
  tweetId,
  avatar,
  name,
  userId,
  verified,
  count,
) {
  try {
    let commentId = uuidv4();
    await db
      .collection("tweets")
      .doc(tweetId)
      .collection("comments")
      .doc(commentId)
      .set({
        text: comment,
        userName: username,
        commentId: commentId,
        avatar: avatar ?? "",
        displayName: name,
        userId: userId,
        verified: verified,
        comments: 0,
        likes: {},
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      await db
      .collection("tweets")
      .doc(tweetId)
      .set({comments : count+1}, {merge: true})
  } catch (error) {
    alert(error.message);
  }
}

async function updateProfile(user, avatar, banner) {
  try{
    let avatarURL, bannerURL;
    if(avatar){
      avatarURL = await handleUpload(avatar)
    }
    if(banner){
      bannerURL = await handleUpload(banner)
    } 
    if(avatarURL && avatarURL.length > 0){
      user.avatar=avatarURL
    }
    if(bannerURL && bannerURL.length > 0){
      user.banner=bannerURL
    }
    await db.collection("users").doc(user.userId).update(user); 
  } catch(error){
    alert(error.message)
  }
}

async function updateLikes(tweetId, likes){
  try{
    await db.collection("tweets").doc(tweetId).update({likes:likes})
  }catch(error){
    alert(error.message)
  }
}

export {
  fetchProfileTweets,
  sendTweet,
  signUp,
  signIn,
  createProfile,
  signOut,
  getUser,
  tweetComment,
  updateProfile,
  updateLikes
};
