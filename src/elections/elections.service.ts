import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Election } from './entities/election.entity';
import { AbstractService } from 'src/shared/abstract/abstract.service';

@Injectable()
export class ElectionsService extends AbstractService<Election> {
  constructor(
    @InjectRepository(Election) electionRepository: Repository<Election>,
  ) {
    super(electionRepository);
  }
}