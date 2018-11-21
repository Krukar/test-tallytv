const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.jsx'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public/js',
  },
  resolve:{
    alias: {
      Components: path.resolve('src/js/components/'),
      SCSS: path.resolve('src/scss'),
      Utilities: path.resolve('src/js/utilities/index.js'),
      Views: path.resolve('src/js/views'),
    },
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules:[
      {
        enforce: 'pre',
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:[
          { loader: 'file-loader?name=[name].[ext]&outputPath=../css/fonts/&publicPath=/' }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/app.css'),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src/scss',
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false,
      fix: false
    })
  ]
}
