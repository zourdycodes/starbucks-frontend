import React from "react";
import "../styles/Logout.css";

export const Logout = () => {
  const logoutOfApp = () => {
    console.log("Logout!!");
  };

  return (
    <button className="logoutButton" onClick={logoutOfApp}>
      Log Out
    </button>
  );
};
