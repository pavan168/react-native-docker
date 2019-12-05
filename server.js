const http = require('http')

const port = 3000
const message = 'React Native development environment is running...'
const server = http.createServer((req, res) => res.end(message))
server.listen(port, err => {
    if (err) return console.log('An error occured. ', err)

    console.log(message)
});
