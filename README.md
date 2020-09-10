## Webpack4

Link >  https://www.udemy.com/course/webpack-beyond-the-basics/

Requirements: `npm install -g webpack webpack-cli`.

##### Basics
- `webpack --mode=development`
- `webpack --mode=production`
- `webpack --config=config/webpack.dev.js`
- `publicPath` = the starting path
- `contentBase` = content directory

###### Dev-server
- install `webpack-dev-server` (see config file)
- **hot reloading**: pages reloaded after each change in the code
- inspector > network: we have 2 files called `sockjs-node/...js` needed for detecting changes
- start dev server: `webpack-dev-server --config=config/webpack.dev.js`
- access dev server: `http://localhost:8080/`