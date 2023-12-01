import { Module } from '@nestjs/common';
import { Vote } from './entities/vote.entity';
import { VotesService } from './votes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotesController } from './votes.controller';

@Module({
  controllers: [VotesController],
  providers: [VotesService],
  imports: [TypeOrmModule.forFeature([Vote])],
})
export class VotesModule {}
