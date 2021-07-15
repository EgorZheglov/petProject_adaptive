const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //обработка html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //удаляет содержимое build сборки (В dist)
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    entry: { main: './pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist/'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

        open: true
    },
    module: {
        rules: [//массив правил правил обработки
          {//обработка для js:
            // регулярное выражение, которое ищет все js файлы
            test: /\.js$/,
            // при обработке этих файлов нужно использовать babel-loader
            use: 'babel-loader',
            // исключает папку node_modules, файлы в ней обрабатывать не нужно
            exclude: '/node_modules/'
          },
          {//обработка шрифтов и картинок
            // регулярное выражение, которое ищет все файлы с такими расширениями
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource'
          },
          {//обработка css
            test: /\.css$/,
            // при обработке этих файлов нужно использовать
            // MiniCssExtractPlugin.loader и css-loader
            use: [MiniCssExtractPlugin.loader, {
              loader: 'css-loader'
            },
            'postcss-loader'//Необходим при использовании @import в css файлах
          ]
        },
        ]
      },
      plugins: [//Массив подключаемых плагинов
        new HtmlWebpackPlugin({
          template: './index.html'
        }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin()
      ] 
}

