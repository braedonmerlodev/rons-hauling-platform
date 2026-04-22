# Clearpath Hauling

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/braedonmerlodev/rons-hauling-platform)

A modern full-stack chat application built with Cloudflare Workers, React, and Durable Objects. This project demonstrates a production-ready setup with real-time messaging, user management, and indexed entity storage using Cloudflare's edge platform.

## Features

- **Full-Stack Architecture**: React frontend with Vite, Hono backend in Cloudflare Workers.
- **Durable Objects Storage**: Per-user and per-chat Durable Object instances with automatic indexing for efficient listing.
- **Real-Time Chat**: Send and list messages per chat board with optimistic updates via TanStack Query.
- **Modern UI**: shadcn/ui components, Tailwind CSS, dark mode, responsive design.
- **Type-Safe APIs**: Shared types between frontend and worker, end-to-end TypeScript.
- **Developer Experience**: Hot reload, error boundaries, client error reporting, Bun-powered scripts.
- **Production-Ready**: CORS, logging, pagination, batch operations, concurrent-safe mutations.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, React Router, Lucide React
- **Backend**: Cloudflare Workers, Hono, Durable Objects (SQLite-backed)
- **Styling**: Tailwind CSS, Tailwind Animate, clsx, tw-merge
- **State/UI**: Zustand, Framer Motion, Sonner (toasts), React Hook Form
- **Utilities**: Bun (package manager), Immer, Zod, UUID
- **Dev Tools**: ESLint, TypeScript 5, Cloudflare Vite Plugin

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed (≥1.0)
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) (`bunx wrangler` works)
- Node.js types via `@cloudflare/workers-types`

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   bun install
   ```
3. (Optional) Generate Worker types:
   ```bash
   bun run cf-typegen
   ```

### Development

- Start the dev server (frontend + Workers proxy):
  ```bash
  bun run dev
  ```
  Open [http://localhost:3000](http://localhost:3000) (or `$PORT`).

- Lint the codebase:
  ```bash
  bun run lint
  ```

### Build & Preview

- Build for production:
  ```bash
  bun run build
  ```

- Preview the built app:
  ```bash
  bun run preview
  ```

## API Usage

The backend exposes RESTful endpoints at `/api/*`. All responses follow `{ success: boolean; data?: T; error?: string }`.

### Users
- `GET /api/users?cursor=&limit=10` - List users (paginated)
- `POST /api/users` - `{ name: string }` → Create user
- `DELETE /api/users/:id` - Delete user
- `POST /api/users/deleteMany` - `{ ids: string[] }` → Batch delete

### Chats
- `GET /api/chats?cursor=&limit=10` - List chats
- `POST /api/chats` - `{ title: string }` → Create chat
- `DELETE /api/chats/:id` - Delete chat
- `POST /api/chats/deleteMany` - `{ ids: string[] }` → Batch delete

### Messages
- `GET /api/chats/:chatId/messages` - List messages
- `POST /api/chats/:chatId/messages` - `{ userId: string; text: string }` → Send message

Example with `fetch`:
```ts
const res = await fetch('/api/users');
const { data: users } = await res.json();
```

Frontend uses `api-client.ts` wrapper with TanStack Query integration.

## Customizing the App

- **Frontend**: Edit `src/pages/HomePage.tsx` or add routes in `src/main.tsx`.
- **Backend Entities**: Extend `worker/entities.ts` (see examples), add routes in `worker/user-routes.ts`.
- **UI Components**: Use shadcn/ui from `@/components/ui/*`, add via `npx shadcn-ui@latest add`.
- **Theme**: Toggle dark/light mode, customize in `tailwind.config.js` / `src/index.css`.
- **Sidebar**: Customize or remove `AppLayout` in `src/components/layout/AppLayout.tsx`.

Seed data auto-populates on first API call via `ensureSeed()`.

## Deployment

Deploy to Cloudflare Workers with zero-config:

1. Login to Cloudflare:
   ```bash
   bunx wrangler login
   ```

2. (Optional) Configure `wrangler.jsonc` (name, env vars, bindings).

3. Deploy:
   ```bash
   bun run deploy
   ```

Your app will be live at `https://<name>.<subdomain>.workers.dev`.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/braedonmerlodev/rons-hauling-platform)

## Local Testing Workers

```bash
bunx wrangler dev worker/index.ts --remote
```

## Troubleshooting

- **Types missing**: Run `bun run cf-typegen`.
- **CORS issues**: Dev proxy handles it; production uses Hono CORS.
- **Storage**: Durable Objects persist across deploys (SQLite).
- **Errors**: Check client `errorReporter.ts`, worker logs via `wrangler tail`.

## License

MIT. Built with [Cloudflare Workers Templates](https://developers.cloudflare.com/workers/).