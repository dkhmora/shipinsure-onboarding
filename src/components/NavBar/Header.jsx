import React from "react";
import SideBarHeaderImage from "../../assets/images/sidebar-header.png";
import "./SideBar.css";

export default function SideBarHeader({ steps }) {
  const completedSteps = () => steps.filter((step) => step.completed).length;

  return (
    <div className="sidebar-header-container">
      <div className="sidebar-header-image-container">
        <img src={SideBarHeaderImage} className="sidebar-header-image" alt="sidebar-header" />
      </div>

      <div className="sidebar-header-text-overlay">
        <h1 className="sidebar-header-text">Onboarding</h1>

        <p className="sidebar-header-sub-text">
          {completedSteps()}/{steps.length} steps complete!
        </p>
      </div>
    </div>
  );
}
