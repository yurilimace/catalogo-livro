import { Exclude, Expose, Transform } from 'class-transformer';
import { ProfileEnum } from 'src/Enum/profileEnum';

export class CreateUserDTO {
  @Expose()
  id?: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;

  @Expose()
  @Transform(({ obj }) => obj.profile.profileName)
  profileName?: string;
}
