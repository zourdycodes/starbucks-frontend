import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export const Header = () => {
  return (
    <div className="header">
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
        <Link className="header__link">Rewards</Link>
        <Link className="header__link">Gift Cards</Link>
      </div>
      <div className="header__right"></div>
    </div>
  );
};
