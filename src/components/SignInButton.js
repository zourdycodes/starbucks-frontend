import React from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import "../styles/SignInButton.css";

export const SignInButton = () => {
  return (
    <Link className="signInButton" to={ROUTES.SIGN_IN}>
      Sign in
    </Link>
  );
};
