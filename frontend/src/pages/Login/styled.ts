import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

import error from "../../assets/Error.svg";

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

  @media (min-width: 320px) and (max-width: 374px) {
    flex-direction: column;
    & > :first-child {
      width: 100%;
      height: 30%;
      background-color: #6d81fe;
      & svg {
        width: 50%;
      }
    }
    & > :last-child {
      width: 100%;
      height: 70%;
      justify-content: center;
      background-color: #f6f7fc;
    }
  }

  @media (min-width: 375px) and (max-width: 424px) {
    flex-direction: column;
    & > :first-child {
      width: 100%;
      height: 40%;
      background-color: #6d81fe;
      & svg {
        width: 50%;
      }
    }
    & > :last-child {
      width: 100%;
      height: 60%;
      justify-content: center;
      background-color: #f6f7fc;
    }
  }

  @media (min-width: 425px) and (max-width: 767px) {
    flex-direction: column;
    & > :first-child {
      width: 100%;
      height: 40%;
      background-color: #6d81fe;
      & svg {
        width: 50%;
      }
    }
    & > :last-child {
      width: 100%;
      height: 60%;
      justify-content: center;
      background-color: #f6f7fc;
    }
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

  @media (min-width: 320px) and (max-width: 374px) {
    width: 90%;

    & > button {
      width: 85%;
      align-self: center;
    }
  }

  @media (min-width: 375px) and (max-width: 424px) {
    width: 90%;

    & > button {
      width: 85%;
      align-self: center;
    }
  }

  @media (min-width: 425px) and (max-width: 767px) {
    width: 80%;

    & > button {
      width: 80%;
      align-self: center;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    & > button {
      width: 80%;
      align-self: center;
    }
  }
`;

export const LoginFormInput = styled(Form.Control)<{ hasErrors: boolean }>`
  border-color: ${(props) => props.hasErrors && "red"};
  background-image: ${(props) => props.hasErrors && ` url(${error})`};
  background-repeat: no-repeat;
  background-position: right;
  background-size: 25px;

  &:focus {
    border-color: ${(props) => props.hasErrors && "red"};
    box-shadow: ${(props) =>
      props.hasErrors && " 0 0 0 0.25rem rgb(253 13 13 / 25%)"};
  }
`;

export const SignupSection = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 374px) {
    flex-direction: column;
    align-items: center;
    width: 70%;
  }

  @media (min-width: 375px) and (max-width: 424px) {
    flex-direction: column;
    align-items: center;
    width: 70%;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    width: 70%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 70%;
  }
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

  @media (min-width: 320px) and (max-width: 374px) {
    margin: 0px;
  }
`;
