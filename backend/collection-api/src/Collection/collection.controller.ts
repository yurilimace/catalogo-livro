import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { response } from 'express';

import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private collectionService: CollectionService) {}
  @Get()
  async getCollection() {
    const list = await this.collectionService.GetAll();
    return list;
  }

  @Get(':id')
  async getCollectionByUserId(@Param() { id }) {
    const list = await this.collectionService.GetCollectionByUserId(id);
    return list;
  }

  @Post()
  async createCollection(@Body() body, @Res() response) {
    try {
      const resp = await this.collectionService.Save(body.userId, body.titleId);
      return response.status(HttpStatus.CREATED).json({
        message: 'Titulo adicionado a coleção com sucesso',
        collection: resp,
      });
    } catch (err) {
      response.status(HttpStatus.BAD_REQUEST).json(err);
    }
  }

  @Delete(':id')
  async DeleteCollection(@Param('id') id) {
    const resp = await this.collectionService.DeleteFromUserCollection(id);
    console.log(resp);
    return resp;
  }
}
