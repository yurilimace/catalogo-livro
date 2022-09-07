import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TitleController } from './title.controller';
import { Title } from './title.entity';
import { TitleRepository } from './title.repository';
import { TitleService } from './title.service';

@Module({
  imports: [TypeOrmModule.forFeature([Title])],
  controllers: [TitleController],
  providers: [TitleRepository, TitleService],
  exports: [TitleService, TitleRepository],
})
export class TitleModule {}
