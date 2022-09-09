import React from "react";
import { Form } from "react-bootstrap";
import { StyledCard } from "../../components/Card";
import { CardBody, CardFooter, CardTitle } from "../../components/Card/styled";

import { Collectionexhibitor } from "./styled";
import { PageContentContainer } from "../../components/PageContainer/styled";

import { CollectionGrid } from "../../components/CollectionGrid/styled";
import { useCollection } from "./hooks/useCollection";
import { ImageContainer } from "../../components/ImageContainer/styled";

export const Collection = () => {
  const { collection } = useCollection();

  return (
    <PageContentContainer>
      <div style={{ width: "60%" }}>
        <Form.Control type="text" size="lg" placeholder="Search"></Form.Control>
      </div>
      <Collectionexhibitor>
        <CollectionGrid>
          {collection.map((a: any) => (
            <StyledCard hasBoxShadow={true} backgroundColor="white" key={a.id}>
              <CardTitle>
                <ImageContainer>
                  <img
                    src={a.title.cover}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </ImageContainer>
              </CardTitle>
              <CardBody>
                <div>
                  <h4> {a.title.name} </h4>
                </div>
              </CardBody>

              <CardFooter>
                <div>
                  <h6> Footer Teste </h6>
                </div>
              </CardFooter>
            </StyledCard>
          ))}
          {/* {cardList.map((a) => (
            <StyledCard hasBoxShadow={true} backgroundColor="white" key={a}>
              <CardTitle>
                <div>
                  <img style={{ borderRadius: "12px" }} src={teste} />
                </div>
              </CardTitle>
              <CardBody>
                <div>
                  <h4> tenjho tenge vol 16 </h4>
                </div>
              </CardBody>

              <CardFooter>
                <div>
                  <h6> Footer Teste </h6>
                </div>
              </CardFooter>
            </StyledCard>
          ))} */}
        </CollectionGrid>
      </Collectionexhibitor>
    </PageContentContainer>
  );
};
