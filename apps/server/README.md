# Server

Production-ready Express TypeScript backend for Highbid with enterprise-grade architecture.

## Architecture

The server follows a clean, modular architecture:

```
src/
├── config/          # Configuration files (env, logger, database)
├── middleware/      # Express middleware (error handling, async handlers)
├── routes/          # API route handlers
├── services/        # Business logic layer
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── app.ts           # Express app setup
└── index.ts         # Application entry point
```

## Features

- ✅ **Winston Logging**: Enterprise-grade logging with file rotation
- ✅ **Drizzle ORM**: Type-safe database queries with PostgreSQL
- ✅ **Environment Validation**: Zod-based environment variable validation
- ✅ **Error Handling**: Centralized error handling with custom error classes
- ✅ **Type Safety**: Full TypeScript support throughout
- ✅ **Graceful Shutdown**: Proper cleanup on server termination
- ✅ **Health Checks**: Database connection health monitoring

## Getting Started

1. Install dependencies:

```bash
bun install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Update `.env` with your configuration:

```env
NODE_ENV=development
PORT=4000
CLIENT_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@localhost:5432/highbid
LOG_LEVEL=info
```

4. Run database migrations (if needed):

```bash
cd packages/db
bun run db:push
```

5. Run in development mode:

```bash
bun run dev
```

6. Build for production:

```bash
bun run build
```

7. Start production server:

```bash
bun run start
```

## Scripts

- `dev` - Start development server with hot reload
- `build` - Build TypeScript to JavaScript
- `start` - Start production server
- `lint` - Run ESLint
- `check-types` - Type check without emitting files

## Environment Variables

- `NODE_ENV` - Environment (development/production/test)
- `PORT` - Server port (default: 4000)
- `CLIENT_URL` - Client URL for CORS configuration
- `DATABASE_URL` - PostgreSQL connection string (required)
- `LOG_LEVEL` - Logging level (error/warn/info/debug, default: info)

## Logging

Logs are written to:

- Console (all environments)
- `logs/combined-*.log` (production, daily rotation)
- `logs/error-*.log` (production, errors only)
- `logs/exceptions.log` (uncaught exceptions)
- `logs/rejections.log` (unhandled promise rejections)

## Database

The server uses Drizzle ORM with PostgreSQL. Database schema is defined in `packages/db/src/schema/`.

### Database Commands

```bash
# Generate migrations
cd packages/db
bun run db:generate

# Push schema changes
bun run db:push

# Open Drizzle Studio
bun run db:studio
```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api` - API information

## Error Handling

The server includes comprehensive error handling:

- Custom error classes with status codes
- Centralized error handler middleware
- Proper error logging
- Development vs production error responses

## Development

The server uses:

- **Express 5** - Web framework
- **TypeScript** - Type safety
- **Winston** - Logging
- **Drizzle ORM** - Database ORM
- **Zod** - Schema validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
