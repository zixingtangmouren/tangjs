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
  // TODO: 不安装 preset-react 是否可以解析 jsx | tsx
  .test(/\.(js|jsx|ts|tsx)$/)
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

export default config;
