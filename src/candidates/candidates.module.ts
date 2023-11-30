import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from './entities/candidate.entity';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';

@Module({
  controllers: [CandidatesController],
  providers: [CandidatesService],
  imports: [TypeOrmModule.forFeature([Candidate])],
})
export class CandidatesModule {}
