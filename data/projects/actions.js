const express = require('express');

const router = express.Router();

const Actions = require('../helpers/actionModel.js');

router.get('/:id', async (req, res) => {
    try {
        const actions = await Actions.get(req.params.id);

        if (actions) {
            res.status(200).json(actions);
        } else {
            res.status(404).json({
                message: "Action could not be found"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving actions'
        });
    }
});

module.exports = router;
