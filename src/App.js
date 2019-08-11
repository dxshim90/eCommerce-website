import React from "react";
import "./App.css";
import HompePage from "./Pages/Homepage/HompePage";
import ShopPage from "../src/Pages/Shop/Shop";
import { Route, Switch } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import SigninSignup from "./Pages/SigninAndSignup/SigninAndSignup";
import { auth } from "../src/Firebase/Firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HompePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
