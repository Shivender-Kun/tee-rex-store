const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const APP_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "build");

module.exports = (env) => {
  return {
    mode: env.NODE_ENV || "production",

    entry: {
      main: `${APP_DIR}/index.js`,
    },

    output: {
      clean: true,
      path: BUILD_DIR,
      filename: "[name].[contenthash].js",
    },

    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },

    devtool: "source-map",

    devServer: {
      static: {
        directory: "build",
      },
      historyApiFallback: true,
      compress: true,
      port: 3000,
      hot: true,
    },

    resolve: { extensions: [".js", ".jsx", ".css", ".scss"] },

    module: {
      rules: [
        // Rules for js || jsx files
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        },

        // Rules for css || scss files

        {
          test: /\.(s?css)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
          exclude: /\.module\.s?css$/,
        },

        // Rules for css || scss modules

        {
          test: /\.module\.s?css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },

        // Rules for image files

        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },

    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  };
};
