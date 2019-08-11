import React from "react";

import "./Button.scss";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} btn `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
