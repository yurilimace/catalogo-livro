import {
  getBytes,
  getDownloadURL,
  getMetadata,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { TitleDTO } from 'src/Title/DTO/create.title.dto';

export const UploadImageRefInBucket = async (
  title: TitleDTO,
  previousTitle: TitleDTO,
) => {
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `/${process.env.DEVELOPMENT_BUCKET}/covers/${title.name}`,
  );
  const previousTitleStorageRef = ref(
    storage,
    `/${process.env.DEVELOPMENT_BUCKET}/covers/${previousTitle.name}`,
  );

  const imageBytesfromPreviousImage = await getBytes(previousTitleStorageRef);
  const imageMetadatafromPreviousImage = await getMetadata(
    previousTitleStorageRef,
  );

  // const convertedImage = ConvertImageBase64ToByteArray(imageBase64);

  const uploadImage = await uploadBytes(
    storageRef,
    imageBytesfromPreviousImage,
    imageMetadatafromPreviousImage,
  );

  const imageURL = getDownloadURL(storageRef);

  return imageURL;
};
