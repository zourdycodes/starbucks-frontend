import * as React from "react";
import { motion } from "framer-motion";
// import { MenuItem } from "./MenuItem";
import {
  MenuLink,
  SignUpButton,
  SignInButton,
  FindStore,
  Logout,
} from "../components";
import * as ROUTES from "../constants/routes";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ toggle }) => {
  const user = useSelector(selectUser);
  const [showMenuCategories, setShowMenuCaategories] = React.useState(false);
  return (
    <>
      {showMenuCategories ? (
        <motion.ul variants={variants}>
          <MenuLink
            goBackIcon
            onClick={() => setShowMenuCaategories(false)}
            link="Menu"
            width="60%"
          />
          <MenuLink
            link="All products"
            path={ROUTES.MENU}
            onClick={() => {
              setShowMenuCaategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Featured"
            path={ROUTES.MENU_FEATURED}
            onClick={() => {
              setShowMenuCaategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Previous Orders"
            // path={ROUTES.MENU}
            onClick={() => {
              setShowMenuCaategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Favourite Products"
            // path={ROUTES.MENU}
            onClick={() => {
              setShowMenuCaategories(false);
              toggle();
            }}
          />
        </motion.ul>
      ) : (
        <motion.ul variants={variants}>
          <MenuLink
            link="Menu"
            icon
            onClick={() =>
              setShowMenuCaategories(
                (showMenuCategories) => !showMenuCategories
              )
            }
          />
          <MenuLink link="Rewards" />
          <MenuLink link="Gift Cards" />
          <motion.hr variants={variants2} />
          <motion.div className="navigation__buttons" variants={variants2}>
            {!user ? (
              <>
                <SignInButton />
                <SignUpButton />
              </>
            ) : (
              <Logout />
            )}
          </motion.div>

          <motion.div variants={variants2}>
            <FindStore />
          </motion.div>
        </motion.ul>
      )}
    </>
  );
};
