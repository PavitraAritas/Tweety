import { Avatar, Button, Modal } from "@material-ui/core";
import React, { useState, useContext, useRef } from "react";
import "./Profile.css";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import TweetList from "../../Components/TweetList/TweetList";
import useProfile from "../../hooks/useProfile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@material-ui/icons/Close";
import RepositoryContext from "../../Context/RepositoryContext";
import moment from "moment-timezone";

function Profile({ currentUser }) {
  const tabs = [<TweetTab userId={currentUser.uid} />];
  const [activeTab, setactiveTab] = useState(0);
  const tabLabels = ["Tweets", "Tweets & Replies", "Media", "Likes"];
  const { user, updateUser } = useProfile(currentUser.uid);
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

  let date = moment(user.joinDate.toDate().toISOString()).format(
    " MMM D, YYYY"
  );

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
              {user.banner && (
                <img
                  src={user.banner}
                  alt="banner"
                  style={{
                    minWidth: "fit-content",
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              )}
              {!user.banner && (
                <img
                  src="https://image.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg"
                  alt="banner"
                  style={{
                    minWidth: "fit-content",
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {user.avatar && (
                <Avatar
                  src={user.avatar}
                  className="profile__avatar"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50px",
                    border: "5px solid white",
                    position: "relative",
                  }}
                />
              )}
              {!user.avatar && (
                <Avatar
                  src={user.avatar}
                  className="profile__avatar"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50px",
                    border: "5px solid white",
                    position: "relative",
                  }}
                />
              )}
              <Button class="profile__editButton" onClick={handleOpen}>
                Edit profile
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <EditName
                  user={user}
                  handleClose={handleClose}
                  updateUser={updateUser}
                />
              </Modal>
            </div>
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
                // paddingLeft: "17px",
              }}
            >
              <span>{user.name}</span>
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "rgb(83, 100, 113)",
                paddingBottom: "5px",
                // paddingLeft: "20px",
              }}
            >
              <span>@{user.userName}</span>
            </div>
            <div style={{ marginTop: "8px", marginBottom: "10px" }}>
              <span>{user.bio}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "rgb(83, 100, 113)",
              columnGap: "4px",
              paddingLeft: "6px",
              paddingBottom: "5px",
            }}
          >
            <DateRangeRoundedIcon />
            <div style={{ fontSize: "16px" }}>
              <span>Joined{date}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "15px",
              paddingBottom: "10px",
              padding: "5px",
              fontSize: "16px",
              color: "rgb(83, 100, 113)",
              paddingLeft: "10px",
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

function TweetTab({ userId }) {
  const { profileTweets } = useProfile(userId);
  if (profileTweets.length === 0) {
    return <div>NO TWEETS YET</div>;
  }

  return <TweetList feedTweets={profileTweets} />;
}

function EditName({ user, handleClose, updateUser }) {
  const [editName, setEditName] = useState(user.name);
  const { repository } = useContext(RepositoryContext);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(null);
  const [banner, setBanner] = useState(null);
  const [preview, setPreview] = useState(null);

  const hiddenFileAvatar = useRef(null);
  const hiddenFileBanner = useRef(null);

  function handleAvatarClick() {
    hiddenFileAvatar.current.click();
  }

  function handleBannerClick() {
    hiddenFileBanner.current.click();
  }

  function handleFileAvatar(e) {
    e.preventDefault();
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    setAvatar(file);
    console.log({ avatar });

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  function handleFileBanner(e) {
    e.preventDefault();
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    setBanner(file);

    console.log({ banner });

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  function removeImage() {
    setBanner(null);
    setPreview(null);
  }

  const onSubmit = () => {
    let userData = {
      userId: user.userId,
      name: editName ?? user.name,
      userName: user.userName,
      email: user.email,
      verified: user.verified,
      joinDate: user.joinDate,
      bio: bio ?? user.bio === undefined ? "" : user.bio,
      avatar: avatar ?? user.avatar === undefined ? "" : user.avatar,
      banner: banner ?? user.banner === undefined ? "" : user.banner,
    };
    console.log({userData})
    // repository.updateProfile(userData, avatar, banner);
    updateUser(userData);
    handleClose();
    removeImage();
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
    scrollBehavior: "smooth",
    height: 600,
  };
  return (
    <Box sx={style}>
      <div
        style={{
          position: "sticky",
          top: "0",
          zIndex: "100",
          backgroundColor: "white",
          border: "1px solid var(--twitter-background)",
          paddingLeft: "10px",
        }}
      >
        <div style={{ padding: "10px", display: "flex" }}>
          <CloseIcon
            className="profile__closeIcon"
            style={{ marginTop: "5px", marginRight: "10px" }}
            onClick={handleClose}
          />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              paddingBottom: "2px",
              marginTop: "5px",
            }}
          >
            <span>Edit Profile</span>
          </div>
          <Button
            style={{
              left: "60%",
              border: "1px solid black",
              backgroundColor: "black",
              color: "white",
              borderRadius: "30px",
            }}
            onClick={onSubmit}
          >
            Save
          </Button>
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
        <div style={{ position: "relative" }}>
          <img
            src={
              user.banner ??
              "https://image.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg"
            }
            alt="banner"
            style={{ opacity: "0.7", width: "579px" , height: '120px'}}
          />
          <input
            style={{ display: "none" }}
            onChange={handleFileBanner}
            ref={hiddenFileBanner}
            type="file"
            alt="uploadImage"
          />
          <AddAPhotoOutlinedIcon
            style={{
              position: "absolute",
              zIndex: "4",
              top: "45%",
              left: "50%",
            }}
            onClick={handleBannerClick}
          />
        </div>
        <div style={{ position: "relative" }}>
          <Avatar
            src={user.avatar}
            style={{
              width: "65px",
              height: "65px",
              margin: "10px",
              opacity: "0.78",
            }}
          />
          <input
            style={{ display: "none" }}
            onChange={handleFileAvatar}
            ref={hiddenFileAvatar}
            type="file"
            alt="uploadImage"
          />
          <AddAPhotoOutlinedIcon
            style={{
              position: "absolute",
              zIndex: "4",
              top: "30px",
              left: "5%",
            }}
            onClick={handleAvatarClick}
          />
        </div>
        <input
          placeholder="Name"
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          style={{
            padding: "15px",
            margin: 5,
            borderRadius: "3px",
            border: "1px solid gray",
          }}
        />
        <textarea
          placeholder="Bio"
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          style={{
            padding: "30px",
            margin: 5,
            borderRadius: "3px",
            border: "1px solid gray",
          }}
        />
      </Typography>
    </Box>
  );
}

export default Profile;
