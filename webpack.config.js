const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// here we return function with object of configurations for production or development
module.exports = (env = {}) => {
  const { mode = "development" } = env;
  const isProd = mode === "production";
  const isDev = mode === "development";
  console.log(mode);
  //MiniCssExtractPlugin.loader  better to use for production  and style-loader for development
  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : "style-loader",
      "css-loader",
    ];
  };
  // this plugin generate an HTML5 file that includes all webpack bundles in the body using script tags  for development only.
  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: "React Table",
        buildTime: new Date().toISOString(),
        template: "public/index.html",
      }),
    ];
    // this plugin extracts CSS into separate files. It creates a CSS file per JS which contains CSS. It combines with css-loader.
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: "main-[hash:8].css",
        })
      );
    }
    return plugins;
  };

  return {
    mode: isProd ? "production" : isDev && "development",
    output: {
      filename: isProd ? "main-[hash:8].js" : undefined,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,

          loader: "babel-loader",
        },
        //Loading images and icons
        {
          test: /\.(png|jpg|jpeg|svg|ico|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:7].[ext]",
              },
            },
          ],
        },
        // loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]",
              },
            },
          ],
        },
        //loading CSS
        {
          test: /\.(css)$/,
          use: getStyleLoaders(),
        },
        //Loading SASS/SCSS
        {
          test: /\.(s[ca]ss)$/,
          use: [...getStyleLoaders(), "sass-loader"],
        },
      ],
    },
    plugins: getPlugins(),
    // server that provides live reloading used for development
    devServer: {
      open: true,
    },
  };
};
