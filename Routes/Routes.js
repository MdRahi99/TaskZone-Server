const express = require('express');
const router = express.Router();
const Controller = require('../Controller/Controller');

router.get('/', Controller.Home);
router.get('/tasks', Controller.GetTasks);
router.post('/tasks', Controller.PostTasks);

module.exports = router;