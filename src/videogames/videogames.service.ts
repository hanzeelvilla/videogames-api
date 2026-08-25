import { BadRequestException, Injectable, Logger } from '@nestjs/common';
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (error.code === '23505') {
        throw new BadRequestException(
          'Videogame with this name already exists',
        );
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.logger.error(`Error creating videogame: ${error.message}`);
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
