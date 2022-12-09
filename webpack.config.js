const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
    another: './src/another-module.js',
  },
  output: {
    // filename: 'main.js',
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: '管理输出',
    })
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
        {
            test:/\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
        },
        {
        test: /\.xml$/i,
        use: ['xml-loader'],
        },
    ]
  }
};