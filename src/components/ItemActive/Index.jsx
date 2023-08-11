import React from "react";
import "./Active.css";

function ItemActive({ isSelected, onClick }) {
  return (
    <div
      className={`box-list ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div id="item2">Active</div>
    </div>
  );
}

export default ItemActive;
