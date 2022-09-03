import React from "react";
import { useDropzone } from "react-dropzone";
import { PreviewImageUpload, UploadImageContainer } from "./styled";
import { FaImage } from "react-icons/fa";
import { useFormContext } from "react-hook-form";

type UploadImageProps = {
  defaultPreviewImage: string;
};

export const UploadImage = ({ defaultPreviewImage }: UploadImageProps) => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  const previewImageFromFormDefaultValue = getValues();

  const [previewImage, setPrewiewImage] = React.useState(defaultPreviewImage);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: any) => {
      setPrewiewImage(URL.createObjectURL(acceptedFiles[0]));
    },
    onDropAccepted: (files) => {
      setValue("cover", files[0]);
    },
  });

  return (
    <UploadImageContainer hasErrors={errors.cover}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {previewImage === "" ? (
          <>
            <FaImage size={"25"} />
            <p> upload imagem </p>
          </>
        ) : (
          <PreviewImageUpload src={previewImage} />
        )}
      </div>
    </UploadImageContainer>
  );
};
