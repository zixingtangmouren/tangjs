import { IPlugin } from 'build-scripts';
import path = require('path');

const buildWebPlugin: IPlugin = ({ registerUserConfig, registerTask }) => {
  // SPA 入口
  registerUserConfig({
    name: 'entry',
    validation: (value) => {
      return typeof value === 'string';
    },
    defaultValue: path.resolve(process.cwd(), 'src/index.ts'),
  });

  // 是否启用 MAP
  registerUserConfig({
    name: 'map',
    validation: (value) => {
      return typeof value === 'boolean';
    },
  });
};

export default buildWebPlugin;
