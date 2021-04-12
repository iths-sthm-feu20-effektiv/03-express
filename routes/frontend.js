const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	console.log('GET /frontend');
	// res.sendFile(__dirname + '/../frontend/index.html')
	res.send('Frontend!')
})

router.get('/style', (req, res) => {
	console.log('GET /frontend/style');
	res.send('font-weight: bold;')
})

module.exports = router
