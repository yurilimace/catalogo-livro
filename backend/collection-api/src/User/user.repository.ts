import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { User as UserInterface } from './Interfaces/user.interface';
import { Profile } from 'src/Profile/profile.entity';
import { CreateUserDTO } from './dto/create.user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async Save(userParam: User): Promise<User> {
    return await this.userRepository.save(userParam);
  }

  CreateUser(userCreateDTO: CreateUserDTO) {
    const transaction = this.userRepository.create(userCreateDTO);
    return transaction;
  }

  async UpdateUser(userParam: string, p: Profile) {
    const resp = await this.userRepository
      .update({ firstName: userParam }, { profile: p })
      .then((response) => console.log(response));
    return resp;
  }

  async FindUser(userParam: UserInterface) {
    const queryResult = await this.userRepository.find({
      where: { firstName: userParam.firstName, lastName: userParam.lastName },
    });

    return queryResult;
  }

  async findAll(): Promise<User[]> {
    const result = await this.userRepository.find({});
    return await result;
  }
}
