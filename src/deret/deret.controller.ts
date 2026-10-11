import { Controller, Get, Param, Query } from '@nestjs/common';
import { DeretService } from './deret.service.js';

@Controller('deret')
export class DeretController {
  constructor(private readonly deretService: DeretService) {}

  @Get(':jenis')
  buatDeret(
    @Param('jenis') jenis: string,
    @Query('jumlah') jumlah: string,
  ) {
    return this.deretService.buatDeret(jenis, jumlah);
  }
}
