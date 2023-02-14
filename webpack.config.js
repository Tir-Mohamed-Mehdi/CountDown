const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  entry: {
    mainApp: path.resolve(__dirname, "./src/javascript/mainApp.js"),
    subApp: path.resolve(__dirname, "./src/javascript/subApp.js"),
    conditionsApp: path.resolve(__dirname, "./src/javascript/Conditions.js"),
    variablesApp: path.resolve(__dirname, "./src/javascript/variables.js")
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "javascript/[name].js",
    clean: true
  },

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    port: 2015,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }, {
        test: /\.html$/,
        use: "html-loader"
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: 'image/[name][ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Countdown Timer',
      filename: 'index.html',
      template: 'src/html/template.html'
    })
  ],
}