import React from "react";
import { FaPlus } from "react-icons/fa";
import { CollectionGrid } from "../../components/CollectionGrid/styled";
import { PageContainer } from "../../components/PageContainer";
import { StyledCard } from "../../components/Card";
import { CardBody, CardFooter, CardTitle } from "../../components/Card/styled";
import { Collectionexhibitor } from "../Collection/styled";
import { Usetitle } from "./hooks/useTitle";
import { PageContentContainer } from "../../components/PageContainer/styled";
import { Button } from "react-bootstrap";
import { StyledButton } from "../../components/Button/styled";
import { Space } from "../../components/Space/styled";

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
                    <img src={item.coverURL} />
                  </div>
                </CardTitle>
                <CardBody>
                  <div>
                    <span> {item.name} </span>
                  </div>
                </CardBody>
                <Space />
                <CardFooter>
                  <StyledButton width={"80%"}>
                    <FaPlus /> Adicionar Titulo
                  </StyledButton>
                </CardFooter>
              </StyledCard>
            ))}
        </CollectionGrid>
      </Collectionexhibitor>
    </PageContentContainer>
  );
};
