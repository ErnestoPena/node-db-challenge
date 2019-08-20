const express = require('express');
const server = express();
const port = 7000;

server.use(express.json());

const projectRouter = require('./api/projectsRouter');
const resourcesRouter = require('./api/resourcesRouter');
const tasksRouter = require('./api/tasksRouter');

server.use('/projects' , projectRouter);
server.use('/resources' , resourcesRouter);
server.use('/tasks' , tasksRouter);

server.get('/' , (req,res) => {
    res.send('<h1>Ernesto Pena => Adding Data Persintence Sprint Project</h1>');
})

server.listen(port , (req,res) => {
    console.log(`Server is listening on port: ${port}`);
})

module.exports = server;