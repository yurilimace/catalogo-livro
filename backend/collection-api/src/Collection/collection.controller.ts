import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';

@Controller('collection')
export class CollectionController {
  @Get()
  getCollection(): string {
    return 'ola controller de collection';
  }
}
