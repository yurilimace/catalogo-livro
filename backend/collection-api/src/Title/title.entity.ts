import { Column, Generated, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Title {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  publisher: string;

  @Column()
  cover: string;
}
