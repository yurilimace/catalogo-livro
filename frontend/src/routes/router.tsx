import jwtDecode from "jwt-decode";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { PageContainer } from "../components/PageContainer";
import { Collection } from "../pages/Collection";
import { Login } from "../pages/Login";
import { SignUpPage } from "../pages/Register";
import { TitleShowcase } from "../pages/TitleShowcase";
import { userAuthenticateState } from "../store/UserAuthenticate/userAuthenticate.atom";
import { token } from "../types/Authenticate";

export const RoutesWithPageContainer = () => {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Navigate to="/menu1" />} />
        <Route path="/menu1" element={<Collection />} />
        <Route path="/menu2" element={<h2> Menu 2 </h2>} />
        <Route path="/menu3" element={<TitleShowcase />} />
        <Route path="*" element={<Navigate to="/menu1" />} />
      </Routes>
    </PageContainer>
  );
};

export const RoutesWithoutPageContainer = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export const CustomRouter = () => {
  const [userHasToken, setUserHasToken] = useRecoilState(userAuthenticateState);

  React.useEffect(() => {
    const updatedToken = localStorage.getItem("token");

    if (userHasToken?.token == "" && updatedToken) {
      const decodedToken = jwtDecode<token>(updatedToken);
      setUserHasToken({
        token: updatedToken,
        profile: decodedToken.data.profile.profileName,
      });
    }
  }, [userHasToken]);

  return (
    <BrowserRouter>
      {userHasToken?.token ? (
        <RoutesWithPageContainer />
      ) : (
        <RoutesWithoutPageContainer />
      )}
    </BrowserRouter>
  );
};
