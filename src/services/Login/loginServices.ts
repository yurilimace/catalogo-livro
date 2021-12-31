import baseApi from '../configApi';

export type Usuario = {
  id: number;
  nome: string;
  senha: string;
};

export type LoginForm = {
  email: string;
  senha: string;
};

export const ObterUsuario = async () => {
  const data = baseApi.get<Usuario[]>('/users');
  console.log(data, '<----- resposta da requisição');
  return data;
};

export const Logar = async (form: LoginForm) => {
  const data = baseApi.get<Usuario>(
    `/users?nome=${form.email}&senha=${form.senha}`
  );
  return data;
};
