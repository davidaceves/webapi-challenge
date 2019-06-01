const express = require('express');

const router = express.Router();

const Projects = require('../helpers/projectModel.js');

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving projects'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.get(req.params.id);

        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({
                message: 'Project not found'
            });
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving the project'
        })
    }
});

router.post('/', async (req, res) => {
    try {
        const project = await Projects.insert(req.body);
        res.status(201).json(project);
    } catch(error) {
        res.status(500).json({
            message: 'Error adding the project'
        })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const project = await Projects.update(req.params.id, req.body);

        if (project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({
                message: 'The project could not be found'
            })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Error updating project'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const project = await Projects.remove(req.params.id);

        if (project) {
            res.status(200).json({
                message: 'The project has been deleted'
            })
        } else {
            res.status(404).json({
                message: 'The project could not be found'
            })
        }
    } catch(error) {
        res.status(500).json({
            message: 'Error deleting the project'
        })
    }
});

router.get('/:id/actions', async (req, res) => {
    try {
        const actions = await Projects.getProjectActions(req.params.id)

        if (actions) {
            res.status(200).json(actions)
        } else {
            res.status(404).json({
                message: 'Actions not found'
            })
        }
    } catch(error) {
        res.status(500).json({
            message: 'Error retrieving actions'
        })
    }
});



module.exports = router;
