import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

import { Profile } from 'src/Profile/profile.entity';
import { CreateUserDTO } from './dto/create.user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async FindById(userId: string) {
    try {
      const user = await this.userRepository.findOne({
        relations: { profile: true },
        where: { id: userId },
      });
      return user;
    } catch (err) {
      console.log(err);
    }
  }

  async FindUser(userParam: CreateUserDTO) {
    const queryResult = await this.userRepository.find({
      where: { firstName: userParam.firstName, lastName: userParam.lastName },
      relations: { profile: true },
    });

    return queryResult;
  }

  async FindUserByName(userFirstName: string) {
    const queryResult = await this.userRepository.find({
      where: { firstName: userFirstName },
      relations: { profile: true },
    });

    return queryResult;
  }

  async CheckRegistrationUserEmail(userEmail: string) {
    const findUserEmail = await this.userRepository.count({
      where: { email: userEmail },
    });

    if (findUserEmail > 0) {
      return true;
    }
    return false;
  }

  async findAll(): Promise<User[]> {
    const result = await this.userRepository.find({});
    return await result;
  }

  async Save(userParam: User): Promise<User> {
    return await this.userRepository.save(userParam);
  }

  CreateUser(userCreateDTO: CreateUserDTO) {
    const transaction = this.userRepository.create(userCreateDTO);
    return transaction;
  }

  async UpdateUser(userParam: User) {
    const resp = await this.userRepository
      .createQueryBuilder()
      .update({ ...userParam })
      .where({ id: userParam.id })
      .returning('*')
      .execute();
    return resp.raw[0];
  }

  async DeleteUser(userId: string): Promise<User> {
    const resp = await this.userRepository
      .createQueryBuilder()
      .delete()
      .where({ id: userId })
      .returning('*')
      .execute();
    return resp.raw[0];
  }
}
