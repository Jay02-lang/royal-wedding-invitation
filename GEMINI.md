# Agent Safety Rules

- **NEVER use `git reset --hard` or `git checkout -- .` or any destructive git command.**
- If you make a mistake, manually revert the code or use targeted file replacements. Never destroy the working tree, as it can wipe out hours of uncommitted work.
- Always use `write_to_file` or `replace_file_content` to modify files.
