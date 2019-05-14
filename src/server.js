const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// TODO: Need something like a grunt script that will build the 'dist' directory
app.use(express.static(path.join(__dirname, '')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = '3000';
app.set('port', port);


const server = http.createServer(app);

server.listen(port, () => console.log(`Server running on localhost:${port}`));