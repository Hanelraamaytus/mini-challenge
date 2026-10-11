
import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CheckoutItemDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsNumber()
  @Min(0.01)
  harga: number;

  @IsInt()
  @Min(1)
  qty: number;
}
