import { Trim } from 'class-sanitizer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateElectionDto {
  @Trim()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'election title' })
  name: string;

  @Trim()
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'starting date' })
  startDate: Date;

  @Trim()
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'election deadline' })
  endDate: Date;
}
