import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(firstName: string, password: string) {
    try {
      const user = await this.authService.validateUser(firstName, password);
      return user;
    } catch (err) {
      throw new HttpException(err.message, err.errorCode);
    }
  }
}
