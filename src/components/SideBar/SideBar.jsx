import React from "react";
import "./SideBar.css";
import Header from "./Header";
import Steps from "./Steps";

export default function SideBar() {
  return (
    <div class="sidebar-container">
      <Header />
      <Steps />
    </div>
  );
}
