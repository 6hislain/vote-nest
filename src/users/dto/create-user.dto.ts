import { Trim } from 'class-sanitizer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @Trim()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'user pseudo name' })
  username: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'user email' })
  email: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'user password' })
  password: string;
}
