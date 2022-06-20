import React from "react";
import { LoginPageContainer, LoginFormContainer } from "./styled";
import { FaBookReader } from "react-icons/fa";
import { Button } from "react-bootstrap";
export const Login = () => {
  return (
    <LoginPageContainer>
      <div>
        <FaBookReader size={200} color={"#f6f7fc"} />
      </div>
      <div>
        <LoginFormContainer>
          <LoginFormContainer.Group>
            <LoginFormContainer.Label> Email </LoginFormContainer.Label>
            <LoginFormContainer.Control
              type="email"
              placeholder="Enter email"
            />
          </LoginFormContainer.Group>

          <LoginFormContainer.Group>
            <LoginFormContainer.Label> Password </LoginFormContainer.Label>
            <LoginFormContainer.Control
              type="password"
              placeholder="Enter password"
            />
          </LoginFormContainer.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </LoginFormContainer>
      </div>
    </LoginPageContainer>
  );
};
