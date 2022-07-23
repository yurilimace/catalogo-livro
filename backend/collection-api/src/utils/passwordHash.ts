import { genSalt, hash } from 'bcrypt';

export async function PasswordHash(password: string) {
  const salt = await genSalt();
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}
