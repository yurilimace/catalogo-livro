import { Injectable } from '@nestjs/common';
import { UserService } from 'src/User/user.service';
import { CompareHash } from 'src/utils/compareHash';
import { PasswordHash } from 'src/utils/passwordHash';
import { JwtService } from '@nestjs/jwt';
import { plainToClass } from 'class-transformer';
import { CreateUserDTO } from 'src/User/dto/create.user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(firstName: string, password: string) {
    const user = await this.userService.FindByUserName(firstName);

    if (!user[0]) {
      throw { message: 'Usuário não cadastrado' };
    }

    const match = await CompareHash(password, user[0].password);

    if (!match) {
      throw { message: 'Senha informada não confere' };
    }

    return user;
  }

  async Login(firstName: string, password: string) {
    const user = await this.userService.FindByUserName(firstName);
    const userDTO = plainToClass(CreateUserDTO, user[0], {
      excludeExtraneousValues: true,
    });
    return this.jwtService.sign({ data: userDTO });
  }
}
