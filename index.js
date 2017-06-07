'use strict';
const popsicle = require('popsicle');

module.exports = toSymbol => {
	if (typeof toSymbol === 'string') {
		toSymbol = toSymbol.toUpperCase();
	} else {
		toSymbol = 'USD';
	}

	return popsicle.request({
		method: 'POST',
		url: 'https://min-api.cryptocompare.com/data/price',
		query: {
			fsym: 'ETH',
			tsyms: toSymbol
		}
	})
		.use(popsicle.plugins.parse(['json']))
		.then(resp => resp.body)
		.then(data => {
			const symbols = Object.keys(data);

			return symbols
				.map(symbol => `${symbol}: ${data[symbol]}`);
		});
};
