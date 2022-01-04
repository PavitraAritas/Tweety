import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Profile.css";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
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
        <div style={{position: 'relative'}}>
        <AddAPhotoOutlinedIcon />
        <img
          src="https://pbs.twimg.com/profile_banners/734289142570307585/1612156103/600x200"
          alt="banner"
        />
        </div>
        <div style={{ height: 60 }}>
          <div className="profile__avatar">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU"
              sx={{ width: 100, height: 100 }}
            />
          </div>
        </div>
        <div style={{paddingLeft: '4px'}}>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Pavitra Aritas
        </div>
        <div style={{ fontSize: "15px", color: "rgb(83, 100, 113)", paddingBottom: '5px'}}>@pavi_aritas</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: 'rgb(83, 100, 113)',
            columnGap: '4px'
          }}
        >
          <DateRangeRoundedIcon />
          <div style={{fontSize: '16px'}}>Joined July 2021</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: '5px',
            paddingBottom: "10px",
            padding: "5px", 
            fontSize: '16px',
            color: 'rgb(83, 100, 113)'
          }}
        >
          <div><strong>5</strong> Following</div>
          <div><strong>51</strong> Followers</div>
        </div>
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
