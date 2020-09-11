const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',

    // show error overlay
    overlay: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].html"
            }
          },
          {
            // keep file separated from bundle
            loader: 'extract-loader'
          },
          {
            // does the linting
            loader: 'html-loader'
          }
        ]
      },
    ]
  }
}