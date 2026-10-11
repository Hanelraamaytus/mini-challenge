import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { BilanganService } from './bilangan.service.js';

describe('BilanganService', () => {
  let service: BilanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BilanganService],
    }).compile();

    service = module.get<BilanganService>(BilanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('angka 12 genap, kuadrat 144, bukan kelipatan 5', () => {
    expect(service.cekBilangan('12')).toEqual({
      angka: 12,
      jenis: 'genap',
      kuadrat: 144,
      kelipatanLima: false,
    });
  });

  it('angka 15 ganjil, kuadrat 225, kelipatan 5', () => {
    expect(service.cekBilangan('15')).toEqual({
      angka: 15,
      jenis: 'ganjil',
      kuadrat: 225,
      kelipatanLima: true,
    });
  });

  it('batas 1 dan 100 valid', () => {
    expect(service.cekBilangan('1').jenis).toBe('ganjil');
    expect(service.cekBilangan('100').kelipatanLima).toBe(true);
  });

  it.each(['abc', '0', '150', '3.5', '-5', ''])(
    'input "%s" harus ditolak',
    (input) => {
      expect(() => service.cekBilangan(input)).toThrow(BadRequestException);
    },
  );
});