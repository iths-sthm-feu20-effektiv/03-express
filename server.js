const express = require('express')
const app = express()
// "app" borde egentligen heta "server" men vi följer det som står i officiella dokumentationen

const frontend = require('./routes/frontend.js')

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

app.use('/frontend', frontend)


// Starts the server
app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})
