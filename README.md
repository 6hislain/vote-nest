# Vote Backend (nestjs)

Hey there! Just wanted to give you a sneak peek into this cool vote app I've been tinkering with using NestJS. Picture this: a sleek, user-friendly interface that lets you create and participate in polls effortlessly. You can whip up a poll on anything from 'Pizza Toppings Showdown' to 'Best Movie of the Year.' The backend magic is all NestJS, making it super scalable and efficient. Users can cast their votes, see real-time updates, and even share the polls with friends. It's like democracy meets tech, and I'm stoked about how easy and fun it is to use. Can't wait to share it with you – it's shaping up to be a game-changer for quick and engaging decision-making!

https://www.techiediaries.com/nestjs-tutorial-rest-api-crud/

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

- [ ] abstract service
  - findOne
  - remove
- [ ] User
  - authenticate
- [x] Election
- [ ] Position
- [x] Candidate
- [ ] Vote
