exports.seed = function(knex, Promise) {
	return knex('friends').truncate().then(function() {
		return knex('friends').insert([
			{ id: 1, name: 'Joey' },
			{ id: 2, name: 'Monica' },
			{ id: 3, name: 'Phoebe' },
			{ id: 4, name: 'Ross' }
		]);
	});
};
