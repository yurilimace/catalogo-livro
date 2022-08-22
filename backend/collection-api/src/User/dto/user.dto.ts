import { Expose } from 'class-transformer';
import { CreateUserDTO } from './create.user.dto';

export class UserDTO extends CreateUserDTO {
  @Expose()
  token: string;
}
