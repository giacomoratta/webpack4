## Webpack4

Link >  https://www.udemy.com/course/webpack-beyond-the-basics/

Git reference > https://github.com/lawwantsin/webpack-course-v3

Requirements: `npm install -g webpack webpack-cli`.

##### Basics
- `webpack --mode=development`
- `webpack --mode=production`
- `webpack --config=config/webpack.dev.js`
- `publicPath` = the starting path
- `contentBase` = content directory

##### Dev-server
- install `webpack-dev-server` (see config file)
- **hot reloading**: pages reloaded after each change in the code
- inspector > network: we have 2 files called `sockjs-node/...js` needed for detecting changes
- start dev server: `webpack-dev-server --config=config/webpack.dev.js`
    - access dev server: `http://localhost:8080/`
    - see `package.js` for short commands
- running dev-server will not create files in `dist` directory (they will be served in memory)
    - build process will generate them

##### CSS loader
- `main.js` requires a css -> parsing error
- `npm install -s style-loader css-loader`
- config > module > rules

##### HTML loader
- `main.js` requires a html -> parsing error
- `npm install -s html-loader extract-loader file-loader`
- config > module > rules

##### Image loader
- `index.html` requires an image with relative address
- config > module > ... > html-loader > options
- `npm install -s html-loader extract-loader file-loader`

##### Babel and transpilers
- transpilers allow using modern js into old browser
- go to https://babeljs.io to try live
- `npm install -s babel-core babel-cli`
- `npm install -s babel-loader babel-loader@7`
- create `.babelrc` file (list of babel plugins)
- babel provides plugins for any feature
    - `npm install -s babel-plugin-transform-es2015-arrow-functions`
- show babel output: `babel src/main.js`
- see project config for `babel-loader`