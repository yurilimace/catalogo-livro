import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from 'src/Profile/profile.modules';
import { TitleModule } from 'src/Title/title.modules';
import { TitleService } from 'src/Title/title.service';
import { UserModule } from 'src/User/user.modules';
import { UserService } from 'src/User/user.service';
import { CollectionController } from './collection.controller';
import { Collection } from './collection.entity';
import { CollectionRepository } from './collection.repository';
import { CollectionService } from './collection.service';

@Module({
  imports: [TypeOrmModule.forFeature([Collection]), UserModule, TitleModule],
  controllers: [CollectionController],
  providers: [CollectionRepository, CollectionService],
})
export class CollectionModule {}
