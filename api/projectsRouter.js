const express = require('express');
const projectDB = require('../data/project-schema')
const tasksDB = require('../data/task-schema')
const resourcesDB = require('../data/resource-schema')

const projectRouter = express.Router()



projectRouter.get('/' , async (req,res) => {
    try {
        const projects = await projectDB.find();
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json({message: 'there was a problem with your request', err})
    }
})

projectRouter.post('/' , async (req,res) => {
    try{
        const objectToAdd = req.body;
        const newProject = await projectDB.add(objectToAdd);
        res.status(200).json(newProject);
    }
    catch (err) {
        res.status(500).json({message:' There was a problem with your request'})

    }
})

//GET stretch problem. two sub queries under a main query
projectRouter.get('/:id' , async (req,res) => {
    try {
        const id = req.params.id;
        const [projectquery] = await projectDB.findById(id)
        if(projectquery) {
            const tasksquery = await tasksDB.findById(id);
            const resourcesquery = await resourcesDB.findById(id);
            const subquery = [projectquery , tasksquery , resourcesquery]
            res.status(200).json(subquery);
        } else {
            res.status(203).json({message: `The project with the id: ${id} could not be found`})
        }
        
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with your request 1'});
    }
}) 
module.exports = projectRouter;