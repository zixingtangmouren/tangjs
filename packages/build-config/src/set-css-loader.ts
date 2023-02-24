import Config = require('webpack-chain');

const cssLoaderOptions = {
  loader: 'css-loader',
  options: {
    modules: {
      // 设置模块的模式
      mode(resourcePath: string) {
        // 如果全局目录下的 style 不进行类名模块化
        if (resourcePath.includes('/src/styles/')) {
          return 'global';
        }

        return 'local';
      },
      // local 模式的类名命名方式
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    },
  },
};
const setCssLoader = (mode: 'development' | 'prodcution', config: Config) => {
  config.module
    .rule('css')
    .use('css')
    .loader('css-loader')
    .options(cssLoaderOptions);
};

export default setCssLoader;
