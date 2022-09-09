import { Injectable } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { Title } from 'src/Title/title.entity';
import { TitleRepository } from 'src/Title/title.repository';
import { TitleService } from 'src/Title/title.service';
import { User } from 'src/User/user.entity';
import { UserRepository } from 'src/User/user.repository';
import { UserService } from 'src/User/user.service';
import { CollectionDTO } from './collection.DTO';
import { CollectionRepository } from './collection.repository';

@Injectable()
export class CollectionService {
  constructor(
    private collectionRepository: CollectionRepository,
    private userService: UserService,
    private userRepository: UserRepository,
    private titleRepository: TitleRepository,
    private titleService: TitleService,
  ) {}

  async GetAll() {
    const all = await this.collectionRepository.GetAllCollections();
    return all;
  }

  async GetCollectionByUserId(userId: string) {
    const userCollection =
      await this.collectionRepository.GetCollectionByUserId(userId);
    const parseToDTO = plainToInstance(CollectionDTO, userCollection);
    return parseToDTO;
  }

  async Save(userId: string, titleId: string) {
    try {
      const collectionHasTitle =
        await this.collectionRepository.GetCollectionByTitleId(userId, titleId);
      if (collectionHasTitle) {
        throw { message: 'Coleção já contém o titulo que deseja incluir' };
      }
      const userDTO = await this.userService.FindUserById(userId);
      const plainUser = plainToClass(User, userDTO);
      const titleDTO = await this.titleService.GetTitle(titleId);
      const plainTitle = plainToClass(Title, titleDTO);
      const titleCreated = await this.collectionRepository.Save(
        plainUser,
        plainTitle,
      );
      const titleCreatedDTO = plainToClass(CollectionDTO, titleCreated);
      return titleCreatedDTO;
    } catch (err) {
      throw err;
    }
  }

  async DeleteFromUserCollection(collectionId: string) {
    const deletedCollection = await this.collectionRepository.DeleteCollection(
      collectionId,
    );
    return deletedCollection;
  }
}
