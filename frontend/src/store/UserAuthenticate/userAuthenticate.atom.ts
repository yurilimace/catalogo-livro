import { atom } from "recoil";

export const userAuthenticateState = atom<string | null>({
  key: "userAuth",
  default: null,
});
