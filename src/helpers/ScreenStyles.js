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

//warn => SignUP STYLES

export const SignupContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 40px;

  @media (max-width: 425px) {
    gap: 30px;
  }
`;

export const SignupHeader = styled.div`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.06),
    0 0 2px rgba(0, 0, 0, 0.07);
  width: 100%;
  height: 101px;
  display: flex;
  align-items: center;

  > a > img {
    object-fit: contain;
    height: 50px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const Heading = styled.h1`
  color: rgba(0, 0, 0, 0.87);
  font-weight: 800;
  font-size: 28px;

  @media (max-width: 425px) {
    margin-right: auto;
    padding: 0 20px;
    font-size: 24px;
  }
`;

export const SignupRewards = styled.div`
  text-align: center;

  > h4 {
    color: rgba(0, 0, 0, 0.56);
    letter-spacing: 1.4px;
    font-weight: 800;
    font-size: 14px;
    margin-bottom: 20px;
  }

  > p {
    color: rgba(0, 0, 0, 0.56);
    line-height: 1.5;
    max-width: 500px;
    font-weight: 600;
    font-size: 14px;
  }

  > p > a {
    color: rgba(0, 0, 0, 0.56);
    text-decoration: underline;
  }

  > p > a:hover {
    text-decoration: none;
  }

  @media (max-width: 425px) {
    text-align: left;
    padding: 0 20px;

    > h4 {
      display: none;
    }

    > p {
      font-size: 13px;
    }
  }
`;
