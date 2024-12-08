import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class newKidData{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsBoolean()
    behaved: boolean;
}