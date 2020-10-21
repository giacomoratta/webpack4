const path = require('path')
const webpack = require('webpack')

// hot-reloading when html changes
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',

    // show error overlay
    overlay: true,

    // tune webpack output
    stats: {
      colors: true
    },

    // hot reloading
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {

              // allows to import styles in React
              modules: {

                // avoid class name as hash NOT WORKING!!!
                localIdentName: "[name]--[local]--[hash:base64:8]"
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [

          // both loaders replaced by HTMLWebpackPlugin which does the same functions
          // { loader: 'file-loader', options: { name: "[name].html" } },
          // { loader: 'extract-loader' },

          {
            // does the linting
            loader: 'html-loader',
            options: {
              attributes: {
                list: [
                  // All default supported tags and attributes
                  '...',
                  {
                    tag: 'img',
                    attribute: 'data-src',
                    type: 'src'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // hash not required, just example
              name: 'images/[name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // needed for hot-reloading
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
