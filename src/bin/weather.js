#!/usr/bin/env node
import program from 'commander';

program
  .option('-s --service <service>', 'Pizza size', /^(weatherbit|medium|small)$/i, 'medium')
  .parse(process.argv);

console.log(' size: %j', program.size);
console.log(' drink: %j', program.drink);
