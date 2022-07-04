import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { CreateUserDTO } from 'src/User/dto/create.user.dto';
import { CreateProfileDTO } from './DTO/profile.dto';
import { Profile as ProfileInterface } from './Interface/profile.interface';
import { Profile } from './profile.entity';
import { ProfileRepository } from './profile.repository';
import { ProfileService } from './profile.service';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @Get()
  getAllProfiles(): string {
    return 'Ola controller de profile';
  }

  @Get('/findByName')
  async getprofileByName(@Res() response, @Query() q) {
    const req = await this.profileService.FindProfile(q.profileName);
    response.status(HttpStatus.OK).json(req);
  }

  @Put('/updateProfile')
  async UpdateProfile(@Res() response, @Body() b: CreateProfileDTO) {
    const p = await this.profileService.UpdateProfile(b);
    return response.status(HttpStatus.OK).json(p);
  }

  @Delete('/deleteProfile')
  async DeleteProfile(@Query() q, @Res() response) {
    const p = await this.profileService.DeleteProfile(q.profileId);
    return response.status(HttpStatus.OK).json(p);
  }

  @Post()
  async createProfile(@Body() b: CreateProfileDTO): Promise<Profile> {
    const response = await this.profileService.createProfile(b);
    return response;
  }
}
