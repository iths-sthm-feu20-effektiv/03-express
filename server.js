const express = require('express')
const path = require('path')
const app = express()
// "app" borde egentligen heta "server" men vi följer det som står i officiella dokumentationen

const frontend = require('./routes/frontend.js')
const guestbook = require('./routes/guestbook.js')
const animals = require('./routes/animals.js')

const PORT = 1337


// Middleware läggs alltid FÖRE endpoints
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Egen middleware funktion
app.use((req, res, next) => {
	// Logger - ska skriva ut information om det request som kommer
	console.log(`${req.method} ${req.url}`, req.params);
	next()
})

const staticFolder = path.join(__dirname, 'frontend')
app.use( express.static(staticFolder) )



// Endpoints / resurser / routes

// hantera resursen "web root" - request och response
app.get('/', (req, res) => {
	res.send('Yes I am here')
})

app.get('/secret', (req, res) => {
	res.send('You have found the secret route!')
})

// 3a Lägg till en route /guestbook som skickar texten "Du är besökare nummer 1". Antalet besökare ska räknas upp varje gång man laddar om sidan
app.use('/guestbook', guestbook)

app.use('/frontend', frontend)

app.use('/animals', animals)


// Starts the server
app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})
