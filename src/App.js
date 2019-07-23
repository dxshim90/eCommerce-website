import React from "react";
import "./App.css";
import HompePage from "./Pages/Homepage/HompePage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HompePage} />
      </Switch>
    </div>
  );
}

export default App;
