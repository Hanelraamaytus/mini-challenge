
import { BadRequestException, Injectable } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto.js';

type Member = 'reguler' | 'silver' | 'gold';
type Metode = 'tunai' | 'qris';

@Injectable()
export class KasirService {
  checkout(
    memberRaw: string,
    metodeRaw: string,
    body: CheckoutDto,
  ) {
    const memberText = memberRaw?.toLowerCase();
    const metodeText = metodeRaw?.toLowerCase();

    if (
      memberText !== 'reguler' &&
      memberText !== 'silver' &&
      memberText !== 'gold'
    ) {
      throw new BadRequestException(
        'Member harus reguler, silver, atau gold',
      );
    }

    if (metodeText !== 'tunai' && metodeText !== 'qris') {
      throw new BadRequestException(
        'Metode pembayaran harus tunai atau qris',
      );
    }

    const member: Member = memberText;
    const metode: Metode = metodeText;
    const rincian = body.items.map((item) => ({
      nama: item.nama.trim(),
      harga: item.harga,
      qty: item.qty,
      subtotal: item.harga * item.qty,
    }));

    const totalItem = rincian.reduce(
      (total, item) => total + item.qty,
      0,
    );

    const subtotal = rincian.reduce(
      (total, item) => total + item.subtotal,
      0,
    );

    const diskonPersen: Record<Member, number> = {
      reguler: 0,
      silver: 5,
      gold: 10,
    };

    const diskon = subtotal * diskonPersen[member] / 100;

    const biayaAdmin =
      metode === 'qris' ? (subtotal - diskon) * 0.01 : 0;

    const total = subtotal - diskon + biayaAdmin;

    return {
      member,
      metode,
      rincian,
      totalItem,
      subtotal,
      diskon,
      biayaAdmin,
      total,
    };
  }
}
