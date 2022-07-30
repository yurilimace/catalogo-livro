import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UploadImageInBucket } from 'src/utils/UploadImageIntoBucket';
import { TitleDTO } from './DTO/create.title.dto';
import { Title } from './title.entity';
import { TitleRepository } from './title.repository';

@Injectable()
export class TitleService {
  constructor(private titleRepository: TitleRepository) {}

  async GetTitle(titleId: string): Promise<any> {
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

  UpdateTitle(): any {
    console.log('update Title');
  }

  DeleteTitle(): any {
    console.log('delete Title');
  }
}
