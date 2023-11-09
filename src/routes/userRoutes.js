const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:username/details', userController.getUserDetails);
router.get('/:username/repos', userController.getUserRepos);

module.exports = router;
