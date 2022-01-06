import { Avatar, Button, Modal } from "@material-ui/core";
import React, { useState } from "react";
import "./Profile.css";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import TweetList from "../../Components/TweetList/TweetList";
import useFeed from "../../hooks/useFeed";
import useProfile from "../../hooks/useProfile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@material-ui/icons/Close";

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    pl: 0,
    borderRadius: "20px",
    overflowY: "scroll",
    height: 400,
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
      <div>
        <div className="profile__banner">
          <div>
            <div>
              <img
                src="https://pbs.twimg.com/profile_banners/734289142570307585/1612156103/600x200"
                alt="banner"
              />
            </div>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_7UnLSQ6Y5O20pzNU2mj4OKScxDoTfpKPg&usqp=CAU"
              className="profile__avatar"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50px",
                border: "5px solid white",
                position: "relative",
              }}
            />
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
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div
                    style={{
                      position: "sticky",
                      top: "0",
                      zIndex: "100",
                      backgroundColor: "blanchedalmond",
                      border: "1px solid var(--twitter-background)",
                      paddingLeft: "10px",
                    }}
                  >
                    <div style={{ padding: "10px", display: "flex" }}>
                      <CloseIcon style={{ paddingRight: "10px" }} />
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          paddingBottom: "2px",
                        }}
                      >
                        <span>Edit Profile</span>
                      </div>
                      <Button style={{ left: "60%" }}>Save</Button>
                    </div>
                  </div>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      p: 0.5,
                      columnGap: "2px",
                    }}
                  >
                    <img
                      src="https://pbs.twimg.com/profile_banners/734289142570307585/1612156103/600x200"
                      alt="banner"
                    />
                    <Avatar />
                    <input
                      placeholder="Name"
                      type="text"
                      style={{ padding: "15px", margin: 5 }}
                    />
                    <input
                      placeholder="Bio"
                      type="text"
                      style={{ padding: "30px", margin: 5 }}
                    />
                  </Typography>
                </Box>
              </Modal>
            </div>
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
      {tabs[activeTab]}
    </div>
  );
}

function TweetTab() {
  const { feedTweets } = useFeed();
  return <TweetList feedTweets={feedTweets} />;
}

export default Profile;
