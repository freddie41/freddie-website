<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Guidelines

- Keep the homepage entry point in `app/page.tsx` and the main interactive UI in `components/PortfolioPage.tsx`.
- Keep portfolio text, translations, recommendations, services, skills, and certifications in `lib/content.ts`.
- Use TypeScript and existing project dependencies before introducing new abstractions or packages.
- Preserve the bilingual English/Spanish behavior when changing user-facing content.
- Maintain responsive layouts and accessible labels, focus states, and semantic HTML.
- Keep styling in `app/globals.css` and follow the existing design tokens and visual language.
- Run `npm run lint` and `npm run build` after code changes.
- Do not modify generated files or remove the generated Next.js agent-rules block.
