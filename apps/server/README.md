# Server

Production-ready Express TypeScript backend for Highbid.

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration

4. Run in development mode:
```bash
bun run dev
```

5. Build for production:
```bash
bun run build
```

6. Start production server:
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

- `PORT` - Server port (default: 4000)
- `NODE_ENV` - Environment (development/production)
- `CLIENT_URL` - Client URL for CORS configuration

