import { Test, TestingModule } from '@nestjs/testing';
import { BilanganController } from './bilangan.controller.js';
import { BilanganService } from './bilangan.service.js';

describe('BilanganController', () => {
  let controller: BilanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BilanganController],
      providers: [BilanganService],
    }).compile();

    controller = module.get<BilanganController>(BilanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return result for 12', () => {
    expect(controller.cekBilangan('12')).toEqual({
      angka: 12,
      jenis: 'genap',
      kuadrat: 144,
      kelipatanLima: false,
    });
  });
});