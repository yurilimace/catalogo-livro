import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import PageTemplate from '../components/pageTemplate';

// na versão 6 tem que criar um componente para retornar o que deve ser renderizado na tela
// a logica de acesso fica dentro desse componente não é mais necessário criar um componente de rota

const ProtectedRoute: React.FC = ({ children }) => {
  return <PageTemplate>{children}</PageTemplate>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
