import path from 'path';
import {
  Configuration as WebpackConfiguration,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import dotenv from 'dotenv';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
const env = dotenv.config().parsed;
const config: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2)(\?.*)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2)(\?.*)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2)(\?.*)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      theme: path.resolve('src/theme'),
      components: path.resolve('src/components'),
      assets: path.resolve('src/assets'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),

    new MiniCssExtractPlugin(),
    new DefinePlugin({
      'process.env': env,
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
};

export default config;
