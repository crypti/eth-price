#!/usr/bin/env node
'use strict';
const meow = require('meow');
const ora = require('ora');

const ethPrice = require('.');

const spinner = ora('Fetching prices');
spinner.color = 'magenta';
spinner.start();

const cli = meow(`
	Usage
	  $ eth-price [toSymbol]

	Examples
      $ eth-price
      USD: 262.69

      $ eth-price btc
      BTC: 0.0927

      $ eth-price xrp,btc,usd
      XRP: 937.07
      BTC: 0.09277
      USD: 261.91
`);

ethPrice(cli.input.join(','))
	.then(prices => {
		spinner.stop();
		prices.forEach(price => console.log(price));
	});
