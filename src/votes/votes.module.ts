import { Module } from '@nestjs/common';
import { VotesController } from './votes/votes.controller';
import { VotesService } from './votes/votes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './vote.entity';

@Module({
  controllers: [VotesController],
  providers: [VotesService],
  imports: [TypeOrmModule.forFeature([Vote])],
})
export class VotesModule {}
