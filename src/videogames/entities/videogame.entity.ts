import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BeforeUpdate } from 'typeorm/browser';

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

  @BeforeInsert()
  @BeforeUpdate()
  formatName() {
    this.name = this.name.trim().toLowerCase().replaceAll(' ', '-');
  }

  @BeforeInsert()
  @BeforeUpdate()
  formatDescription() {
    this.description = this.description.trim();
  }

  @BeforeInsert()
  @BeforeUpdate()
  formatConsole() {
    this.console = this.console.trim().toLocaleLowerCase();
  }
}
