import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import * as ROUTES from "../constants/routes";
import "../styles/FindStore.css";

export const FindStore = () => {
  return (
    <Link className="findStore">
      <LocationOnIcon />
      <h5>Find a store</h5>
    </Link>
  );
};
