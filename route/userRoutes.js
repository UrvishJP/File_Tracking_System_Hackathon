const express = require('express');
const userController=require('./../controller/userController');

const router = express.Router();

router.get('/dhruv',userController.isLoggedIn);
router.post('/createUser', userController.addUser);
router.get('/getUsers',userController.getAllUsers);
router.get('/login',userController.Login)

module.exports = router;