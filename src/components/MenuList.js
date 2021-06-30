import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";
import menuLists from "../data/menuList.json";

//todo: create MenuHeader Components are work with screens

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const ListContainer = styled.div`
  > h4 {
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 20px;
    font-size: 18px;
  }
`;
const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > a {
    color: rgba(0, 0, 0, 0.56);
    font-size: 15px;
    font-weight: 600;
    max-width: 150px;
    line-height: 1.5;
  }
`;

export const MenuList = () => {
  return (
    <Container>
      <ListContainer>
        <h4>Drinks</h4>
        <ListItems>
          {menuLists.map((category) =>
            category.drinks.map((listItem) => <Link>{listItem.type}</Link>)
          )}
        </ListItems>
      </ListContainer>

      <ListContainer>
        <h4>Food</h4>
        <ListItems>
          {menuLists.map((category) =>
            category.food.map((listItem) => <Link>{listItem.type}</Link>)
          )}
        </ListItems>
      </ListContainer>

      <ListContainer>
        <h4>At Home Coffee</h4>
        <ListItems>
          {menuLists.map((category) =>
            category.atHomeCoffee.map((listItem) => (
              <Link>{listItem.type}</Link>
            ))
          )}
        </ListItems>
      </ListContainer>

      <ListContainer>
        <h4>Merchandise</h4>
        <ListItems>
          {menuLists.map((category) =>
            category.merchandise.map((listItem) => <Link>{listItem.type}</Link>)
          )}
        </ListItems>
      </ListContainer>
    </Container>
  );
};
