const express = require('express');

const router = express.Router();

const Actions = require('../helpers/actionModel.js');
const Projects = require('../helpers/projectModel.js');

router.get('/:id', async (req, res) => {
    try {
        const actions = await Actions.get(req.params.id);

        if (actions) {
            res.status(200).json(actions);
        } else {
            res.status(404).json({
                message: "Action not found"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving action'
        });
    }
});

router.post('/', async (req, res) => {
    try {
      
        const action = await Actions.insert(req.body);

        res.status(201).json(action);
    } catch (error) {
        res.status(500).json({
            message: "Error adding action"
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const action = await Actions.update(req.params.id, req.body);

        if (action) {
            res.status(200).json(action)
        } else {
            res.status(404).json({
                message: 'The action could not be found'
            })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Error updating action'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const action = await Actions.remove(req.params.id);

        if (action) {
            res.status(200).json({
                message: 'The action has been deleted'
            })
        } else {
            res.status(404).json({
                message: 'The action could not be found'
            })
        }
    } catch(error) {
        res.status(500).json({
            message: 'Error deleting the action'
        })
    }
});
    

module.exports = router;
