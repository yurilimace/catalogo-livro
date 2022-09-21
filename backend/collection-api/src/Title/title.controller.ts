import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { TitleDTO } from './DTO/create.title.dto';
import { TitleService } from './title.service';
@Controller('title')
export class TitleController {
  constructor(private TitleService: TitleService) {}

  @Get()
  async getAllTitle(@Res() response) {
    const allTItle = await this.TitleService.GetAllTitle();
    return response.status(HttpStatus.OK).json(allTItle);
  }

  @Get(':id')
  async getTitle(@Param('id') id, @Res() response): Promise<TitleDTO> {
    try {
      const title = await this.TitleService.GetTitle(id);
      return response
        .status(HttpStatus.OK)
        .json({ message: 'OK', title: title });
    } catch (err) {
      return response.status(HttpStatus.NOT_FOUND).json(err);
    }
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('cover'))
  @Post()
  async SaveTitle(
    @UploadedFile() file: Express.Multer.File,
    @Body() b: TitleDTO,
    @Res() response,
  ) {
    try {
      const createdTitle = await this.TitleService.SaveTitle({
        ...b,
        cover: file,
      });
      if (createdTitle) {
        response
          .status(HttpStatus.CREATED)
          .json({ message: 'Titulo Adicionado', titulo: createdTitle });
      }
    } catch (err) {
      response.status(HttpStatus.CONFLICT).json({ message: err.message });
    }
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('cover'))
  @Put()
  async UpdateTitle(
    @Body() b: TitleDTO,
    @UploadedFile() file: Express.Multer.File | null,
    @Res() Response,
  ) {
    const updateTitle = await this.TitleService.UpdateTitle({
      ...b,
      cover: file,
    });
    if (updateTitle) {
      return Response.status(HttpStatus.OK).json({
        message: 'Titulo Atualizado',
        title: updateTitle,
      });
    }
    return Response.status(HttpStatus.BAD_REQUEST).json({
      message: 'Erro ao Atualizar titulo',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async DeleteTitle(@Param() id, @Res() response) {
    const deletedTitle = await this.TitleService.DeleteTitle(id.id);
    if (deletedTitle) {
      return response.status(HttpStatus.OK).json({
        message: 'Titulo Deletado',
        title: deletedTitle,
      });
    }
    return response.status(HttpStatus.BAD_REQUEST).json({
      message: 'Erro ao Deletar titulo',
    });
  }
}
