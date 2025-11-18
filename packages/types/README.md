# @repo/types

Shared TypeScript types package for the Highbid monorepo.

This package exports all database schema types and common API types that can be used across both server and client applications.

## Installation

This package is automatically available in the monorepo. No installation needed.

## Usage

### Import Database Types

```typescript
import type { User, NewUser } from "@repo/types";
// or
import type { User, NewUser } from "@repo/types/database";
```

### Import API Types

```typescript
import type {
  ApiResponse,
  PaginatedResponse,
  HealthCheckResponse,
} from "@repo/types";
// or
import type { ApiResponse, PaginatedResponse } from "@repo/types/api";
```

### Import Everything

```typescript
import type { User, ApiResponse, PaginatedResponse } from "@repo/types";
```

## Exports

### Database Types (`/database`)

- `User` - User entity type (inferred from schema)
- `NewUser` - User insert type (for creating new users)
- `users` - Schema table (if needed)

### API Types (`/api`)

- `ApiResponse<T>` - Standard API response wrapper
- `PaginatedResponse<T>` - Paginated API response
- `ApiError` - API error response
- `HealthCheckResponse` - Health check endpoint response

## Adding New Types

1. Add database schema types in `packages/db/src/schema/`
2. The types are automatically exported via `@repo/db`
3. Re-export them in `packages/types/src/database.ts`

For API types, add them directly to `packages/types/src/api.ts`.
