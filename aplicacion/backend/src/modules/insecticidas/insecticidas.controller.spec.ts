import { Test, TestingModule } from '@nestjs/testing';
import { InsecticidasController } from './insecticidas.controller';

describe('InsecticidasController', () => {
  let controller: InsecticidasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsecticidasController],
    }).compile();

    controller = module.get<InsecticidasController>(InsecticidasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
