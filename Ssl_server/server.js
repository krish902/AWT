const express = require('express')
const helmet = require('helmet')
const https = require('https')
const path = require('path')
const fs = require('fs')
const port = 3000

const app = express()
app.use(helmet());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Open Ssl Server')
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app);

// sslServer.listen(8001, () => console.log('Secure Server listening on port 8001'))

sslServer.listen(port, () => {
    console.log(`Example app listening on port https://localhost:${port}`)
})

// commands to generate SSL certificates
// openssl genrsa - out key.pem
// openssl req -new -key key.pem -out csr.pem
// openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

//helmet header deocuments
//Cross-Origin-Resource-Policy,black list and white list
