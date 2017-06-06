# cli-eth-price [![Build Status](https://travis-ci.org/brh55/cli-eth-price.svg?branch=master)](https://travis-ci.org/brh55/cli-eth-price) [![Coverage Status](https://coveralls.io/repos/github/brh55/cli-eth-price/badge.svg?branch=master)](https://coveralls.io/github/brh55/cli-eth-price?branch=master)

> Get the current ETH price from your terminal


## Install

```
$ npm install --save cli-eth-price
```


## Usage

```js
const cliEthPrice = require('cli-eth-price');

cliEthPrice('unicorns');
//=> 'unicorns & rainbows'
```


## API

### cliEthPrice(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global cli-eth-price
```

```
$ cli-eth-price --help

  Usage
    cli-eth-price [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ cli-eth-price
    unicorns & rainbows
    $ cli-eth-price ponies
    ponies & rainbows
```


## License

MIT © [brh55](https://github.com/brh55/cli-eth-price)
