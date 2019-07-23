import React from "react";

import "./Menu-Item.scss";

const MenuItem = ({ title, imageURL, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageURL})` }}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
