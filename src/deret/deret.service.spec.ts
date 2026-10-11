import { Test, TestingModule } from '@nestjs/testing';
import { DeretService } from './deret.service.js';

describe('DeretService', () => {
  let service: DeretService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeretService],
    }).compile();

    service = module.get<DeretService>(DeretService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate odd numbers', () => {
    expect(service.buatDeret('ganjil', '5').data).toEqual([
      1, 3, 5, 7, 9,
    ]);
  });

  it('should generate even numbers', () => {
    expect(service.buatDeret('genap', '5').data).toEqual([
      2, 4, 6, 8, 10,
    ]);
  });

  it('should generate square numbers', () => {
    expect(service.buatDeret('kuadrat', '5').data).toEqual([
      1, 4, 9, 16, 25,
    ]);
  });
});
