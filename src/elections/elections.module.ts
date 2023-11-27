import { Module } from '@nestjs/common';
import { ElectionsController } from './elections/elections.controller';
import { ElectionsService } from './elections/elections.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Election } from './election.entity';

@Module({
  controllers: [ElectionsController],
  providers: [ElectionsService],
  imports: [TypeOrmModule.forFeature([Election])],
})
export class ElectionsModule {}
