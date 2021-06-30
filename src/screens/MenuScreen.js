import React from "react";
import { MenuHeader, MenuList } from "../components";
import MenuItem from "../animations/MenuItem";
import menuList from "../data/menuList.json";
import {
  Container,
  Menu,
  ScreenLeft,
  ScreenRight,
  Category,
  CategoryItems,
} from "../helpers/ScreenStyles";

export const MenuScreen = () => {
  return (
    <Menu>
      <MenuHeader />
      <Container>
        <ScreenLeft>
          <MenuList />
        </ScreenLeft>
        <ScreenRight>
          <h1>Menu</h1>
          <Category>
            <h2>Drinks</h2>
            <CategoryItems>
              {menuList.map((menuListCategory) =>
                menuListCategory.drinks.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </CategoryItems>
          </Category>

          <Category>
            <h2>Food</h2>
            <CategoryItems>
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </CategoryItems>
          </Category>

          <Category>
            <h2>At Home Coffee</h2>
            <CategoryItems>
              {menuList.map((menuListCategory) =>
                menuListCategory.atHomeCoffee.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </CategoryItems>
          </Category>

          <Category>
            <h2>Merchandise</h2>
            <CategoryItems>
              {menuList.map((menuListCategory) =>
                menuListCategory.merchandise.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </CategoryItems>
          </Category>
        </ScreenRight>
      </Container>
    </Menu>
  );
};
