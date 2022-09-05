import { Expose, Exclude } from 'class-transformer';

export class TitleDTO {
  @Expose()
  id?: string;
  @Expose()
  name: string;
  @Expose()
  author: string;
  @Expose()
  publisher: string;
  @Exclude()
  cover: Express.Multer.File | null;
  @Expose()
  coverURL: string;
}
