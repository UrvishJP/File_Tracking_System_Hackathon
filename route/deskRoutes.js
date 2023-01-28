const express = require('express');
const deskController=require('./../controller/deskController');
const userController=require('./../controller/userController');

const router = express.Router();

router.post('/createnewDesk', deskController.createADesk);
router.patch('/HandleTransfer',deskController.updateDesk);
router.patch('/assignUserToDesk/:id',deskController.assignDesk,userController.assignDesk);
router.get('/getDesks',deskController.getAllDesks);

module.exports = router;