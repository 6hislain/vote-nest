import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Election } from '../../elections/entities/election.entity';
import { Candidate } from '../../candidates/entities/candidate.entity';

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Election, (election) => election.positions)
  election: Election;

  @OneToMany(() => Candidate, (candidate) => candidate.position)
  candidates: Candidate[];
}
