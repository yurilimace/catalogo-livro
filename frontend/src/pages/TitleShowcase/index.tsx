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

import { Dialog } from "../../components/Dialog";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

import { TitleForm, TitleShowcase as Title } from "../../types/Title";
import { userAuthenticateState } from "../../store/UserAuthenticate/userAuthenticate.atom";

export const TitleShowcase = () => {
  const {
    selectedTitle,
    setSelectedTitle,
    list,
    DeleteTitle,
    AddTitleToCollection,
    Submit,
    loadingRequest,
    ResetSelectedTitleToDefaultValue,
  } = UseTitleCRUD();

  const userProfile = useRecoilValue(userAuthenticateState);

  const [addModalShowController, setAddModalShowController] =
    React.useState(false);

  const [deleteDialogController, setDeleteDialogController] =
    React.useState(false);

  const OpenUpdatedDialog = (title: Title) => {
    setSelectedTitle(title);
    setAddModalShowController(true);
  };

  const CloseUpdateDialog = () => {
    ResetSelectedTitleToDefaultValue();
    setAddModalShowController(false);
  };

  const OpenDeleteDialog = (title: Title) => {
    setSelectedTitle(title);
    setDeleteDialogController(true);
  };

  const CloseDeleteDialog = () => {
    ResetSelectedTitleToDefaultValue();
    setDeleteDialogController(false);
  };

  const buildDeleteDialogMessage = () => {
    return `Deseja Realmente apagar o titulo ${selectedTitle.name} do acervo do site?`;
  };

  return (
    <PageContentContainer>
      {userProfile?.profile === "admin" && (
        <div style={{ alignSelf: "end", padding: "0px 81px" }}>
          <StyledButton onClick={() => setAddModalShowController(true)}>
            <FaPlus /> Adicionar Titulo
          </StyledButton>
        </div>
      )}
      <Collectionexhibitor>
        <CollectionGrid>
          {list.length > 0 &&
            list.map((item: Title) => (
              <StyledCard
                hasBoxShadow={true}
                backgroundColor="white"
                key={item.id}
              >
                <CardTitle>
                  <ImageContainer>
                    {userProfile?.profile === "admin" && (
                      <ImageActions>
                        <RoundedButton
                          onClick={() => OpenUpdatedDialog(item)}
                          bgColor={"black"}
                        >
                          <FaEdit size={15} color="white" />
                        </RoundedButton>
                        <RoundedButton
                          onClick={() => OpenDeleteDialog(item)}
                          bgColor={"black"}
                        >
                          <FaTrash size={15} color="white" />
                        </RoundedButton>
                      </ImageActions>
                    )}

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
                  <StyledButton
                    onClick={() => item.id && AddTitleToCollection(item.id)}
                    width={"80%"}
                    disabled={loadingRequest}
                  >
                    {loadingRequest ? (
                      <>
                        <FaPlus /> ... Adicionando{" "}
                      </>
                    ) : (
                      <>
                        <FaPlus /> Adicionar Titulo{" "}
                      </>
                    )}
                  </StyledButton>
                </CardFooter>
              </StyledCard>
            ))}
        </CollectionGrid>
      </Collectionexhibitor>
      <AddTitleModal
        show={addModalShowController}
        Submit={Submit}
        loading={loadingRequest}
        title={"Adicionar Titulo"}
        titleSelected={selectedTitle}
        onHide={() => CloseUpdateDialog()}
      />

      <Dialog
        message={buildDeleteDialogMessage()}
        show={deleteDialogController}
        type="Action"
        loading={loadingRequest}
        action={DeleteTitle}
        dismiss={() => CloseDeleteDialog()}
      />
    </PageContentContainer>
  );
};
