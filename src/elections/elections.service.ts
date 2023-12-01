import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Election } from './entities/election.entity';
import { AbstractService } from '../shared/abstract/abstract.service';

@Injectable()
export class ElectionsService extends AbstractService<Election> {
  @InjectRepository(Election)
  public readonly repository: Repository<Election>;
}
