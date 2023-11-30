import { Trim } from 'class-sanitizer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateCandidateDto {
  @Trim()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "candidate's full name" })
  name: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'political party' })
  party: string;

  @Trim()
  @IsString()
  @IsOptional()
  @ApiProperty({ description: "candidate's biography" })
  bio: string;

  @Trim()
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'profile picture' })
  image: string;

  @IsNotEmpty()
  @ApiProperty({ description: "candidate's position" })
  positionId: number;
}
