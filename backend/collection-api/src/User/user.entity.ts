import { Collection } from 'src/Collection/collection.entity';
import { Profile } from 'src/Profile/profile.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @OneToOne(() => Profile)
  @JoinColumn({ name: 'profile' })
  profile: Profile;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
