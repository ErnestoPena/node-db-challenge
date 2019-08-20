const express = require('express');
const projectDB = require('../data/project-schema')
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

module.exports = projectRouter;