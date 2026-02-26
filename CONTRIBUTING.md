# Contributing to AKAN Dienstleistung

Thank you for your interest in contributing. As this is a proprietary commercial project for **AKAN Dienstleistung**, direct pull requests from unauthorized external contributors are not accepted.

If you are an authorized internal team member or contractor, please adhere to the following guidelines.

## Branching Strategy

- **`main`**: The production-ready branch. Deploys automatically to Vercel/Netlify.
- **`feat/*`**: For new features (e.g., `feat/contact-form`).
- **`fix/*`**: For bug fixes (e.g., `fix/hydration-error`).
- **`chore/*`**: For maintenance, dependency updates, and configuration changes.

## Development Workflow

1. Create a branch from `main`.
2. Ensure you have Node.js >=20 installed.
3. Run `npm install` to install dependencies and initialize Husky pre-commit hooks.
4. Make your changes locally.
5. All code must pass `npm run lint` and TypeScript compilation `npx tsc --noEmit`.

## Commit Messages

This project uses **Conventional Commits**:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `chore:` for maintenance (e.g., updating dependencies)
- `refactor:` for code modifications that neither fix a bug nor add a feature

Example: `feat: add new location page for Kassel`

## Pre-commit Hooks

We use `husky` and `lint-staged`. Before a commit is finalized, the following happens automatically:

1. `eslint --fix` runs on staged files.
2. `prettier --write` formats the code.
   If ESLint errors cannot be auto-fixed, the commit will be aborted. You must fix them manually.

## Pull Requests

- Use the provided PR template.
- Ensure all CI checks (Vercel Preview/Netlify Preview) pass before requesting a review.
- Tag a maintainer for review.
