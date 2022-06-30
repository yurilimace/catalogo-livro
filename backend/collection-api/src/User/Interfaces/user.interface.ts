import { Collection } from 'src/Collection/Interfaces/collection.interface';
import { Profile } from 'src/Profile/profile.entity';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  id: string;
  collectionId?: Collection;
}
