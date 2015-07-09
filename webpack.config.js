var webpack = require("webpack");

module.exports = {

  entry: './src/app.jsx',
  output: {
    path: './build',
    filename: 'app.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' }, // use ! to chain loaders
      { test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}