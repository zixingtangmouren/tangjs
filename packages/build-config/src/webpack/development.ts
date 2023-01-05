import baseConfig from './base';
import path = require('path');

const config = baseConfig;

config.mode('development');

config.devtool('eval');

config.devServer
  .set('static', path.resolve(process.cwd(), './public'))
  .hot(true);

config
  .entry('app')
  .add('./src/index')
  .end()
  .output.filename('bundle.js')
  .path(path.resolve(process.cwd(), 'dist'))
  .set('clean', true);

// config.module.rule('css').use('style').loader('style-loader').before('css');
// config.module.rule('sass').use('style').loader('style-loader').before('css');
// config.module.rule('less').use('style').loader('style-loader').before('css');

export default config;
