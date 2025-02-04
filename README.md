# Writing

### Every posts update at 23:30 UTC

**Blog**: Make `yyyy-mm-dd-NAME.md` in `_posts`

**Projects**: Make `NAME.md` in `_projects`

---

# Todo

- Search `#??` and add something.

---

# Tag, Categories

- **Blog**: `_config.yml`
  `display_tags: ["sample"]`
  `display_categories: []`
- **Project**: `projects.md`
  `display_categories: [study]`

---

# Run in local

Run in terminal: `bundle exec jekyll serve --watch`

Then [local server(127.0.0.1:4000)](http://127.0.0.1:4000) will launch!

Automatically change: `HTML`, `CSS`, `JS`, `Markdown`
Should Rebuild: `YAML`

---

# Change Log

## .yml

- \_config.yml
- socials.yml

## SCSS

- grey-color-dark: #1c1c1d -> #2f2c2c
- h1.header-bar
- img
- figcaption
- --global-theme-color: #{$purple-color} -> ???
- --global-theme-color dark: #{$cyan-color} -> ???

## Liquid

- %B %d, %Y -> %Y-%m-%d
- post.liquid: Split lines between 'created in' and 'last update in'
- header.liquid: navbar-expand-sm -> navbar-expand
- footer.liquid: minified

## Remove

- news
- publications
- repositories
- cv
- teaching
- dropdown
- cdn

### Remove unused files.

### Remove unused actions.

## Github Action

- Add `--exclude '.*\.webp'` in `broken-links.yml` `jobs: ... args:`

---

# Subtree

## Setting
1. Make new repository - `https://github.com/USER/REPO`
2. In `this repository`, make directory for subtree - `SUBTREE/`
3. In `this repository`, run
  ```bash
  git subtree add --prefix=SUBTREE https://github.com/USER/REPO.git main --squash
  ```
## Work in `github.com/USER/REPO`
1. In `github.com/USER/REPO`, working and pushing. 
2. In `this repository`, run
  ```bash
  git subtree pull --prefix=SUBTREE https://github.com/USER/REPO.git main --squash
  ```
3. `this repository`/SUBTREE is changed. 
## Work in `this repository`
1. In `this repository`, working and pushing. 
2. In `github.com/USER/REPO`, run
  ```bash
  git subtree push --prefix=SUBTREE https://github.com/USER/REPO.git main
  ```
3. `github.com/USER/REPO` is changed. 