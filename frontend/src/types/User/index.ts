export type CreateUserForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type UserDTO = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
