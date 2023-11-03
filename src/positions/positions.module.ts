import { Module } from '@nestjs/common';
import { PositionsController } from './positions/positions.controller';
import { PositionsService } from './positions/positions.service';

@Module({
  controllers: [PositionsController],
  providers: [PositionsService]
})
export class PositionsModule {}
