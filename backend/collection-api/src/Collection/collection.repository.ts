import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Title } from 'src/Title/title.entity';
import { User } from 'src/User/user.entity';
import { Repository } from 'typeorm';
import { Collection } from './collection.entity';

@Injectable()
export class CollectionRepository {
  constructor(
    @InjectRepository(Collection)
    private collectionRepository: Repository<Collection>,
  ) {}

  async Save(userId: User, titleId: Title) {
    const collection = new Collection();

    collection.user = userId;
    collection.title = titleId;

    collection.rate = '2';

    const createdCollection = await this.collectionRepository.save(collection);
    return createdCollection;
  }

  async GetAllCollections() {
    const find = await this.collectionRepository.find({
      relations: { user: true, title: true },
    });
    return find;
  }

  async GetCollectionByUserId(userId: string) {
    const list = await this.collectionRepository.find({
      relations: { title: true },
      where: { user: { id: userId } },
    });
    return list;
  }

  async GetCollectionByTitleId(userId: string, titleId: string) {
    const collection = await this.collectionRepository.findOne({
      where: { user: { id: userId }, title: { id: titleId } },
    });
    return collection;
  }

  async DeleteCollection(collectionId: string) {
    const collection = await this.collectionRepository
      .createQueryBuilder()
      .delete()
      .where({ id: collectionId })
      .returning('*')
      .execute();

    return collection.raw[0];
  }
}
