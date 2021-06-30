import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import * as ROUTES from "../constants/routes";

const Container = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #edebe9;
  position: fixed;
  width: 100%;
  padding-left: 131px;
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dbd9d7;
  z-index: 2;
`;

const Links = styled.div`
  display: flex;
  gap: 25px;
  > a {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 600;
    font-size: 13px;
    padding-bottom: 5px;

    &.menuHeader__link--active {
      border-bottom: 1px solid black;
    }
  }
`;

export const MenuHeader = () => {
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <Container.Links>
        <Link
          to={ROUTES.HOME}
          className={`${index === 0 && "menuHeader__link--active"}`}
          onClick={() => setIndex(0)}
        >
          All products
        </Link>
        <Link
          to={ROUTES.MENU_FEATURED}
          className={`${index === 1 && "menuHeader__link--active"}`}
          onClick={() => setIndex(1)}
        >
          Featured
        </Link>
        <Link>Previous Orders</Link>
        <Link>Favourite Products</Link>
      </Container.Links>
    </Container>
  );
};

MenuHeader.Links = function MenuHeaderLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};
