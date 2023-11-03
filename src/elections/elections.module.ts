import { Module } from '@nestjs/common';
import { ElectionsController } from './elections/elections.controller';
import { ElectionsService } from './elections/elections.service';

@Module({
  controllers: [ElectionsController],
  providers: [ElectionsService]
})
export class ElectionsModule {}
