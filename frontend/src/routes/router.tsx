import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledCard } from "../components/Card";
import { CardBody, CardFooter, CardTitle } from "../components/Card/styled";
import { Grid } from "../components/Grid/styled";
import { PageContainer } from "../components/PageContainer";
import { Collection } from "../pages/Collection";

export const CustomRouter = () => {
  return (
    <BrowserRouter>
      <PageContainer>
        {/* <Grid columnTemplate="30% 20%">
          <StyledCard backgroundColor="purple" hasDivider>
            <CardTitle>
              <h2> Title </h2>
            </CardTitle>
            <CardBody>
              <div>
                <h2> Card Body </h2>
                <h2> Card Body </h2>
                <h2> Card Body </h2>
                <h2> Card Body </h2>
                <h2> Card Body </h2>
                <h2> Card Body </h2>
              </div>
            </CardBody>
            <CardFooter>
              <div>
                <h2> Footer Teste </h2>
              </div>
            </CardFooter>
          </StyledCard>
          <StyledCard backgroundColor="gray">
            <CardTitle>
              <h2> Title </h2>
            </CardTitle>
            <CardBody>
              <div>
                <h2> Card Body </h2>
              </div>
            </CardBody>
            <CardFooter>
              <div>
                <h2> Footer Teste </h2>
              </div>
            </CardFooter>
          </StyledCard>
        </Grid> */}

        <Routes>
          <Route path="/" element={<h2> Dashboard Inicial </h2>} />
          <Route path="/menu1" element={<Collection />} />
          <Route path="/menu2" element={<h2> Menu 2 </h2>} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
};
