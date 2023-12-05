import React from "react";
import "./SideBar.css";

export default function HelpButton() {
  const handleClick = () => {
    console.log('"Need help?" is clicked');
  };

  return (
    <p className="help-button" onClick={handleClick}>
      Need help?
    </p>
  );
}
