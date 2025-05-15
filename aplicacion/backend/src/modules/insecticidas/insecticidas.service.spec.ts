import { Test, TestingModule } from '@nestjs/testing';
import { InsecticidasService } from './insecticidas.service';

describe('InsecticidasService', () => {
  let service: InsecticidasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsecticidasService],
    }).compile();

    service = module.get<InsecticidasService>(InsecticidasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
