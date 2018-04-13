module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "./app/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
}
