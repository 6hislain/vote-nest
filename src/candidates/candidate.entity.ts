import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Vote } from 'src/votes/vote.entity';
import { Position } from 'src/positions/position.entity';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  party: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => Position, (position) => position.candidates)
  position: Position;

  @OneToMany(() => Vote, (vote) => vote.candidate)
  votes: Vote[];
}
