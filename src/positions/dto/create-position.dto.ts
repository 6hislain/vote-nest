import { Trim } from 'class-sanitizer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePositionDto {
  @Trim()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'position title' })
  title: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'current election' })
  electionId: number;
}
