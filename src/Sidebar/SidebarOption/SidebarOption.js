import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarOption.css";

function SidebarOption(props) {
  var { active, text, Icon, link, onClick } = props;

  return (
    <div onClick={onClick}>
      <NavLink
        to={link}
        className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
          <Icon />
          <h2>{text}</h2>
        </div>
      </NavLink>
    </div>
  );
}

export default SidebarOption;
