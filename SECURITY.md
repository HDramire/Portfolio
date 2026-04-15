# Security Notes

This portfolio is a static site. It should never contain live secrets, private keys, or production credentials.

## Safe repo rules

- Do not commit API keys, tokens, passwords, or `.env` files.
- Keep certificates, private keys, and exported credential bundles out of the repository.
- Review `git status` before every commit to confirm only intended files are staged.
- Rotate any secret immediately if it is ever committed, even briefly.

## Intellectual property and copying

- Public access does not grant permission to reuse this project's code, copy, images, or presentation.
- The repository is distributed under the proprietary terms in [LICENSE.md](LICENSE.md).
- `robots.txt` blocks several compliant AI crawlers, but it will not stop determined scrapers or anyone viewing source in a browser.
- If stronger protection is needed, keep unreleased concepts, business logic, or differentiating assets in private repositories until launch.

## Realistic limits

- A public static site cannot be fully hidden from copying because browsers must download HTML, CSS, JavaScript, and image assets to display it.
- Technical measures in this repo are deterrents and ownership signals, not a substitute for legal registration, contracts, trademarks, or private development workflows.

## Reporting

If you find a security issue in this project, report it privately to the site owner before sharing details publicly.
