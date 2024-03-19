import webpack from "webpack";

import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const babelLoader = buildBabelLoader();

  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    loader: "file-loader",
    options: {
      name: "[path][name].[ext]",
    },
  };

  return [
    fileLoader,
    babelLoader,
    cssLoader,
  ];
}
