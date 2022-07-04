import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  profileId: string;

  @Column({ nullable: true })
  profileName: string;
}
