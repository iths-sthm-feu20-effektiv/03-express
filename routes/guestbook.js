const express = require('express')
const router = express.Router()


let visitorCount = 0;

function onGetGuestbook(req, res) {
	console.log('GET /guestbook');
	visitorCount++
	res.status(200).send(`Du är besökare nummer ${visitorCount}.`)
}

router.get('/', onGetGuestbook)

module.exports = router
