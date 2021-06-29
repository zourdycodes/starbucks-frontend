import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import * as ROUTES from "../constants/routes";

export const SignUpButton = () => {
  return (
    <Link className="signUpButton" to={ROUTES.CREATE_ACCOUNT}>
      Join now
    </Link>
  );
};
