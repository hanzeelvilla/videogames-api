import { Type } from 'class-transformer';
import { IsDate, IsInt, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateVideogameDto {
  @IsString()
  @MinLength(3)
  name!: string;

  @IsString()
  @MinLength(3)
  description!: string;

  @IsInt()
  @Min(0)
  @Max(5)
  stars!: number;

  @IsDate()
  @Type(() => Date)
  release_date!: Date;

  @IsString()
  @MinLength(3)
  console!: string;
}
