import { Vote } from '../../votes/entities/vote.entity';
import { Position } from '../../positions/entities/position.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Election {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @OneToMany(() => Position, (position) => position.election)
  positions: Position[];

  @OneToMany(() => Vote, (vote) => vote.election)
  votes: Vote[];
}
