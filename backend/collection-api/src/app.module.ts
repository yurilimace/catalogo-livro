import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './Collection/collection.modules';
import { typeOrmConfig } from './Config/typeorm.config';
import { UserModule } from './User/user.modules';
import { ProfileModule } from './Profile/profile.modules';
import { TitleModule } from './Title/title.modules';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    CollectionModule,
    ProfileModule,
    TitleModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'Development' ? '.env' : '.env.development',
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
