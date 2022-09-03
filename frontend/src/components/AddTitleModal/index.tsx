import React from "react";
import { Modal, Form } from "react-bootstrap";
import {
  AddModalFormContainer,
  StyledModal,
  AddModalFormInputsSection,
  AddModalFormButtonsSection,
  AddModalFormInputFileSection,
} from "./styled";

import { PUBLISHEROPTIONS } from "../../constants";
import { StyledButton } from "../Button/styled";
import { FaPlus, FaSave } from "react-icons/fa";

import { UploadImage } from "../UploadImage";

import { useForm, FormProvider } from "react-hook-form";
import { TitleDTO, TitleShowcase } from "../../types/Title";

import { yupResolver } from "@hookform/resolvers/yup";
import { TitleFormSchema } from "../../schemas/Title/titleSchema";
import { RequiredFieldWarning } from "../RequiredFieldWarning";
import { LoginFormInput } from "../../pages/Login/styled";
import { SelectWithFormValidation } from "../RequiredSelect/styled";

type AddTitleModalProps = {
  show: boolean;
  title: string;
  titleSelected: TitleShowcase;
  loading?: boolean;
  Submit: (data: TitleDTO, dialogController: () => void) => void;
  onHide: () => void;
};

export const AddTitleModal = ({
  show,
  title,
  titleSelected,
  onHide,
  loading,
  Submit,
}: AddTitleModalProps) => {
  //const { name, publisher, author, id, coverURL } = titleSelected;
  const titleFormDefaultValues: TitleDTO = { ...titleSelected, cover: null };
  const { register, handleSubmit, ...methods } = useForm<TitleDTO>({
    resolver: yupResolver(TitleFormSchema),
  });

  React.useEffect(() => {
    if (show) {
      methods.reset({ ...titleFormDefaultValues });
    }
  }, [show]);

  const submit = async (data: TitleDTO) => {
    Submit(data, () => onHide());
  };

  return (
    <StyledModal show={show} onHide={() => onHide()} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title> Adicionar novo titulo ao acervo </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormProvider
          register={register}
          handleSubmit={handleSubmit}
          {...methods}
        >
          <Form id={"addTitleForm"} onSubmit={handleSubmit(submit)}>
            <AddModalFormContainer>
              <AddModalFormInputFileSection>
                {methods.formState.errors.cover && (
                  <RequiredFieldWarning
                    message={methods.formState.errors.cover.message}
                  />
                )}
                <UploadImage
                  defaultPreviewImage={titleFormDefaultValues.coverURL ?? ""}
                />
              </AddModalFormInputFileSection>
              <AddModalFormInputsSection>
                <Form.Label> Titulo </Form.Label>
                <LoginFormInput
                  {...register("name")}
                  placeholder="Titulo vol xx"
                  hasErrors={methods.formState.errors.name?.message}
                />
                {methods.formState.errors.name?.message && (
                  <RequiredFieldWarning
                    message={methods.formState.errors.name.message}
                  />
                )}
                <br />
                <Form.Label> Autor </Form.Label>
                <LoginFormInput
                  {...register("author")}
                  placeholder="Autor da obra"
                  hasErrors={methods.formState.errors.author?.message}
                />
                {methods.formState.errors.author?.message && (
                  <RequiredFieldWarning
                    message={methods.formState.errors.author.message}
                  />
                )}
                <br />

                {/* mudar o campo editora para um select */}
                {/* Criar styled component para componente select apresentar validação */}
                <Form.Label> Editora </Form.Label>
                <SelectWithFormValidation
                  {...register("publisher")}
                  placeholder="Editora"
                  hasErrors={methods.formState.errors.cover}
                >
                  {" "}
                  {PUBLISHEROPTIONS.map((publisher, index) => (
                    <option key={index} value={publisher.value}>
                      {" "}
                      {publisher.name}{" "}
                    </option>
                  ))}{" "}
                </SelectWithFormValidation>
                {methods.formState.errors.publisher?.message && (
                  <RequiredFieldWarning
                    message={methods.formState.errors.publisher.message}
                  />
                )}

                <br />
              </AddModalFormInputsSection>
            </AddModalFormContainer>
          </Form>
        </FormProvider>
      </Modal.Body>
      <Modal.Footer>
        <AddModalFormButtonsSection>
          <StyledButton
            disabled={loading}
            form="addTitleForm"
            type="submit"
            width={"30%"}
          >
            {loading ? (
              "...Carregando"
            ) : (
              <>
                <FaSave /> Salvar
              </>
            )}
          </StyledButton>
          <StyledButton
            onClick={() => onHide()}
            disabled={loading}
            width={"23%"}
            variant="danger"
          >
            <FaPlus /> Cancelar
          </StyledButton>
        </AddModalFormButtonsSection>
      </Modal.Footer>
    </StyledModal>
  );
};
