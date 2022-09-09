import { Exclude, Expose } from 'class-transformer';
import { TitleDTO } from 'src/Title/DTO/create.title.dto';

export class CollectionDTO {
  @Expose()
  id?: string;
  @Exclude()
  userId: string;
  @Exclude()
  titleId: string;
  @Expose()
  title: TitleDTO;
  @Expose()
  rate: number;
}
