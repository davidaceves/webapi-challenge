const express = require('express');
const server = express();

const ProjectRouter = require('./data/projects/projects.js');
const ActionRouter = require('./data/projects/actions.js');

server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/actions', ActionRouter);

server.get('/', (req, res) => {
res.send(`<h1>Welcome</h1>`)
})

module.exports = server;