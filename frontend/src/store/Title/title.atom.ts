import { atom } from "recoil";

export const TitleAtom = atom({
  key: "TitleAtom",
  default: {
    id: "",
    name: "",
    author: "",
    publisher: "",
    coverUrl: "",
  },
});
