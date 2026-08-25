import { Injectable, Logger } from '@nestjs/common';
import { CreateVideogameDto } from './dto/create-videogame.dto';
import { UpdateVideogameDto } from './dto/update-videogame.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Videogame } from './entities/videogame.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideogamesService {
  protected readonly logger = new Logger('Videogames');

  constructor(
    @InjectRepository(Videogame)
    private readonly videogameRepository: Repository<Videogame>,
  ) {}

  async create(createVideogameDto: CreateVideogameDto) {
    try {
      const videogame = this.videogameRepository.create(createVideogameDto);
      return await this.videogameRepository.save(videogame);
    } catch (error) {
      this.logger.error(`Error creating videogame: ${error.message}`);
      throw error;
    }
  }

  findAll() {
    return `This action returns all videogames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} videogame`;
  }

  update(id: number, updateVideogameDto: UpdateVideogameDto) {
    return `This action updates a #${id} videogame`;
  }

  remove(id: number) {
    return `This action removes a #${id} videogame`;
  }
}
