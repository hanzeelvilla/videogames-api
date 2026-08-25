# Videogames API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## To Do

### Inital Setup

- [x] Set global API prefix (`api`)
- [x] Configure `@nestjs/config` for environment variables
- [x] Configure global `ValidationPipe` (so DTOs validate automatically)

### Docker and Database

- [x] Create `.env` and `.env.example` files
- [x] Create `docker-compose.yml`
- [x] Set up database connection

### Videogames Resource

- [x] Generate Videogames resource
- [x] Create Videogame entity

### DTOs and Validation

- [x] Create `CreateVideogameDto`

### Endpoints CRUD

- [ ] `POST /videogames` — create
- [ ] `GET /videogames` — list (with pagination)
- [ ] `GET /videogames/:id` — get one
- [ ] `PATCH /videogames/:id` — update
- [ ] `DELETE /videogames/:id` — delete

### Documentation

- [ ] README documentation

## Project setup

```bash
pnpm install
```

## Compile and run the project

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Run tests

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```
