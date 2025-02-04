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
- Remove `on:pull_request: in `deploy.yml`