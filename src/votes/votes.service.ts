import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Vote } from './entities/vote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/shared/abstract/abstract.service';

@Injectable()
export class VotesService extends AbstractService<Vote> {
  @InjectRepository(Vote)
  public readonly repository: Repository<Vote>;
}
