'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  // configureWebpack 值为对象，会通过 webpack-merge 合并到最终的配置
  externals: {
    // CDN 的 Element 依赖全局变量 Vue， 所以 Vue 也需要使用 CDN 引入
    'vue': 'Vue',
    // 'vue-router': 'VueRouter',
    // 属性名称 element-ui, 表示遇到 import xxx from 'element-ui' 这类引入 'element-ui'的，
    // 不去 node_modules 中找，而是去找 全局变量 ELEMENT
    // 'ElementUI': 'ELEMENT',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    //优化resolve.extensions配置
    //在导入语句没带文件后缀时，
    //Webpack 会在自动带上后缀后去尝试询问文件是否存在。
    //默认是：extensions :[‘. js ‘,’. json ’] 。
    //也就是说，当遇到require ( '. /data ’）这样的导入语句时，
    //Webpack会先去寻找./data .js 文件，
    //如果该文件不存在，就去寻找./data.json 文件，
    //如果还是找不到就报错。如果这个列表越长，或者正确的后缀越往后，就会造成尝试的次数越多，
    //所以 resolve .extensions 的配置也会影响到构建的性能。 
    extensions: ['.js', '.vue', '.json'],
    //优化resolve.modules配置
    modules: [
      resolve('src'),
      resolve('node_modules') 

    ],
    //优化resolve.alias配置
    // 通过以上的配置，引用src底下的common.js文件，就可以直接这么写
    //import common from '@/common.js';
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
