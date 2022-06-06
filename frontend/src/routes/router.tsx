import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageContainer } from "../components/PageContainer";
import { Collection } from "../pages/Collection";

export const CustomRouter = () => {
  return (
    <BrowserRouter>
      <PageContainer>
        <Routes>
          <Route path="/" element={<h2> Dashboard Inicial </h2>} />
          <Route path="/menu1" element={<Collection />} />
          <Route path="/menu2" element={<h2> Menu 2 </h2>} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
};
