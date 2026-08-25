# Videogames API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## To Do

### Inital Setup

- [x] Set global API prefix (`api`)
- [ ] Configure `@nestjs/config` for environment variables
- [ ] Configure global `ValidationPipe` (so DTOs validate automatically)

### Docker and Database

- [ ] Create `.env` and `.env.example` files
- [ ] Create `docker-compose.yml`
- [ ] Set up database connection

### Videogames Resource

- [ ] Generate Videogames resource
- [ ] Create Videogame entity

### DTOs and Validation

- [ ] Create CreateVideogameDto

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
