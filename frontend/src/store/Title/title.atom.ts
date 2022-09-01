import { atom } from "recoil";
import { TitleForm } from "../../types/Title";

export const TitleFormAtom = atom<TitleForm>({
  key: "TitleAtom",
  default: {
    id: "",
    name: "",
    author: "",
    publisher: "",
    coverPreview: "",
    cover: null,
  },
});
