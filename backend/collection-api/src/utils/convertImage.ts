export const ConvertImageBase64ToByteArray = (imageString: string) => {
  const stringIntoBinary = Buffer.from(imageString, 'base64');
  const teste = new Uint8Array(stringIntoBinary);
  return teste;
};
