import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Election } from './entities/election.entity';
import { ElectionsService } from './elections.service';
import { ElectionsController } from './elections.controller';

@Module({
  controllers: [ElectionsController],
  providers: [ElectionsService],
  imports: [TypeOrmModule.forFeature([Election])],
})
export class ElectionsModule {}
