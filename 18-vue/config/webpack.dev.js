const path = require('path')
const webpack = require('webpack')

// hot-reloading when html changes
const HTMLWebpackPlugin = require('html-webpack-plugin')

// vue loader
const { VueLoaderPlugin } = require('vue-loader')

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

  resolve: {
    alias: {
      /* FIX for browser console error:
           vue.runtime.esm.js:619 [Vue warn]: You are using the runtime-only build of Vue
           where the template compiler is not available. Either pre-compile the templates
           into render functions, or use the compiler-included build.
      */
      vue$: 'vue/dist/vue.esm.js'
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' }
        ]
      },
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
          { loader: 'css-loader' }
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
              name: 'images/[name]-[hash:8].[ext]',

              // solve problem with images src=[object module]
              esModule: false
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(), // needed for hot-reloading
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
