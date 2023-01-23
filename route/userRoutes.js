const express = require('express');
const userController=require('./../controller/userController');

const router = express.Router();

router.post('/createUser', userController.addUser);
router.get('/getUsers',userController.getAllUsers);

module.exports = router;