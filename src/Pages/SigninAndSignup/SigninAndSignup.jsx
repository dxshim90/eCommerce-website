import React from "react";

import "./SigninAndSignup.scss";

import Signin from "../../Components/Signin/Signin";
import SignUp from "../../Components/SignUp/Signup";

const SigninAndSignup = () => {
  return (
    <div className="signin-signup">
      <Signin />
      <SignUp />
    </div>
  );
};

export default SigninAndSignup;
