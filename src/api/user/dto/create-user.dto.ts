import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Fazliddin' })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({ example: 'fazliddin@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Fazliddin123!' })
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
