import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, Injectable } from '@nestjs/common';
import { ProfileEnum } from 'src/Enum/profileEnum';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: any) {
    const { data } = payload;
    if (data.profile.profileName === ProfileEnum.ADMIN) {
      return data;
    }

    throw new HttpException(
      'Usuário não possui perfil para fazer a operação',
      401,
    );
  }
}
