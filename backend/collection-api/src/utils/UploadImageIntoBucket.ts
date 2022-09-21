import {
  getBytes,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { TitleDTO } from 'src/Title/DTO/create.title.dto';
import { ConvertImageBase64ToByteArray } from './convertImage';
import { CreateNameUploadFileName } from './CreateNameUploadFile';

export const UploadImageInBucket = async (title: TitleDTO) => {
  const storage = getStorage();

  const storageRef = ref(
    storage,
    `/${process.env.DEVELOPMENT_BUCKET}/covers/${title.name}`,
  );

  const metadata = {
    contentType: title.cover.mimetype,
  };

  // const convertedImage = ConvertImageBase64ToByteArray(imageBase64);

  const uploadImage = await uploadBytes(
    storageRef,
    title.cover.buffer,
    metadata,
  );

  const imageURL = getDownloadURL(storageRef);

  return imageURL;
};
