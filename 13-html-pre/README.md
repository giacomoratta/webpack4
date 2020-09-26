## HTML Preprocessors (EJS, Pug, Handlebars)

### EJS
- webpack config: index.ejs + title variable
- changed index with variables
- no need to explicitly use ejs in config because it is default for webpack

#### Problem1: images broken
- webpack not parsing images with hash
- use require for ejs
- `esModule: false` for file-loader

### Pug
- install `pug` and `pug-loader`
- created new file `index.pug`
- added config for `pug` files
- set `pug-loader` in webpack config

### Handlebars
- install `handlebars` and `handlebars-loader`
- created new file `index.pug`
- added config for `pug` files
- set `pug-loader` in webpack config

#### Problem1: images broken
- webpack not parsing images with hash
- add query and support for inlineRequires
