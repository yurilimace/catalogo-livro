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
    console.log(collection);
    this.collectionRepository.save(collection);
  }

  async GetAllCollections() {
    const find = await this.collectionRepository.find({
      relations: { user: true, title: true },
    });
    return find;
  }
}
