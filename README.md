# Vote Backend (nestjs)

An online voting API using NestJS that provides an accessible interface for effortless poll creation and voting on any topic. It leverages NestJS for scalable and optimized backend infrastructure to support real-time vote tracking and results for potentially thousands of geographically dispersed users. By democratizing the polling process through an easy-to-use portal, the effort here is to increase civic participation while upholding critical software engineering best practices around security, reliability, and performance. Please try the beta and provide feedback as the product continues maturing in line with user needs over the coming months.

## Requirements

- nodejs 18
- database: PostgreSQL
- web browser
- code editor
- git

## Installation

- git clone https://github.com/6hislain/vote-backend
- cd vote-backend
- npm install
- rename _.env.example_ to _.env_
- edit _.env_ to connect with your local database
- npm run migrate
- npm run start

## TODO

### Database Tables

- [x] User
  - authenticate
- [x] Election
- [x] Position
- [x] Candidate
- [x] Vote
