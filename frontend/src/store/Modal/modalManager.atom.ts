import { atom } from "recoil";

export const modalManager = atom<boolean>({
  key: "modalManager",
  default: false,
});
