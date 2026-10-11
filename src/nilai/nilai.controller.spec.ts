import { Test, TestingModule } from '@nestjs/testing';
import { NilaiController } from './nilai.controller.js';
import { NilaiService } from './nilai.service.js';

describe('NilaiController', () => {
  let controller: NilaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NilaiController],
      providers: [NilaiService],
    }).compile();

    controller = module.get<NilaiController>(NilaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
