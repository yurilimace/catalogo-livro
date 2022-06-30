import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEnum } from 'src/Enum/profileEnum';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { Profile as ProfileInterface } from './Interface/profile.interface';
@Injectable()
export class ProfileRepository {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async Save(profile: ProfileInterface) {
    const userProfile = new Profile();
    userProfile.profileName = profile.profileName;
    this.profileRepository.save(userProfile);
  }

  async FindProfile(profileName: string) {
    const p = await this.profileRepository.findOne({
      where: { profileName: profileName },
    });
    return p;
  }
}
