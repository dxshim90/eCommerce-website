import React from "react";
import ShopData from "./ShopData";
import Collection from "../../Components/Collection/Collection";

class ShopPage extends React.Component {
  state = {
    collections: ShopData
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <Collection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
