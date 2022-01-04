import React, { useState, useRef } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import GifIcon from "@material-ui/icons/Gif";
import BarChartIcon from "@material-ui/icons/BarChart";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

function TweetBox({ sendTweetCB }) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const hiddenFile = useRef(null);

  const sendTweet = (e) => {
    if (tweetMessage) {
      sendTweetCB(tweetMessage, image);
      setTweetMessage("");
      setImage(null);
      setPreview(null);
    }
  };

  function handleImageClick() {
    hiddenFile.current.click();
  }

  function handleFile(e) {
    e.preventDefault();
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  function removeImage() {
    setImage(null);
    setPreview(null);
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        {preview && (
          <div style={{ position: "relative", alignSelf: "center" }}>
            <HighlightOffRoundedIcon
              className="tweetBox__imageCloseButton"
              onClick={removeImage}
            />
            <img
              src={preview}
              alt=""
              style={{
                height: "300px",
                width: "500px",
                margin: "10px",
                alignSelf: "center",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        {/*<input placeholder="Talk your thoughts!" type="audio"/>*/}
        <input
          style={{ display: "none" }}
          onChange={handleFile}
          ref={hiddenFile}
          type="file"
          alt="uploadImage"
        />
        <div className="tweetBox__icons">
          <AddPhotoAlternateOutlinedIcon onClick={handleImageClick} />
          <GifIcon />
          <BarChartIcon />
          <SentimentSatisfiedOutlinedIcon />
          <ScheduleOutlinedIcon />
          <Button onClick={sendTweet} className="tweetBox__button">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
