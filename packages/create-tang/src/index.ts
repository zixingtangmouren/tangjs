import { createOctopus } from '@tangjs/octopus';
import * as path from 'path';
import config from './config';

const version = require('../package.json').version;

createOctopus({
  name: 'tang',
  description: '',
  version,
  templates: config,
  templatesDir: path.resolve(__dirname, '../templates'),
});
