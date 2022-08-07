import React from "react";
import { CollectionGrid } from "../../components/CollectionGrid/styled";
import { PageContainer } from "../../components/PageContainer";
import { StyledCard } from "../../components/Card";
import { CardBody, CardFooter, CardTitle } from "../../components/Card/styled";
import { Collectionexhibitor } from "../Collection/styled";
import { Usetitle } from "./hooks/useTitle";
import { PageContentContainer } from "../../components/PageContainer/styled";
import { Button } from "react-bootstrap";

export const TitleShowcase = () => {
  const { getAllTitles, list } = Usetitle();
  console.log(list);
  return (
    <PageContentContainer>
      <Collectionexhibitor>
        <CollectionGrid>
          {list.length > 0 &&
            list.map((item: any) => (
              <StyledCard
                hasBoxShadow={true}
                backgroundColor="white"
                key={item.id}
              >
                <CardTitle>
                  <div>
                    <img style={{ borderRadius: "12px" }} src={item.coverURL} />
                  </div>
                </CardTitle>
                <CardBody>
                  <div>
                    <h4> {item.name} </h4>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button style={{ width: "100%" }}> Adicionar Titulo </Button>
                </CardFooter>
              </StyledCard>
            ))}
        </CollectionGrid>
      </Collectionexhibitor>
    </PageContentContainer>
  );
};
