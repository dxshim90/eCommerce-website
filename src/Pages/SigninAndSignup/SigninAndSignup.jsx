import React from "react";

import "./SigninAndSignup.scss";

import Signin from "../../Components/Signin/Signin";

const SigninAndSignup = () => {
  return (
    <div className="signin-signup">
      SignIn OR Sign Up
      <Signin />
    </div>
  );
};

export default SigninAndSignup;
