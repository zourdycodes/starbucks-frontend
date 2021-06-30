import React from "react";
import { Link } from "react-router-dom";
import { FindStore } from ".";
import "../styles/FooterSecondary.css";

export const FooterSecondary = ({ alignItems, paddingLeft, flexDirection }) => {
  return (
    <div
      className="footerSecondary"
      style={{
        alignItems,
        paddingLeft: `${paddingLeft * 2}px`,
      }}
    >
      <div
        className="footerSecondary__container"
        style={{
          paddingLeft: `${paddingLeft}px`,
        }}
      >
        <div className="footerSecondary__info">
          <div className="footerSecondary__left">
            <FindStore />
          </div>
          <div className="footerSecondary__right" style={{ flexDirection }}>
            <Link>Responsibility</Link>
            <Link>Web Accessibility</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Use </Link>
            <Link>Cookie Preferences</Link>
          </div>
        </div>
        <span className="footerSecondary__copyright">© 2021 Starbucks</span>
      </div>
    </div>
  );
};
