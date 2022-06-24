import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './Collection/collection.modules';
import { typeOrmConfig } from './Config/typeorm.config';
import { UserModule } from './User/user.modules';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, CollectionModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
