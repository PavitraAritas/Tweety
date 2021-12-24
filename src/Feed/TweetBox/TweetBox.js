import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button} from '@material-ui/core';
import db from '../../firebase';
import firebase from 'firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Sylvester Stone',
            userName: 'stonned',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setTweetMessage("");
        setTweetImage("");
    }

    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU"/>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)} 
                        value={tweetMessage} 
                        placeholder="What's happening" 
                        type="text"/>
                    {/*<input placeholder="Talk your thoughts!" type="audio"/>*/}
                </div>
                <input 
                    onChange={(e) => setTweetImage(e.target.value)} 
                    value={tweetImage} 
                    className="tweetBox__imageInput" 
                    placeholder="Enter Image URL" 
                    type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
