const express = require('express');
const deskController=require('./../controller/deskController');
const userController=require('./../controller/userController');

const router = express.Router();

router.post('/createnewDesk', deskController.createADesk);
router.patch('/HandleTransfer',deskController.updateDesk,userController.updateUser);
router.patch('/assignUserToDesk/:name',deskController.assignDesk,userController.assignDesk);
router.get('/getDesks',deskController.getAllDesks);

module.exports = router;