# Agent Instructions

## Task source
- Tasks live in the `task/` folder as `.md` files. Read the pinned/assigned task file fully before doing anything.

## Workflow (strict order)
1. **Understand**: Read the task file and relevant code. If anything is unclear, **ask me in chat before starting**. Never guess.
2. **Plan**: Split the task into small, logical subtasks (e.g. SEO, UI, backend/API, tests, docs). Write the plan briefly in chat. Typically 3-6 subtasks.
3. **Execute**: Do one subtask at a time. Complete it, verify it (build/lint/tests where available), then commit.
4. **Repeat** until all subtasks are done. Report a short summary at the end.

## Commit rules
- **Never one big commit.** One commit per subtask (aim for 4-5+ for large tasks).
- Each commit must be small, working, and self-contained.
- **No co-authors.** Do NOT add `Co-authored-by:` trailers, AI signatures, or "Generated with ..." lines. Commits are authored only by the repo's configured user.
- Commit message format:
  ```
  <type>(<scope>): <short summary, max 72 chars>

  - What was changed
  - Why it was changed
  - Files/areas affected
  ```
  Types: `feat`, `fix`, `refactor`, `style`, `perf`, `seo`, `docs`, `test`, `chore`.
- Message must clearly explain everything done in that commit.

## General rules
- Stay within the task scope; don't make unrelated changes.
- If a doubt appears mid-task, stop and ask in chat.
- Don't push unless I ask.