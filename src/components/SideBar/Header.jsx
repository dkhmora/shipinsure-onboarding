import React from "react";
import SideBarHeaderImage from "../../assets/images/sidebar-header.png";
import "./SideBar.css";

export default function SideBarHeader() {
  return (
    <div className="sidebar-header-container">
      <div className="sidebar-header-image">
        <img src={SideBarHeaderImage} alt="sidebar-header" />
      </div>

      <div className="sidebar-header-text-overlay">
        <h1 className="sidebar-header-text">Onboarding</h1>

        <p className="sidebar-header-sub-text">0/3 steps complete!</p>
      </div>
    </div>
  );
}
