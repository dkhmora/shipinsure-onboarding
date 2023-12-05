import React from "react";
import SideBarHeaderImage from "../../assets/images/sidebar-header.png";
import "./SideBar.css";

export default function SideBarHeader() {
  return (
    <div>
      <img
        src={SideBarHeaderImage}
        class="sidebar-header-image"
        alt="sidebar-header"
      />
    </div>
  );
}
