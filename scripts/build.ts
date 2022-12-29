import removeAllLib from './fn/removeAllLib';
import { exec } from 'shelljs';
import * as chalk from 'chalk';

(() => {
  // TODO: 后续需要完善脚本
  console.log(chalk.greenBright('开始构建……'));
  removeAllLib();
  exec('npm run tsc');
  console.log(chalk.greenBright('Done! 构建成功'));
})();
