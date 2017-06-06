#!/usr/bin/env node
'use strict';
const meow = require('meow');
const cliEthPrice = require('.');

const cli = meow(`
	Usage
	  $ cli-eth-price [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ cli-eth-price
	  unicorns & rainbows
	  $ cli-eth-price ponies
	  ponies & rainbows
`);

console.log(cliEthPrice(cli.input[0] || 'unicorns'));
