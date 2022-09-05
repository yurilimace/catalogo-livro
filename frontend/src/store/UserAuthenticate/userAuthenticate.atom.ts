import { atom } from "recoil";
import { AuthUser } from "../../types/Authenticate";

export const userAuthenticateState = atom<AuthUser | null>({
  key: "userAuth",
  default: {
    token: "",
    profile: "simple",
  },
});
