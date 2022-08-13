import React from "react";
import { useDropzone } from "react-dropzone";
import { PreviewImageUpload, UploadImageContainer } from "./styled";
import { FaImage } from "react-icons/fa";

export const UploadImage = () => {
  const [previewImage, setPrewiewImage] = React.useState("");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) =>
      setPrewiewImage(URL.createObjectURL(acceptedFiles[0])),
  });
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
