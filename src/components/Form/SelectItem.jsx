import React from "react";
import RectangleIcon from "../../assets/icons/Rectangle.svg";
import "./Form.css";

export default function SelectItem({ value }) {
  return (
    <div className="select-item-container">
      <img src={RectangleIcon} className="select-item-icon" alt="rectangle-icon" />

      <p className="select-item-text">{value}</p>
    </div>
  );
}
