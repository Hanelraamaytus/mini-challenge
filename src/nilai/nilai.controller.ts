import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { NilaiService } from './nilai.service.js';

@Controller('nilai')
export class NilaiController {
  constructor(private readonly nilaiService: NilaiService) {}

  @Post('hitung')
  @HttpCode(200)
  hitung(@Body() body: any) {
    return this.nilaiService.hitungNilai(body);
  }
}
