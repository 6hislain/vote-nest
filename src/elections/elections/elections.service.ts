import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/shared/abstract/abstract.service';
import { Election } from '../election.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ElectionsService extends AbstractService<Election> {
  constructor(
    @InjectRepository(Election) electionRepository: Repository<Election>,
  ) {
    super(electionRepository);
  }
}
