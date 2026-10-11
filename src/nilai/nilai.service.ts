
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class NilaiService {
  hitungNilai(body: any) {
    const { nama, tugas, uts, uas } = body ?? {};

    // Validasi nama
    if (typeof nama !== 'string' || nama.trim() === '') {
      throw new BadRequestException(
        'Nama harus berupa string dan tidak boleh kosong',
      );
    }

    // Validasi array tugas
    if (!Array.isArray(tugas) || tugas.length < 1) {
      throw new BadRequestException(
        'Tugas harus berupa array yang berisi minimal 1 nilai',
      );
    }

    // Validasi setiap nilai tugas
    for (let i = 0; i < tugas.length; i++) {
      if (
        typeof tugas[i] !== 'number' ||
        !Number.isFinite(tugas[i]) ||
        tugas[i] < 0 ||
        tugas[i] > 100
      ) {
        throw new BadRequestException(
          `Nilai tugas ke-${i + 1} harus berupa angka dari 0 sampai 100`,
        );
      }
    }

    // Validasi UTS dan UAS
    if (
      typeof uts !== 'number' ||
      !Number.isFinite(uts) ||
      uts < 0 ||
      uts > 100
    ) {
      throw new BadRequestException(
        'Nilai UTS harus berupa angka dari 0 sampai 100',
      );
    }

    if (
      typeof uas !== 'number' ||
      !Number.isFinite(uas) ||
      uas < 0 ||
      uas > 100
    ) {
      throw new BadRequestException(
        'Nilai UAS harus berupa angka dari 0 sampai 100',
      );
    }

    // Menghitung rata-rata tugas
    const jumlahTugas = tugas.reduce(
      (total: number, nilai: number) => total + nilai,
      0,
    );

    const rataTugas = jumlahTugas / tugas.length;

    // Menghitung nilai akhir
    const nilaiAkhir =
      rataTugas * 0.3 +
      uts * 0.3 +
      uas * 0.4;

    const nilaiAkhirBulat =
      Math.round(nilaiAkhir * 100) / 100;

    // Menentukan predikat
    let predikat: string;

    if (nilaiAkhirBulat >= 90) {
      predikat = 'A';
    } else if (nilaiAkhirBulat >= 80) {
      predikat = 'B';
    } else if (nilaiAkhirBulat >= 70) {
      predikat = 'C';
    } else {
      predikat = 'D';
    }

    // Menentukan status
    const status = nilaiAkhirBulat >= 75
      ? 'Lulus'
      : 'Remedial';

    return {
      nama: nama.trim(),
      rataTugas: Math.round(rataTugas * 100) / 100,
      nilaiAkhir: nilaiAkhirBulat,
      predikat,
      status,
    };
  }
}