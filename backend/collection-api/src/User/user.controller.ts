import {
  Body,
  Controller,
  Delete,
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

  @Get()
  async GetUserById(@Query() q: { userId: string }): Promise<CreateUserDTO> {
    const user = await this.userService.FindUserById(q.userId);
    return user;
  }

  @Post('/create')
  async Create(@Body() b: CreateUserDTO, @Res() response) {
    const createdUser = await this.userService.Create(b);
    if (createdUser) {
      response.status(HttpStatus.CREATED).json({
        message: 'Usuário criado',
        user: { name: createdUser.firstName, email: createdUser.email },
      });
    }
  }

  @Put('/update')
  updateUser(@Body() b: CreateUserDTO) {
    const response = this.userService.UpdateUser(b);
    return response;
  }

  @Delete('/delete')
  DeleteUser(@Query() q: { id: string }) {
    const response = this.userService.DeleteUser(q.id);
    return response;
  }

  @Post('/authenticate')
  async authenticate(@Res() response: Response, @Body() b: CreateUserDTO) {
    // const newUser: User = {} as User;
    // newUser.firstName = b.firstName;
    // newUser.lastName = b.lastName;
    // newUser.email = b.email;
    // newUser.password = b.password;

    const result: UserDTO = await this.userService.authenticateUser(b);

    if (!result) {
      response
        .status(HttpStatus.NOT_FOUND)
        .send({ message: 'Usuario não encontrado' });
    }
    response.status(HttpStatus.OK).json(result);
  }
}
