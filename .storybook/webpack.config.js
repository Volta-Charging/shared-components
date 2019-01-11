module.exports = {
  module: {
    rules: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '../fonts/',
        },
        test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
      },
    ],
  },
}
