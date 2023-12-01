import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVoteDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'current election' })
  electionId: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'choosen candidate' })
  candidateId: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'voting user' })
  userId: number;
}
