import React from "react";
import { Link } from "react-router-dom";
import { FooterSecondary, SignupForm } from "../components";
import {
  SignupContainer,
  SignupHeader,
  SignupRewards,
  Heading,
} from "../helpers/ScreenStyles";
import * as ROUTES from "../constants/routes";

export const SignupScreen = () => {
  return (
    <SignupContainer>
      <SignupHeader>
        <Link to={ROUTES.HOME}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          />
        </Link>
      </SignupHeader>
      <Heading>Create an account</Heading>
      <SignupRewards>
        <h4>STARBUCKS® REWARDS</h4>
        <p>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{" "}
          <Link>more</Link>.
        </p>
      </SignupRewards>
      <SignupForm />
      <FooterSecondary alignItems="center" flexDirection="column" />
    </SignupContainer>
  );
};
