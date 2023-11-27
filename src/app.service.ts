import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAbout(): string {
    return 'About me';
  }
}
