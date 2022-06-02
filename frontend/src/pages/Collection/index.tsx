import React from "react";
import { Form } from "react-bootstrap";
import { StyledCard } from "../../components/Card";
import { CardBody, CardFooter, CardTitle } from "../../components/Card/styled";
import { Grid } from "../../components/Grid/styled";
import { Collectionexhibitor } from "./styled";
import { PageContentContainer } from "../../components/PageContainer/styled";

import teste from "../../assets/teste.jpg";
import { CollectionGrid } from "../../components/CollectionGrid/styled";

export const Collection = () => {
  const cardList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2,
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <PageContentContainer>
      <div style={{ width: "60%" }}>
        <Form.Control type="text" size="lg" placeholder="Search"></Form.Control>
      </div>
      <Collectionexhibitor>
        <CollectionGrid>
          {cardList.map((a) => (
            <StyledCard hasBoxShadow={true} backgroundColor="white" key={a}>
              <CardTitle>
                <div>
                  <img style={{ borderRadius: "10px" }} src={teste} />
                </div>
              </CardTitle>
              <CardBody>
                <div>
                  <h4> Titulo </h4>
                </div>
              </CardBody>
              <CardFooter>
                <div>
                  <h6> Footer Teste </h6>
                </div>
              </CardFooter>
            </StyledCard>
          ))}
        </CollectionGrid>
      </Collectionexhibitor>
    </PageContentContainer>
  );
};
