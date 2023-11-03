import { Module } from '@nestjs/common';
import { CandidatesController } from './candidates/candidates.controller';
import { CandidatesService } from './candidates/candidates.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from './candidate.entity';

@Module({
  controllers: [CandidatesController],
  providers: [CandidatesService],
  imports: [TypeOrmModule.forFeature([Candidate])],
})
export class CandidatesModule {}
