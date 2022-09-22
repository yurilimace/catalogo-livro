import { HttpException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { DeleteImageInBucket } from 'src/utils/DeleteImageFromBucket';
import { UploadImageRefInBucket } from 'src/utils/updateImageRef';
import { UploadImageInBucket } from 'src/utils/UploadImageIntoBucket';
import { TitleDTO } from './DTO/create.title.dto';

import { TitleRepository } from './title.repository';

@Injectable()
export class TitleService {
  constructor(private titleRepository: TitleRepository) {}

  async GetTitle(titleId: string): Promise<TitleDTO> {
    const title = await this.titleRepository.FindTitle(titleId);
    const parsedTitleDto = plainToClass(TitleDTO, {
      ...title,
      coverURL: title.cover,
    });

    return parsedTitleDto;
  }

  async GetAllTitle(): Promise<TitleDTO[]> {
    const allTitles = await this.titleRepository.FindAllTitle();
    const parsedAllTitle = allTitles.map((title) =>
      plainToClass(TitleDTO, { ...title, coverURL: title.cover }),
    );
    return parsedAllTitle;
  }

  async SaveTitle(title: TitleDTO): Promise<any> {
    try {
      const hasTitleWithSameName = await this.titleRepository.FindTitleByName(
        title.name,
      );

      if (hasTitleWithSameName) {
        throw { message: 'Já existe um titulo salvo com esse nome' };
      }
      const imageURL: string = await UploadImageInBucket(title);
      const titleWithConvertedImage = this.titleRepository.CreateTitle(
        title,
        imageURL,
      );
      return await this.titleRepository.SaveTitle(titleWithConvertedImage);
    } catch (err) {
      throw new HttpException(
        'Erro na requisição por favor tente novamente',
        500,
      );
    }
  }

  async UpdateTitle(title: TitleDTO): Promise<TitleDTO> {
    try {
      const previousTitle = await this.GetTitle(title.id);
      let newImage = title.coverURL ?? '';

      if (title.cover) {
        newImage = await UploadImageInBucket(title);
      }
      if (previousTitle.name !== title.name && !title.cover) {
        newImage = await UploadImageRefInBucket(title, previousTitle);
      }

      if (newImage !== title.coverURL && newImage !== '') {
        await DeleteImageInBucket(previousTitle.name);
      }

      const objectWithNewValues = this.titleRepository.CreateTitle(
        title,
        newImage,
      );

      const updatedOperation = await this.titleRepository.Updatetile(
        objectWithNewValues,
      );

      const parsedTitleDto = plainToClass(TitleDTO, {
        ...updatedOperation,
        coverURL: updatedOperation.cover,
      });

      return parsedTitleDto;
    } catch (err) {
      throw new HttpException('Falha no update,Por favor tente denovo', 500);
    }
  }

  async DeleteTitle(id: string): Promise<TitleDTO> {
    const deletedTitle = await this.titleRepository.DeleteTitle(id);
    await DeleteImageInBucket(deletedTitle.name);
    const parsedToDTO = plainToClass(TitleDTO, {
      ...deletedTitle,
      coverURL: deletedTitle.cover,
    });

    return parsedToDTO;
  }
}
