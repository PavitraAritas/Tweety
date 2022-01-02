import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Profile.css";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import TweetList from "../../Components/TweetList/TweetList";
import useFeed from "../../hooks/useFeed";

function Profile() {
  const tabs = [<TweetTab />];
  const [activeTab, setactiveTab] = useState(0);
  const tabLabels = ["Tweets", "Tweets & Replies", "Media", "Likes"];
  return (
    <div className="profile">
      <div className="profile__header">
        <div style={{ padding: "10px" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              paddingBottom: "2px",
            }}
          >
            Pavitra Aritas
          </div>
          <div style={{ fontSize: "12px", color: "gray" }}>100 tweets</div>
        </div>
      </div>
      <div className="profile__banner">
        <img
          src="https://pbs.twimg.com/profile_banners/734289142570307585/1612156103/600x200"
          alt="banner"
        />
        <div style={{ height: 60 }}>
          <div className="profile__avatar">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU"
              sx={{ width: 100, height: 100 }}
            />
          </div>
        </div>
        <div
          style={{ fontSize: "18px", fontWeight: "bold", paddingBottom: "2px" }}
        >
          Pavitra Aritas
        </div>
        <div style={{ fontSize: "17px", color: "gray" }}>@pavi_aritas</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <DateRangeRoundedIcon />
          <h6>5th July 2021</h6>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <h5 style={{ padding: "5px" }}>5 Following</h5>
          <h5 style={{ padding: "5px" }}>51 Followers</h5>
        </div>
        <ul className="profile__nav">
          {tabLabels.map((e, index) => (
            <li onClick={() => {setactiveTab(index)}}>{e}</li>
          ))}
        </ul>
      </div>
      {tabs[activeTab]}
    </div>
  );
}

function TweetTab() {
  const { feedTweets } = useFeed();
  return <TweetList feedTweets={feedTweets} />;
}

export default Profile;
