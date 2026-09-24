# Repository instructions

## Commit and push after changes

- After completing any requested work that changes files in this repository, immediately commit the changes for that work and push the commit to the current branch's upstream. Apply this to changes of any size, including code, documentation, configuration, and assets.
- Finish the requested change and any needed validation before committing; do not leave completed work waiting for a separate commit or push request.
- Stage only files changed for the current work. Preserve and exclude unrelated changes that were already present.
- Use a concise Conventional Commit message, preferably in Traditional Chinese.
- Before committing, review the staged diff and run `git diff --cached --check`. After pushing, confirm the branch is up to date with its upstream and report the commit hash.
- For read-only work that changes no repository files, do not create an empty commit.
- If pushing fails or the branch has no usable upstream, report the exact blocker. Do not force-push or rewrite remote history.
