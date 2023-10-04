const express = require('express');
const router = express.Router();
const Controller = require('../Controller/Controller');

router.get('/', Controller.Home);
router.get('/tasks', Controller.GetTasks);
router.get('/task/:id', Controller.GetTask);
router.post('/tasks', Controller.PostTasks);
router.delete('/task/:id', Controller.DeleteTask);
router.put('/task/:id', Controller.UpdateTask);

module.exports = router;