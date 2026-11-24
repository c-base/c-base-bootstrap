# c-base-bootstrap
c-base bootstrap cyborg theme

### features

* [Bootstrap v5.3.8](https://getbootstrap.com) – no jQuery needed
* [Bootswatch Cyborg v5.3.8](https://bootswatch.com/cyborg/) (also included: slate, superhero),
  with the Google Fonts import removed
* `css/bootstrap.custom.css` – the c-base look: monospace type, `.terminal`,
  `.btn-red`, c-base buttons, transparent tables
* `css/c-base-amber.css` + `js/c-base-theme.js` – optional amber colour variant
  that visitors can switch to, see below
* `css/glyphicons.css` – optional, keeps `glyphicon glyphicon-*` icons working
  (Bootstrap 4+ no longer ships an icon font)

Open `demo.html` in a browser to see the theme.

### install
`git clone git@github.com:c-base/c-base-bootstrap.git your-static-web-path` and remove `.git`dir

or add it as git submodule

### setup
In your html

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="/static/c-base-bootstrap/css/cyborg.min.css" rel="stylesheet">
  <link href="/static/c-base-bootstrap/css/bootstrap.custom.css" rel="stylesheet">
</head>
<body>
  <!-- all your happy content -->
  <script src="/static/c-base-bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
```

`js/jquery.min.js` is still included for scripts that use it; Bootstrap itself
no longer needs it.

### amber colour variant

An optional second look, modelled on the
[c-beam AI interface](https://ai.cbrp3.c-base.org/): amber on black, scanlines,
glowing frames and headings in Orbitron. Nothing changes for sites that do not
load it.

```html
<head>
  …
  <link href="/static/c-base-bootstrap/css/c-base-amber.css" rel="stylesheet">
  <script src="/static/c-base-bootstrap/js/c-base-theme.js"></script>
</head>
```

```html
<button type="button" class="nav-link" data-cbase-theme-toggle>colour:
  <span class="cbase-if-default">blue</span><span class="cbase-if-amber">amber</span>
</button>
```

* The variant is active while `<html data-cbase-theme="amber">` is set. Use
  `[data-cbase-theme="amber"] …` for your own amber rules.
* `js/c-base-theme.js` sets the attribute from `localStorage` before the page is
  painted (load it in `<head>`, without `defer`) and switches on a click on any
  element with `data-cbase-theme-toggle`. The choice holds per browser and site.
* `.cbase-if-default` / `.cbase-if-amber` show their content only in that variant.
* The colours are available as `--cbase-amber`, `--cbase-amber-deep`,
  `--cbase-amber-light`, `--cbase-amber-bright` and `--cbase-amber-dim`.
* Orbitron (`fonts/Orbitron.ttf`) is under the SIL Open Font License, see
  `fonts/Orbitron-OFL.txt`. The body type stays the c-base monospace.
* Covered: navbar, dropdowns, cards, `.btn-primary`, `.btn-secondary` /
  `.btn-default`, `.btn-outline-primary`, forms, tables, `.terminal`,
  pagination, list groups, pills and progress bars. Success, danger, warning
  and `.btn-red` keep their colours.

### migrating a site from the Bootstrap 3 version

The stylesheet names are unchanged, but Bootstrap 5 expects different markup.
The Bootstrap 3 version stays available on the `master` branch.

| Bootstrap 3 | Bootstrap 5 |
| --- | --- |
| `js/bootstrap.min.js` + jQuery | `js/bootstrap.bundle.min.js` |
| `data-toggle`, `data-target`, `data-dismiss` | `data-bs-toggle`, `data-bs-target`, `data-bs-dismiss` |
| `navbar navbar-default navbar-fixed-top` | `navbar navbar-expand-md navbar-dark bg-dark fixed-top` |
| `navbar-header`, `navbar-toggle` + `icon-bar` | `navbar-toggler` + `navbar-toggler-icon` |
| `nav navbar-nav` / `li` / `a` | `navbar-nav` / `li.nav-item` / `a.nav-link` |
| `dropdown-menu` / `li` / `a` | `dropdown-menu` / `li` / `a.dropdown-item` |
| `col-xs-*` | `col-*` |
| `col-*-offset-*` | `offset-*-*` |
| `panel`, `panel-heading`, `panel-body`, `well` | `card`, `card-header`, `card-body` |
| `btn-default` | `btn-secondary` (`btn-default` still works as an alias) |
| `btn-xs` | `btn-sm` |
| `btn-block` | `d-grid` wrapper or `w-100` (`btn-block` still works) |
| `form-group`, `control-label` | `mb-3`, `form-label` |
| `pull-left`, `pull-right` | `float-start`, `float-end` |
| `hidden-xs`, `visible-xs` | `d-none d-sm-block`, `d-sm-none` |
| `label label-*` | `badge text-bg-*` |
| `img-responsive` | `img-fluid` |
| `glyphicon glyphicon-*` | load `css/glyphicons.css`, or switch to another icon set |

Removed on this branch: the Bootstrap 2 leftovers (`css/orig.css`,
`css/bootstrap-responsive*.css`, `img/glyphicons-halflings*.png`) and the
Bootstrap 2/3 JavaScript (`js/bootstrap.js`, `js/bootstrap.min.js`,
`js/bootstrap-dropdown.js`, `js/bootstrap-transitions.js`, `js/transitions.js`,
`js/tooltip.js`). Dropped from `bootstrap.custom.css`: the `.row`, `.container`
and `.navbar-header` margin hacks, which were workarounds for the Bootstrap 3
grid.

Bootstrap and Bootswatch are MIT licensed; their notices are kept at the top of
the CSS and JS files.
