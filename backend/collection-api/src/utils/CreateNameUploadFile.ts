export const CreateNameUploadFileName = (
  titleName: string,
  imageBase64: string,
) => {
  const imageFormat = imageBase64.split(/(jpg|jpeg|png)/);

  const uploadFileName = titleName.replace(/ /, '-') + '.' + imageFormat[1];
  return uploadFileName;
};
