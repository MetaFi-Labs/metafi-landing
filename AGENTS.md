# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the Next.js App Router entry points (`layout.tsx`, `page.tsx`) plus `globals.css` for Tailwind primitives; add route groups or segment components here.
- `lib/` stores shared TypeScript helpers (`utils.ts` exports `cn`); prefer adding pure logic here to keep components lean.
- `public/` contains static assets surfaced by `next/image`; keep large media in subfolders (`public/img/...`).
- Root config highlights include `components.json` (shadcn/ui setup), `eslint.config.mjs`, and `tsconfig.json` with the `@/*` path alias—import shared modules using `@/lib/...` rather than relative paths.

## Build, Test, and Development Commands
- `bun install` (or `npm install`) to sync dependencies; Bun is preferred because the lockfile is Bun-generated.
- `npm run dev` (aliased to `bun run dev`) launches the turbopack dev server at http://localhost:3000 with fast HMR.
- `npm run build` performs a production compile using Turbopack; run before pushing to catch SSR issues.
- `npm run start` serves the last production build.
- `npm run lint` runs the Next.js + TypeScript ESLint flat config; use it pre-commit to keep CI green once added.

## Coding Style & Naming Conventions
- Write components in TypeScript with React functional components; default indentation is two spaces as seen in `app/page.tsx`.
- Prefer PascalCase for components (`HeroSection.tsx`) and camelCase for utilities.
- Keep styling in Tailwind classes; augment with `clsx`/`class-variance-authority` when conditionals grow.
- Always import shared helpers via `@/...` aliases to avoid brittle relative paths.

## Testing Guidelines
- No automated tests are committed yet; when adding them, co-locate unit tests beside source files (`button.test.tsx`) and register a `test` script in `package.json`.
- Target >80 % coverage using Vitest or Jest, and add Playwright for App Router flows; document the chosen stack in this file when finalized.
- Until suites exist, run `npm run lint` plus manual smoke tests against critical routes before merging.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat: add hero animation`, `fix: correct cn helper`) so release notes and changelog generators stay reliable.
- Keep commits focused on one logical change; update screenshots/GIFs for UI work in the PR description.
- Pull requests should include a short summary, testing notes (`npm run build`, browsers checked), and references to Linear/Jira issues when available.
- Request review once lint/build succeed locally and ensure CI status checks (when configured) are passing or clearly justified.
