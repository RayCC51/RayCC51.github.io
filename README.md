# Writing

### Every posts update at 23:30 UTC

**Blog**: Make `yyyy-mm-dd-NAME.md` in `_posts`

**Projects**: Make `NAME.md` in `_projects`

---

# Todo

- Search `TODO` and add something.

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
- span.lb-caption
- --global-theme-color: #{$purple-color} -> ???
- --global-theme-color dark: #{$cyan-color} -> ???
- @import -> @use

## Liquid

- %B %d, %Y -> %Y-%m-%d
- post.liquid: Split lines between 'created in' and 'last update in'
- header.liquid: navbar-expand-sm -> navbar-expand
- header.liquid: nav: remove about, always show navbar-brand
- footer.liquid: minified
- head.liquid: fontawesome: local -> cdn
- head.liquid: bootstrap v4.6.2: local -> cdn
- scripts.liquid: bootstrap.bundle v4.6.2: local -> cdn

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
- Remove `on:pull_request: in deploy.yml`

---

# RayCC51.github.io.posts

This repo contain blog posts only


## Use github action

[Repo File Sync Action](https://github.com/marketplace/actions/repo-file-sync-action) by [BetaHuhn](https://github.com/BetaHuhn)

## How it works

**RayCC51/RayCC51.github.io.posts/** has `.github/workflows/sync.yml`, `.github/sync.yml`

**RayCC51/RayCC51.github.io/** has `.github/workflows/sync-pull-request.yml`

When I _push_ posts inside `RayCC51.github.io.posts/_posts/` repositories

**Repo File Sync Action** automatically _push_ `RayCC51.github.io.posts/_posts/` to `RayCC51.github.io/_posts/`

`sync-pull-request.yml` automatically _merge_ _pull_ request from myself
