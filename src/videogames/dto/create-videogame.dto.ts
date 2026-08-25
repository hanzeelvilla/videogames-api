import { IsDate, IsString, MinLength } from 'class-validator';

export class CreateVideogameDto {
  @IsString()
  @MinLength(3)
  name!: string;

  @IsString()
  @MinLength(3)
  description?: string;

  @IsDate()
  release_date!: Date;

  @IsString()
  @MinLength(3)
  console!: string;
}
