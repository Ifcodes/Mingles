import React from "react";
import styled from "styled-components";
import Button from "../Atoms/Button";
import { count } from "../Entities/countEntity";

const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  const countVal = count.use();
  return (
    <MainWrapper>
      <h1>{countVal}</h1>
      <Button />
    </MainWrapper>
  );
};

export default Main;
