import { Injectable } from '@nestjs/common';

import { ProfileRepository } from './profile.repository';
import { Profile as ProfileInterface } from './Interface/profile.interface';
import { Profile } from './profile.entity';
import { CreateUserDTO } from 'src/User/dto/create.user.dto';
import { CreateProfileDTO } from './DTO/profile.dto';

@Injectable()
export class ProfileService {
  constructor(private profileRepository: ProfileRepository) {}

  async createProfile(profile: CreateProfileDTO) {
    const p = this.profileRepository.ParseDTOToProfileEntity(
      profile.profileName,
    );
    await this.profileRepository.Create(p);
    return p;
  }

  async UpdateProfile(profile: CreateProfileDTO) {
    const updatedProfile = await this.profileRepository.Update(profile);

    return updatedProfile;
  }

  async DeleteProfile(profileId: string) {
    const deleteProfile = await this.profileRepository.DeleteProfile(profileId);
    return deleteProfile;
  }

  async FindProfile(profileName: string): Promise<Profile> {
    const p = await this.profileRepository.FindProfile(profileName);

    return p;
  }
}
