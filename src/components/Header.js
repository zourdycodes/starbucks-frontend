import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { FindStore } from "./FindStore";
import { Example } from "../animations/Example";
import { SignInButton, SignUpButton, Logout } from ".";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

export const Header = ({ menuPage }) => {
  //todo => back here
  const user = useSelector(selectUser);

  return (
    <div className={`header ${menuPage && `header__menuPage`}`}>
      <div className="header__left">
        <Link className="header__logo" to={ROUTES.HOME}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          />
        </Link>
        <Link to={ROUTES.MENU} className="header__link">
          Menu
        </Link>
        <Link to={ROUTES.HOME} className="header__link">
          Rewards
        </Link>
        <Link to={ROUTES.HOME} className="header__link">
          Gift Cards
        </Link>
      </div>
      <div className="header__right">
        <Example />
        <FindStore />
        {!user ? (
          <>
            <Link to={ROUTES.SIGN_IN}>
              <SignInButton />
            </Link>
            <Link to={ROUTES.CREATE_ACCOUNT}>
              <SignUpButton />
            </Link>
          </>
        ) : (
          <div className="header__logout">
            {menuPage ? <Logout /> : <Link to={ROUTES.MENU}>Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  );
};
