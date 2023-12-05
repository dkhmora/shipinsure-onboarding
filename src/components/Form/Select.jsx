import React from "react";
import SelectItem from "./SelectItem";
import "./Form.css";

export default function Select({ items, selectedIndex }) {
  return (
    <div>
      {items.map((item, index) => (
        <SelectItem value={item} selected={selectedIndex === index} />
      ))}
    </div>
  );
}
