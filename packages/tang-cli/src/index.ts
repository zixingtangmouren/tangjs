import { start, build } from 'build-scripts';
import { Command } from 'commander';

const program = new Command();

const pkgJson = require('../package.json');

program.name('tang-cli').description('tangjs 脚手架').version(pkgJson.version);

program
  .command('start')
  .description('start development service')
  .action(async () => {
    await start({
      rootDir: process.cwd(),
      args: {},
    });
  });

program
  .command('build')
  .description('building applications')
  .action(async () => {
    await build({
      rootDir: process.cwd(),
      args: {},
    });
  });

program.parse();
