import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateUserDTO } from './dto/create.user.dto';
import { UserDTO } from './dto/user.dto';
import { User } from './Interfaces/user.interface';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser(): string {
    return 'ola controller de usuário';
  }
  @Get('/teste')
  teste(@Query() q): string {
    console.log(q, '<------------- request');
    return 'ola teste route';
  }

  @Get('/getAll')
  async getAllUsers(): Promise<User[]> {
    const userList = await this.userService.getAll();
    return userList;
  }

  @Post('/addUser')
  addUser(@Body() b: CreateUserDTO): User {
    const newUser: User = {} as User;
    newUser.firstName = b.firstName;
    newUser.lastName = b.lastName;
    newUser.email = b.email;
    newUser.password = b.password;
    this.userService.create(newUser);
    return newUser;
  }

  @Put('/updateUser')
  updateUser(@Body() b: { firstName: string }) {
    const response = this.userService.updateUser(b.firstName);
    return response;
  }

  @Post('/authenticate')
  async authenticate(@Res() response: Response, @Body() b: CreateUserDTO) {
    const newUser: User = {} as User;
    newUser.firstName = b.firstName;
    newUser.lastName = b.lastName;
    newUser.email = b.email;
    newUser.password = b.password;

    const result: UserDTO = await this.userService.authenticateUser(newUser);
    if (!result) {
      response
        .status(HttpStatus.NOT_FOUND)
        .send({ message: 'Usuario não encontrado' });
    }
    response.status(HttpStatus.OK).json(result);
  }
}
