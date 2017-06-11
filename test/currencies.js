import test from 'ava';
import nock from 'nock';
import fn from '../';

const apiMock = nock('https://min-api.cryptocompare.com/data')
	.persist()
	.defaultReplyHeaders({
		'Content-Type': 'application/json'
	})
	.get('/price');

apiMock
	.query({
		fsym: 'ETH',
		tsyms: 'USD,BTC'
	})
    .reply(200, '{"USD": 260.21, "BTC": 0.0973}');

test('Get prices in format', async t => {
	t.plan(2);

	const prices = await fn('usd,btc');
	t.is(prices[0], 'USD: 260.21');
	t.is(prices[1], 'BTC: 0.0973');
});

test('Forgives whitespace in currency list', async t => {
	t.plan(2);

	const prices = await fn('usd,  btc');
	t.is(prices[0], 'USD: 260.21');
	t.is(prices[1], 'BTC: 0.0973');
});
