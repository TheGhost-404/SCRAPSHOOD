This folder contains the static site for SCRAPSHOOD.

Goal: publish this folder to GitHub Pages so the site is served with CSS, JS and images.

Options (pick one):

1) Create a new GitHub repo from this folder (recommended if no repo yet)

  cd scraps-website
  git init
  git add .
  git commit -m "Initial SCRAPSHOOD site"
  git branch -M main
  git remote add origin git@github.com:<USERNAME>/<REPO>.git  # OR https://github.com/<USERNAME>/<REPO>.git
  git push -u origin main

  Then on GitHub: Settings → Pages → Source: main (root) → Save.
  Site URL: https://<USERNAME>.github.io/<REPO>/

2) Publish just this folder to the repository's `gh-pages` branch (keeps site separate)

  # from the repository root (where you want the repo to be)
  cd scraps-website
  git init
  git remote add origin git@github.com:<USERNAME>/<REPO>.git
  git add .
  git commit -m "Deploy SCRAPSHOOD site"
  git push -u origin main

  # create & publish gh-pages branch (simple method)
  git checkout -b gh-pages
  git push -u origin gh-pages

  Then on GitHub: Settings → Pages → Source: gh-pages branch → Save.
  Site URL: https://<USERNAME>.github.io/<REPO>/

3) Add into an existing repo under `docs/` (if you already have a project repo)

  # from your repo root
  mkdir -p docs
  cp -r scraps-website/* docs/
  git add docs
  git commit -m "Add site to docs for Pages"
  git push

  Then on GitHub: Settings → Pages → Source: main branch / docs folder → Save.

Notes and tips
- Filenames with spaces are preserved but it's safer to avoid spaces (we renamed `images robin.png` → `robin.png`).
- If you have the GitHub CLI (`gh`), you can create a repo and publish faster:

  gh repo create <USERNAME>/<REPO> --public --source=. --remote=origin
  git push -u origin main
  gh repo view --web  # opens the repo page in your browser

- After enabling Pages, the site may take a minute to publish. Refresh the Pages URL.

If you want, I can run the git commands here for you — give me the repository remote URL (HTTPS or SSH) and I will push and enable the gh-pages branch, or I can prepare a `gh` command to create the repo remotely if you have the GitHub CLI and are authenticated.