import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Election } from 'src/elections/election.entity';
import { Candidate } from 'src/candidates/candidate.entity';

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
