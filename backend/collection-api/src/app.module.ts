import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './Collection/collection.modules';
import { typeOrmConfig } from './Config/typeorm.config';
import { UserModule } from './User/user.modules';
import { ProfileModule } from './Profile/profile.modules';

@Module({
  imports: [
    UserModule,
    CollectionModule,
    ProfileModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}