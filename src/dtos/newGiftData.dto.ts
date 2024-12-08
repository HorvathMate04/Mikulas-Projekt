import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class newGiftData {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    material: string;

    @IsNumber()
    @IsNotEmpty()
    weigth: number;
}