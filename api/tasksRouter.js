const express = require('express');

const tasksRouter = express.Router()


const taskDB = require('../data/task-schema')


tasksRouter.get('/' , async (req,res) => {
    try {
const taskDB = require('../data/task-schema')
        const projects = await taskDB.find();
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json({message: 'there was a problem with your request', err})
    }
})

tasksRouter.post('/' , async (req,res) => {
    try{
        const objectToAdd = req.body;
        const newProject = await taskDB.add(objectToAdd);
        res.status(200).json(newProject);
    }
    catch (err) {
        res.status(500).json({message:' There was a problem with your request'})

    }
})


module.exports = tasksRouter;