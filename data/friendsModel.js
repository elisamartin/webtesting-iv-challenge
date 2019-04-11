const db = require('./dbConfig');

module.exports = {
	insert,
	remove,
	getAll,
	findById
};

async function insert(friend) {
	const [ id ] = await db('friends').insert(friend);
	return await db('friends').where({ id }).first();
}

async function remove(id) {
	return db('friends').where({ id }).del();
}

function getAll() {
	return db('friends');
}

function findById(id) {
	return db('friends').where(id);
}
