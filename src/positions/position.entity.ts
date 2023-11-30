import { Candidate } from 'src/candidates/entities/candidate.entity';
import { Election } from 'src/elections/entities/election.entity';
import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
