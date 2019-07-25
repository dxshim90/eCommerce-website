import React from "react";
import FormInput from "../FormInput/Forminput";
import Button from "../Button/Button";
import { signInWithGoogle } from "../../Firebase/Firebase.utils";

import "./signin.scss";

class Signin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already Have An Account?</h2>
        <span>Signin with your email and password</span>

        <form onSubmit={this.handleSubmit} action="" method="post">
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <Button type="submit"> Sign In </Button>
          <Button onClick={signInWithGoogle}>
            {""} Signin With Google {""}
          </Button>
        </form>
      </div>
    );
  }
}

export default Signin;
