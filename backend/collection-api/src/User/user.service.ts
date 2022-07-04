import { Injectable } from '@nestjs/common';

import { PasswordHash } from 'src/utils/passwordHash';

import { GenerateToken } from 'src/utils/generateToken';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './user.repository';
import { ProfileService } from 'src/Profile/profile.service';
import { ProfileEnum } from 'src/Enum/profileEnum';
import { CreateUserDTO } from './dto/create.user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private profileService: ProfileService,
  ) {}

  private readonly userList: User[] = [];

  async create(userParam: CreateUserDTO): Promise<User> {
    const user = this.userRepository.CreateUser(userParam);
    user.password = await PasswordHash(userParam.password);

    if (userParam.isAdmin) {
      const profile = await this.profileService.FindProfile('admin');
      user.profile = profile;
    }
    return await this.userRepository.Save(user);

    this.userList.push(user);
  }

  async getAll(): Promise<User[]> {
    const listUsers = await this.userRepository.findAll();
    return listUsers;
  }

  async updateUser(userParam: string): Promise<any> {
    const p = await this.profileService.FindProfile(ProfileEnum.ADMIN);

    const updateResponse = await this.userRepository.UpdateUser(userParam, p);
    return updateResponse;
  }

  async authenticateUser(userParam: User): Promise<UserDTO> {
    const user = await this.userRepository.FindUser(userParam);
    const userToken = GenerateToken(user[0]);
    const userDTO = new UserDTO();
    if (user.length > 0) {
      userDTO.email = user[0].email;
      userDTO.firstName = user[0].firstName;
      userDTO.lastName = user[0].lastName;
      userDTO.password = user[0].password;
      userDTO.token = userToken;
      return userDTO;
    }
  }
}
