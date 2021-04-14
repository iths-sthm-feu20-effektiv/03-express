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
	res.send(fakeDb)
})
router.get('/:index', (req, res) => {
	const index = req.params.index
	const value = fakeDb[index]
	if( !value ) {
		res.status(404).send('No animal, highest index is ' + (fakeDb.length - 1))
		return
	}
	res.send(value)
})


router.post('/', (req, res) => {
	// i vanliga fall får vi datan från klienten - i req-objektet
	// let newAnimal = { species: 'kea', favoriteFood: 'rabbits' }

	// På riktigt:
	let newAnimal = req.body

	fakeDb.push(newAnimal)
	res.send('Added new animal')
})

router.put('/', (req, res) => {
	let replaceAnimal = { species: 'seagull', favoriteFood: 'fish' }
	let lastIndex = fakeDb.length - 1
	fakeDb[lastIndex] = replaceAnimal
	res.send('Animal replaced')
	// OBS: borde byta ut alla djur
})

router.delete('/', (req, res) => {
	fakeDb = []
	res.send('Deleted all animals')
})

module.exports = router
