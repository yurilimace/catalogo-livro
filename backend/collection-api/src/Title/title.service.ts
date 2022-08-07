import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { DeleteImageInBucket } from 'src/utils/DeleteImageFromBucket';
import { UploadImageInBucket } from 'src/utils/UploadImageIntoBucket';
import { TitleDTO } from './DTO/create.title.dto';
import { Title } from './title.entity';
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
    const imageURL: string = await UploadImageInBucket(title);

    const titleWithConvertedImage = this.titleRepository.CreateTitle(
      title,
      imageURL,
    );

    return await this.titleRepository.SaveTitle(titleWithConvertedImage);
  }

  async UpdateTitle(title: TitleDTO): Promise<TitleDTO> {
    const previousName = await this.GetTitle(title.id);
    const newImage = await UploadImageInBucket(title);
    await DeleteImageInBucket(previousName.name);
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