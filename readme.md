# eth-price [![Travis branch](https://img.shields.io/travis/brh55/eth-price/master.svg?style=flat-square)](https://travis-ci.org/brh55/eth-price) [![Coveralls branch](https://img.shields.io/coveralls/brh55/eth-price/master.svg?style=flat-square)](https://coveralls.io/github/brh55/eth-price?branch=master)

> 💫 A CLI app to grab the current ETH price from your terminal in USD and/or other cryptocurrency symbols

A super simple CLI utilizing [CryptoCompare API](https://www.cryptocompare.com/api/) to grab the ETH price during a serious code session.

![Demo of fetching prices](http://g.recordit.co/CuWDfZklPv.gif)

## CLI
### Install
```
$ npm install --global eth-price
```

### Usage
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

MIT © [Brandon Him](https://github.com/brh55/eth-price)
