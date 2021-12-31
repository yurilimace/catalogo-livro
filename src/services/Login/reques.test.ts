import { Logar, LoginForm, ObterUsuario, Usuario } from './loginServices';
import expect from 'expect';

it('Login Request Test', async () => {
  const { data } = await ObterUsuario();
  expect(data.length).toBe(2);
  expect(data).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        nome: 'Teste'
      })
    ])
  );
});

it('Teste Requisição submit form', async () => {
  const requestBody: LoginForm = { email: 'Teste2', senha: '123456' };
  const { data } = await Logar(requestBody);
  expect(data).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        nome: 'Teste2'
      })
    ])
  );
});
