import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > :first-child {
    width: 50%;
    background-color: #6d81fe;
  }

  & > :last-child {
    width: 50%;

    justify-content: center;
    background-color: #f6f7fc;
  }
`;

export const LoginFormContainer = styled(Form)`
  width: 60%;
  display: flex;
  flex-direction: column;
  & > div {
    flex-direction: column;
    align-items: start;
    margin-bottom: 15px;
  }

  & > button {
    width: 65%;
    align-self: center;
  }
`;

export const SignupSection = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  width: 39%;
  justify-content: center;
`;

export const SignupRouterButton = styled(Button)`
  background-color: #f6f7fc;
  color: #0d6efd;
  border: none;
  padding: 0;
  margin-left: 10px;
  display: block;
  :hover {
    background-color: transparent;
    color: #0d6efd;
  }

  &:focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
    background-color: transparent;
    color: #0d6efd;
  }
`;
