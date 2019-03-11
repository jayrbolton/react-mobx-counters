const path = require('path');
const dir = path.resolve(__dirname);
module.exports = {
  mode: 'development',
  entry: dir + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: dir + '/docs',
  },
  devServer: {
    contentBase: dir + '/docs',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', 'mobx'],
          },
        },
      },
    ],
  },
};
