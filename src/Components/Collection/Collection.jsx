import React from "react";
import "./Collection.scss";
import CollectionItem from "../Collection-Item/CollectionItem";

const Collection = ({ title, items }) => {
  return (
    <div className="collection-container">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
