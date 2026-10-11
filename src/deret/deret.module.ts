import { Module } from '@nestjs/common';
import { DeretController } from './deret.controller.js';
import { DeretService } from './deret.service.js';

@Module({
  controllers: [DeretController],
  providers: [DeretService],
})
export class DeretModule {}
