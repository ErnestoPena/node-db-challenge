const express = require('express');

const resourcesRouter = express.Router()
const resourcesDB = require('../data/resource-schema')


resourcesRouter.get('/' , async (req,res) => {
    try {

        const projects = await resourcesDB.find();
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json('There was a problem with your request', err.message)
    }
})

resourcesRouter.post('/' , async (req,res) => {
    try{
        const objectToAdd = req.body;
        const newProject = await resourcesDB.add(objectToAdd);
        res.status(200).json(newProject);
    }
    catch (err) {
        res.status(500).json('There was a problem with your request', err.message)

    }
})


module.exports = resourcesRouter;