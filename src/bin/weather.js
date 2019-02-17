#!/usr/bin/env node
import program from 'commander';
import PairTag from '../tags/PairTag';
console.log(new PairTag('div', { class: 'blue' }, 'text').toString());
