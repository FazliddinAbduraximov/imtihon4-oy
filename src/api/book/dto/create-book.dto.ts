import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBookDto {
    @ApiProperty({example:'Daftar hoshiyasidagi bitiklar'})
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({example:"O'tkir Hoshimov"})
    @IsString()
    @IsNotEmpty()
    author: string;

    @ApiProperty({example:2014})
    @IsNumber()
    @IsOptional()
    published_year: number;

    @ApiProperty({example:true})
    @IsBoolean()
    @IsOptional()
    available: boolean;
}
