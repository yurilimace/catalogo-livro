import { Injectable } from '@nestjs/common';

import { PasswordHash } from 'src/utils/passwordHash';

import { GenerateToken } from 'src/utils/generateToken';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './user.repository';
import { ProfileService } from 'src/Profile/profile.service';

import { CreateUserDTO } from './dto/create.user.dto';
import { User } from './user.entity';

import { plainToClass, plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private profileService: ProfileService,
  ) {}

  private readonly userList: User[] = [];

  async getAll(): Promise<User[]> {
    const listUsers = await this.userRepository.findAll();
    return listUsers;
  }

  async FindUserById(userId: string): Promise<CreateUserDTO> {
    const user = await this.userRepository.FindById(userId);
    const userDTO = plainToClass(CreateUserDTO, user, {
      excludeExtraneousValues: true,
    });

    return userDTO;
  }

  async FindByUserEmail(userEmail: string): Promise<User[]> {
    const user = await this.userRepository.FindUserByEmail(userEmail);

    return user;
  }

  async Create(userParam: CreateUserDTO): Promise<User> {
    const userHasEmailRegistered =
      await this.userRepository.CheckRegistrationUserEmail(userParam.email);

    if (userHasEmailRegistered) {
      throw {
        name: 'UserException',
        message: 'Usuário já contém um conta cadastrada com esse email',
      };
    }
    const user = this.userRepository.CreateUser(userParam);
    const profile = await this.profileService.FindProfile('simple');
    user.password = await PasswordHash(userParam.password);
    user.profile = profile;

    return await this.userRepository.Save(user);
  }

  async UpdateUser(userParam: CreateUserDTO): Promise<CreateUserDTO> {
    const user = await this.userRepository.CreateUser(userParam);
    const updateResponse = await this.userRepository.UpdateUser(user);
    const userDtoResponse = plainToClass(CreateUserDTO, updateResponse, {
      excludeExtraneousValues: true,
    });
    return userDtoResponse;
  }

  async ParseUserToAdmin(userId: string) {
    const user = await this.userRepository.FindById(userId);
    const adminProfile = await this.profileService.FindProfile('admin');

    user.profile = adminProfile;
    const updateResponse = await this.userRepository.UpdateUser(user);

    const userDtoResponse = plainToClass(CreateUserDTO, updateResponse, {
      excludeExtraneousValues: true,
    });
    return userDtoResponse;
  }

  async DeleteUser(userId: string): Promise<CreateUserDTO> {
    const deletedUser = await this.userRepository.DeleteUser(userId);
    const UserToDto = plainToClass(CreateUserDTO, deletedUser);
    return UserToDto;
  }

  async authenticateUser(userParam: CreateUserDTO): Promise<UserDTO> {
    const user = await this.userRepository.FindUser(userParam);

    const userToken = GenerateToken(user[0]);
    if (user.length > 0) {
      const userDTO = plainToClass(UserDTO, user[0], {
        excludeExtraneousValues: true,
      });
      userDTO.token = userToken;

      return userDTO;
    }
  }
}
