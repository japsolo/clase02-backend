var sumar = require('./modulos/sumar.js');
var faker = require('faker');
var moment = require('moment');

console.log(sumar(56, 49));
console.log('Tipo de FAKER:', typeof faker);

var users = [];

for (var i = 1; i <= 10; i++) {
	users.push({
		name: faker.name.findName(),
		email: faker.internet.email(),
		avatar: 'https://placeimg.com/640/480/people',
		address: faker.address.zipCode()
	});
}

console.log(users);
console.log(moment('2016-03-12 13:00:00').add(1, 'day').format('LLL'));
