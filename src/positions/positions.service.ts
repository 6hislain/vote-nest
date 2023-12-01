import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { AbstractService } from 'src/shared/abstract/abstract.service';

@Injectable()
export class PositionsService extends AbstractService<Position> {
  @InjectRepository(Position)
  public readonly repository: Repository<Position>;
}
