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
import { ElectionsService } from './elections.service';
import { CreateElectionDto } from './dto/create-election.dto';
import { UpdateElectionDto } from './dto/update-election.dto';

@ApiTags('elections')
@Controller('elections')
export class ElectionsController {
  constructor(private readonly electionsService: ElectionsService) {}

  @Get()
  findAll() {
    return this.electionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.electionsService.findOne({ id });
  }

  @Post()
  create(@Body() createElectionDto: CreateElectionDto) {
    return this.electionsService.create(createElectionDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateElectionDto: UpdateElectionDto,
  ) {
    return this.electionsService.update({ id }, updateElectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.electionsService.remove(id);
  }
}
