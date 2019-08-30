const express = require('express');

const tasksRouter = express.Router()


const taskDB = require('../data/task-schema')


tasksRouter.get('/' , async (req,res) => {
    try {
        const projects = await taskDB.find().map(task => {
            return {...task, completed: task.completed === 0 ? 'false' : 'true'}
        });
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json('there was a problem with your request', err.message)
    }
})

tasksRouter.post('/' , async (req,res) => {
    try{
        const objectToAdd = req.body;
        const newProject = await taskDB.add(objectToAdd);
        res.status(200).json(newProject);
    }
    catch (err) {
        res.status(500).json('there was a problem with your request', err.message)

    }
})


module.exports = tasksRouter;