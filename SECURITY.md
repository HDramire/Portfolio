# Security Notes

This portfolio is a static site. It should never contain live secrets, private keys, or production credentials.

## Safe repo rules

- Do not commit API keys, tokens, passwords, or `.env` files.
- Keep certificates, private keys, and exported credential bundles out of the repository.
- Review `git status` before every commit to confirm only intended files are staged.
- Rotate any secret immediately if it is ever committed, even briefly.

## Reporting

If you find a security issue in this project, report it privately to the site owner before sharing details publicly.
