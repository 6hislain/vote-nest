import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Trim } from 'class-sanitizer';
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

export class UpdateElectionDto extends PartialType(CreateElectionDto) {}
