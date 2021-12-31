import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Usuario } from '../../services/Login/loginServices';

const LoginPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const HandleChangeEmail = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  };

  const HandleChangePassword = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const HandleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="d-flex vh-100">
      <div
        data-cy="logo-section"
        className=" d-flex align-items-center justify-content-center w-50 bg-primary"
      >
        <FaUser color="#fff" size={100} />
      </div>
      <div className="w-50 d-flex align-items-center justify-content-center ">
        <form onSubmit={HandleSubmit} className="w-50">
          <Form.Group className="mb-3">
            <Form.Control
              data-cy="submit"
              type="email"
              placeholder="E-mail"
              onChange={HandleChangeEmail}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              data-cy="password"
              type="password"
              placeholder="Senha"
              onChange={HandleChangePassword}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="w-75 d-flex me-auto ms-auto align-content-center justify-content-center mt-3 ButtonLoginPosition"
            type="submit"
          >
            Login
          </Button>
          <div className="d-flex justify-content-center">
            <span className="mt-2">Não tem uma conta ? </span>
            <Button variant="link">Registre-se</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
