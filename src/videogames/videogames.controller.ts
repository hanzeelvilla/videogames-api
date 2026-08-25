import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { VideogamesService } from './videogames.service';
import { CreateVideogameDto } from './dto/create-videogame.dto';
import { UpdateVideogameDto } from './dto/update-videogame.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('videogames')
export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}

  @Post()
  create(@Body() createVideogameDto: CreateVideogameDto) {
    return this.videogamesService.create(createVideogameDto);
  }

  @Get()
  findAll() {
    return this.videogamesService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.videogamesService.findOne(term);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVideogameDto: UpdateVideogameDto,
  ) {
    return this.videogamesService.update(+id, updateVideogameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videogamesService.remove(+id);
  }
}
