var path = require('path');
 
module.exports = {
  entry: "./app/app.js", // входная точка - исходный файл
  output:{
	  //path: __dirname + '/public',
      path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов
      publicPath: '/public/',
      filename: "bundle.js"       // bundle
  },
  module:{
      rules:[   //загрузчик для js
          {
              test: /\.js?$/, // определяем тип файлов(js / jsx)
              exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
              loader: "babel-loader",   // определяем загрузчик
              options:{
                  presets:["env", "react"]    // используемые плагины
              }
          }
      ]
  }
}