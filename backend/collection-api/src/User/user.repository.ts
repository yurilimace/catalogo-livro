import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { User as UserInterface } from './Interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async Save(userParam: UserInterface) {
    this.userRepository.save(userParam);
  }

  async FindUser(userParam: UserInterface) {
    const queryResult = await this.userRepository.find({
      where: { firstName: userParam.firstName, lastName: userParam.lastName },
    });

    return queryResult;
  }

  async findAll(): Promise<User[]> {
    const result = await this.userRepository.find({
      relations: { collectionId: true },
    });
    return await result;
  }
}
