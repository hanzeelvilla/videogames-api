import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateVideogameDto } from './dto/create-videogame.dto';
import { UpdateVideogameDto } from './dto/update-videogame.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Videogame } from './entities/videogame.entity';
import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';

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

  async findAll() {
    const videogames = await this.videogameRepository.find();
    return videogames;
  }

  async findOne(term: string) {
    let videogame: Videogame | null;

    if (isUUID(term)) {
      videogame = await this.videogameRepository.findOneBy({ id: term });
    } else {
      videogame = await this.videogameRepository.findOneBy({ name: term });
    }

    if (!videogame) {
      throw new BadRequestException(`Videogame with term "${term}" not found`);
    }

    return videogame;
  }

  update(id: number, updateVideogameDto: UpdateVideogameDto) {
    return `This action updates a #${id} videogame`;
  }

  async remove(id: string) {
    const videogame = await this.findOne(id);
    await this.videogameRepository.remove(videogame);
  }
}
