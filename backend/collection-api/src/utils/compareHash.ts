import { compare } from 'bcrypt';

export const CompareHash = async (h1: string, h2: string) =>
  await compare(h1, h2);
