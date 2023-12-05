import React from "react";
import "./SideBar.css";
import Header from "./Header";
import Steps from "./Steps";
import HelpButton from "./HelpButton";

export default function SideBar() {
  return (
    <div class="sidebar-container">
      <Header />
      <Steps />
      <HelpButton />
    </div>
  );
}
