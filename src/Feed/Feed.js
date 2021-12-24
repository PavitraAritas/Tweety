import React, { useState, useEffect } from 'react';
import './Feed.css';
import Post from './Post/Post';
import TweetBox from './TweetBox/TweetBox';
import db from '../firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
          .orderBy('timestamp', 'desc')
          .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/*Tweetbox*/}
            <TweetBox />

            {/*AudioBox*/}
            <FlipMove>
            {posts.map(post => {
                return(
                <Post 
                    key={post.text}
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    timestamp={post.timestamp ? post.timestamp.toDate().toISOString() : ''}/>)

                })}
            </FlipMove>
            {/* <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>
    )
}

export default Feed
