import { Button } from "react-bootstrap";
import styled from "styled-components";

export const RoundedButton = styled(Button)<{ bgColor?: string }>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  border-color: black;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0px 5px 3px;

  & :active,
  :focus,
  :focus:active {
    box-shadow: none;
  }

  & :active {
    border-color: transparent;
  }

  &:hover {
    background-color: #4161fd;
    border-color: transparent;
  }

  @media (min-width: 375px) and (max-width: 424px) {
    width: 22px;
    height: 22px;
    padding: 0px 3px 12.5px;
    & > svg {
      vertical-align: baseline;
      height: 16px;
    }
  }

  @media (min-width: 425px) {
    width: 22px;
    height: 22px;
    padding: 0px 3px 12.5px;
    & > svg {
      vertical-align: baseline;
      height: 16px;
    }
  }
`;

export const StyledButton = styled(Button)<{
  background: string;
  width: string;
  isRounded?: string;
}>`
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: ${(props) => (props.isRounded ? "50%" : "8px")};

  @media (min-width: 375px) and (max-width: 424px) {
    font-size: 12px;
    width: ${(props) => (props.width ? "90%" : "100%")};
  }

  @media (min-width: 425px) {
    font-size: 12px;
    width: ${(props) => (props.width ? "90%" : "100%")};
  }
`;
