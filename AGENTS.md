# Repository Guidelines

## Project Structure

This repository is a Next.js portfolio using the App Router. Route and global layout files live in `src/app/`; page sections and shared UI are in `src/components/` (with primitives in `src/components/ui/`); site and experience data live in `src/lib/`. Put images, icons, and downloadable files in `public/` and reference them by root-relative URL. The repository currently has no dedicated test directory or test framework.

## Build, Test, and Development

Use the npm scripts defined in `package.json`:

- `npm run dev` starts the local Next.js development server with Turbopack.
- `npm run build` creates a production build.
- `npm start` serves the production build; run it after building.
- `npm run lint` runs the configured Next.js ESLint checks.

Install dependencies with `npm install` when setting up a checkout. No automated test command is configured; when adding tests, document the framework and command alongside the change.

## Coding Style

Follow the existing JavaScript/JSX conventions: use two-space indentation, semicolons, and double-quoted strings. Use PascalCase for React component filenames and component names (for example, `HeroSection.jsx`); use lowercase or camelCase for utility and data modules (for example, `site.js`). Keep page composition in `src/app/page.js`, reusable visual sections in `src/components/`, and content/configuration in `src/lib/`. ESLint uses `eslint-config-next` with the Core Web Vitals rules; run `npm run lint` before submitting.

## Testing Guidelines

There is no test suite or coverage requirement in the current project. For UI changes, verify the relevant page in the development server at desktop and mobile widths, and check browser console output. For behavior that can be tested automatically, include focused tests and explain how to run them in the pull request.

## Commits and Pull Requests

Recent commits use short, informal subjects rather than a strict conventional-commit format. Keep each subject concise and action-oriented, such as `Update project section`. Pull requests should summarize the visible or functional change, note how it was checked, link any related issue, and include screenshots for visual changes. Call out any new environment variables or setup steps.

## Configuration and Assets

Keep secrets out of source control; use environment variables for private configuration. Store public-facing media in `public/`, and update references when renaming files. Check image dimensions and mobile behavior when adding large portfolio assets.
