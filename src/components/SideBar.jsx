import React from "react";
import SideBarHeaderImage from "../assets/images/sidebar-header.png";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div class="sidebar-container">
      <img
        src={SideBarHeaderImage}
        class="sidebar-header-image"
        alt="sidebar-header"
      />
      Sidebar
    </div>
  );
}
