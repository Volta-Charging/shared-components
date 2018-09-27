const path = require("path");
import { loadFonts } from '../../Fonts'

loadFonts()
module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts/',
        },
      }
    ]
  }
};