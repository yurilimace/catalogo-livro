import React from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { CollectionGrid } from "../../components/CollectionGrid/styled";

import { StyledCard } from "../../components/Card";
import { CardBody, CardFooter, CardTitle } from "../../components/Card/styled";
import { Collectionexhibitor } from "../Collection/styled";
import { UseTitleCRUD } from "./hooks/useTitleCRUD";
import { PageContentContainer } from "../../components/PageContainer/styled";

import { RoundedButton, StyledButton } from "../../components/Button/styled";
import { Space } from "../../components/Space/styled";
import { AddTitleModal } from "../../components/AddTitleModal";

import {
  ImageActions,
  ImageContainer,
} from "../../components/ImageContainer/styled";
import { Button } from "react-bootstrap";
import { Dialog } from "../../components/Dialog";

export const TitleShowcase = () => {
  const { list } = UseTitleCRUD();

  const [addModalShowController, setAddModalShowController] =
    React.useState(false);

  const [deleteDialogController, setDeleteDialogController] =
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
                  <ImageContainer>
                    <ImageActions>
                      <RoundedButton
                        onClick={() => setAddModalShowController(true)}
                        bgColor={"black"}
                      >
                        <FaEdit size={15} color="white" />
                      </RoundedButton>
                      <RoundedButton
                        onClick={() => setDeleteDialogController(true)}
                        bgColor={"black"}
                      >
                        <FaTrash size={15} color="white" />
                      </RoundedButton>
                    </ImageActions>
                    <img
                      src={item.coverURL}
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

      <Dialog
        message="teste"
        show={deleteDialogController}
        type="Action"
        action={() => console.log("teste")}
        dismiss={() => setDeleteDialogController(false)}
      />
    </PageContentContainer>
  );
};
