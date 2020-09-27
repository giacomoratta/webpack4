module.exports = {
  plugins: [

    // add browser-specific prefixes
    require('autoprefixer')({

      // .babelrc or package.json might already have browserlist property (and we will get a compiling error!)
      'overrideBrowserslist': ['> 1%', 'last 2 versions']
    })
  ]
};