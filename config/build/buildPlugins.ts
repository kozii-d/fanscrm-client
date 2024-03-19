import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev = true,
  analyze = false,
  apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins: webpack.WebpackPluginInstance[] = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ];

  if (analyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
      }),
    );
  }

  return plugins;
}
