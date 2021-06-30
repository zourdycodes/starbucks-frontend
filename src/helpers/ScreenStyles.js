import styled from "styled-components/macro";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 101px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 425px) {
    margin-top: 30px;
  }
`;

export const Container = styled.div`
  padding-left: 131px;
  margin-top: 101px;
  display: flex;
  gap: 100px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 425px) {
    padding-left: 20px;
  }
`;

export const ScreenRight = styled.div`
  flex: 1;
  > h1 {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 800;
    font-size: 28px;
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    > h1 {
      font-size: 24px;
    }
  }
`;

export const ScreenLeft = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Category = styled.div`
  margin-bottom: 60px;

  > h2 {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 800;
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    > h2 {
      font-size: 19px;
    }
  }
`;

export const CategoryItems = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  column-gap: 100px;
  row-gap: 40px;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-right: 20px;
`;
