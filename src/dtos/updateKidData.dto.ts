import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class updateKidData {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsBoolean()
    @IsOptional()
    behaved?: boolean;
}
