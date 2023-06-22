const Dotenv = require('dotenv-webpack');
 
module.exports = {
  plugins: [
    new Dotenv({ systemvars: true }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/images/favicon.ico",
    }),
  ],
};