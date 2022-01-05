import { Avatar, Button, Modal } from "@material-ui/core";
import React, { useState } from "react";
import "./Profile.css";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import TweetList from "../../Components/TweetList/TweetList";
import useFeed from "../../hooks/useFeed";
import useProfile from "../../hooks/useProfile";

function Profile({ currentUser }) {
  const tabs = [<TweetTab />];
  const [activeTab, setactiveTab] = useState(0);
  const tabLabels = ["Tweets", "Tweets & Replies", "Media", "Likes"];
  const { user } = useProfile(currentUser.uid);
  const [open, setOpen] = useState(false);

  if (user == null) {
    return <div>Loading</div>;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <span>{user.name}</span>
          </div>
          <div style={{ fontSize: "12px", color: "gray" }}>100 tweets</div>
        </div>
      </div>
      <div >
      <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU"
            className="profile__avatar"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50px",
              border: "5px solid white",
              position: "relative"
            }}
        />
      <div className="profile__banner">
        <div >
          <div>
            <img
              src="https://pbs.twimg.com/profile_banners/734289142570307585/1612156103/600x200"
              alt="banner"
            />
          </div>
        </div>
        <div style={{ paddingLeft: "4px" }}>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{user.name}</span>
            <Button class="profile__editButton" onClick={handleOpen}>
              Edit profile
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflowX: "auto",
              }}
              // aria-labelledby="simple-modal-title"
              // aria-describedby="simple-modal-description"
            >
              <div className="profile__modal">
                <AddAPhotoOutlinedIcon
                  className="profile__addImageButton"
                  style={{ width: "40px", height: "40px" }}
                />
                <div style={{ backgroundColor: "black", borderRadius: "20px" }}>
                  <img
                    src="https://pbs.twimg.com/profile_banners/734289142570307585/1612156103/600x200"
                    alt="banner"
                    style={{
                      width: "100%",
                      borderRadius: "20px",
                      opacity: "0.5",
                    }}
                  />
                </div>
              </div>
            </Modal>
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "rgb(83, 100, 113)",
              paddingBottom: "5px",
            }}
          >
            <span>{user.userName}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "rgb(83, 100, 113)",
              columnGap: "4px",
            }}
          >
            <DateRangeRoundedIcon />
            <div style={{ fontSize: "16px" }}>
              <span>12th june</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "5px",
              paddingBottom: "10px",
              padding: "5px",
              fontSize: "16px",
              color: "rgb(83, 100, 113)",
            }}
          >
            <div>
              <strong>5</strong> Following
            </div>
            <div>
              <strong>51</strong> Followers
            </div>
          </div>
        </div>
        <ul className="profile__nav">
          {tabLabels.map((e, index) => (
            <li
              onClick={() => {
                setactiveTab(index);
              }}
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
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
