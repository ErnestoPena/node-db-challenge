const express = require('express');

const resourcesRouter = express.Router()


const resourcesDB = require('../data/resource-schema')


resourcesRouter.get('/' , async (req,res) => {
    try {
const taskDB = require('../data/task-schema')
        const projects = await resourcesDB.find();
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json({message: 'there was a problem with your request', err})
    }
})

resourcesRouter.post('/' , async (req,res) => {
    try{
        const objectToAdd = req.body;
        const newProject = await resourcesDB.add(objectToAdd);
        res.status(200).json(newProject);
    }
    catch (err) {
        res.status(500).json({message:' There was a problem with your request'})

    }
})


module.exports = resourcesRouter;