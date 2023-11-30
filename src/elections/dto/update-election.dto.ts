import { PartialType } from '@nestjs/swagger';
import { CreateElectionDto } from './create-election.dto';

export class UpdateElectionDto extends PartialType(CreateElectionDto) {}
