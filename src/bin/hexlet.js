#!/usr/bin/env node
import getGeoInfo from '..';
import program from 'commander';

let cmdValue = '';
program
  .arguments('<ip>')
  .action(function (ip) {
    const result = ip.match("([0-9]{1,3}[\.]){3}[0-9]{1,3}");
    if (result) {
      cmdValue = result[0];
    }
  });

program.parse(process.argv);

console.log(getGeoInfo(cmdValue));
