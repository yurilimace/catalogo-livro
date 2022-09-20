import * as jwt from 'jsonwebtoken';
import { User } from 'src/User/Interfaces/user.interface';

export function GenerateToken(user: User) {
  const generatedToken = jwt.sign({ data: user }, 'secret', {
    expiresIn: '60s',
  });
  return generatedToken;
}
