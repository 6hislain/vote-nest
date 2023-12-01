import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';

@ApiTags('votes')
@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Get()
  findAll() {
    return this.votesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.votesService.findOne({ id });
  }

  @Post()
  create(@Body() createVoteDto: CreateVoteDto) {
    return this.votesService.create(createVoteDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateVoteDto: UpdateVoteDto) {
    return this.votesService.update({ id }, updateVoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.votesService.remove(id);
  }
}
