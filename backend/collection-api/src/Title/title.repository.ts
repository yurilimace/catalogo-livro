import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TitleDTO } from './DTO/create.title.dto';
import { Title } from './title.entity';

@Injectable()
export class TitleRepository {
  constructor(
    @InjectRepository(Title)
    private titleRepository: Repository<Title>,
  ) {}

  FindTitle(param: any) {
    console.log('find title');
  }

  CreateTitle(param: TitleDTO) {
    try {
      const transaction = this.titleRepository.create(param);
      return transaction;
    } catch (err) {
      console.log(err);
    }
  }

  async SaveTitle(param: TitleDTO) {
    return await this.titleRepository.save(param);
  }

  Updatetile(param: any) {
    console.log('update title');
  }

  DeleteTitle(param: any) {
    console.log('delete title');
  }
}
