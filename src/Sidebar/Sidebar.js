import React, { useState } from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import {signOut} from '../Repository'

function Sidebar() {
  var [activeIcon, setActive] = useState("/");

  const onClick = (path) => {
    setActive(path);
  };

  return (
    <div className="sidebar">
      {/*Twitter icon*/}
      <TwitterIcon className="sidebar__twitterIcon" />
      {/*Sidebar options*/}
      <SidebarOption
        active={activeIcon === "/"}
        Icon={HomeIcon}
        text="Home"
        link="/"
        onClick={() => onClick("/")}
      />
      <SidebarOption Icon={SearchIcon} text="Explore" link="/" />
      <SidebarOption
        Icon={NotificationsNoneIcon}
        text="Notifications"
        link="/"
        onClick={() => onClick("/")}
      />
      <SidebarOption
        Icon={MailOutlineIcon}
        text="Messages"
        link="/"
        onClick={() => onClick("/")}
      />
      <SidebarOption
        Icon={BookmarkBorderIcon}
        text="Bookmarks"
        link="/"
        onClick={() => onClick("/")}
      />
      <SidebarOption Icon={ListAltIcon} text="Lists" link="/" />
      <SidebarOption
        active={activeIcon === "profile"}
        Icon={PersonOutlineIcon}
        text="Profile"
        link="profile"
        onClick={() => onClick("profile")}
      />
      <SidebarOption
        Icon={MoreHorizIcon}
        text="More"
        link="/"
        onClick={() => onClick("/")}
      />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      <Button variant="outlined" className="sidebar__tweet" fullWidth onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Sidebar;
