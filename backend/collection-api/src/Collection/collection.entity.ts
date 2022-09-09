import { Title } from 'src/Title/title.entity';
import { User } from 'src/User/user.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Title, (title) => title.id)
  title: Title;

  @Column({ nullable: true })
  rate: string;
}
