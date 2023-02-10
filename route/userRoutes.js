const express = require('express');
const userController=require('./../controller/userController');

const router = express.Router();

router.post('/createUser', userController.createNewUser);
router.get('/getUsers',userController.getAllUsers);
router.post('/login',userController.Login);
router.get('/myLogs',userController.getMyLogs);

module.exports = router;