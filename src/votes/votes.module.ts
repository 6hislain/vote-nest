import { Module } from '@nestjs/common';
import { VotesController } from './votes/votes.controller';
import { VotesService } from './votes/votes.service';

@Module({
  controllers: [VotesController],
  providers: [VotesService]
})
export class VotesModule {}
