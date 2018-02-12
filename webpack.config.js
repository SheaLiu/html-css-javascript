const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  devtool: 'eval-source-map',
    entry:  __dirname + "/Users/shealiu/webpack_sample_project/app/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/Users/shealiu/webpack_sample_project/public",//打包后的文件存放的地方
      publicPath: __dirname + '/Users/shealiu/webpack_sample_project/public',//添加静态资源, 否则会出现路径错误
      filename: "bundle.js"//打包后输出文件的文件名
    },

    devServer: {
      contentBase: "./Users/shealiu/webpack_sample_project/public",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true,//实时刷新
    },
    module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: [
                          "env", "react"
                      ]
                  }
              },
              exclude: /node_modules/
          }
      ]
  },//babel

    module : {
      rules: [
          {test: /.js$/, use: ['babel-loader']},
          {test: /.css$/, use: ['style-loader', 'css-loader']},/*解析css, 并把css添加到html的style标签里*/
          //{test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},/*解析css, 并把css变成文件通过link标签引入*/
          {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=./[name].[ext]']},/*解析图片*/
          {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']}/*解析less, 把less解析成浏览器可以识别的css语言*/
      ]
    },
    plugins: [
      new webpack.BannerPlugin('版权所有，翻版必究'),
      new HtmlWebpackPlugin({
          template: __dirname + "/Users/shealiu/webpack_sample_project/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
      }),
      new webpack.HotModuleReplacementPlugin()//热加载插件
  ],
  };