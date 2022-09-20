import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDTO } from './dto/create.user.dto';
import { UserDTO } from './dto/user.dto';
import { User } from './Interfaces/user.interface';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/teste')
  teste(@Query() q): string {
    console.log(q, '<------------- request');
    return 'ola teste route';
  }

  @UseGuards(JwtAuthGuard)
  @Get('/getAll')
  async getAllUsers(): Promise<User[]> {
    const userList = await this.userService.getAll();
    return userList;
  }

  @Get()
  async GetUserById(@Query() q: { userId: string }): Promise<CreateUserDTO> {
    const user = await this.userService.FindUserById(q.userId);
    return user;
  }

  @Post('/create')
  async Create(@Body() b: CreateUserDTO, @Res() response) {
    try {
      const createdUser = await this.userService.Create(b);
      if (createdUser) {
        response.status(HttpStatus.CREATED).json({
          message: 'Usuário criado',
          user: { name: createdUser.firstName, email: createdUser.email },
        });
      }
    } catch (err) {
      response.status(HttpStatus.CONFLICT).json(err);
      console.log(err);
    }
  }

  @Put('/update')
  updateUser(@Body() b: CreateUserDTO) {
    const response = this.userService.UpdateUser(b);
    return response;
  }

  @Put('/admin/:id')
  async ParseUserToAdmin(@Param('id') id, @Res() response) {
    const userParse = await this.userService.ParseUserToAdmin(id);

    return response
      .status(HttpStatus.OK)
      .json({ message: 'endpoint para tornar usuario admin', user: userParse });
  }

  @Delete('/delete')
  DeleteUser(@Query() q: { id: string }) {
    const response = this.userService.DeleteUser(q.id);
    return response;
  }

  @Post('/authenticate')
  async authenticate(@Res() response: Response, @Body() b: CreateUserDTO) {
    console.log(b);
    const result: UserDTO = await this.userService.authenticateUser(b);

    if (!result) {
      response
        .status(HttpStatus.NOT_FOUND)
        .send({ message: 'Usuario não encontrado' });
    }
    response.status(HttpStatus.OK).json(result);
  }
}
