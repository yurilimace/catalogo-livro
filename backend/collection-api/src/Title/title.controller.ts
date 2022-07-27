import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

import { TitleDTO } from './DTO/create.title.dto';
import { TitleService } from './title.service';
@Controller('title')
export class TitleController {
  constructor(private TitleService: TitleService) {}
  @Get()
  async getTitle(): Promise<string> {
    // const convertedImage = ConvertImageBase64ToByteArray(image);

    // const storage = getStorage();
    // const storageRef = ref(storage, 'covers/teste upload.jpg');

    // const testeUpload = await uploadBytes(storageRef, convertedImage);

    // const url = await getDownloadURL(storageRef);

    // console.log(url);

    return 'ola controller de  title';
  }

  @Post()
  async SaveTitle(@Body() b: TitleDTO, @Res() response) {
    const createdTitle = await this.TitleService.SaveTitle(b);
    if (createdTitle) {
      response
        .status(HttpStatus.CREATED)
        .json({ message: 'Titulo Adicionado', titulo: createdTitle });
    }
  }
}
