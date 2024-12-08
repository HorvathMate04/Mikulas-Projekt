import { IsString, IsOptional, IsNumber, Min } from 'class-validator';

export class updateGiftData {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    material?: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    weigth?: number;
}
