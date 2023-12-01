import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/shared/abstract/abstract.service';

@Injectable()
export class UsersService extends AbstractService<User> {
  @InjectRepository(User)
  public readonly repository: Repository<User>;
}
