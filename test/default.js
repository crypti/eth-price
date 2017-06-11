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
		tsyms: 'USD'
	})
    .reply(200, '{"USD": 330.21}');

test('Defaults to USD', async t => {
	t.plan(1);

	const prices = await fn();
	t.is(prices[0], 'USD: 330.21');
});
