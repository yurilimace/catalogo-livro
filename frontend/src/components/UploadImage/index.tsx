import React, { InputHTMLAttributes } from "react";
import { useDropzone } from "react-dropzone";
import { PreviewImageUpload, UploadImageContainer } from "./styled";
import { FaImage } from "react-icons/fa";
import { FieldValues, useFormContext, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const UploadImage = () => {
  // const { onChange, onBlur, name, ref } = register("imagem");
  const { register, setValue } = useFormContext();
  const [previewImage, setPrewiewImage] = React.useState("");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: any) => {
      setPrewiewImage(URL.createObjectURL(acceptedFiles[0]));
    },
    onDropAccepted: (files) => {
      console.log(files);
      setValue("cover", files[0]);
    },
  });

  console.log(register);

  return (
    <UploadImageContainer>
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
