import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from './entities/candidate.entity';
import { AbstractService } from '../shared/abstract/abstract.service';

@Injectable()
export class CandidatesService extends AbstractService<Candidate> {
  @InjectRepository(Candidate)
  public readonly repository: Repository<Candidate>;
}
