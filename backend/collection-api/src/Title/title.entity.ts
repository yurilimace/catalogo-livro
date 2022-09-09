import { Column, Generated, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Title {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  publisher: string;

  @Column({ nullable: true })
  cover: string;
}
