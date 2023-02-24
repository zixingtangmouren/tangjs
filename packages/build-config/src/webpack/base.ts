import Config = require('webpack-chain');
import path = require('path');

const config = new Config();

config.resolve.extensions.add('.ts').add('.tsx').add('.js').add('.json');

config.context(path.resolve(process.cwd()));

// 解决 babel-loader 找不到情况
config.resolveLoader.modules
  .add(path.resolve(__dirname, '../../node_modules'))
  .add(path.resolve(process.cwd(), 'src'))
  .add(path.resolve(process.cwd(), 'node_modules'));

/**
 * 配置 js | ts 的相关解析
 */
config.module
  .rule('babel')
  .test(/\.(js|ts)$/)
  .use('babel')
  .loader('babel-loader')
  .options({
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: '3.27',
        },
      ],
      '@babel/preset-typescript',
    ],
  });

/**
 * 配置 css 处理
 */

/**
 * 配置静态资源
 */

export default config;
