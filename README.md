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

- [x] `POST /videogames` — create
- [x] `GET /videogames` — list
- [x] `GET /videogames/:term` — get one
- [x] `PATCH /videogames/:id` — update
- [x] `DELETE /videogames/:id` — delete

### Documentation

- [x] README documentation

### Extra Features

- [ ] Param search
- [ ] Videogame image
- [ ] Error handling
- [ ] pagination
- [ ] Console relation
- [ ] Rate limit
- [ ] Swagger documentation
- [ ] Test

## Requisitos

- [Node.js](https://nodejs.org/) v20 o superior
- [pnpm](https://pnpm.io/) como gestor de paquetes
- [Docker](https://www.docker.com/) y Docker Compose (para levantar la base de datos)

## Instalación y configuración

1. Clonar el repositorio e instalar dependencias:

   ```bash
   pnpm install
   ```

2. Crear el archivo `.env` a partir de `.env.example` y completar los valores:

   ```bash
   cp .env.example .env
   ```

   Variables disponibles:

   - `DB_PORT`: puerto expuesto por la base de datos
   - `DB_HOST`: host de la base de datos
   - `DB_NAME`: nombre de la base de datos
   - `DB_PASSWORD`: contraseña del usuario de Postgres

3. Levantar la base de datos (Postgres) con Docker Compose:

   ```bash
   docker-compose up -d
   ```

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
