import { Module } from '@nestjs/common';
import { SuhuController } from './suhu.controller.js';
import { SuhuService } from './suhu.service.js';

@Module({
  controllers: [SuhuController],
  providers: [SuhuService],
})
export class SuhuModule {}

