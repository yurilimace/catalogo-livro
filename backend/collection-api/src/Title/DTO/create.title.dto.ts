import { Expose } from 'class-transformer';

export class TitleDTO {
  @Expose()
  id?: string;
  @Expose()
  name: string;
  @Expose()
  author: string;
  @Expose()
  publisher: string;
  @Expose()
  cover: string;
}
