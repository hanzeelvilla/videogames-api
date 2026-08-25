import { Module } from '@nestjs/common';
import { VideogamesService } from './videogames.service';
import { VideogamesController } from './videogames.controller';
import { Videogame } from './entities/videogame.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [VideogamesController],
  providers: [VideogamesService],
  imports: [TypeOrmModule.forFeature([Videogame])],
})
export class VideogamesModule {}
