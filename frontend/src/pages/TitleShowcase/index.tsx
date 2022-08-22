import React from "react";
import { FaPlus } from "react-icons/fa";
import { CollectionGrid } from "../../components/CollectionGrid/styled";
import { PageContainer } from "../../components/PageContainer";
import { StyledCard } from "../../components/Card";
import { CardBody, CardFooter, CardTitle } from "../../components/Card/styled";
import { Collectionexhibitor } from "../Collection/styled";
import { UseTitleCRUD } from "./hooks/useTitleCRUD";
import { PageContentContainer } from "../../components/PageContainer/styled";
import { Button } from "react-bootstrap";
import { StyledButton } from "../../components/Button/styled";
import { Space } from "../../components/Space/styled";
import { AddTitleModal } from "../../components/AddTitleModal";
import { BaseServiceURL } from "../../service/config";

export const TitleShowcase = () => {
  const { list } = UseTitleCRUD();

  const [addModalShowController, setAddModalShowController] =
    React.useState(false);

  return (
    <PageContentContainer>
      <div style={{ alignSelf: "end" }}>
        <StyledButton onClick={() => setAddModalShowController(true)}>
          <FaPlus /> Adicionar Titulo
        </StyledButton>
      </div>
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
                  <div style={{ width: "204px", height: "304px" }}>
                    <img
                      src={item.coverURL}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
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
      <AddTitleModal
        show={addModalShowController}
        title={"Adicionar Titulo"}
        onHide={() => setAddModalShowController(false)}
      />
    </PageContentContainer>
  );
};
