import styled from "styled-components";
import { Form } from "react-bootstrap";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  & div {
    display: flex;
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

  & > :last-child {
    width: 65%;
    align-self: center;
  }
`;
