import { Injectable } from '@nestjs/common';

import { ProfileRepository } from './profile.repository';
import { Profile as ProfileInterface } from './Interface/profile.interface';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(private profileRepository: ProfileRepository) {}

  async createProfile(profile: ProfileInterface) {
    const p = new Profile();
    p.profileName = profile.profileName;
    await this.profileRepository.Save(profile);
    return p;
  }

  async FindProfile(profileName: string): Promise<Profile> {
    const p = await this.profileRepository.FindProfile(profileName);
    return p;
  }
}
