import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { VotesModule } from './votes/votes.module';
import { UsersModule } from './users/users.module';
import { ElectionsModule } from './elections/elections.module';
import { PositionsModule } from './positions/positions.module';
import { CandidatesModule } from './candidates/candidates.module';

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [
    CandidatesModule,
    ElectionsModule,
    PositionsModule,
    UsersModule,
    VotesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql' | 'mariadb' | 'postgres' | 'sqlite',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entityPrefix: process.env.DB_TABLE_PREFIX,
    }),
  ],
})
export class AppModule {}
