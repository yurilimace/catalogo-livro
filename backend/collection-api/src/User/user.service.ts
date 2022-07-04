import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Collection } from 'src/Collection/collection.entity';
import { PasswordHash } from 'src/utils/passwordHash';

import { User as UserInterface } from './Interfaces/user.interface';

import { GenerateToken } from 'src/utils/generateToken';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './user.repository';
import { ProfileService } from 'src/Profile/profile.service';
import { ProfileEnum } from 'src/Enum/profileEnum';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private profileService: ProfileService,
  ) {}

  private readonly userList: UserInterface[] = [];

  async create(userParam: UserInterface) {
    const newCollection = new Collection();

    userParam.collectionId = newCollection;
    userParam.password = await PasswordHash(userParam.password);

    this.userRepository.Save(userParam);

    this.userList.push(userParam);
  }

  async getAll(): Promise<UserInterface[]> {
    const listUsers = await this.userRepository.findAll();
    return listUsers;
  }

  async updateUser(userParam: string): Promise<any> {
    const p = await this.profileService.FindProfile(ProfileEnum.ADMIN);

    const updateResponse = await this.userRepository.UpdateUser(userParam, p);
    return updateResponse;
  }

  async authenticateUser(userParam: UserInterface): Promise<UserDTO> {
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
