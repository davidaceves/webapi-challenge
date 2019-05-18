const express = require('express');

const ProjectRouter = require('./data/projects/projects.js');

const server = express();

server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

module.exports = server;