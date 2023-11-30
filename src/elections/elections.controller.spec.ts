import { Test, TestingModule } from '@nestjs/testing';
import { ElectionsController } from './elections.controller';
import { ElectionsService } from './elections.service';

describe('ElectionsController', () => {
  let controller: ElectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectionsController],
      providers: [ElectionsService],
    }).compile();

    controller = module.get<ElectionsController>(ElectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
