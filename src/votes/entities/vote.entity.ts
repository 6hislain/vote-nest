import { User } from 'src/users/entities/user.entity';
import { Election } from 'src/elections/entities/election.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Candidate } from 'src/candidates/entities/candidate.entity';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Election, (election) => election.votes)
  election: Election;

  @ManyToOne(() => Candidate, (candidate) => candidate.votes)
  candidate: Candidate;

  @ManyToOne(() => User, (user) => user.votes)
  user: User;
}
