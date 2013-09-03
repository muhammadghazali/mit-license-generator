#!/usr/bin/env node

var program = require('commander'),
  path = require('path'),
  fs = require('fs'),
  swig = require('swig');

var generator = require('./../lib/generator');

program
  .version('0.0.1')
  .option('-a, --author', 'Author')
  .option('-y, --year', 'Year');

program
  .command('create')
  .description('Create MIT License')
  .action(function() {
    // get the flag values
    var author = process.argv[4];
    var year = process.argv[6];

    fs.writeFileSync('LICENSE', generator.getMITLicense(author, year));
  });

program.parse(process.argv);