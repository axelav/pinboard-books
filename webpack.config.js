require('babel-register')
var webpackConfig = require('hjs-webpack')

var config = webpackConfig({
  in: 'src/app.js',
  out: 'public'
})

// config.postcss = function (webpack) {
//   return [
//     atImport({ addDependencyTo: webpack })
//     // require("postcss-import")({ addDependencyTo: webpack }),
//     // require("postcss-url")(),
//     // require("postcss-cssnext")(),
//     // add your "plugins" here
//     // ...
//     // and if you want to compress,
//     // just use css-loader option that already use cssnano under the hood
//     // require("postcss-browser-reporter")(),
//     // require("postcss-reporter")(),
//   ]
// }

module.exports = config
