import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { TitleDTO } from './DTO/create.title.dto';
import { Title } from './title.entity';

@Injectable()
export class TitleRepository {
  constructor(
    @InjectRepository(Title)
    private titleRepository: Repository<Title>,
  ) {}

  async FindTitle(titleId: string) {
    try {
      const title = await this.titleRepository.findOne({
        where: { id: titleId },
      });

      if (!title) {
        throw { message: 'Titulo não encontrado' };
      }
      return title;
    } catch (err) {
      throw { message: 'Titulo não encontrado' };
    }
  }

  async FindAllTitle() {
    const allTitles = await this.titleRepository.find();
    return allTitles;
  }

  CreateTitle(param: TitleDTO, imageURL: string) {
    try {
      const transaction = this.titleRepository.create({
        ...param,
        cover: imageURL,
      });
      return transaction;
    } catch (err) {
      console.log(err);
    }
  }

  async SaveTitle(param: Title) {
    return await this.titleRepository.save(param);
  }

  async Updatetile(param: Title): Promise<Title> {
    const updatedTitle = await this.titleRepository
      .createQueryBuilder()
      .update({ ...param })
      .where({ id: param.id })
      .returning('*')
      .execute();
    return updatedTitle.raw[0];
  }

  async DeleteTitle(titleId: string): Promise<Title> {
    const deleteTitle = await this.titleRepository
      .createQueryBuilder()
      .delete()
      .where({ id: titleId })
      .returning('*')
      .execute();
    return deleteTitle.raw[0];
  }
}
