import React from "react";
import { Form } from "react-bootstrap";
import { StyledCard } from "../../components/Card";
import { CardBody, CardFooter, CardTitle } from "../../components/Card/styled";

import { Collectionexhibitor } from "./styled";
import { PageContentContainer } from "../../components/PageContainer/styled";

import { CollectionGrid } from "../../components/CollectionGrid/styled";
import { useCollection } from "./hooks/useCollection";
import {
  ImageActions,
  ImageContainer,
} from "../../components/ImageContainer/styled";
import { RoundedButton } from "../../components/Button/styled";
import { FaTrash } from "react-icons/fa";

export const Collection = () => {
  const { collection, DeleteCollection } = useCollection();

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
                  <ImageActions>
                    <span
                      style={{
                        color: "antiquewhite",
                        marginRight: "auto",
                        padding: "10px",
                      }}
                    >
                      {" "}
                      nota: {a.rate}/5{" "}
                    </span>
                    <RoundedButton
                      onClick={() => DeleteCollection(a.id)}
                      bgColor={"black"}
                    >
                      <FaTrash size={15} color="white" />
                    </RoundedButton>
                  </ImageActions>
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
        </CollectionGrid>
      </Collectionexhibitor>
    </PageContentContainer>
  );
};
