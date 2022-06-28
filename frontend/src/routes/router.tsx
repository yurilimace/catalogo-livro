import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { PageContainer } from "../components/PageContainer";
import { Collection } from "../pages/Collection";
import { Login } from "../pages/Login";
import { userAuthenticateState } from "../store/UserAuthenticate/userAuthenticate.atom";

export const RoutesWithPageContainer = () => {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<h2> Dashboard Inicial </h2>} />
        <Route path="/menu1" element={<Collection />} />
        <Route path="/menu2" element={<h2> Menu 2 </h2>} />
        <Route path="*" element={<Navigate to="/menu1" />} />
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
  const [userHasToken, setUserHasToken] = useRecoilState(userAuthenticateState);

  React.useEffect(() => {
    const updatedToken = localStorage.getItem("token");

    if (!userHasToken && updatedToken) {
      setUserHasToken(updatedToken);
    }
  }, [userHasToken]);

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
