const express = require('express');

const router = express.Router();

const Projects = require('../helpers/projectModel.js');
const Actions = require('../helpers/actionModel.js');

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
            message: "Error retrieving the project"
        })
    }
});

// router." "('/', async (req, res) => {
//     try {

//     } catch(error) {

//     }
// });

// router." "('/', async (req, res) => {
//     try {

//     } catch(error) {

//     }
// });

// router." "('/', async (req, res) => {
//     try {

//     } catch(error) {

//     }
// });

// router." "('/', async (req, res) => {
//     try {

//     } catch(error) {

//     }
// });



module.exports = router;
