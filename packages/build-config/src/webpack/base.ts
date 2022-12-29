import Config = require('webpack-chain');
import path = require('path');

const config = new Config();

config.resolve.extensions.add('.ts').add('.tsx').add('.js').add('.json');

config.context(path.resolve(process.cwd()));

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
          corejs: '3.26',
        },
      ],
      '@babel/preset-typescript',
    ],
  });

export default config;