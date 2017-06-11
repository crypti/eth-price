'use strict';
const fetch = require('isomorphic-fetch');

module.exports = toSymbol => {
	let symbols = 'USD';
	if (typeof toSymbol === 'string') {
		symbols = toSymbol.toUpperCase().replace(/\s+/g, '');
	}

	const url = `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=${symbols}`;

	return fetch(url)
		.then(resp => resp.json())
		.then(data => {
			const symbols = Object.keys(data);

			return symbols
				.map(symbol => `${symbol}: ${data[symbol]}`);
		});
};
