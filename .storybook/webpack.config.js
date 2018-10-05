module.exports = {
  module: {
    rules: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts/',
        },
        test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
      },
    ],
  },
}
