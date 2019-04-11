const server = require('./server');
const request = require('supertest');

describe('server', () => {
	describe('GET / endpoint', () => {
		it('is the right enviroment', () => {
			expect(process.env.DB_ENV).toBe('testing');
		});

		it('status code 200', () => {
			return request(server).get('/').expect(200);
		});

		it('returns the right response body', () => {
			const expectedResponseBody = JSON.stringify({ api: 'up' });
			return request(server)
				.get('/')
				.expect(expectedResponseBody)
				.expect('Content-Length', expectedResponseBody.length.toString());
		});
	});

	describe('GET /friends endpoint', () => {
		it('status code 200', () => {
			return request(server).get('/friends').expect(200);
		});

		// it('returns the 4 current items on friends', async () => {
		// 	const res = await request(server).get('/friends');
		// 	expect(res.body).toHaveLength(4);
		// });
	});
});
