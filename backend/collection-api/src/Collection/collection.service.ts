import { Injectable } from '@nestjs/common';
import { TitleRepository } from 'src/Title/title.repository';
import { TitleService } from 'src/Title/title.service';
import { UserRepository } from 'src/User/user.repository';
import { UserService } from 'src/User/user.service';
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

  async Save(userId: string, titleId: string) {
    const user = await this.userRepository.FindById(userId);
    const title = await this.titleRepository.FindTitle(titleId);
    const titleCreated = await this.collectionRepository.Save(user, title);
    console.log(titleCreated);
    return titleCreated;
  }
}
