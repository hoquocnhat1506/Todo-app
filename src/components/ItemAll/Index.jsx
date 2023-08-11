import React from "react";
import "./All.css";

function ItemAll({ isSelected, onClick }) {
  return (
    <div
      className={`box-list ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div id="item1">All</div>
    </div>
  );
}

export default ItemAll;
