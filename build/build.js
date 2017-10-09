//  生产环境构建代码
require('./check-versions')()
//  设置当前环境为production
process.env.NODE_ENV = 'production'
//  终端显示的转轮loading
var ora = require('ora')
//  node环境下rm -rf的命令库
var rm = require('rimraf')
//  文件路径处理库
var path = require('path')
//  终端显示带颜色的文字
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
//  生产环境下的webpack配置
var webpackConfig = require('./webpack.prod.conf')

//  在终端显示ora库的loading效果
var spinner = ora('building for production...')
spinner.start()

//  删除已编译文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  //  在删除完成的回调函数中开始编译
  webpack(webpackConfig, function (err, stats) {
    //  停止loading
    spinner.stop()
    if (err) throw err
    //  在编译完成的回调函数中,在终端输出编译的文件
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening inside.html over file:// won\'t work.\n'
    ))
  })
})
