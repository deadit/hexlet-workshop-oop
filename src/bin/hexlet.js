#!/usr/bin/env node
import getGeoInfo from '..';
import program from 'commander';

let cmdValue = '';
program
  .version('0.1.0')
  .arguments('<ip>')
  .action(function (ip) {
    const result = ip.match("([0-9]{1,3}[\.]){3}[0-9]{1,3}");
    if (result) {
      cmdValue = result[0];
    }
  });

program.parse(process.argv);

getGeoInfo(cmdValue);
