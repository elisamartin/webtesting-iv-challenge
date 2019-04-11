const db = require('./dbConfig.js');
const Friends = require('./friendsModel');

describe('friendsModel', () => {
	beforeEach(async () => {
		await db('friends').truncate();
	});

	afterEach(async () => {
		await db('friends').truncate();
	});

	describe('insert', () => {
		it('insert friend into db', async () => {
			const newFriend = await Friends.insert({ name: 'Rachel' });
			expect(newFriend.name).toBe('Rachel');
		});

		it('insert two friends, find 2 records in db', async () => {
			const newHobbit1 = await Friends.insert({ name: 'Rachel' });
			const newHobbit2 = await Friends.insert({ name: 'Chandler' });
			const allOfThem = await db('friends');
			expect(allOfThem).toHaveLength(2);
		});
	});

	describe('remove', () => {
		it('remove friend', async () => {
			const friend = await Friends.insert({ name: 'Rachel' });
			const deleteFriend = await Friends.remove(1);
			const allOfThem = await db('friends');
			expect(allOfThem).toHaveLength(0);
		});

		it('remove one friend of two', async () => {
			const friend = await Friends.insert({ name: 'Rachel' });
			const friendTwo = await Friends.insert({ name: 'Chandler' });
			const deleteFriend = await Friends.remove(1);
			const allOfThem = await db('friends');
			expect(allOfThem).toHaveLength(1);
		});
	});
});
