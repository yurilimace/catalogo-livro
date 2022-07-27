import {
  getDownloadURL,
  getStorage,
  list,
  ref,
  uploadBytes,
  uploadString,
} from 'firebase/storage';
import { ConvertImageBase64ToByteArray } from './convertImage';
import { CreateNameUploadFileName } from './CreateNameUploadFile';

export const UploadImageInBucket = async (
  titleName: string,
  imageBase64: string,
) => {
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `/covers/${CreateNameUploadFileName(titleName, imageBase64)}`,
  );

  const convertedImage = ConvertImageBase64ToByteArray(imageBase64);

  const uploadImage = await uploadBytes(storageRef, convertedImage);

  const imageURL = getDownloadURL(storageRef);

  return imageURL;
};
