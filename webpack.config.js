const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  return {
    mode: argv.mode || "development",

    entry: path.resolve(__dirname, "src/index.js"),

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDev ? "js/[name].js" : "js/[name].[contenthash].js",
      assetModuleFilename: "assets/[name].[hash][ext]",
      publicPath: "/",
    },

    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@app": path.resolve(__dirname, "src/app/"),
        "@features": path.resolve(__dirname, "src/features/"),
        "@utils": path.resolve(__dirname, "src/utils/"),
        "@layout": path.resolve(__dirname, "src/layout/"),
        "@pages": path.resolve(__dirname, "src/pages/"),
        "@assets": path.resolve(__dirname, "src/assets/"),
        "@shared": path.resolve(__dirname, "src/shared/"),
      },
    },

    devtool: isDev ? "eval-source-map" : false,

    module: {
      rules: [
        // JS/JSX
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },

        // CSS Modules
        {
          test: /\.module\.css$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: isDev ? "[name]__[local]" : "[hash:base64:5]",
                  exportLocalsConvention: "camelCase",
                },
                sourceMap: isDev,
              },
            },
          ],
        },

        // Global CSS
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },

        // Images
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: "asset",
        },

        // Fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name].[hash][ext]",
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),

      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        minify: !isDev && {
          collapseWhitespace: true,
          removeComments: true,
        },
      }),

      !isDev &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash].css",
        }),
    ].filter(Boolean),

    optimization: {
      minimize: !isDev,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: {
        chunks: "all",
      },
      runtimeChunk: "single",
    },

    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "public"),
        publicPath: "/",
      },
    },
  };
};
