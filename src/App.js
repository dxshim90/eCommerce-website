import React from "react";
import "./App.css";
import HompePage from "./Pages/Homepage/HompePage";
import ShopPage from "../src/Pages/Shop/Shop";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HompePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
