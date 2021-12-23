import React from 'react';
import './TweetBox.css';
import { Avatar, Button} from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU"/>
                    <input placeholder="What's happening" type="text"/>
                    {/*<input placeholder="Talk your thoughts!" type="audio"/>*/}
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter Image URL" type="text"/>
                <Button className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
