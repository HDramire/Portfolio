# Private Before Launch Audit

Use this list to decide what should stay private until launch.

## Keep private if it gives away the real differentiator

- Unreleased features
- Unique workflow logic
- Backend logic not needed for a portfolio demo
- Pricing strategy
- Customer lists or leads
- Business plans and launch strategy
- Internal notes describing what makes the idea defensible
- Screens that reveal future functionality
- Prompts, datasets, automations, or processes that are part of the moat

## For this repo right now

This project is a public static portfolio. The following are already exposed to anyone who can view the live site or source:

- page structure in `index.html`
- profile page content in `profiles/`
- front-end behavior in `script.js`
- design styling in `styles.css`
- public image assets in `fotos/`

That means none of those front-end assets should be treated as secret once deployed publicly.

## What to move out of the public repo if added later

- API keys
- `.env` files
- admin tools
- unreleased product ideas
- internal dashboards
- proprietary prompts or workflows
- documents describing future expansion
- drafts of investor or sales materials

## Best-practice setup

1. Keep this public portfolio repo limited to portfolio-safe assets only.
2. Put unreleased concepts and business logic in a separate private repository.
3. Store sensitive docs outside the repo or in a private repo with limited access.
4. Share previews only with people who need them.
5. Use NDAs before disclosing the core differentiator to third parties.

## Simple decision test

Ask:

`If someone saw this today, could they rebuild the valuable part of the idea?`

If the answer is yes, do not publish it yet.
