import React from "react";
import "./App.css";
import HompePage from "./Pages/Homepage/HompePage";
import ShopPage from "../src/Pages/Shop/Shop";
import { Route, Switch } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import SigninSignup from "./Pages/SigninAndSignup/SigninAndSignup";
import {
  auth,
  createuserProfileDocument
} from "../src/Firebase/Firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createuserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HompePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
