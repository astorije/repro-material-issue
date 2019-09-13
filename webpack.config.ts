import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '*'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html.tpl'),
    }),
  ],
};
