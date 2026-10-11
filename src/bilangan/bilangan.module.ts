import { Module } from '@nestjs/common';
import { BilanganService } from './bilangan.service.js';
import { BilanganController } from './bilangan.controller.js';

@Module({
  controllers: [BilanganController],
  providers: [BilanganService],
})
export class BilanganModule {}
