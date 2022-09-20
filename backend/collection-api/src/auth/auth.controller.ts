import {
  Controller,
  UseGuards,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async Login(@Body() b, @Res() response) {
    try {
      const token = await this.authService.Login(b.firstName, b.password);
      return response.status(HttpStatus.OK).json({ token: token });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json(err);
    }
  }
}
