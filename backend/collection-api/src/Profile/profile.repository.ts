import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateProfileDTO } from './DTO/profile.dto';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileRepository {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async Create(profile: Profile) {
    const userProfile = new Profile();
    userProfile.profileName = profile.profileName;
    this.profileRepository.save(userProfile);
  }

  async Update(profile: CreateProfileDTO) {
    const p = await this.profileRepository
      .createQueryBuilder()
      .update({
        profileName: profile.profileName,
      })
      .where({
        profileId: profile.profileId,
      })
      .returning('*')
      .execute();

    return p.raw[0];
  }

  async DeleteProfile(profileId: string) {
    //const p = await this.profileRepository.delete({ profileId: profileId });
    const p = await this.profileRepository
      .createQueryBuilder()
      .delete()
      .where({ profileId: profileId })
      .returning('*')
      .execute();
    return p.raw[0];
  }

  async FindProfile(profileName: string) {
    const p = await this.profileRepository.findOne({
      where: { profileName: profileName },
    });

    return p;
  }

  ParseDTOToProfileEntity(profileName: string) {
    const p = this.profileRepository.create({ profileName: profileName });
    return p;
  }
}
