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

## Babel and Polyfil
- transpilers allow using modern js into old browser

##### Setup Babel
- go to https://babeljs.io to try live
- create `.babelrc` file (list of babel plugins)
- show babel output: `babel src/main.js`
- see project config for `babel-loader`
- `npm install -s babel-core babel-cli`
- `npm install -s babel-loader babel-loader@7`

##### Plugins
1. babel provides plugins for any feature, as node modules `npm install -s ...`
    - `babel-plugin-transform-es2015-arrow-functions`
    - `babel-plugin-async-to-promises`
    - `babel-polyfil`:
        - used in webpack config like:
          ```
          module.exports = {
            entry: {
              main: ['babel-polyfil','./src/main.js']
            ...
          ```
        - better to use only the polyfil we need to avoid a big bundle
        
2. babel provides some presets to avoid many manual installations
   - `npm install -s babel-preset-env`
   - `npm install -s babel-plugin-transform-runtime`
   
   
## Express
- setting up a basic server
- set-up webpack middlewares for express (order is important!)