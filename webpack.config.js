const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
  //   devServer: {
  //     contentBase: path.join(__dirname, 'dist'),
  //     compress: true
  //   }
};
