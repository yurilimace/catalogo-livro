import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { PageContainer } from "../components/PageContainer";
import { Collection } from "../pages/Collection";
import { Login } from "../pages/Login";

export const RoutesWithPageContainer = () => {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<h2> Dashboard Inicial </h2>} />
        <Route path="/menu1" element={<Collection />} />
        <Route path="/menu2" element={<h2> Menu 2 </h2>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </PageContainer>
  );
};

export const RoutesWithoutPageContainer = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export const CustomRouter = () => {
  const [userHasToken, setUserHasToken] = React.useState(() =>
    localStorage.getItem("token")
  );

  return (
    <BrowserRouter>
      {userHasToken ? (
        <RoutesWithPageContainer />
      ) : (
        <RoutesWithoutPageContainer />
      )}
    </BrowserRouter>
  );
};
