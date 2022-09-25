import styled from "styled-components";

type buttonProps = {
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  bgColor?: string;
  textColor?: string;
  border?: string;
  isRed?: boolean;
};
export const ButtonWrapper = styled.button<buttonProps>`
  width: ${({ width }) => width || "25rem"};
  padding: 0.5rem 1.2rem;
  background-color: ${({ theme, isRed, bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border-radius: ${({ theme }) => theme.borderRadius.buttonRadius};
`;
