import React, { useState } from "react";
import styled from "styled-components";
import { increment } from "../../Entities/countEntity";
import { ButtonWrapper } from "./buttionStyles";

const LoginBtn = styled(ButtonWrapper)`
  border: 1px solid green;
  margin: 0 2rem;
`;

const Button = () => {
  const [isRed, setIsRed] = useState(false);
  const name = "Faari";
  const showName = `My name is ${name}`;

  const handleButton = () => {
    console.log(isRed);
    setIsRed(!isRed);
    increment();
  };

  return (
    <div>
      <ButtonWrapper
        textColor="black"
        width="10rem"
        isRed={isRed}
        bgColor="maroon"
        onClick={handleButton}
      >
        Button
      </ButtonWrapper>

      <ButtonWrapper width="15rem" bgColor="blue">
        Checking
      </ButtonWrapper>

      <LoginBtn bgColor="white">Login</LoginBtn>
    </div>
  );
};

export default Button;
