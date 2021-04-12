const express = require('express')
const router = express.Router()

// Animal info - a RESTful API
// Animal object: { species, favoriteFood }

let fakeDb = [
	{ species: 'monkey', favoriteFood: 'banana' },
	{ species: 'cat', favoriteFood: 'mouse' },
	{ species: 'tapir', favoriteFood: 'leaves' }
]

router.get('/', (req, res) => {
	console.log('GET /animals/');
	res.send(fakeDb)
})

router.post('/', (req, res) => {
	console.log('POST /animals/', req.body);
	// i vanliga fall får vi datan från klienten - i req-objektet
	// let newAnimal = { species: 'kea', favoriteFood: 'rabbits' }

	// På riktigt:
	let newAnimal = req.body

	fakeDb.push(newAnimal)
	res.send('Added new animal')
})

router.put('/', (req, res) => {
	console.log('PUT /animals');

	let replaceAnimal = { species: 'seagull', favoriteFood: 'fish' }
	let lastIndex = fakeDb.length - 1
	fakeDb[lastIndex] = replaceAnimal
	res.send('Animal replaced')
	// OBS: borde byta ut alla djur
})

router.delete('/', (req, res) => {
	console.log('DELETE /animals');
	fakeDb = []
	res.send('Deleted all animals')
})

module.exports = router
