const path = require("path");

// Fix: https://stackoverflow.com/a/59378543/18093667
module.exports = {
  entry: {
    app: "./src/scripts/app.js",
    main: "./src/scripts/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/scripts")
  },
  target: 'node',
  externals: {
    express: 'express',
  },
  stats: {
    errorDetails: true
  }
};