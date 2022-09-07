import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';

import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private collectionService: CollectionService) {}
  @Get()
  async getCollection() {
    const list = await this.collectionService.GetAll();
    return list;
  }

  @Post()
  async createCollection(@Body() body) {
    const resp = await this.collectionService.Save(body.userId, body.titleId);
    console.log(resp);
    return 'teste';
  }
}
