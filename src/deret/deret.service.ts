import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class DeretService {
  buatDeret(jenis: string, jumlahRaw: string | undefined) {
    if (jumlahRaw === undefined) {
      throw new BadRequestException('Query jumlah wajib diisi');
    }

    const jumlah = Number(jumlahRaw);

    if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 20) {
      throw new BadRequestException(
        'Jumlah harus berupa bilangan bulat dari 1 sampai 20',
      );
    }

    if (!['ganjil', 'genap', 'kuadrat'].includes(jenis)) {
      throw new BadRequestException(
        'Jenis harus ganjil, genap, atau kuadrat',
      );
    }

    const data: number[] = [];

    for (let i = 1; i <= jumlah; i++) {
      if (jenis === 'ganjil') {
        data.push(2 * i - 1);
      } else if (jenis === 'genap') {
        data.push(2 * i);
      } else {
        data.push(i * i);
      }
    }

    const total = data.reduce((sum, angka) => sum + angka, 0);

    return {
      jenis,
      jumlah,
      data,
      total,
    };
  }
}
