import { Injectable } from '@nestjs/common';
import { UploadImageInBucket } from 'src/utils/UploadImageIntoBucket';
import { TitleDTO } from './DTO/create.title.dto';
import { TitleRepository } from './title.repository';

@Injectable()
export class TitleService {
  constructor(private titleRepository: TitleRepository) {}

  GetTitle(): any {
    console.log('get Title');
  }

  async SaveTitle(title: TitleDTO): Promise<any> {
    const imageURL = await UploadImageInBucket(title.name, title.cover);

    const titleWithConvertedImage = this.titleRepository.CreateTitle({
      ...title,
      cover: imageURL,
    });

    return await this.titleRepository.SaveTitle(titleWithConvertedImage);
  }

  UpdateTitle(): any {
    console.log('update Title');
  }

  DeleteTitle(): any {
    console.log('delete Title');
  }
}
