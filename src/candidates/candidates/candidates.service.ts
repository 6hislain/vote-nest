import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/shared/abstract/abstract.service';
import { Candidate } from '../candidate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CandidatesService extends AbstractService<Candidate> {
  constructor(
    @InjectRepository(Candidate)
    candidateRepository: Repository<Candidate>,
  ) {
    super(candidateRepository);
  }
}
