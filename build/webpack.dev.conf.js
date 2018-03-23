'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

//这里同样也是合并基本的配置，加入开发环境的配置
//指定devServer
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool, //指定生成那种形式的souceMap,cheap-module-eval-source-map这个是适合开发环境

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning', //客户端报错等级
    historyApiFallback: { //当使用HTML5 History API时，下面匹配的路径，出现404响应都可能需要被替代为index.html
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true, //启动热部署
    contentBase: false, // since we use CopyWebpackPlugin. //告诉服务观察对应目录文件更改情况，文件更改后，会触发重新加载；这里为false
    compress: true,
    host: HOST || config.dev.host, //指定可以访问的主机地址，默认是localhost,允许外网范围则是0.0.0.0
    port: PORT || config.dev.port, //端口
    open: config.dev.autoOpenBrowser, //是否自动打开浏览器
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false, //当出现编译器错误或报警时，在浏览器中显示全屏叠加，其实就是我们经常看到的那个报错页面
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin //启用quiet后，除了初始启动信息之外的任何内容都不会被打印到控制台
    watchOptions: { //webpack使用文件系统（file system）获取文件改动的通知，一些情况下不生效，所有采用轮询
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({ //编译时配置的全局变量
      'process.env': require('../config/dev.env')  //当前环境为开发环境
    }),
    new webpack.HotModuleReplacementPlugin(), //热更新插件
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
