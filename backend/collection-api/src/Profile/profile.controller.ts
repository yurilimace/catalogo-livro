import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
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

  @Post()
  //To Do -> mudar o paramentro do body para o ProfileDTO
  async createProfile(@Body() b: ProfileInterface): Promise<Profile> {
    const response = await this.profileService.createProfile(b);
    return response;
  }
}
