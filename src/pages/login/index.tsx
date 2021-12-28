import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="d-flex vh-100">
      <div className=" d-flex align-items-center justify-content-center w-50 bg-primary">
        <FaUser color="#fff" size={100} />
      </div>
      <div className="w-50 d-flex align-items-center justify-content-center ">
        <form className="w-50">
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Senha" />
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
