import { Module } from '@nestjs/common';
import { PositionsController } from './positions/positions.controller';
import { PositionsService } from './positions/positions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './position.entity';

@Module({
  controllers: [PositionsController],
  providers: [PositionsService],
  imports: [TypeOrmModule.forFeature([Position])],
})
export class PositionsModule {}
