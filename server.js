const express = require('express')
const app = express()
// "app" borde egentligen heta "server" men vi följer det som står i officiella dokumentationen

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

app.get('/frontend', (req, res) => {
	console.log('GET /frontend');
	res.sendFile(__dirname + '/frontend/index.html')
})


// Starts the server
app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})
