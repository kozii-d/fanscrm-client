export function buildBabelLoader() {
  return {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          ["@babel/preset-react", { "runtime": "automatic" }]
        ]
      }
    },
  };
}
