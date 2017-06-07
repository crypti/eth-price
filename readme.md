# eth-price [![Build Status](https://travis-ci.org/brh55/eth-price.svg?branch=master)](https://travis-ci.org/brh55/eth-price) [![Coverage Status](https://coveralls.io/repos/github/brh55/eth-price/badge.svg?branch=master)](https://coveralls.io/github/brh55/eth-price?branch=master)

> A CLI to get the current ETH price from your terminal in USD or other cryptocurrency symbols

This is just a simple CLI utilizing [CryptoCompare API](https://www.cryptocompare.com/api/) to grab the ETH price during the midst of some serious code sessions.

## Usage
```
$ npm install --global eth-price
```

```
$ eth-price --help

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
```

## JavaScript Usage

### Install

```
$ npm install --save eth-price
```

### Usage
```js
const ethPrice = require('eth-price');

ethPrice('usd,btc');
// ['USD: 260.23', 'BTC: 0.0923']
```

## API

### ethPrice(toSymbols)
Returns a string formatted list of the prices in their symbols.

#### toSymbols

Type: `string`

A string list of symbols you want the ETH price in.

## License

MIT © [brh55](https://github.com/brh55/eth-price)
