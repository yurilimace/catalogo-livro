import { Collection } from 'src/Collection/collection.entity';
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

  @OneToOne(() => Collection, { cascade: true })
  @JoinColumn()
  collectionId: Collection;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
