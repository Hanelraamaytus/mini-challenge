import { Module } from '@nestjs/common';
import { NilaiController } from './nilai.controller.js';
import { NilaiService } from './nilai.service.js';

@Module({
  controllers: [NilaiController],
  providers: [NilaiService],
})
export class NilaiModule {}
