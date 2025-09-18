import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
} from 'class-validator';

export class SignInDto {
  @ApiProperty({ example: 'fazliddin@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Fazliddin123!' })
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
