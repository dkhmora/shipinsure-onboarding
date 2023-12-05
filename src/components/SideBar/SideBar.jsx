import React from "react";
import "./SideBar.css";
import Header from "./Header";
import Steps from "./Steps";
import HelpButton from "./HelpButton";

export default function SideBar({ steps }) {
  return (
    <div className="sidebar-container">
      <Header steps={steps} />
      <Steps steps={steps} />
      <HelpButton />
    </div>
  );
}
