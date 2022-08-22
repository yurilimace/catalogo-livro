import { deleteObject, getStorage, ref } from 'firebase/storage';
import { TitleDTO } from 'src/Title/DTO/create.title.dto';

export const DeleteImageInBucket = async (titleName: string) => {
  const storage = getStorage();
  const storageRef = ref(storage, `/covers/${titleName}`);

  // const convertedImage = ConvertImageBase64ToByteArray(imageBase64);

  const deleteImage = await deleteObject(storageRef);

  return deleteImage;
};
