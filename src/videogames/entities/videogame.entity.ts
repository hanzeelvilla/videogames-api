import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('videogames')
export class Videogame {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text', {
    unique: true,
  })
  name!: string;

  @Column('text')
  description!: string;

  @Column('integer')
  stars!: number;

  @Column('date')
  release_date!: Date;

  @Column('text')
  console!: string;

  @Exclude()
  @CreateDateColumn({
    name: 'created_at',
  })
  created_at!: Date;

  @Exclude()
  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at!: Date;
}
