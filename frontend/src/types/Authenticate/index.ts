export type AuthUser = {
  token: string;
  profile: string;
} | null;

export type token = {
  data: userInfo;
};

export type userInfo = {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  password: string;
  profile: { profileId: string; profileName: string };
};
