import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BilanganModule } from './bilangan/bilangan.module.js';
import { SuhuModule } from './suhu/suhu.module.js';
import { DeretModule } from './deret/deret.module.js';
import { NilaiModule } from './nilai/nilai.module.js';
import { KasirModule } from './kasir/kasir.module.js';

@Module({
  imports: [BilanganModule, SuhuModule, DeretModule, NilaiModule, KasirModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
