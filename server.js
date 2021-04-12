const express = require('express')
const app = express()
// "app" borde egentligen heta "server" men vi följer det som står i officiella dokumentationen

const frontend = require('./routes/frontend.js')
const guestbook = require('./routes/guestbook.js')

const PORT = 1337


// hantera resursen "web root" - request och response
app.get('/', (req, res) => {
	console.log('GET /');
	res.send('Yes I am here')
})

app.get('/secret', (req, res) => {
	console.log('GET /secret');
	res.send('You have found the secret route!')
})

// 3a Lägg till en route /guestbook som skickar texten "Du är besökare nummer 1". Antalet besökare ska räknas upp varje gång man laddar om sidan
app.use('/guestbook', guestbook)

// 3b Nu är det dags att börja organisera koden. Börja med att skapa en fristående funktion för callback-funktionen som körs för route /guestbook. (När du läst om Router modules kan du använda det.)
// 3c Vi ska lägga all kod som har att göra med "gästboken" i en egen modul. Skapa en mapp med namnet routes. Lägg sedan funktionen i en egen fil med namnet guestbook.js och importera den i server.js.


app.use('/frontend', frontend)


// Starts the server
app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})
